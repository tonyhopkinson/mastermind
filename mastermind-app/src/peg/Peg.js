import React, { Component } from 'react';
function BuildPeg(fill){
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="29"
        version="1.1"
        viewBox="0 0 21 29"
      >
        <g>
          <circle
            cx="10"
            cy="10"
            r="10"
            fill={fill}
            fillRule="evenodd"
            strokeWidth="0.168"
          />
        </g>
      </svg>
    );
  };
class Peg extends Component
{
    render()
    {
        return BuildPeg(this.props.fill);
    }
}
export default Peg;