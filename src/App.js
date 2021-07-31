
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Button from './components/Button'




function App() {
  return (
    <BrowserRouter className="App">
      <AppRouter/>
      <Button/>
    </BrowserRouter>
  );
}

export default App;
