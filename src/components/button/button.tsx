import { Component, Prop, Event, EventEmitter, Method, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'button.scss'
})

export class Button {

  @Prop() text: string = '';
  @Event() clickButton: EventEmitter<void>;

  @Method()
  async clickButtonEmit() {
    this.clickButton.emit();
  }

  render() {
  	return (
        	<button onClick={() => this.clickButtonEmit()}>{this.text}</button>
    	);
	}

}