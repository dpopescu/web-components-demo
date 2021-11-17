export * from './lib/page-header';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'page-header': any;
    }
  }
}
