import React from 'react';
import ExampleComponent from '@social-net/example';

const Index = () => {
  return (
    <div>
      <button type="button" onClick={() => alert('Hello!')}>
        Hello World!
      </button>
      <ExampleComponent />
    </div>
  );
};
export default Index;
