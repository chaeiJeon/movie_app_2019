import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push("/");
        }
        // 주소창으로 /detail-movie로 들어오면 home으로 돌아가게 한다
        // 무조건 /에서 영화를 눌러야 detail을 볼 수 있게한다.
        // 주소창으로 들어오면 state가 undefined이다ㅣ
    }
    render(){
        const {location}=this.props;
        if (location.state){
            return <span>{location.state.title}
            </span>;
        }
        else{
            return null;
        }
    }
}
export default Detail;