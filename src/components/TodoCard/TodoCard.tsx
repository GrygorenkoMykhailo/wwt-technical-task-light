/* eslint-disable i18next/no-literal-string */
import { useRef, useState } from 'react'

import { Box, Button, Input, Text } from '@chakra-ui/react'

import { useTodoState } from '@/state/todoState'
import { Todo } from '@/state/types'

export const TodoCard = (props: { todo: Todo }) => {
	const { deleteTodo, updateTodo } = useTodoState()
	const [editMode, setEditMode] = useState(false)
	const changeNameInput = useRef(null)
	const changeDescriptionInput = useRef(null)

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			background={'RGBA(0,0,0,0.06)'}
			margin={'.4em'}
		>
			{editMode ? (
				<>
					<Text>Name: </Text>
					<Input
						ref={changeNameInput}
						defaultValue={props.todo.name}
					/>
					<Text>Description: </Text>
					<Input
						ref={changeDescriptionInput}
						defaultValue={props.todo.description}
					/>
					<Button
						width={'80px'}
						background={'RGBA(0,0,0,0.51)'}
						onClick={() => {
							setEditMode(prev => !prev)
							updateTodo(props.todo.name, {
								name: changeNameInput.current.value,
								description: changeDescriptionInput.current.value,
								isComplete: props.todo.isComplete
							})
						}}
					>
						Save
					</Button>
				</>
			) : (
				<>
					<Text>Name: {props.todo.name}</Text>
					<Text>Description: {props.todo.description}</Text>
					<Text>
						Is complete:
						{props.todo.isComplete ? ' Yes' : ' No'}
						<input
							type="checkbox"
							name=""
							id=""
							checked={props.todo.isComplete}
							onChange={e => {
								updateTodo(props.todo.name, {
									name: props.todo.name,
									description: props.todo.description,
									isComplete: e.target.checked
								})
							}}
						/>
					</Text>
					<Button
						width={'80px'}
						background={'RGBA(0,0,0,0.51)'}
						onClick={() => setEditMode(prev => !prev)}
					>
						Edit
					</Button>
				</>
			)}

			<Button
				width={'80px'}
				background={'RGBA(255,0,0,0.51)'}
				onClick={() =>
					deleteTodo({
						name: props.todo.name,
						description: props.todo.description,
						isComplete: props.todo.isComplete
					})
				}
			>
				Delete
			</Button>
		</Box>
	)
}
