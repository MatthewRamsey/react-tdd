import React from 'react';
import logo from './logo.svg';
import MainSection from './sections/MainSection';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state ={
      isLoading: false,
      items: []
    }
  }

  render() {
    return <MainSection isLoading={this.state.isLoading} items={this.state.items} />
  }
}
