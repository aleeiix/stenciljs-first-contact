import { Component, Prop, State, Element, Event, EventEmitter, Method, h } from '@stencil/core';

@Component({
  tag: 'app-modal',
  styleUrl: 'modal.scss'
})

export class Modal {

  @Prop() title: string = '';
  @State() isOpen: boolean = false;

  @Element() element: HTMLElement;

  @Event() open: EventEmitter<boolean>;
  @Event() close: EventEmitter<boolean>;

  @Method()
  openModal(): void {
    this.showModal(true);
    this.open.emit(true);
  }

  @Method()
  closeModal(): void {
    if (!this.isOpen) {
      this.showModal(false);
      this.close.emit(true);
    }
  }

  componentWillLoad() {
    this.showModal(this.isOpen);
  }
  
  showModal(show: boolean): void {
    this.isOpen = !show;
    this.element.classList.toggle('off', this.isOpen);
  }

  render() {
  	return (
        	<div>
                <h1>{this.title}</h1>

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