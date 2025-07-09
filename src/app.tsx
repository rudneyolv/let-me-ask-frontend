import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { CreateRoom } from './pages/create-room/create-room';
import { Room } from './pages/create-room/room';
import { Home } from './pages/home/home';

export function App() {
	const queryCLient = new QueryClient();

	return (
		<QueryClientProvider client={queryCLient}>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} index />
					<Route element={<CreateRoom />} path="/create-room" />
					<Route element={<Room />} path="/room/:id" />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
