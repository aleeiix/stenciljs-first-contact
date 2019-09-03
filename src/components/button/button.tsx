import { Component, Prop, Event, EventEmitter, Method, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'button.scss'
})

export class Button {

  @Prop() text: string = '';
  @Event() click: EventEmitter<void>;

  @Method()
  clickButton() {
    this.click.emit();
  }

  render() {
  	return (
        	<button onClick={() => this.clickButton()}>{this.text}</button>
    	);
	}

}