export * from './lib/app-layout';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-layout': any;
    }
  }
}
