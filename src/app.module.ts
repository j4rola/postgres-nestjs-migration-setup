require('dotenv').config()

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
      username: process.env.USERNAME,  //NOTE: Username and password are the pre-existing username and password that are used to access the postgres database. 
      password: process.env.PASSWORD,
      database: process.env.DATABASE,  
      models: [User],

    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
