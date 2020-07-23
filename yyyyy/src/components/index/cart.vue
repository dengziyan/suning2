<template>
  <div>
    	<header>
			<h4>购物车</h4>
		</header>
		<main>
			<div class="address">
				<a href="">广东广州荔湾区<span></span></a>
			</div>
			<div class="login">
				<a href="">登录后同步电脑与手机购物车的商品<span>去登录</span></a>
			</div>
			<div class="cart">
				<div class="pic">
					<img src="../../assets/img/sn-cart-empty.png" alt="">
				</div>				
				<p>购物车还是空的，快来挑选好货吧</p>
				<i>去逛逛</i>
				<div class="none">
					<img src="../../assets/img/reach-bottom.png" alt="">
				</div>
				
			</div>
		</main>
  </div>
</template>

<script>
	export default {
	  
	}
</script>

<style scoped>
	header{
		text-align: center;
		height: 1.76rem;
		line-height: 1.76rem;
		border: 1px solid rgba(0,0,0,.1);
		background-color: #fff;
		font-size: .68rem;
		color: #222;
		font-weight: normal;
	}
	main{
		background: #F7F7F7;
		min-height: 800px;
	}
	main .address{
		display: flex;
		justify-content: center;
		background: #ffe37e;
		-webkit-border-radius: .48rem;
		-moz-border-radius: .48rem;
		border-radius: .48rem;
		margin: .48rem .48rem 0;
		padding: .3rem .48rem;
		font-size: .4rem;
		position: relative;
	}
	.address a{
		flex: 1 1;
		font-size: .48rem;
		color: #222;
	}
	.address span{
		position: absolute;
		background: url('../../assets/img/大于.png')
			 no-repeat;
		background-size: 100%;
		width: .84rem;
		height: .84rem;
		right:10px;
		top:6px;
	}
	main .login{
		display: flex;
		justify-content: center;
		background: #ffe37e;
		-webkit-border-radius: .48rem;
		-moz-border-radius: .48rem;
		border-radius: .48rem;
		margin: .48rem .48rem 0;
		padding: .3rem .48rem;
		font-size: .4rem;
		position: relative;
	}
	.login a{
		flex: 1 1;
		font-size: .48rem;
		color: #222;
	}
	.login span{
		display: block;
		position: absolute;
		/* width: .84rem; */
		height: .84rem;
		right:10px;
		top:6px;
		color: #ffe37e;
		border-radius: .12rem;
		background: #222;
	}
	main .cart{
		text-align: center;
	}
	.cart .pic{
	    width: 3.5rem;
		height: 3.5rem;
		margin: 2.6rem auto .8rem;
	}
	.cart .pic img{
		width: 100%;
	}
	.cart p{
	    font-size: .56rem;
		color: #666;
		margin-bottom: .52rem;
	}
	.cart i{
		/* display: inline-block; */
		line-height: .96rem;
		background-color: #fff;
		font-size: .48rem;
		color: #666;
		width: 2.16rem;
		height: .96rem;
		background-size: 100% 100%;
		text-align: center;
		border-radius: 5px;
	}
	.cart .none img{
		align-items: center;
		margin: .72rem auto 1.8rem;
		width: 8.4rem;
		height: .48rem;
	}
	    
</style>
