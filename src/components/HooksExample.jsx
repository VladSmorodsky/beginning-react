import {useEffect, useRef} from "react";

//This part works w/o using useMemo, because it's a separate component
export default function HooksExample() {
  useEffect(() => {
    console.log(nameInputRef);
    nameInputRef.current.value = 'test useEffect and useRef hooks';
    nameInputRef.current.focus();
  }, []);

  const nameInputRef = useRef(null);

  return (
    <div className={'hooks-example'}>
      <h2>Examples</h2>
      <div>
        <form action="#">
          <input type="text"
                 placeholder={'what is your name'}
                 ref={nameInputRef}
          />
        </form>
      </div>
    </div>
  );
}