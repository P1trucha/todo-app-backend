import { Controller, Get, Inject, Param, Delete } from '@nestjs/common';
import { TodoListInterface } from './Interfaces/TodoListInterface';
import { TodoListService } from './todo-list.service';



@Controller('todo-list')
export class TodoListController {


    constructor(@Inject(TodoListService) private todoservice: TodoListService) { }

    @Get('/all')
    FindAll(): Promise<TodoListInterface[]> {
        return this.todoservice.findAll();
    }

    @Get('/:id')
    FindId(@Param('id') id: string): Promise<TodoListInterface> {
        return this.todoservice.findOne(id);
    }

    @Delete('/:id')
    DeleteId(@Param('id') id: string): void {
        this.todoservice.deleteOne(id);
    }



}
