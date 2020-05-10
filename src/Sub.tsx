import * as React from 'react';

// Propsの型定義
interface IProps {
  name: string;
}

const Sub: React.FC<IProps> = props => {

  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.log('クリックされました');
    setCount(count + 1 );
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <div>{count}</div>
      <button onClick={handleClick.bind(this)}>Add +1</button>
    </div>
  );
}

export default Sub;