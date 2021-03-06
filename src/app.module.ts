import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { User } from './user/user.model'; 
import { UserModule } from './user/user.module'; 

@Module({
  imports: [

    SequelizeModule.forRoot({

      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username', 
      password: 'password', 
      database: 'db', 
      models: [User],

    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
