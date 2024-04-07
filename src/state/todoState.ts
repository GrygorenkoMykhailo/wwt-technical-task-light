import { create } from 'zustand'

import { Action, Todo, TodoState } from './types'

export const useTodoState = create<TodoState & Action>(set => ({
	todos: [],
	addTodo: (todo: Todo) => set(prev => ({ todos: [...prev.todos, todo] })),
	deleteTodo: (todo: Todo) =>
		set(prev => ({ todos: [...prev.todos.filter(t => t.name !== todo.name)] })),
	updateTodo: (name: string, todo: Todo) =>
		set(prev => ({
			...prev,
			todos: prev.todos.map(t => {
				if (t.name === name) {
					return todo
				}
				return t
			})
		}))
}))
