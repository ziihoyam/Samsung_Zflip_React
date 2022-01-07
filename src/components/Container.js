
import { Component } from "react";
import './components.css';
// import React, { useState } from "react";
import { BrowserRouter,Route, NavLink } from "react-router-dom";

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1,
      payResult : 1254000
    };
  }

    render(){
        console.log('Container 렌더링');
        const{ count } = this.state;
        const{ payResult } = this.state;
         
        // 슬라이드 스크립트
        function slideColor(){
            var phoneImg=document.querySelector('.phone_imgs');
            document.querySelector('.black').addEventListener('click',()=>{
                phoneImg.style.transform="translate(0px)";
            });
            document.querySelector('.yellow').addEventListener('click',()=>{
                phoneImg.style.transform='translate(-350px)';
            });
            document.querySelector('.green').addEventListener('click',()=>{
                phoneImg.style.transform='translate(-700px)';
            });
            document.querySelector('.purple').addEventListener('click',()=>{
                phoneImg.style.transform='translate(-1050px)';
            });
        };

        return(
            <div id="container"> 
                <div className="main_slide">
                    <img src="imgs/main_img03.jpg" alt="mainimg"></img>
                </div>
                <div className="contents1">
                    <div className="phone_left">
                        <h2 className="big_txt">갤럭시 Z 플립3 5G</h2>
                        <p>SM-F711NLVWKOO</p>
                        <div className="plus_group">
                            <button className="minus_btn" onClick={()=>{
                                if(count>1){
                                    this.setState({count : count-1, payResult : payResult-1254000})
                                }
                                else if(count===0 || count===1){
                                    alert('최소 수량은 1개 입니다.');
                                    console.log('이벤트 실행');
                                    this.setState({count : 1, payResult : 1254000});
                                };}}>-</button>
                            <span className="result">{this.state.count}</span>
                            <button className="plus_btn" onClick={()=>{
                                this.setState({count : count+1, payResult : payResult+1254000})}}>+</button>
                        </div>
                        <span>판매가  </span>
                        <span className="big_txt">1,254,000</span>
                        <span>원</span>
                        <div className="sum_group">
                            <span className="sum_hap">총 구매금액 </span>
                            <span className="sum_result">
                                { this.state.payResult.toLocaleString() }</span>
                            <span className="sum_won">원</span>
                        </div>
                        <div className="pay_button">
                            <button>바로구매</button>
                            <button>장바구니</button>
                        </div>
                        
                    </div>
                    <div className="phone_right">
                        <div className="phone_over_hidden">
                                <div className="phone_imgs">
                                    <div class="phone_img_wrap"><img src="imgs/phone_black.jpeg" alt="phoneimg"></img></div>
                                    <div className="phone_img_wrap"><img src="imgs/phone_yellow.jpeg" alt="phoneimg"></img></div>
                                    <div className="phone_img_wrap"><img src="imgs/phone_green.jpeg" alt="phoneimg"></img></div>
                                    <div className="phone_img_wrap"><img src="imgs/phone_purple.jpeg" alt="phoneimg"></img></div>
                                </div>
                        </div>
                        <div className="color_group">
                            <button className="color black" onClick={slideColor}></button>
                            <button className="color yellow" onClick={slideColor}></button>
                            <button className="color green" onClick={slideColor}></button>
                            <button className="color purple" onClick={slideColor}></button>
                        </div>
                    </div>
                </div>
                <VideoModal/>
                <div className="contents2">
                    
                    <BrowserRouter>
                    <Contents2/>
                    </BrowserRouter>
                </div>

            </div>
        )
    };
}
function VideoModal(){
    return(
        <div className="youtube_area">
            <iframe width="1000" height="562" src="https://www.youtube.com/embed/w8SBlIAorH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
function Modal(){
    return(
        <div className="modal">
            <button className="modal_button">Open modal</button>
        </div>
    );
}

function Contents2(){
 return(
     <div className="spec_group">
         <div className="spec_left_group">
            
            <div className="spec_left_img_group">
                <Route exact path="/">
                    <div className="spec_left_img">
                        <h2>덜 기다리고, 더 빨리 연결되는</h2>
                        <p>방금 업데이트된 드라마를 보고 지금 벌어진 일을 업로드하는데 왜 기다림이 필요하죠? 초고속 5G로 사진과 동영상을 빠르게 공유하는 즐거움을 누리세요.</p>
                        <img src="imgs/cont2_1.jpeg" alt="route1"></img>
                    </div>
                </Route>
                <Route path="/battery">
                    <div className="spec_left_img">
                        <h2>오래도록 파워풀한 배터리</h2>
                        <p>인텔리전트 듀얼 배터리 3,300 mAh 대용량 배터리를 경험해보세요.23,24 당신의 사용 습관에 맞춰 전력을 조절해주어 더 오래 사용할 수 있습니다.</p>
                        <img src="imgs/cont2_2.jpeg" alt="route2"></img>
                    </div>
                </Route>
                <Route path="/saveArea">
                    <div className="spec_left_img">
                        <h2>계속 모아 두세요</h2>
                        <p>폰으로 찍은 사진과 동영상은 폰으로 간직하세요. 최대 256 GB 저장 용량으로, 갤럭시 안의 공간은 충분합니다.</p>
                        <img src="imgs/cont2_3.jpeg" alt="route3"></img>
                    </div>
                </Route>
                <Route path="/ap">
                    <div className="spec_left_img">
                        <h2>갤럭시 Z 사상<br/>가장 빠른 칩으로</h2>
                        <p>GPU, CPU 그리고 NPU로 업그레이드된 5 nm 프로세서를 탑재했습니다. 그리고 8 GB RAM까지 더해, 만족스러운 속도의 게임 퍼포먼스를 경험할 수 있죠.</p>
                        <img src="imgs/cont2_4.jpeg" alt="route4"></img>
                    </div>
                </Route>
            </div>
            <ul className="spec_left_txt">
                <li><NavLink exact to="/">초고속 5G</NavLink></li>
                <li><NavLink to="/battery">듀얼 배터리</NavLink></li>
                <li><NavLink to="/saveArea">저장공간</NavLink></li>
                <li><NavLink to="/ap">AP</NavLink></li> 
            </ul>
        </div>
        <div className="spec_right_group">
                <h2>좋아하던 플립에서 <br/> 열광하는 플립으로</h2>
                <p>조금 다른 생각으로 만들어진 폰 같다구요?<br/>네, 맞아요. 바로 갤럭시 Z 플립3 5G.<br/>당신이 어떤 사람인지 세상에 선언해줄<br/>가장 강력한 스마트폰이 될 겁니다.</p>
        </div>

     </div>
 );
}
export default Container;