<template>
 <div class="app-cart">
<div class="mui-card">
    <div class="mui-card-header"><h3>购物车</h3></div>
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							{{item.name}}
							<p class='mui-ellipsis'>{{item.price}}
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="cardSub" :data-id="item.id">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="item.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="cardAdd" :data-id="item.id">+</button>
				</div>
                            
                            </p>
						</div>
					</a>
				</li>
                </ul>
           
        </div>
    </div>
    <div class="mui-card-footer">小计：{{getSubTotal}}</div>
    </div>
</div>


</template>
<script>
    export default{
        created(){
            this.getList();
        },
        computed:{
            getSubTotal:function(){
                var sum=0;
                for(var item of this.list){
                    sum+=item.price*item.count;
                }
                return sum;
            }
        },
        data(){
            return{
                list:[]
            }
        },
        methods:{
            updateItemCount(id,count){
                var url="http://127.0.0.1:3000/";
                    url+="updateCart?id="+id;
                    url+="&count="+count;
                this.axios.get(url).then(result=>{
                    console.log(result);
                });
            },
            cardSub(e){
                //1.获取当前按钮绑定购物车id
                var id=e.target.dataset.id;
                //2.创建循环购物车数组内容、
                for(var item of this.list){
                    //3.判断当前元素是否与元素id
                    if(item.id==id &&   item.count>1){
                        //4.修改数据
                        item.count--;
                        //同步数据
                        this.updateItemCount(item.id,item.count);
                        break;
                    }
                }
            },
            cardAdd(e){
                //1.获取当前按钮绑定购物车id
                var id=e.target.dataset.id
                //2.创建循环购物车数组内容、
                for(var item of this.list){
                    //3.判断当前元素是否与元素id
                    if(item.id==id){
                        //4.修改数据
                        item.count++;
                        //同步数据
                        this.updateItemCount(item.id,item.count);
                        break;
                    }
                }
            },
            getList(){
                var url="http://127.0.0.1:3000/";
                url+="getCartList";
                this.axios.get(url).then(result=>{
                    this.list=result.data.data;
                })
            }
        }
    }
</script>   
<style>
   
</style>