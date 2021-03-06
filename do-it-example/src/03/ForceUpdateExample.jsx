import React from 'react';

class ForceUpdateExample extends React.Component{
    constructor(props){
        super(props);
        this.loading = true;
        this.formData = 'no Data';
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 4000);
    }
    handleData(){
        const data = 'new data';
        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
    }
    render(){
        return(
            <div>
                {/* state 데이터는 this.state로 접근 가능합니다. */}
                <span>로딩중 : {String(this.loading)}</span>
                <span>결과 : {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateExample;