/* eslint-disable i18next/no-literal-string */
import { useRef } from 'react'

import { Box, Button, Input, Text } from '@chakra-ui/react'

import { useTodoState } from '@/state/todoState'
import { Todo } from '@/state/types'

const handleCreateTodo = (
	name: string,
	description: string,
	isComplete: boolean,
	reducer: (todo: Todo) => void
) => {
	console.log(isComplete)
	reducer({
		name,
		description,
		isComplete
	})
}

export const DataEntrySection = () => {
	const { addTodo } = useTodoState()
	const nameInput = useRef(null)
	const descriptionInput = useRef(null)
	const isCompleteCheckbox = useRef(null)

	return (
		<Box
			as="section"
			backgroundColor={'GrayText'}
			padding={'1em'}
			display={'flex'}
			flexDirection={'column'}
		>
			<Text>Name</Text>
			<Input
				type="text"
				ref={nameInput}
			/>
			<Text>Description</Text>
			<Input
				type="text"
				ref={descriptionInput}
			/>
			<Text>
				Is complete
				<input
					type="checkbox"
					name=""
					id=""
					ref={isCompleteCheckbox}
				/>
			</Text>
			<Button
				alignSelf={'center'}
				onClick={() =>
					handleCreateTodo(
						nameInput.current.value,
						descriptionInput.current.value,
						isCompleteCheckbox.current.checked,
						addTodo
					)
				}
			>
				Add new todo
			</Button>
		</Box>
	)
}
