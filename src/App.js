import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import TopBar from './components/TopBar';


import { store } from './store';

function App() {
	console.log(store);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<TopBar/>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
