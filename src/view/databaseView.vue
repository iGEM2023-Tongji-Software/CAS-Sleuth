<template>
<div class="bg">
    <loadingLogo v-if="isLoading"></loadingLogo>
        <div class="top-div">
            <el-row>
                <el-col :span="4">
                    <div class="result_title">search results</div>
                </el-col>
                <el-col :span="20">
                    <SearchBox @new_input="handle_new_input"></SearchBox>
                </el-col>
            </el-row>
        </div>
        <div class="result_num">
            for “<span class="green">{{ this.input }}</span>” we have <span class="green">{{ this.virus_num }}</span>
            results for you.
            <el-radio-group v-model="if_full" class="ml-4" style="position: absolute;right:20%;z-index: 9;">
                <el-radio label="1" size="small" style="color: black;" @click="selectTab(0)">simple card</el-radio>
                <el-radio label="2" size="small" style="color: black;" @click="selectTab(1)">full image</el-radio>
            </el-radio-group>
        </div>
</div>
<div class="component">
    <component :is="selectedTab" :message="id" ref="childRef"></component>
</div>

</template>

<script setup>
   import axios from 'axios';
import {onMounted, ref,shallowRef} from 'vue'
import CardPage from './databaseCard.vue';
import SearchBox from '@/components/SearchBox.vue';
import databaseResult from './databaseResult.vue';
import { useRouter } from "vue-router";
const router = new useRouter()
const childRef = ref()
const if_full=ref('2')
const index_=ref(1)

const selectedTab=shallowRef(databaseResult)
const name=ref('')
const id=ref()
const tabs=[
        {  component: CardPage },
        { component: databaseResult },
  ]

const selectTab=(index)=> {
      console.log(index)
      selectedTab.value = tabs[index].component;
      console.log(selectedTab.value)
      index_.value=index
    }

      onMounted(()=>{
        /*此处name为搜索栏传来的参数：病毒名称，使用此name进行分页查询 */
        name.value=router.currentRoute.value.query.input
        console.log('name:'+name.value)
        
      })
    
        function handle_new_input(message) {
            console.log("handle_new_input:" + message);
            name.value=message
            axios.get('http://127.0.0.1:4523/m1/3292035-0-default/virus/page', {
                name:name.value,
                pageNum:1,
                pageSize:1
            })
            .then(response => {
            // 处理成功响应
                id.value=response.data.virusResult[0].virus_id
                console.log(id.value)
            })
            .catch(error => {
            // 处理错误
            console.error(error);
            });
            if(index_.value==0){
            childRef.value.get_information()
            // childFunction.get_information()
        }
        }
</script>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg2.png');
    background-size: cover;
}
.top-div {
    position: relative;
    margin-top: 8%;
    width: 100%;
    height: 70px;
    background: linear-gradient(0deg, #91E4DC, #91E4DC),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);

}
.result_title {
//font-family: Orbitron; font-family: Arial; //font-size: 24px; font-size: 23px; line-height: 41px;
    letter-spacing: 0em;
    margin-left: 15%;
    margin-top: 7%;
}

.result_num {
    margin-left: 30px;
    margin-top: 10px;
    font-family: Arial;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
}

.green {
    color: RGB(0, 192, 175);
    font-weight: bold;
}
</style>