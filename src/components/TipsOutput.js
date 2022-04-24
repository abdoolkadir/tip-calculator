import React from 'react';

function TipsOutput({ totalTipAmountPaid, tipPerPerson }) {
  return (
    <div className="tips">
      <div>
        <div className="tip">
          <div>
            <p className="title">
              Tip Amount<span className="sub-title">/ person</span>
            </p>
          </div>
          <div className="price">
            {tipPerPerson <= 0 ? '$0.00' : tipPerPerson}
          </div>
        </div>

        <div className="tip">
          <div>
            <p className="title">
              Total Amount<span className="sub-title">paid</span>
            </p>
          </div>
          <div className="price">
            {totalTipAmountPaid <= 0 ? '$0.00' : totalTipAmountPaid}
          </div>
        </div>
      </div>
      <button className="btn btn-reset" type="submit">
        Submit
      </button>
    </div>
  );
}

export default TipsOutput;
