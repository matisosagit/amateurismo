import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';

@Module({
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tu_password',
      database: 'football',
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo
    }),

    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
