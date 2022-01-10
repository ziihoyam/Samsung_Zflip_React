import { Component } from "react";
import './components.css';

class Footer extends Component {
    render() {
        console.log('Footer 렌더링');
        // let lists=['삼성전자 주식회사 대표이사 : 김기남','사업자등록번호 : 124-81-00998','통신판매업 신고 : 2000-경기수원-0515','사업장주소 : 경기도 수원시 영통구 삼성로 129(매탄동)','대표번호 : 02-2255-0114']

        return (
            <div class="footer">
                <h1 id='footer_logo'>
                    <a href="/"><img src="imgs/Galaxy_z_flip.png" alt="logo" width="150px"></img></a>
                    <span>x</span>
                    <a href="/"><img src="imgs/main_logo.png" alt="logo" width="150px"></img></a>
                </h1>
                <ul class="company">
                    <li>삼성전자 주식회사 대표이사 : 김기남</li>
                    <li>사업자등록번호 : 124-81-00998</li>
                    <li>통신판매업 신고 : 2000-경기수원-0515</li>
                    <li>사업장주소 : 경기도 수원시 영통구 삼성로 129(매탄동)</li>
                    <li>대표번호 : 02-2255-0114</li>
                </ul>
            </div>
        )
    };
}
export default Footer;