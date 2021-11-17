export * from './lib/my-element';
export * from './lib/custom-button';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': any;
      'custom-button': any;
    }
  }
}
