import React from 'react';
import Root from './root';

const Home = ({name}) => {
    return (
        <div>
          <Root name={name}></Root>
        </div>
    );
};

export default Home;