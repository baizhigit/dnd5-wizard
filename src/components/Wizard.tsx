import * as React from 'react';
import { BasicInfo } from './BasicInfo';

interface State {
  character: Partial<Character>;
  steps: string[];
  currentStep: number;
}

export class Wizard extends React.Component<{}, State> {
  state = {
    character: {
      name: '',
      mainClass: '',
      subClass: '',
      race: '',
      stats: {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
      },
      proficiencies: []
    },
    steps: [],
    currentStep: 0
  };

  handleBasic = (values: Partial<Character>) => {
    const { name, mainClass, race } = values;
    this.setState({
      character: { ...this.state.character, name, mainClass, race },
      currentStep: 1
    });
  };

  render() {
    console.log(this.state.character);
    return (
      <>
        <BasicInfo onComplete={this.handleBasic} />
      </>
    );
  }
}
