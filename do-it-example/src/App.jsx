import React from 'react';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import LifecycleExample from './03/LifecycleExample';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';
import Counter3 from './03/Counter3';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter3></Counter3>
      </div>
    );
  }
}

export default App;