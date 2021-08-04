import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

import { store } from './store';

function App() {
	console.log(store);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar/>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
