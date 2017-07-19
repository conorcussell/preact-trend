import { h, Component } from 'preact';
import Trend from 'react-trend';

export default class App extends Component {
  render() {
    return <Trend data={[0, 10, 5, 22, 3.6, 11]} />;
  }
}
