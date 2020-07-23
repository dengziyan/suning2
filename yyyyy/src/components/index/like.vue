<template>
  <div>
    	<header>
    		<!-- 搜索框 -->
    		<div class="nav-wrap">
    			<div class="nav-wrap-sup">
    				<router-link to="/type">
    					<img src="../../assets/img/157199320847433454.png" alt="">
    				</router-link>
    				
    				<img src="../../assets/img/head-icon.gif" alt="">
    				<router-link to="/my">
    					<img src="../../assets/img/157199321817918653.png" alt="">
    				</router-link>   				
    			</div>
    			<div class="nav-wrap-sub">
    				<span></span>
    				<input type="text" placeholder="疯狂717百万爆款1折起">
    			</div>
    		</div>
    		<!-- 轮播图 -->
    		<div class="banner">	    		
	    			<swiper ref="mySwiper" :options="swiperOptions">
						   <swiper-slide v-for="banner in banners" :key="banner"> <img :src="banner"></swiper-slide>
						    <div class="swiper-pagination" slot="pagination"></div>
					</swiper>									
    		</div>  	
    	</header>
    	<main>
    		<div class="pics">
    			<img src="../../assets/img/159495277380920710.png" alt="">
    			<img src="../../assets/img/159495278283639001.png" alt="">
    			<img src="../../assets/img/159495278927323318.png" alt="">   			
    		</div>
    		<!-- 菜单-->
    		<div class="listmenu">
				<ul class="lists">
	    			<li v-for="(v,i) in msg" :key="i">
	    				<router-link to="/details">
	    					<img :src="v.imgsrc" alt="" />
	    					<span>{{v.listname}}</span>
	    				</router-link>
	    			</li>
	    		</ul>
		    </div>
			<!-- 照片墙 -->
			<div class="picwall">
				<ul class="picwalls">
	    			<li v-for="picwall in picwalls" :key="picwall">
						<img :src="picwall">
	    			</li>
	    		</ul>
		    </div>
			<!-- 天天低价 -->
			<div class="cheap">
				<ul>
					<li  v-for="(v,i) in cheap" :key="i">
						<h4>{{v.h4}}</h4>
						<p>{{v.p}}</p>
						<div class="goods">
							<div class="g-left">
								<img :src="v.img1" alt="" />
								<span><p>{{v.span1}}</p></span>
							</div>
							<div class="g-right">
								<img :src="v.img2" alt="" />
								<span><p>{{v.span2}}</p></span>
							</div>
							
						</div>
					</li>
				</ul>
			</div>
			<!-- 推荐 -->
			<div class="recommend">
				<div>
					<div class="recLeft">
						<h4>为您推荐</h4>
						<p>精选频道</p>
					</div>
					<ul class="recRight">
						<li v-for="(v,i) in recRight" :key="i">
							<img :src="v.imgsrc" alt="" />
							<span>{{v.des}}</span>
						</li>
					</ul>	
				</div>
							
			</div>
			<!-- 广告 -->
			<div class="adver">
				<img src="../../assets/img/adt.png" alt="">
			</div>
			<!-- 推荐榜单 -->
			<div class="recList">
				<h4>推荐榜单</h4>
				<ul>
					<li v-for="(v,i) in recList" :key="i">
						<img :src="v.imgsrc" alt="" />						
						<div class="txt">
							<span>{{v.span}}</span>
							<h5>{{v.h5}}</h5>
							<p>{{v.p}}</p>
						</div>
					</li>
				</ul>
			</div>
			<!-- 人气榜 -->
			<div class="popular">
				<ul>
					<li  v-for="(v,i) in popular" :key="i">
						<h4>{{v.h4}}<span>{{v.span}}</span></h4>
						<p>{{v.p}}</p>
						<div class="goods">
							<div class="g-left">
								<img :src="v.img1" alt="" />
							</div>
							<div class="g-right">
								<img :src="v.img2" alt="" />
							</div>							
						</div>
					</li>
				</ul>
			</div>
			<!-- 猜你喜欢 -->
			<div class="like">
				<h4><img src="../../assets/img/like.png" alt=""></h4>
				<ul>
					<li v-for="(v,i) in like" :key="i">
						<img :src="v.imgsrc" alt="" />						
						<div class="txt">
							<h5>{{v.h5}}</h5>
							<p>
								<span v-if="v.span1=='自营'">{{v.span1}}</span>
								<span v-if="v.span2!=''">{{v.span2}}</span>
								<span v-if="v.span3!=''">{{v.span3}}</span>
							</p>							
							<p>
								<i>{{v.i}}</i>
								<u>{{v.u}}</u>
							</p>
						</div>
					</li>
				</ul>
			</div>
			
    	</main>

  </div>
</template>
<style scoped>
	html{
        font-size: 24px;
    }

	header{
	 	width: 100%;
	 	height: auto;

	}
	 /*搜索框  */
	header .nav-wrap{
	 	padding: 10px 20px 10px 20px;
	 	box-sizing: border-box;
	 	width: 100%;
	    overflow: hidden;
		background: url('../../assets/img/159099977341008015.png');
	}
	.nav-wrap .nav-wrap-sup{
	    margin: 0 auto;
	    display: flex;
	    justify-content: space-between;
	    /* background: red; */
	}
	.nav-wrap .nav-wrap-sup>img{
		width: 9rem;
	    height: 1.1rem;
	}
	.nav-wrap .nav-wrap-sup a img{
		width: .72rem;
		height: 1.2rem;
	}
	.nav-wrap .nav-wrap-sub{
		display: flex;
	    justify-content: center;
	    position: relative;
	}
	.nav-wrap .nav-wrap-sub span{
		position: absolute;
	    width: .72rem;
	    height: .72rem;
	    top: .56rem;
	    left: 0.9rem;
		background: url('../../assets/img/下载.png') no-repeat;
		background-size: .72rem .72rem;
	}
	.nav-wrap .nav-wrap-sub input{
		margin-top: 0.2rem;
	    border: 0;
	    /* -webkit-border-radius: .6rem; */
	    padding: .06rem .4rem 0 1.3rem;
	    width: 80%;
	    height: 1.28rem;
	    line-height: 1.28rem;
	    background: #FFF;
	    font-size: .56rem;
	    color: #999;
	    -webkit-appearance: none;
	}
    /* 轮播图 */
	header .banner{
		padding: 10px 20px 0px 20px;
	 	box-sizing: border-box;
	 	width: 100%;
		background: url('../../assets/img/159358791636856356.png') no-repeat;
		background-size: 100%;
	} 
	header .banner img{
		width: 100%;
		border-radius: 6px;		
	}
	main{
		background: #F7F7F7;
	}
	main .pics{
		overflow: hidden;
		padding: 0px 10px 10px 10px;
	 	box-sizing: border-box;
	} 
	.pics img{
		width: 33.3%;
		height: 4.2rem;
		display: block;
		float: left;
	}
	/* 菜单 */
	main .listmenu{
		/* padding: 0px 20px 10px 20px; */
	 	box-sizing: border-box;
	}
	.listmenu .lists{
    	height: 5.6rem;
    	box-sizing: border-box;
		background: #F7F7F7;
	}
	.listmenu li{
		width: 20%;
		float: left;
	    text-align: center;
	}
	.listmenu li img{
		 width: 1.68rem;

	}
	.listmenu li span{
		display: block;
		text-align: center;
		line-height: .56rem;
		height: .56rem;
		font-size: .44rem;
		margin-bottom: .1rem;
		color: #666;
	}
	/* 照片墙 */
	main .picwalls{
		width: 100%;
		display: flex;
		justify-content: space-between; 
	}
	.picwalls li{
		height: 4.58rem;
	}
	.picwalls li img{
		    height: 4.38rem;
	}
	.picwalls li img:nth-child(1){
		width: 98%;
	}
	/* 天天低价 */
	main .cheap{
		box-sizing: border-box;
		padding: 0px 10px 10px 10px;
	
	}
	.cheap li{
		float: left;
		width: 50%;
		border:1px solid #F7F7F7;
		box-sizing: border-box;
		background: white;
	}
	.cheap li h4{
		font-weight: 700;
		font-size: .56rem;
		line-height: .8rem;
		margin: .36rem .16rem 0 .48rem;
		color: #333;
	}
	.cheap li p{
		font-size: .48rem;
		color: #999;
		margin: .08rem 0 0 .48rem;
		line-height: .6rem;
	}
	.cheap li .goods{
		display: flex;
		justify-content: space-between; 
		box-sizing: border-box;
	}
	.cheap li .goods>div{
		width: 50%;
	}
	.cheap li .goods img{
		width: 80%;
	}
	.cheap li .goods span{
		display: block;
		background: url('../../assets/img/cheapspan.png')
			no-repeat;
		background-size: 100%;
		width: 3rem;
   		height: 1.08rem;
		font-size: .4rem;
		position: relative;
		
	}
	.cheap li .goods span p{
		position:absolute;
		display: block;
		left: 10px;
		top:5px;
	}
	/* 推荐 */
	main .recommend{	
		padding: 0px 10px 5px 10px;
	}
	.recommend>div{
		background: white;
		box-sizing: border-box;
		display: flex;
		width: 100%;
	}
	.recommend .recLeft{
		padding: .94rem .36rem 0 .36rem;
		
	}	    
	.recommend h4{
		width: 2.74rem;
		height: .9rem;
		line-height: .9rem;
		font-size: .64rem;
		color: #444;
		font-weight: bold;
	}
	.recommend p{
		width: 2.74rem;
		height: .64rem;
		line-height: .64rem;
		font-size: .48rem;
		color: #999;		
	}
	    
	.recommend .recRight li{
		float: left;
		box-sizing: border-box;
		width: 24%;
		height: 3.44rem;
		text-align: center;
		padding: 10px;
	}
	.recommend .recRight li img{
		width: 2rem;
		height: 2rem;
	}
	.recommend .recRight li span{
		display: block;
		top: 2.48rem;
		left: 0;
		width: 2.4rem;
		height: .6rem;
		line-height: .6rem;
		font-size: .44rem;
		text-align: center;
		color: #333;
	}
	/* 广告 */
	main .adver{
    	height: 4.2rem;
		
	}
	.adver img{
		width: 100%;
	}
	/* 推荐榜单 */
	main .recList{
		width: 100%;
		padding: 0px 10px 5px 10px;
		box-sizing: border-box;
		

	}
	.recList h4{
		font-size: 16px;
	}
	.recList ul{
		display: flex;
		justify-content: space-between;
	}
	.recList ul li{
		width: 32%;		
		background: white;
		text-align: center;
	}
	.recList ul li span{
		position: absolute;
		display: block;
		height: .68rem;
		font-size: .44rem;
		line-height: .6rem;
		min-width: 2rem;
		max-width: 4rem;
		background: #FFF;
		color: #d9a87a;
		border: .04rem solid #d9a87a;
		border-radius: .34rem;
		text-align: center;
		top:-6px;
		left:26%;
		/* margin: 0 auto; */
	}
	.recList ul li img{
		display: block;
		width: 3rem;
		height: 3rem;
		margin: .3rem auto 0;
	}
	.recList ul li .txt{
		background: url('../../assets/img/recListtxt.png') no-repeat;
		background-size:100%;
		height: 1.86rem;
		position: relative;
		box-sizing: border-box;
		padding-top:12px;
		border-radius: 0 0 .24rem .24rem;
	}
	.recList ul li h5{
		font-size: .52rem;
		line-height: .64rem;
		margin: 0rem auto .06rem;
		color: #fff;		
	}
	.recList ul li p{
		line-height: .48rem;
		font-size: .44rem;
		margin: 0 auto;
		color: #fff;
		opacity: .8;
		text-align: center;
	}

	/* 人气榜 */
	main .popular{
		box-sizing: border-box;
		padding: 0px 10px 10px 10px;
	}
	.popular li{
		float: left;
		width: 50%;
		border:1px solid #F7F7F7;
		box-sizing: border-box;
		background: white;
	}
	.popular li h4{
		position: relative;
		font-weight: bold;
		font-size: .52rem;
		line-height: .64rem;
		margin: .36rem .16rem 0 .48rem;
		color: #333;
	}
	.popular li h4 span{
		position: absolute;
		display: block;
		height: .68rem;
		font-size: .44rem;
		line-height: .6rem;
		background: #FFF;
		color: #d9a87a;
		background: #f9f5ee;
		border-radius: .34rem;
		text-align: center;
		right:-1px;
		top:0px;
	}
	.popular li p{
		font-size: .48rem;
		color: #999;
		margin: .08rem 0 0 .48rem;
		line-height: .6rem;
	}
	.popular li .goods{
		display: flex;
		justify-content: space-between; 
		box-sizing: border-box;
	}
	.popular li .goods>div{
		width: 50%;
	}
	.popular li .goods img{
		width: 80%;
	}
	/* 猜你喜欢 */
	main .like{
		box-sizing: border-box;
		padding: 0px 10px 10px 10px;
		margin-bottom: 550px;
		min-height: 800px;
	}
	.like h4{
		text-align: center;
	}
	.like h4 img{
		width: 14.04rem;
    	height: 1.2rem;
	}
	.like ul{
		min-height: 1800px;
		box-sizing: border-box;
		/* display: flex;
		justify-content: space-between;  */
	}
	.like ul li{
		width: 48%;
		float: left;
		background:white;
		border-radius: 7px;
		margin-bottom: 7px;
		
	}
	.like ul li:nth-child(odd){
		margin-right: 4%;
	}
	.like ul li img{
		width: 100%;
		/* height: 6.84rem; */
		border-radius: .24rem .24rem 0 0;
	}
	.like ul li h5{
	    margin: .36rem auto 0;
		width: 6.36rem;
		height: 1.34rem;
		font-size: .52rem;
		line-height: .68rem;
		font-weight: bold;	
	}
	.like ul li span{
		/* display: block; */
		margin-right: .12rem;
		height: .36rem;
		line-height: .36rem;
		font-size: .36rem;
		text-align: center;
		padding: .06rem .12rem;
		margin-bottom: .04rem;
		border-radius: .12rem;
		box-sizing: content-box;	
	}
	.like ul li span:nth-of-type(1){
		background: #fc0;
	}
	.like ul li span:nth-of-type(2){
		border: 1px solid #fb0;
	}
	.like ul li span:nth-of-type(3){
		border: 1px solid #fb0;
	}
	    
	.like ul li i{
		font-size: .72rem;
		line-height: .72rem;
		color: #f42;
    	font-weight: bold;
	}
	.like ul li u{
		color: #999;
		margin-left: .26rem;
		font-weight: normal;
		font-size: .4rem;
	}
	   



    
	   
</style>

<script>
   export default {
    data () {
      return {
      	banners:{},
		msg:{},
		picwalls:{},
		cheap:{},
		recRight:{},
		recList:{},
		popular:{},
		like:{},
        swiperOptions: {          
	        autoplay:true,     
	        debugger: true,
	        loop:true,
	        pagination:{
		        el:'.swiper-pagination',
		        clickable:true,
        	}
        }
      }
    },
    mounted() {
      this.$http.get('./data/like.json')
      .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.banners=response.data.banners;
			 this.msg=response.data.msg;
			 this.picwalls=response.data.picwalls;
			 this.cheap=response.data.cheap;
			 this.recRight=response.data.recRight;
			 this.recList=response.data.recList;
			 this.popular=response.data.popular;
			 this.like=response.data.like;
		   })
		   .catch(function (error) {
		     // handle error
		     console.log(error);
		   })
		   .then(function () {
		     // always executed
		   });
    }
  }
</script>

