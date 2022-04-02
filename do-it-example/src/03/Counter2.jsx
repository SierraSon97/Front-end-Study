import React from "react";
import PropTypes from 'prop-types'

class Counter2 extends React.Component {
    render(){
        return(
            <div>
                현재 카운트 : {this.props.count}
                <butto onClick={()=>this.props.onAdd()}>
                    카운트 증가
                </butto>
            </div>
        )
    }
}

Counter2.propTypes = {
    count : PropTypes.number,
    onAdd : PropTypes.func,
};

export default Counter2;