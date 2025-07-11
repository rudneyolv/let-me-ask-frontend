import type { CreateQuestionFormData } from '@/schemas/questions';
import type { BackendResponse } from './api';

export interface RoomQuestion {
	id: string;
	question: string;
	answer: string | null;
	created_at: string;
}

export type GetRoomQuestionsResponse = {
	success: boolean;
	data: RoomQuestion[];
};

export interface CreateQuestionRequest {
	room_id: string;
	form_data: CreateQuestionFormData;
}

export interface CreateQuestionResponse extends BackendResponse {
	data?: {
		question_id: string;
	};
}
