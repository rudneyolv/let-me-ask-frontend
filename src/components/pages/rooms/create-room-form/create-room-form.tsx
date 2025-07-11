import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { z } from 'zod/v4';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateRoom } from '@/hooks/queries/rooms/use-rooms';
import { type CreateRoomFormData, createRoomSchema } from '@/schemas/rooms';

export function CreateRoomForm() {
	const { mutateAsync: createRoom, isPending } = useCreateRoom();

	const createRoomForm = useForm<CreateRoomFormData>({
		resolver: zodResolver(createRoomSchema),
		mode: 'onTouched',
		defaultValues: {
			name: '',
			description: '',
		},
	});

	const isValid = createRoomForm.formState.isValid;

	async function handleCreateRoom(values: CreateRoomFormData) {
		await createRoom(values);
		createRoomForm.reset();
	}

	return (
		<Card className="w-full max-w-96">
			<CardHeader>
				<CardTitle>Criar sala</CardTitle>

				<CardDescription>
					Crie ma nova sala para começar a fazer perguntas e receber respostas
					da I.A.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...createRoomForm}>
					<form
						className="flex flex-col gap-4"
						onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
					>
						<FormField
							control={createRoomForm.control}
							name="name"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Nome da sala</FormLabel>

										<FormControl>
											<Input
												{...field}
												disabled={isPending}
												placeholder="Digite o nome da sala..."
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<FormField
							control={createRoomForm.control}
							name="description"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Descrição</FormLabel>

										<FormControl>
											<Textarea
												disabled={isPending}
												placeholder="Descrição opcional"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<Button
							className="w-full"
							disabled={isPending || !isValid}
							isLoading={isPending}
							type="submit"
						>
							Criar sala
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
