/* eslint-disable i18next/no-literal-string */
import { Box } from '@chakra-ui/react'

import { Todo } from '@/state/types'
import { TodoCard } from '@components/TodoCard'

export const CompleteTasksSection = (props: { todos: Todo[] }) => {
	return (
		<Box
			as="section"
			border={'1px solid black'}
			margin={'1em'}
			padding={'1em'}
			boxSizing={'border-box'}
			background={'RGBA(147,225,96,0.4)'}
		>
			{props.todos.length === 0 ? (
				<p>Your complete todos supposed to be here</p>
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
