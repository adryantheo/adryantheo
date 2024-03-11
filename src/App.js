// import Parallax from './main/Parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
