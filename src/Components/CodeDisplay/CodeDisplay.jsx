
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import { useTheme } from '../../Provider/ThemeContext';
// import './codeDisplay.css'

const CodeDisplay = ({ codeData }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const {isDarkMode}=useTheme()

  const toggleCodeDisplay = () => {
    setShowCode(!showCode);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <div className=" p-2 mt-5">
      <div className={isDarkMode ? "bg-zinc-900/80 p-4 rounded shadow mb-4 md:mb-0" : "bg-zinc-300 p-4 rounded shadow mb-4 md:mb-0"}>
        <div className="output" dangerouslySetInnerHTML={{ __html: codeData.code }} />
      </div>
      <div className={ isDarkMode ?` bg-zinc-900/80 mt-5 ${showCode ? 'block' : 'hidden'}  p-4 rounded shadow mb-4 md:mb-0` : ` bg-zinc-300 mt-5 ${showCode ? 'block' : 'hidden'}  p-4 rounded shadow mb-4 md:mb-0`}>
        <h2 className="text-lg text-gray-600 font-semibold mb-2">Code:</h2>
        <pre className="whitespace-pre-wrap ">{codeData.code}</pre>
        <div className="flex items-center mt-4">
          <CopyToClipboard text={codeData.code} onCopy={handleCopy}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              <FaCopy className="mr-1" />
            </button>
          </CopyToClipboard>
          {copied && <span className="text-green-500">Code copied to clipboard!</span>}
        </div>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
        onClick={toggleCodeDisplay}
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>
    </div>
    
  );
};

export default CodeDisplay;
