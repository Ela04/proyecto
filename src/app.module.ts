import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploModule } from './ejemplo/ejemplo.module';
import { FiestasModule } from './fiestas/fiestas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    FiestasModule,
    EjemploModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgresql://postgres.tdeawtbwhwavnjokprij:Z4xYcFBHXSjSvmyw@aws-0-sa-east-1.pooler.supabase.com:6543/postgres",
      autoLoadEntities: true,
      synchronize: false, // No usar synchronize: true en producción
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    this.initializeDatabase();
  }

  private async initializeDatabase() {
    try {
      // Inicializa la conexión a la base de datos
      await this.dataSource.initialize();

      // Sincroniza el esquema con las entidades
      await this.dataSource.synchronize();

      console.log('Database has been synchronized!');
    } catch (error) {
      console.error('Error during Data Source initialization:', error);
    }
  }
}
