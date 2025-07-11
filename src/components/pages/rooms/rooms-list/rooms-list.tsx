import { useQuery } from '@tanstack/react-query';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useFetchRooms } from '@/hooks/queries/rooms/use-rooms';
import { dayjs } from '@/lib/dayjs';
import { RoomsListStyles } from './rooms-list-styles';

export function RoomsList() {
	const { data, isLoading, error } = useFetchRooms();
	const { data: rooms } = data ?? {};

	if (isLoading) {
		return (
			<div>
				<Loader2 className="m-auto size-6 animate-spin" />
				<p className="animate-pulse">Carregando salas</p>
			</div>
		);
	}

	if (error) {
		return (
			<p className="text-destructive">
				{error.message || 'Erro ao carregar salas'}
			</p>
		);
	}

	return (
		<Card className={RoomsListStyles.card()}>
			<CardHeader>
				<CardTitle>Salas recentes</CardTitle>

				<CardDescription>
					Acesso rápido para as salas criadas recentemente
				</CardDescription>
			</CardHeader>

			<CardContent className="flex flex-col gap-3">
				{rooms?.map(room => (
					<Link
						className={RoomsListStyles.roomLink()}
						key={room.id}
						to={`/rooms/${room.id}`}
					>
						<div className={RoomsListStyles.roomInfo()}>
							<h3 className="font-medium">{room.name}</h3>

							<div className={RoomsListStyles.badgeGroup()}>
								<Badge className="text-xs" variant="secondary">
									{dayjs(room.created_at).toNow()}
								</Badge>

								<Badge className="text-xs" variant="secondary">
									{`${room.questions_count} pergunta(s)`}
								</Badge>
							</div>
						</div>

						<Button className={RoomsListStyles.enterText()} variant="ghost">
							Entrar
							<ArrowRight className="size-3" />
						</Button>
					</Link>
				))}
			</CardContent>
		</Card>
	);
}
