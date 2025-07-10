import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Room } from './pages/room/room';
import { Rooms } from './pages/rooms/rooms';

export function App() {
	const queryCLient = new QueryClient();

	return (
		<QueryClientProvider client={queryCLient}>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} index />
					<Route element={<Rooms />} path="/rooms" />
					<Route element={<Room />} path="/rooms/:id" />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
