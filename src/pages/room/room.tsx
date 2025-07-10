import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
	id: string;
};

export function Room() {
	const params = useParams<RoomParams>();

	if (!params.id?.trim()) {
		return <Navigate replace to="/" />;
	}

	return <div>{params.id}</div>;
}
