<template>
    <div id="type1">
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
    </div>
</template>
<script>
	export default{
		data(){
			return{
				list:{}		
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
		     console.log(response.data);
			 this.list=response.data.list;			
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
    #type1{
        /* background: red; */
        height: calc(100vh - 70px);
        overflow-y:auto;
    }
    /* div h1{
        height:100px;
        width: 100%;
        margin-bottom: 20px;
        background: pink;
    } */
     .listItem{
    	display: flex;
    	flex-wrap: wrap;
    }
    .listItem li{
    	margin-bottom: 10px;
    	margin-right: 1%;
    	width: 32%;
    	text-align: center;
    	font-size: 14px;
    }
    .listItem .pic{
    	width: 100%;
        margin: 0 auto;
    }
    .listItem .pic img{
        width: 80%;
    }
    .listItem p{
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	font-size: 10px;
		color: #666;
    }
    .current{
    	margin: 10px 0 10px;
    	font-size: 12px;
    	font-weight: 600;
    }
    .product{
    	margin-bottom: 20px;
    	border-bottom: 1px solid #dedede;
    }


	.router-link-exact-active{
		border-left: 3px solid red;
		background: white;
		color: black;
	}
    /* img{
    	margin-top: 20px;
    }
   .foright{
    	float: right;
    	color: #98989F;
    	font-weight: normal;
	} */

</style>