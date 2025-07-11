import {
	type UseQueryResult,
	useMutation,
	useQuery,
	useQueryClient,
} from '@tanstack/react-query';
import {
	createRoomQuestion,
	fetchRoomsQuestions,
} from '@/api/rooms/rooms-questions';
import type { GetRoomQuestionsResponse } from '@/types/questions';

export function useRoomQuestions(
	roomId: string
): UseQueryResult<GetRoomQuestionsResponse> {
	return useQuery({
		queryKey: ['room-questions', roomId],
		queryFn: () => fetchRoomsQuestions(roomId),
	});
}

export function useCreateRoomQuestion() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createRoomQuestion,
		onSuccess: (_data, variables) => {
			queryClient.invalidateQueries({
				queryKey: ['room-questions', variables.room_id],
			});
		},
	});
}
