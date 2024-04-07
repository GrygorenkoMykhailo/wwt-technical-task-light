import { Todo } from './Todo'

export type Action = {
	addTodo: (todo: Todo) => void
	deleteTodo: (todo: Todo) => void
	updateTodo: (name: string, todo: Todo) => void
}
