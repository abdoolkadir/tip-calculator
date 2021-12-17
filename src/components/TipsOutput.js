import React from 'react';

function TipsOutput() {
  return (
    <div className="tips">
      <div className="tip">
        <div>
          <p className="title">
            Tip Amount<span className="sub-title">/ person</span>
          </p>
        </div>
        <div className="price">$0.00</div>
      </div>

      <div className="tip">
        <div>
          <p className="title">
            Tip Amount<span className="sub-title">/ person</span>
          </p>
        </div>
        <div className="price">$0.00</div>
      </div>
      <button className="btn">Reset</button>
    </div>
  );
}

export default TipsOutput;
