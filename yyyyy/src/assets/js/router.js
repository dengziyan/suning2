//import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../../components/index.vue';
import like from '../../components/index/like.vue'
import type from '../../components/index/type.vue'
import menu from '../../components/index/menu.vue'
import cart from '../../components/index/cart.vue'
import my from '../../components/index/my.vue'
import regist from '../../components/index/regist.vue'
import type1 from '../../components/detail/type1.vue'
import type2 from '../../components/detail/type2.vue'
import type3 from '../../components/detail/type3.vue'
import type4 from '../../components/detail/type4.vue'
//import details from '../../components/product/details.vue';
//Vue.use(VueRouter)

export default new VueRouter({
                routes:[
                    {
                        path:'/like',
                        component:index,
                        children:[
                            {
                                path:'/like',
                                component:like
                            },
                            {
                                path:'/type',
                                component:type,
                                children:[
                                    {
                                        path:'/type1',
                                        component:type1
                                    },
                                    {
                                        path:'/type2',
                                        component:type2
                                    },
                                    {
                                        path:'/type3',
                                        component:type3
                                    }
                                ],
                                redirect:'/type1'
                            },
                            {
                                path:'/menu',
                                component:menu
                            },
                             {
                                path:'/cart',
                                component:cart
                            }
                        ] ,
                        redirect:'/like'   
                    },
                    {
                        path:'/my',
                        component:my,
                        
                    },
                    {
                        path:'/regist',
                        component:regist
                    },
                    {
                        path:'/*',
                        redirect:'/like'
                    },
                    
                ]
            })