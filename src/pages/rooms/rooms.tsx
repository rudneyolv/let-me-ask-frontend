import { CreateRoomForm } from '@/components/pages/rooms/create-room-form/create-room-form';
import { RoomsList } from '@/components/pages/rooms/rooms-list/rooms-list';
import { RoomsPageContainer } from './rooms-styles';

export function Rooms() {
	return (
		<div className={RoomsPageContainer()}>
			<CreateRoomForm />
			<RoomsList />
		</div>
	);
}
