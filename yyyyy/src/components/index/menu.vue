<template>
  <div>
    	<header>
			<h2>
				<span><router-link to="/type"></router-link></span>
				<img src="../../assets/img/tittle.png" alt=""></h2>
			<div class="nav">
				<!-- <ul>
					<li>精选</li>
					<li>家电</li>
					<li>酷机</li>
					<li>超市</li>
					<li>穿搭</li>
					<li>置家</li>
					<li>育儿</li>
					<li>办公</li>
					<li>运动</li>
					<li>出行</li>
				</ul> -->
			</div>

		</header>
		<main>
			<!-- 商品推荐1 -->
			<div class="recommend">
				<h4>{{recTitle[0]}}</h4>
				<ul>
					<li  v-for="(v,i) in rec1" :key="i">
						<div class="img">
							<img :src="v.imgsrc" alt="" />
						</div>						
						<span>{{v.span}}</span>
					</li>
				</ul>
			</div>
			<!--  商品展示1-->
			<div class="display">
				<div class="dpl-sup" v-for="(v,i) in dplSup" :key="i">
					<img :src="v.imgsrc" alt="" />
					<span><p>{{v.span}}</p></span>
					<i>10商品</i>
				</div>
				<ul class="dpl-sub">
					<li  v-for="(v,i) in dplSub" :key="i">
						<div class="img">
							<img :src="v.imgsrc" alt="" />
						</div>						
						<p>{{v.p}}</p>
						<span>{{v.span}}</span>
					</li>
				</ul>
			</div>
			<!-- 商品推荐2 -->
			<div class="recommend">
				<h4>{{recTitle[1]}}</h4>
				<ul>
					<li  v-for="(v,i) in rec2" :key="i">
						<div class="img">
							<img :src="v.imgsrc" alt="" />
						</div>						
						<span>{{v.span}}</span>
					</li>
				</ul>
			</div>
			<!-- 商品展示2 -->
			<div class="display">
				<div class="dpl-sup" v-for="(v,i) in dplSup2" :key="i">
					<img :src="v.imgsrc" alt="" />
					<span><p>{{v.span}}</p></span>
					<i>10商品</i>
				</div>
				<ul class="dpl-sub">
					<li  v-for="(v,i) in dplSub2" :key="i">
						<div class="img">
							<img :src="v.imgsrc" alt="" />
						</div>						
						<p>{{v.p}}</p>
						<span>{{v.span}}</span>
					</li>
				</ul>
			</div>
			<!-- 商品推荐大展示 -->
			<div class="recommend"  v-for="(v,i) in bigRec" :key="i">
				<h4>{{v.bigRecTit}}</h4>
				<ul>
					<li  v-for="(v,i) in v.rec" :key="i">
						<div class="img">
							<img :src="v.imgsrc" alt="" />
						</div>						
						<span>{{v.span}}</span>
					</li>
				</ul>
			</div>
		</main>
  </div>
</template>


	

<style scoped>
	header{
		padding: 0px 20px;
		color: #fff;
		text-align: center;
	}
	header h2{
		position: relative;
	}
	header h2 img{
		width: 80px;
	}
	header h2 span{
		background: url('../../assets/img/大于.png') no-repeat;
		background-size: 71%;
		position: absolute;
		top: 13px;
		right: 250px;
		bottom: 3px;
		left: -8px;
		transform: rotate(180deg);
	}
	/* header ul{
		ba
	} */
	main{
		background: #F7F7F7;
		min-height: 1800px;
		padding: 10px 20px 5px 20px;
		box-sizing: border-box;
	}
	/*商品推荐 */
	main .recommend{
		width: 100%;
		padding: 12px 8px 5px 8px;
		box-sizing: border-box;
		background: white;
		border-radius:5px;
		margin-top: 10px;
	}
	.recommend h4{
		font-size: 16px;
		line-height: .76rem;
    	margin-bottom: .2rem
		
	}
	.recommend ul{
		display: flex;
		justify-content: space-between;
		height: auto;
		margin-top: 10px;
	}
	.recommend ul li{
		width: 32%;		
		text-align: center;
	}
	.recommend ul li img{
		display: block;
		width: 100%;
		margin: .3rem auto 0;
	}
	.recommend ul .img{
		position: relative;
	}
	.recommend ul .img::before{
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.2);	
	}
	.recommend ul li span{
		text-align: center;
	 	line-height: .5rem;
		margin: .3rem 0 .2rem;
		font-size: 12px;
		font-weight: bold;
		color: #a5a5a5;
	}

	/* 商品展示 */
	main .display{
		width:100%;
		height: auto;
		background: white;
		border-radius: 6px;
		margin-top: 10px;
		padding: 12px 8px 5px 8px;
		box-sizing: border-box;
	}
	.display .dpl-sup{
		position: relative;	
	}
	.dpl-sup::before{
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.2);
	}
	.dpl-sup::after{
		content: "";
		display: inline-block;
		position: absolute;
		bottom: -0.1rem;
		left: 50%;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 9px solid transparent;
		border-right: 9px solid transparent;
		border-bottom: 9px solid #fff;
	}
	
	.dpl-sup img{
		width: 100%;
	}
	.dpl-sup span{
		position: absolute;
		color: white;
		/* display: block; */
		bottom: 20px;
		text-align: center;
		left: 20px;
		font-size: 18px;
	}
	.dpl-sup span p{
		text-align: center;
	}
	.dpl-sup i{
		display: block;
		position: absolute;
		border: 1px solid white;
		border-radius: 5px;
		color: white;
		background: rgba(0,0,0,0.2);
		right:10px;
		top: 10px;
		width: 50px;
		font-size: 14px;
	}

	.display .dpl-sub{
		display: flex;
		justify-content: space-between;
		height: auto;
	}
	.dpl-sub li{
		width: 32%;		
		text-align: center;
	}
	.dpl-sub li img{
		display: block;
		width: 100%;
		margin: .3rem auto 0;
	}
	.dpl-sub li span{
		text-align: center;
	 	line-height: .5rem;
		margin: .3rem 0 .2rem;
		font-size: 12px;
		font-weight: bold;
		color: #a5a5a5;
	}
	.dpl-sub li .img{
		position: relative;
		margin-bottom: 10px;
	}
	.dpl-sub li .img::before{
		content: "";
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.03);	
	}
	.dpl-sub li p{
		color: #666;
		font-size: 12px;
	}
	   
	
</style>
<script>
 export default {
    data () {
      return {
		  recTitle:{},
		  rec1:{},
		  dplSup:{},
		  dplSub:{},
		  rec2:{},
		  dplSup2:{},
		  dplSub2:{},
		  bigRec:{}

		
        
      }
    },
    mounted() {
      this.$http.get('./data/menu.json')
      .then((response)=> {
		     // handle success
			 console.log(response.data);
			 this.recTitle=response.data.recTitle;
			 this.rec1=response.data.rec1;
			 this.dplSup=response.data.dplSup;
			 this.dplSub=response.data.dplSub;
			 this.rec2=response.data.rec2;
			 this.rec1=response.data.rec1;
			 this.dplSup2=response.data.dplSup2;
			 this.dplSub2=response.data.dplSub2;
			 this.bigRec=response.data.bigRec;
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