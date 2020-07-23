<template>
    <section>
        <router-view></router-view>
        <ul class="footGuide">
            <li>
                <router-link to="/like">
                    <img src="../assets/img/157543975265772267.png" alt="">
                    <span>猜你喜欢</span>
                </router-link>
            </li>
            <li>
                <router-link to="/type">
                    <img src="../assets/img/157562573743964714.png"  alt="">
                    <span>分类</span>
                </router-link>
            </li>
            <li>
                <router-link to="/menu">
                    <img src="../assets/img/157543978244974042.png" alt="">
                    <span>必抢清单</span>
                </router-link>
            </li>
            <li>
                <router-link to="/cart">
                    <img src="../assets/img/157543979328589256.png" alt="">
                    <span>购物车</span>
                </router-link>
            </li>
            <li>
                <router-link to="/my">
                    <img src="../assets/img/157543980229048220.png" alt="">
                    <span>我的易购</span>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<style>
html{
        font-size: 24px;
    }
</style>
 
<style scoped>
   
     .footGuide{
        background: white;
        width: 100%;
        position: fixed;
        bottom: 0px;
        z-index: 99;
        list-style: none;
        flex-direction: row;
        display: flex;
        padding: 0px 20px 10px 20px;
        box-sizing: border-box;
     }
     .footGuide li{
        width: 20%;
        height: 2rem;
        background: #fff;
     }
     .footGuide li a{
        text-decoration: none;
        text-align: center;
        display: block;
     }
     .footGuide img{
        display: block;
        width: 47%;
        /* height: .96rem; */
        margin: .24rem auto 0;
     }
     .footGuide span{
        display: block;
        font-size: 0.5rem;
        line-height: .64rem;
        color: #666;
     }
    
</style>