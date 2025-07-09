import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Room {
	name: string;
	id: number;
}

type Rooms = Room[];

export function CreateRoom() {
	const { data: rooms, isLoading } = useQuery({
		queryKey: ['new-post'],
		queryFn: async () => {
			const response = await fetch('http://localhost:3333/rooms');
			const result: Rooms = await response.json();
			return result;
		},
	});

	return (
		<div className="h-dvh w-dvw">
			{isLoading && <Loader2 className="animate-spin" />}

			{rooms?.map(({ id, name }) => (
				<div key={id}>
					<Link
						className="text-zinc-200 hover:text-zinc-200/80"
						to={`/room/${id}`}
					>
						{name}
					</Link>
				</div>
			))}
		</div>
	);
}
