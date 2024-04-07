import { useTodoState } from '@/state/todoState'
import { CompleteTasksSection } from '@components/CompleteTasksSection'
import { DataEntrySection } from '@components/DataEntrySection'
import { IncompleteTasksSection } from '@components/IncompleteTasksSection'

export const App = () => {
	const { todos } = useTodoState()
	const completeTodos = todos.filter(t => t.isComplete)
	const incompleteTodos = todos.filter(t => !t.isComplete)

	return (
		<>
			<CompleteTasksSection todos={completeTodos} />
			<IncompleteTasksSection todos={incompleteTodos} />
			<DataEntrySection />
		</>
	)
}
