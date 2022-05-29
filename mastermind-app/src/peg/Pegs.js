import React, { Component } from 'react';
import Peg from './Peg';
function BuildPegs(colours)
{
    return colours.map((fill) =>
        <div class ="divTableCell">
            <Peg className="Peg" fill={fill}/>
        </div>
    )
}

class Pegs extends Component
{
    render()
    {
        if (this.props.complete)
        {
            return (
                <div class ="divTableRow">
                </div>
            )
        }
        else
        {
            return (
            <div class ="divTableRow">
                {BuildPegs(this.props.colours)}    
            </div>
            )
        }
    }
}
export default Pegs;
