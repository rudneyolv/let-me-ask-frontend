import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
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

import { Textarea } from '@/components/ui/textarea';
import { useCreateRoomQuestion } from '@/hooks/queries/rooms/use-rooms-questions';
import {
	type CreateQuestionFormData,
	createQuestionSchema,
} from '@/schemas/questions';
import type { CreateQuestionRequest } from '@/types/questions';

interface QuestionFormProps {
	roomId: string;
}

export function CreateQuestionForm({ roomId }: QuestionFormProps) {
	const { mutate: createRoomQuestion, isPending } = useCreateRoomQuestion();

	const createQuestionForm = useForm<CreateQuestionFormData>({
		resolver: zodResolver(createQuestionSchema),
		mode: 'onTouched',
		defaultValues: {
			question: '',
		},
	});

	const handleCreateQuestion = (data: CreateQuestionFormData) => {
		const payload = {
			room_id: roomId,
			form_data: data,
		};

		createRoomQuestion(payload, {
			onSuccess: () => createQuestionForm.reset(),
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Fazer uma Pergunta</CardTitle>

				<CardDescription>
					Digite sua pergunta abaixo para receber uma resposta gerada por I.A.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...createQuestionForm}>
					<form
						className="flex flex-col gap-4"
						onSubmit={createQuestionForm.handleSubmit(handleCreateQuestion)}
					>
						<FormField
							control={createQuestionForm.control}
							name="question"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sua Pergunta</FormLabel>

									<FormControl>
										<Textarea
											className="min-h-[100px]"
											disabled={isPending}
											placeholder="O que você gostaria de saber?"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<Button disabled={isPending} isLoading={isPending} type="submit">
							Enviar pergunta
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
