import React from "react";
import PropTypes from 'prop-types';

class ChildComponent extends React.Component{
    render(){
        const{
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return (
            <div>
                <span>boolean : {boolValue}</span>
                <span>num : {numValue}</span>
                <span>array : {arrayValue}</span>
                <span>object : {String(objValue)}</span>
                <span>node : {nodeValue}</span>
                <span>function : {String(funcValue)}</span>
            </div>
        );
    }
}

ChildComponent.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
   } 
export default ChildComponent;