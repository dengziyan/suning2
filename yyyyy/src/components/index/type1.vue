<template>
  <div id="list">
    	<header>
			<div class="left">
				<h4>商品分类</h4>
			</div>
			
			<div class="right">
				<span></span>
				<a href="https://m.suning.com/search.html?defaultWord=爆款电脑限量5折抢">爆款电脑限量5折抢</a>
			</div>			
		</header>
		<div class="listTable">
			<mt-navbar v-model="selected">
				<div class="aa">
				  <mt-tab-item id="1">热门推荐</mt-tab-item>
				  <mt-tab-item id="2">手机数码</mt-tab-item>
				  <mt-tab-item id="3">大家电</mt-tab-item>
				  <mt-tab-item id="4">电脑办公</mt-tab-item>
				  <mt-tab-item id="5">厨卫大电</mt-tab-item>
				  <mt-tab-item id="6">生活家电</mt-tab-item>
				  <mt-tab-item id="7">食品酒水</mt-tab-item>
				  <mt-tab-item id="8">个人护理</mt-tab-item>
				  <mt-tab-item id="9">美妆护肤</mt-tab-item>
				  <mt-tab-item id="10">奶粉尿裤</mt-tab-item>
				  <mt-tab-item id="11">苏宁国际</mt-tab-item>
				  <mt-tab-item id="12">珠宝首饰</mt-tab-item>
				  <mt-tab-item id="13">品质男装</mt-tab-item>
				  <mt-tab-item id="14">品质男鞋</mt-tab-item>
				  <mt-tab-item id="15">流行女装</mt-tab-item>
				  <mt-tab-item id="16">精品女鞋</mt-tab-item>
				  <mt-tab-item id="17">运动户外</mt-tab-item>
				  <mt-tab-item id="18">居家生活</mt-tab-item>
				  <mt-tab-item id="19">家居家纺</mt-tab-item>
				  <mt-tab-item id="20">家装建材</mt-tab-item>
				  <mt-tab-item id="21">厨具水具</mt-tab-item>
				</div>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	<div class="product" v-for="(v,i) in list" :key="i">
			  		<p class="current">{{v.title}}</p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
					    	<div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			  	<!-- <img src="../../assets/img/15422683498111.jpg" class="img"/> -->
			  	<div class="product" v-for="(v,i) in list2" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
					    	<div class="pic">
						       <img :src="a.imgSrc"/>					    		
					    	</div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <div class="product" v-for="(v,i) in list3" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="4">
			   	<!-- <img src="../../assets/img/15423692251976.jpg" class="img"/> -->
			    <div class="product" v-for="(v,i) in list4" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="5">
			    <div class="product" v-for="(v,i) in list5" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="6">
			    <div class="product" v-for="(v,i) in list6" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="7">
			    <div class="product" v-for="(v,i) in list7" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="8">
			    <div class="product" v-for="(v,i) in list8" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="9">
			    <div class="product" v-for="(v,i) in list9" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="10">
			    <div class="product" v-for="(v,i) in list10" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="11">
			    <div class="product" v-for="(v,i) in list11" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="12">
			    <div class="product" v-for="(v,i) in list12" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="13">
			    <div class="product" v-for="(v,i) in list13" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="14">
			    <div class="product" v-for="(v,i) in list14" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="15">
			    <div class="product" v-for="(v,i) in list15" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="16">
			    <div class="product" v-for="(v,i) in list16" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="17">
			    <div class="product" v-for="(v,i) in list17" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="18">
			    <div class="product" v-for="(v,i) in list18" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="19">
			    <div class="product" v-for="(v,i) in list19" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="20">
			    <div class="product" v-for="(v,i) in list20" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="21">
			    <div class="product" v-for="(v,i) in list21" :key="i">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="(a,i) in v.info" :key="i">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:{},
				list2:{},
				list3:{},
				list4:{},
				list5:{},
				list6:{},
				list7:{},
				list8:{},
				list9:{},
				list10:{},
				list11:{},
				list12:{},
				list13:{},
				list14:{},
				list15:{},
				list16:{},
				list17:{},
				list18:{},
				list19:{},
				list20:{},
				list21:{},
				selected:"1"
		
			}
		},
		methods:{
			forward(){
				this.$router.push('/recommend');
			}
		},
		 mounted(){
		 	
		   this.$http.get('./data/type.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
			 this.list=response.data.list;
			console.log(1111111111111111111);
		     this.list2=response.data.list2;
		     this.list3=response.data.list3;
		     this.list4=response.data.list4;
		     this.list5=response.data.list5;
		     this.list6=response.data.list6;
		     this.list7=response.data.list7;
		     this.list8=response.data.list8;
		     this.list9=response.data.list9;
		     this.list10=response.data.list10;
		     this.list11=response.data.list11;
		     this.list12=response.data.list12;
		     this.list13=response.data.list13;
		     this.list14=response.data.list14;
		     this.list15=response.data.list15;
		     this.list16=response.data.list16;
		     this.list17=response.data.list17;
		     this.list18=response.data.list18;
		     this.list19=response.data.list19;
		     this.list20=response.data.list20;
		     this.list21=response.data.list21;
		     this.list22=response.data.list22;
		     this.list23=response.data.list23;
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

<style scoped>
	html{
		font-size: 24px;
	}
	header{
		position: fixed;
		z-index: 99;
		background: #F7F7F7;
		display: flex;
		flex-direction: row;
		padding: 10px 20px 10px 20px;
	 	box-sizing: border-box;
	}
	header .left{
		display: block;
		width: 3.6rem;
		height: 100%;		
		line-height: 2.16rem;
		text-align: center;
	}
	header .left h4{
		font-size: .7rem;
		font-weight: normal;
	}
	
	
	header .right{
		width: 11.4rem;
		height: 2.16rem;
		position: relative;
	}
	header .right span{
		position: absolute;
		 width: .72rem;
	    height: .72rem;
	    top: 17px;
	    left: 10px;
		background: url('../../assets/img/下载.png') no-repeat;
		background-size: .72rem .72rem;
	}
	header .right a{
		display: block;
		height: 1.18rem;
		padding-left: 1.32rem;
		background: url(/project/asnnode/asn/m/css/img/search-icon.png) .36rem .28rem/.72rem .72rem no-repeat #f7f7f7;
		border-radius: 0.64rem;
		margin: .44rem auto;
		font-size: .56rem;
		line-height: 1.28rem;
		color: #999;
	}
	
	#list{
		background: #f3f4f5;
	}
	#list img{
		width: 100%;
	}
	
	#list .aa{
		height: 520px;
	}
	#list .listTable{
		display: flex;
		/* margin-top: 114px; */
	}
	#list .mint-navbar{
		position: fixed;
		left: 0;
		display: block;
		width: 22%;  
		overflow: auto;
	}
	#list .mint-tab-item{
		display: block;
		background: #f3f4f5;
	}
	#list .mint-tab-container{
		width: 78%;
		margin-left: 22%;
		padding-left: 5%; 
		padding-right: 5%;
		background: white;
		box-sizing: border-box;
	}
	#list .mint-navbar .mint-tab-item.is-selected {
	    border-left: 4px solid #E80080;
	    border-bottom: 0;
	    color: #222;
	    margin-bottom: -3px;
	    background: white;
    }
    #list .mint-tab-item-label{
    	font-size: 16px;
    }
    #list .listItem{
    	display: flex;
    	flex-wrap: wrap;
    }
    #list .listItem li{
    	margin-bottom: 30px;
    	margin-right: 1%;
    	width: 32%;
    	text-align: center;
    	font-size: 14px;
    }
    #list .listItem .pic{
    	width: 83%;
    	margin: 0 auto;
    }
    #list .listItem p{
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	font-size: .5rem;
    }
    #list .current{
    	margin: 20px 0 25px;
    	font-size: 14px;
    	font-weight: 600;
    }
    #list .product{
    	margin-bottom: 20px;
    	border-bottom: 1px solid #dedede;
    }
    #list .img{
    	margin-top: 20px;
    }
    #list .foright{
    	float: right;
    	color: #98989F;
    	font-weight: normal;
	}
	.mint-tab-container-item{
		/* display: block !important; */
	}

</style>
