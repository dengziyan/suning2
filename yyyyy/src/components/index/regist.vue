<template>
    <div>
        <header>  
            <h4>企业注册</h4>                   
            <span><img src="../../assets/img/back.png" alt=""></span>
            <i>联系客服</i>
        </header>
        <main>
            <!--手机号码输入框  -->
            <div class="phoNum">
                <label>手机号</label>
                <input type="text" placeholder="请输入手机号">
            </div>
            <!-- 滑动条 -->
            <div class="slipe">
                <span></span>
                <p>按住滑块拖到最右边</p>
            </div>
            <!-- 短信 -->
            <div class="msg">
                <div class="msgL">
                    <label>短信验证码</label>
                    <input type="text">
                </div>               
                <button>获取验证码</button>
            </div>
            <!-- 密码 -->
            <div class="phoNum code">
                <label>设置密码</label>
                <input type="text" placeholder="6-20位数字+字母或符号组合">
                <span></span>
            </div>
            <!-- 条例 -->
            <div class="rule">
                <i></i>
                <p>同意<span>《苏宁会员章程》《易付宝协议》《苏宁隐私政策》《易付宝隐私政策》</span></p>
            </div>
            <!-- 下一步 -->
            <div class="btn">
                <button>下一步</button>
                <button>个人用户注册</button>
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
        padding: 10px 10px;
        text-align: center;
        position: relative;
    }
    header h4{
        font-size: 16px;
        font-weight: normal;
    }
    header span{
        position: absolute;
        width: 30px;
        top: 5px;
        left: 10px;
    }
    header img{
        width: 100%;
    }
    header i{
        display: block;
        position: absolute;
        right:10px;
        top:11px;
        font-size: 12px;
    }
    main{
        padding: 40px 20px;
    }
    /* 手机号码输入框 */
    main .phoNum{
        border-bottom: 1px solid #ccc;
        padding-bottom: 8px;
    } 
    .phoNum label{
        font-size: 14px;
        color:#666666 ;
    }
    .phoNum input{
        border: none;
        
    }
    .phoNum input::-webkit-input-placeholder{
        color: #ccc;
        font-size: 14px;
        padding-left: 30px;
    }
    /* 滑动条 */
    main .slipe{
        width: 100%;
        line-height: 42px;
        margin-top:10px;
        background: #E8E8E8;
        position: relative;
        text-align: center;
        color:#999999;
        font-size: 13px;
    }
    .slipe span{
        background: url('../../assets/img/滑动.png') -28px -200px;
        width: 42px;
        height: 42px;
        top:0px;
        left:0px;
        position: absolute;

    }
    /* 短信 */
    main .msg{
        height: 42px;
        box-sizing: border-box;
        margin-top:10px;
        margin-bottom: 10px;
    } 
    .msg .msgL{
         height: 40px;
        width: 68%;
        margin-right: 4%;
        float: left;
        border: none;
        border-bottom:1px solid #ECECEC;
    }
    .msg input{
        width: 150px;
        border: none;
    }
    .msg label{
        font-size: 14px;
        color:#666666 ;
    }
    .msg button{
        border:none;
        width:28%;
        height: 40px;
        line-height: 42px;
        text-align: center;
        border: 1px solid #f50;
        border-radius: 30px;
        color:#f50;
        background: white;
        font-size:52%;
    }
    .code{
        position: relative;
    }
    .code input{
        width: 250px;
    }
    .code span{
        width: 21px;
        height: 16px;
        position:absolute;
        background: url('../../assets/img/show.png') no-repeat;
        top:10px;
        right:0px;
        background-size: 90%;
    }
    /* 条例 */
    main .rule{
        position: relative;
        margin-top: 10px;
        padding: 0px 20px;
    }
   .rule i{
        position: absolute;
        width: 21px;
        height: 16px;
        background: url('../../assets/img/unchecked.png') no-repeat;
        top:0px;
        left:0px;
        background-size: 70%;
    }
   .rule p{
        font-size: 12px;
        color: #999;
    }
    .rule p span{
        color:#101010;
    }
    main .btn button:nth-child(1){
        margin-top: 20px;
        height: 45px;
        border-radius: 30px;
        border: none;
        width: 100%;
        color: white;
        font-size: 16px;
        text-align: center;
        background-image: 
            linear-gradient(270deg,#f50 0,#ff8f00 100%);
    }
    main .btn button:nth-child(2){
        width: 100%;
        border: none;

        height: 45px;
        font-size: 12px;
        text-align: center;
        background: none;
    }
    
    
</style>