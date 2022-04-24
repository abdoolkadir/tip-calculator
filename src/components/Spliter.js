import React, { useState } from 'react';

import FormInput from './FormInput';
import TipsOutput from './TipsOutput';

function Spliter() {
  const percentages = [
    {
      id: 1,
      percentage: '5'
    },
    {
      id: 2,
      percentage: '10'
    },
    {
      id: 3,
      percentage: '15'
    },
    {
      id: 4,
      percentage: '25'
    },
    {
      id: 5,
      percentage: '50'
    }
  ];

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (numberOfPeople <= 0) {
      setError(true);
    } else {
      setError(false);
      setTotalTip((tip / 100) * bill);
      setTipPerPerson(totalTip / numberOfPeople);
    }

    // console.log(tip);
    // console.log(totalTip);
    // console.log(tipPerPerson);
  };

  return (
    <div className="splitter">
      <form onSubmit={handleSubmit}>
        <div>
          <FormInput
            type={'number'}
            label="Bill"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
          <div className="tip-percentages">
            <h4>Select Tip %</h4>
            <div className="grid">
              {percentages.map((data) => (
                <button
                  type="button"
                  key={data.id}
                  className="btn"
                  onClick={(e) => setTip(e.target.value)}
                  value={data.percentage}
                >
                  {data.percentage + '%'}
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                className="custom-form-input"
                onChange={(e) => setTip(e.target.value)}
              />
            </div>
          </div>

          <div className="number-of-people">
            <h4>Number of People</h4>
            {error && <span className="error">Can't be zero</span>}
            <FormInput
              type={'number'}
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            />
          </div>
        </div>
        <div className="result">
          <TipsOutput
            tipPerPerson={tipPerPerson}
            totalTipAmountPaid={totalTip}
          />
        </div>
      </form>
    </div>
  );
}

export default Spliter;
