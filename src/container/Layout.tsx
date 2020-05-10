import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Propsの型定義
interface IProps {
  
}

const Layout: React.FC<IProps> = props => {

  const { navbar, logo, container, footer } = styles;

  return (
    <>
      <div style={navbar}>
        <div style={logo}>
          Neeeds
        </div>
      </div>
      <div style={container}>
        {props.children}
      </div>
      <div style={footer}>
        フッター
      </div>
    </>
  );
}

export default Layout;

const styles = {
  navbar: {
    height: 30,
    backgroundColor: '#AFF',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 16,
    fontSize: 16,
  },
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  footer: {
    height: 60,
    backgroundColor: '#AFF',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}