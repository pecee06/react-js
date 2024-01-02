import { useState, useCallback, useEffect } from "react";
import "./App.css";

function rand(n) {
  return Math.floor(Math.random() * n);
}

function App() {
  // Hooks
  const [pass, setPass] = useState("");
  const [passLength, setPassLength] = useState(10);
  const [includeNums, setincludeNums] = useState(false);
  const [includeSpecialChars, setincludeSpecialChars] = useState(false);
  const [btnText, setBtnText] = useState("Copy");

  /*
  You need to pass two things to useCallback :
  * A function definition that you want to cache between re-renders.
  * A list of dependencies including every value within your component that's used inside that function.
  */
  // useCallback will only recreate the function when one of its dependencies has changed

  const generatePassword = useCallback(() => {
    let strPool = "";
    for (let i = 65; i <= 90; i++) {
      strPool += String.fromCharCode(i);
    }
    for (let i = 97; i <= 122; i++) {
      strPool += String.fromCharCode(i);
    }

    if (includeNums) {
      for (let i = 0; i < 10; i++) {
        strPool += i.toString();
      }
    }

    if (includeSpecialChars) {
      let specialChars = [
        "+",
        "-",
        "*",
        "/",
        ".",
        "%",
        "~",
        "!",
        "@",
        "#",
        "$",
        "^",
        "&",
        "(",
        ")",
        "_",
        "[",
        "]",
        "{",
        "}",
        ":",
        ";",
        "<",
        ">",
        ",",
        "?",
      ];
      for (const char of specialChars) {
        strPool += char;
      }
    }

    let n = strPool.length;
    let temp = "";
    for (let i = 0; i < passLength; i++) {
      temp += strPool[rand(n)];
    }

    setPass(temp);
    setBtnText("Copy");
    document.querySelector(".top button").classList.toggle("coral");
  }, [passLength, includeNums, includeSpecialChars, btnText, setPass]);
  // useCallback wasn't necessary at all, it was created here just for optimization purpose

  // useEffect executes callback whenever there's any change in any of the passed dependencies
  const dependencies = [passLength, includeNums, includeSpecialChars];
  useEffect(generatePassword, dependencies);
  // We could just have created a function named generatePassword and pass it as a callback to useEffect

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="top">
        <div className="display">{pass}</div>
        <button
          onClick={() => {
            window.navigator.clipboard.writeText(pass);
            setBtnText("Copied");
            document.querySelector(".top button").classList.toggle("coral");
          }}
        >
          {btnText}
        </button>
      </div>
      <div className="flex gap justify-center align-center">
        <label htmlFor="pass-length">Length: {passLength}</label>
        <input
          type="range"
          id="pass-length"
          defaultValue={passLength}
          onChange={(e) => {
            setPassLength(e.target.value);
          }}
        />

        <label htmlFor="include-nums">Numbers</label>
        <input
          type="checkbox"
          id="include-nums"
          defaultChecked={includeNums}
          onChange={() => {
            setincludeNums(!includeNums);
          }}
        />

        <label htmlFor="include-special-chars">Special Characters</label>
        <input
          type="checkbox"
          id="include-special-chars"
          defaultChecked={includeSpecialChars}
          onChange={() => {
            setincludeSpecialChars(!includeSpecialChars);
          }}
        />
      </div>
    </div>
  );
}

export default App;
