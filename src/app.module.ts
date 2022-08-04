import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListController } from './todo-list/todo-list.controller';
import { TodoListModule } from './todo-list/todo-list.module';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'users',
    entities: [],
    synchronize: true,
  }),, TodoListModule ,],
  controllers: [AppController, TodoListController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
