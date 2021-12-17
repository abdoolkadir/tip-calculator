import React from 'react';
import FormInput from './FormInput';
import TipsOutput from './TipsOutput';

function Spliter() {
  const tipPercentage = [
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
    },
    {
      id: 6,
      percentage: 'Custom'
    }
  ];
  return (
    <div className="splitter">
      <form>
        <FormInput label="Bill" />
        <div className="tip-percentages">
          <h4>Select Tip %</h4>
          <div className="grid">
            {tipPercentage.map((data) => (
              <button
                key={data.id}
                className={data.id === 6 ? 'btn btn-custom' : 'btn'}
              >
                {data.percentage === 'Custom'
                  ? data.percentage
                  : data.percentage + '%'}
              </button>
            ))}
          </div>
        </div>

        <div className="number-of-people">
          <h4>Number of People</h4>
          <FormInput />
        </div>
      </form>
      <div className="result">
        <TipsOutput />
      </div>
    </div>
  );
}

export default Spliter;
