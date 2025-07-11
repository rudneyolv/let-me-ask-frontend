import {
	type UseQueryResult,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';
import { createRoom, fetchRooms } from '@/api/rooms/rooms';
import type { GetRoomsResponse } from '@/types/rooms';

export const useFetchRooms = (): UseQueryResult<GetRoomsResponse> => {
	return useQuery({
		queryKey: ['rooms'],
		queryFn: fetchRooms,
		retry: 1,
		refetchOnWindowFocus: true,
	});
};

export function useCreateRoom() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['rooms'] });
		},
	});
}
