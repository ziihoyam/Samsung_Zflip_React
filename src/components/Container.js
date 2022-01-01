
import { Component } from "react";
import './components.css';
// import React, { useState } from "react";


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
                        <h1 className="big_txt">갤럭시 Z 플립3 5G</h1>
                        <p>SM-F711NLVWKOO</p>
                        <div className="plus_group">
                            <button className="minus_btn" onClick={()=>{
                                if(count>1){
                                    this.setState({count : count-1, payResult : payResult-1254000})
                                }
                                else if(count==0 || count==1){
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
                <div className="contents2">
                    
                </div>

            </div>
        )
    };
}
export default Container;