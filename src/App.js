import React, { Component } from 'react';

import styles from './App.scss';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.box}>11</div>
    );
  }
}

export default App;
