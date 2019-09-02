import { Component } from '@stencil/core';

@Component({
  tag: 'app-modal',
  styleUrl: 'modal.scss'
})

export class Modal {}

@Prop() title: string = '';
@State() isOpen: boolean = false;

@Element() element: HTMLElement;

@Event() open: EventEmitter<boolean>;
@Event() close: EventEmitter<boolean>;
