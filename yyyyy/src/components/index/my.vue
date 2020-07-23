<template>
  <div>
    	<header>
			<div class="contact">
				<div class="hdRight">
					<span>联系客服</span>
				 	
				 	<span><router-link to="/regist">企业注册</router-link></span>
				</div>				 
			</div>
			
		</header>
		<main>
			<h2>
				<img src="../../assets/img/login-icon.png" alt="">				
				<span>欢迎登录苏宁易购</span>
				
			</h2>
			<div class="phNum">
				<!-- <label></label> -->
				<input type="tel" name="" id="" placeholder="请输入手机号" >
			</div>
			<ul class="verif">
				<li><input type="text"></li>
				<li><input type="text"></li>
				<li><input type="text"></li>
				<li><input type="text"></li>
				<li>获取验证码</li>
			</ul>
			<div class="tip">
				<p>未注册的手机号验证后自动注册</p>
			</div>
			<div class="login">
				<button>登录</button>
			</div>
			<div class="method">
				<p>账号密码登录</p>
			</div>

		</main>
		<footer>
			<p>其他方式登录</p>
			<ul class="icon">
				<li><img src="../../assets/img/icon_qq.png" alt=""></li>
				<li><img src="../../assets/img/icon_zfb.png" alt=""></li>
				<li><img src="../../assets/img/icon_epp.png" alt=""></li>
				<li><img src="../../assets/img/icon_k.png" alt=""></li>
			</ul>
			<p>我同意<i>《苏宁易购会员章程》《易付宝协议》</i></p>
		</footer>
  </div>
</template>

<script>
	export default {
	  
	}
</script>
<style>
html{
        font-size: 24px;
    }
</style>
<style scoped>
/* html{
	font-size: 25px;
} */
	/* 联系客服 */
	header{
		box-sizing: border-box;
		padding: 10px 10px;
	}
	header .contact{
		clear: both;
		height: 40px;
	}
	header .hdRight{
		float:right;
		line-height: 1.2rem;
		font-size: .74rem;
		color: #222;				
	}
	header a{
		color: #222;
		font-size: 12px;
	}
	.hdRight span{
		margin-left: .48rem;
		font-size: 12px;
		
	}
	.hdRight span:nth-child(2){		
    	margin-left: .48rem;
		position: relative;
	}
	.hdRight span:nth-child(2)::before{
		content: "";
		display: inline-block;
		width: .02rem;
		height: .9rem;
		border-left: 1px solid #ddd;
		position: absolute;
		left: -.37rem;
		top: 0rem;
	}

	main{
		box-sizing: border-box;
		padding: 10px 30px;
	}
	    /* 欢迎登录 */
	main h2 {
		font-weight: 500;
		font-size: 16px;
		/* text-align: center; */
		position: relative;
		padding-left: 80px;
	}
	
	main h2 img{
		position: absolute;
		top:-6px;
		left:0px;
	    width: 2.5rem;
		margin-right: .6rem;
		max-width: 100%;	
	}
	main h2 span{
		display: inline-block;
	}
	
	main .phNum{
		/* height: 30px; */
		line-height: 1rem;
		font-size: .6rem;
		color: #ccc;
		background: transparent;
		cursor: text;
		clear: both;
	}
	main .phNum input{
		margin-top: 50px;
		border: 0;
		border-bottom: 1px solid ;
		width: 100%;
		height: 30px;
		font-size: 16px;
		color: #CCCCCC;
	}
	.phNum input::-webkit-input-placeholder{
		color: #ccc;
		font-size: 13px;
	}
	main .verif{
		width: 100%;
		height: 50px;
		box-sizing: border-box;
	}    
	.verif li{
		margin-top: 16px;
		width: 15%;
		float: left;
		margin-right:2%;
		border-bottom: 1px solid;
		height: 34px;
		color: #CCCCCC;
	}
	.verif li input{
		width: 100%;
		border: none;
	}
	.verif li:nth-of-type(5){
		width: 30%;
		border:1px solid;
		border-radius: 6px;
		line-height: 32px;
		margin-right:0px;
		font-size: 13px ;
	}
	main .tip{
		margin-top: 5px ;
		margin-bottom: 20px;
	}
	.tip p{
	    font-family: PingFangSC-Regular;
		font-size: 10px;
		margin-top: .24rem;
		color: #999999;
	}
	main .login{
		margin-bottom: 20px;
	}
	.login button{
		width: 100%;
		height: 40px;
		line-height: 1.8rem;
		display: block;
		color: #222;
		font-size: 16px;
		border-radius: .48rem;
		background: #fc0;
		font-weight: 700;
		border: 0;	
	}
	main .method{
		text-align: center;
		font-size: 13px;
		margin-bottom: 180px;
	}
	footer{
		text-align: center;
		margin: 0px auto;
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 70%;

	}
	footer p{
		color: #999;
		margin-bottom: .38rem;
		font-size: 10px;
		position: relative;

	}
	footer p:nth-child(1)::before,
	footer p:nth-child(1)::after{
		content: "";
		display: block;
		position: absolute;
		top: .28rem;
		width: 3rem;
		border-bottom: 1px solid #ddd;
	}
	footer p:nth-child(1)::before{
		left: 20px;
	}
	footer p:nth-child(1)::after{
		right:20px;
	}
	footer p i{
		color: #101010;
	}
	footer .icon{

	    height:3px;
	}
	footer .icon li{
		float: left;
		width: 25%;
	}
	footer .icon li:nth-of-type(4){
		margin-right: 0px;
	}
	footer img{
		width: 50%;
	}
	footer p:nth-of-type(2){
		display: block;
		margin-top: 40px;
	}
	    
</style>
