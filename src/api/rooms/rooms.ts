import type { RoomsResponse } from '@/types/rooms';

export const fetchRooms = async () => {
	const response = await fetch('http://localhost:3333/rooms');
	const result: RoomsResponse = await response.json();
	return result;
};
