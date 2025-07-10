import { type UseQueryResult, useQuery } from '@tanstack/react-query';
import { fetchRooms } from '@/api/rooms/rooms';
import type { RoomsResponse } from '@/types/rooms';

export const useFetchRooms = (): UseQueryResult<RoomsResponse> => {
	return useQuery({
		queryKey: ['rooms'],
		queryFn: fetchRooms,
	});
};
