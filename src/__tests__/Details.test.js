import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../pages/Details';
import store from '../redux/configureStore';

const TestDetails = () => (
  <Provider store={store}>
    <Router><Details /></Router>
  </Provider>
);
describe('Details page', () => {
  it('check details elements', () => {
    const tree = renderer.create(<TestDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
