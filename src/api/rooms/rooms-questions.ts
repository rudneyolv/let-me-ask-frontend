import { env } from '@/constants/env';
import type { CreateQuestionFormData } from '@/schemas/questions';
import type {
	CreateQuestionRequest,
	CreateQuestionResponse,
	GetRoomQuestionsResponse,
} from '@/types/questions';

export const fetchRoomsQuestions = async (
	roomId: string
): Promise<GetRoomQuestionsResponse> => {
	const response = await fetch(`${env.API_URL}/rooms/${roomId}/questions`);
	const result: GetRoomQuestionsResponse = await response.json();
	return result;
};

export const createRoomQuestion = async (
	data: CreateQuestionRequest
): Promise<CreateQuestionResponse> => {
	const response = await fetch(
		`${env.API_URL}/rooms/${data.room_id}/questions`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data.form_data),
		}
	);

	const result: CreateQuestionResponse = await response.json();

	return result;
};
