       

<template id="index">
    <section>

        <header>
			<div class="left">
				<h4>商品分类</h4>
			</div>
			
			<div class="right">
				<span></span>
				<a href="https://m.suning.com/search.html?defaultWord=爆款电脑限量5折抢">爆款电脑限量5折抢</a>
			</div>			
		</header>
        <main>     
            <div class="left">
                 <ul>
                    <li v-for="(v,i) in menu" :key="i">
                        <router-link :to="v.path">{{v.title}}</router-link>
                    </li>       
                </ul>
            </div>       
           
            <router-view></router-view>
        </main>        
    </section>
</template>


<script>
    
</script> 

<script>
   export default {
    data () {
      return {
      	menu:{}
      }
    },
    mounted() {
      this.$http.get('./data/type.json')
      .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.menu=response.data.menu;
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
		background: white;
		display: flex;
		flex-direction: row;
		padding: 0px 10px 0px 0px;
	 	box-sizing: border-box;
        width: 100%;
	}
	header .left{
		display: block;
		width: 3.6rem;
		height: 100%;		
		line-height: 2.16rem;
		text-align: center;
        width: 30%;
	}
	header .left h4{
		font-size: .7rem;
		font-weight: normal;
	}	
	header .right{
		width: 11.4rem;
		height: 2.16rem;
		position: relative;
        width: 70%;
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
    main {
        /* padding-top: 76px; */
        padding: 60px 0px 10px 0px;
	 	box-sizing: border-box;
    }
    main>div{
        float: left;
        width: 74%;
    }
    main .left{
         /* border-radius: 0px 10px 0px 0px; */
        width: 26%;
        float: left;
        height: calc(100vh - 70px);
        overflow-y:auto;
    }
    main ul{
       
        background: #F9F9F9;
        /* position: relative; */
        /* left: 0px; */
    }
    main ul li{
        background: #F9F9F9;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
    }
    main ul li a{
        font-size: 12px;
        color: #666;
    }
   .router-link-exact-active{
		border-left: 3px solid #FFCC00;
		background: white;
		color: black;
		padding: 10px ;
	}

</style>