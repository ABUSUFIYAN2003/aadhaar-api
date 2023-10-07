import React, { useState } from 'react';
import validator from 'aadhaar-validator';
import './AadharValidator.css'; // Import your custom CSS file

function AadharValidator() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateAadhar = () => {
    if (aadharNumber === '') {
      setErrorMessage('Aadhar number is required.');
      setIsValid(null);
      return;
    }

    if (!/^[0-9]+$/.test(aadharNumber)) {
      setErrorMessage('Aadhar number should contain only numbers.');
      setIsValid(null);
      return;
    }

    const isAadharValid = validator.isValidNumber(aadharNumber);
    setIsValid(isAadharValid);
    setErrorMessage('');
  };

  const clearInput = () => {
    setAadharNumber('');
    setIsValid(null);
    setErrorMessage('');
  };

  return (
    <div className="container mt-5">
      <div className="aadhar-form">
        <h1 className="aadhar-form-title">Aadhar Number Validation </h1>
        <div className="aadhar-input-group">
          <input
            type="text"
            className="aadhar-input"
            placeholder="Enter Aadhar Number"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
          <div className="button-group">
            <button className="aadhar-button" onClick={validateAadhar}>
              Validate
            </button>
            <button className="aadhar-button" onClick={clearInput}>
              Clear
            </button>
          </div>
        </div>
        {errorMessage && <div className="aadhar-error">{errorMessage}</div>}
        {isValid !== null && !errorMessage && (
          <div
            className={`aadhar-result ${
              isValid ? 'aadhar-valid' : 'aadhar-invalid'
            }`}
          >
            <p>
               You Entered Aadhar Number is: <strong>{aadharNumber}</strong>
            </p>
            <p>
              <strong>
                {isValid ? 'Aadhar Number is Valid' : 'Invalid Aadhar Number'}
              </strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AadharValidator;
