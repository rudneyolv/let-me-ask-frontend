import { RoomsList } from '@/components/pages/rooms/rooms-list/rooms-list';
import { RoomsPageContainer } from './rooms-styles';

export function Rooms() {
	return (
		<div className={RoomsPageContainer()}>
			<RoomsList />
		</div>
	);
}
