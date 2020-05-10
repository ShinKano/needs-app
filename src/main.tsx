import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SiteTitle from './component/siteTitle';

import Layout from './container/Layout';
import HScrollContainer from './container/HScrollContainer';
import Card from './component/Card';
import { needs } from './datas/needs';


class App extends React.Component {
  render() {
    return (
        <div>
          <Layout>
            <SiteTitle title='NeeedS' />

            <HScrollContainer>
              {needs.map(need => (
                <Card
                  key={need.en}
                  title={need.en}
                />
              ))}
            </HScrollContainer>
          </Layout>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));