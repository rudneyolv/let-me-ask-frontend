import { useRoomQuestions } from '@/hooks/queries/rooms/use-rooms-questions';
import { QuestionItem } from '../question-item/question-item';

export function QuestionsList({ roomId }: { roomId: string }) {
	const { data } = useRoomQuestions(roomId);
	const questions = data?.data;

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="font-semibold text-2xl text-foreground">
					Perguntas & Respostas
				</h2>
			</div>

			{questions?.map(question => (
				<QuestionItem key={question.id} question={question} />
			))}
		</div>
	);
}
