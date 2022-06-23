import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndividualPage from './pages/IndividualPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/:id' component={IndividualPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
