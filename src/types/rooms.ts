import type { BackendResponse } from './api';

export interface Room {
	name: string;
	id: number;
	questions_count: number;
	created_at: string;
}

export type GetRoomsResponse = {
	success: boolean;
	data: Room[];
};

export interface CreateRoomResponse extends BackendResponse {
	data?: {
		room_id: string;
	};
}
