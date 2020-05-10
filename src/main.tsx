import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sub from './Sub';
import Layout from './container/Layout'


class App extends React.Component {
  render() {
    return (
        <div>
          <Layout>
            <h1>Meet Your Needs!</h1>
            <Sub name="My Counter for TypeScript"/>

          </Layout>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));