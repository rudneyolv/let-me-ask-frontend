import { env } from '@/constants/env';
import type { CreateRoomFormData } from '@/schemas/rooms';
import type { CreateRoomResponse, GetRoomsResponse } from '@/types/rooms';

export const fetchRooms = async () => {
	const response = await fetch(`${env.API_URL}/rooms`);
	const result: GetRoomsResponse = await response.json();
	return result;
};

export const createRoom = async (
	data: CreateRoomFormData
): Promise<CreateRoomResponse> => {
	const response = await fetch(`${env.API_URL}/rooms`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	const result: CreateRoomResponse = await response.json();

	return result;
};
