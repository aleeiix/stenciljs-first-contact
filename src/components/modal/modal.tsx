import { Component, Prop, State, Element, Event, EventEmitter, Method, h } from '@stencil/core';

@Component({
  tag: 'app-modal',
  styleUrl: 'modal.scss'
})

export class Modal {

  @Prop() header: string = '';
  @State() isOpen: boolean = false;

  @Element() element: HTMLElement;

  @Event() open: EventEmitter<boolean>;
  @Event() close: EventEmitter<boolean>;

  @Method()
  async openModal() {
    this.showModal(true);
    this.open.emit(true);
  }

  @Method()
  async closeModal() {
    if (this.isOpen) {
      this.showModal(true);
      this.close.emit(true);
    }
  }

  componentWillLoad() {
    this.showModal(this.isOpen);
  }
  
  showModal(show: boolean): void {
    this.isOpen = !show;
    this.element.classList.toggle('visible', this.isOpen);
  }

  render() {
  	return (
        	<div>
                <h1>{this.header}</h1>

            	<slot />

            	<div class="modal-footer">
              	<button
                    type="button"
                    class="btn-ok"
                	onClick={() => this.closeModal()}
              	>
                	Aceptar
              	</button>
            	</div>

        	</div>
    	);
	}

}