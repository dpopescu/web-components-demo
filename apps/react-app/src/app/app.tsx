import { useEffect, useRef } from 'react';

export function App() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    btnRef.current?.addEventListener('click', ()=>{
      alert('Button was clicked');
    });
    btnRef.current?.addEventListener('cancelled', ()=>{
      alert('Button click was cancelled');
    })
  }, [btnRef])

  return (
    <>
      <h1>React Application</h1>
      <my-element message={'A default Message'}>
        One
        <p slot='details'>Some details</p>
      </my-element>
      <button ref={btnRef} is='custom-button'>Click me</button>
    </>
  );
}

export default App;
