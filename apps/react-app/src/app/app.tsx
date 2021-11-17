import { useEffect, useRef } from 'react';

export function App() {

  const pageHeaderRef = useRef<HTMLElement>();

  useEffect(()=>{
    pageHeaderRef.current?.addEventListener('onButtonClick', handleClickEvent);
  }, [pageHeaderRef])

  const handleClickEvent = (event:Event) => {
    console.log(event);
  }

  return (
    <app-layout>
      <h1>React application</h1>
      <p slot='footer'>This is the footer</p>
      <page-header slot='header' ref={pageHeaderRef}>This is the header - React Application
      </page-header>
      <p slot='sidebar'>This is the sidebar</p>
    </app-layout>
  );
}

export default App;
