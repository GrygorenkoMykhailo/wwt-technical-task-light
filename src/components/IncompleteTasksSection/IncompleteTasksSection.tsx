/* eslint-disable i18next/no-literal-string */
import { Box } from '@chakra-ui/react'

import { Todo } from '@/state/types'
import { TodoCard } from '@components/TodoCard'

export const IncompleteTasksSection = (props: { todos: Todo[] }) => {
	return (
		<Box
			as="section"
			border={'1px solid black'}
			margin={'1em'}
			padding={'1em'}
			boxSizing={'border-box'}
		>
			{props.todos.length === 0 ? (
				<p>Your incomplete todos supposed to be here</p>
			) : (
				props.todos.map((t, i) => (
					<TodoCard
						key={i}
						todo={t}
					/>
				))
			)}
		</Box>
	)
}
