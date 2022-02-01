import React from "react";
import { generatePassword } from "../utility/generator";

const PasswordGenerator = () => {
  const [password, setPassword] = React.useState("");
  const [isCopy, setCopy] = React.useState(false);
  const [input, setInput] = React.useState({
    length: 16,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.type === "number"
        ? event.target.value
        : event.target.checked;
    setInput((prev) => ({
      ...prev,
      [event.target.name]: value,
    }));
  };
  const handleCopy = () => {
    if (!navigator.clipboard || password === "") return;
    navigator.clipboard.writeText(password).then(
      () => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
      },
      (err) => console.error("Could not copy text: ", err)
    );
  };
  const handleGenerate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { length, uppercase, numbers, symbols } = input;
    setPassword(generatePassword(length, uppercase, numbers, symbols));
  };
  return (
    <div className="container">
      <p className="mainTitle">Password Generator</p>
      <div className="resultContainer">
        <span>{password}</span>
        <button className="btnConpy" title="Copy" onClick={handleCopy}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"
            />
            <path d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z" />
          </svg>
        </button>
      </div>
      <form onSubmit={handleGenerate}>
        <div className="settings">
          <div className="setting">
            <label>Password Length</label>
            <input
              className="settingNumber"
              type="number"
              name="length"
              min="4"
              max="20"
              value={input.length}
              onChange={handleChange}
            />
          </div>
          <div className="setting">
            <label htmlFor="uppercase">Include uppercase letters</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={input.uppercase}
              onChange={handleChange}
            />
          </div>
          <div className="setting">
            <label htmlFor="numbers">Include numbers</label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={input.numbers}
              onChange={handleChange}
            />
          </div>
          <div className="setting">
            <label htmlFor="symbols">Include symbols</label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={input.symbols}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="btnSubmit" type="submit">
          Generate Password {isCopy && <span>.. Copied!</span>}
        </button>
      </form>
    </div>
  );
};

export default PasswordGenerator;
