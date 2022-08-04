import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';

@Module({
  providers: [TodoListService]
})
export class TodoListModule {}
