export interface Room {
	name: string;
	id: number;
	questions_count: number;
	created_at: string;
}

export type RoomsResponse = {
	success: boolean;
	data: Room[];
};
