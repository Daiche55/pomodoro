import * as React from 'react';

type Props = {
  foo: string;
}


const MyComponent: React.FC<Props> = (props) => {
    return <span>{props.foo}</span>
}

export default MyComponent
