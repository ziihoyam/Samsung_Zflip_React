import { Component } from "react";
import './components.css';
class Head extends Component{
    render(){
        console.log('Head 렌더링');
        return(
            <header>
                <h1 id='logo'>
                    <a href="/"><img src="imgs/Galaxy_z_flip.png" alt="logo"></img></a>
                </h1>
                <ul class="sign">
                    <li><a href='/'>로그인</a></li>
                    <li><a href='/'>회원가입</a></li>
                </ul>
                <ul class="gnb">
                    <li><a href="/">스펙</a></li>
                    <li><a href="/">메뉴얼</a></li>
                    <li><a href="/">유의사항</a></li>
                    <li><a href="/">비교하기</a></li>
                    <li><a href="/">제품 접근성</a></li>
                    <li><a href="/">바로구매</a></li>
                </ul>
            </header>
        )
    };
}
export default Head;