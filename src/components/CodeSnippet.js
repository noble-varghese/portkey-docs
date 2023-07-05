// CodeSnippet.js

import React, { useState } from 'react';

const CodeSnippet = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('curl');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCopyCode = () => {
    const codeElement = document.getElementById('code-snippet');
    const code = codeElement.textContent;

    // Copy the code to the clipboard
    navigator.clipboard.writeText(code);
  };

  return (
    <div>
      <div className="language-dropdown">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="curl">cURL</option>
          <option value="python">Python</option>
          <option value="node">Node.js</option>
        </select>
      </div>
      <div className="code-container">
        <button className="copy-button" onClick={handleCopyCode}>
          Copy
        </button>
        {selectedLanguage === 'curl' && (
          <pre>
            <code id="code-snippet">
              {`curl https://api.stripe.com/v1/endpoint
  -u sk_test_1234567890: 
  -d param1=value1 
  -d param2=value2`}
            </code>
          </pre>
        )}
        {selectedLanguage === 'python' && (
          <pre>
            <code>
              {`stripe.api_key = 'sk_test_1234567890'
params = {
    'param1': 'value1',
    'param2': 'value2',
}
stripe.Endpoint.create(**params)`}
            </code>
          </pre>
        )}
        {selectedLanguage === 'node' && (
          <pre>
            <code>
              {`const stripe = require('stripe')('sk_test_1234567890');
stripe.Endpoint.create({
    param1: 'value1',
    param2: 'value2',
});`}
            </code>
          </pre>
        )}
        {/* Add other code blocks for different languages */}
      </div>
    </div>
  );
};

export default CodeSnippet;
