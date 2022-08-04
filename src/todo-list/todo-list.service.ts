import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { TodoListInterface } from './Interfaces/TodoListInterface';
import { TodoList } from './todo-list.entity';


@Injectable()
export class TodoListService {

    constructor(@InjectRepository(TodoList)
    private todoRepository: Repository<TodoList>,
        private dataSource: DataSource,
    ) { }

    async findAll(): Promise<TodoListInterface[]> {
        return await this.todoRepository.find();
    }

    async findOne(id: string): Promise<TodoListInterface> {
        return this.todoRepository.findOneBy({ id })
    }

    async deleteOne(id: string): Promise<void> {
        this.todoRepository.delete({ id })
    }



}
