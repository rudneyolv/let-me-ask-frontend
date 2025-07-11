import { Navigate, useParams } from 'react-router-dom';
import { CreateQuestionForm } from '@/components/pages/rooms/create-question-form.tsx/create-question-form';
import { QuestionsList } from '@/components/pages/rooms/questions-list/questions-list';
import { RoomHeader } from './_components/header';

type RoomParams = {
	room_id: string;
};

export function Room() {
	const params = useParams<RoomParams>();

	if (!params.room_id?.trim()) {
		return <Navigate replace to="/" />;
	}

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto flex max-w-4xl flex-col gap-4 px-4 py-8">
				<RoomHeader roomId={params.room_id} />
				<CreateQuestionForm roomId={params.room_id} />
				<QuestionsList roomId={params.room_id} />
			</div>
		</div>
	);
}
