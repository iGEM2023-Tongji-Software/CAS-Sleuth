<template>
<!-- <div class="background">
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
        </div>
</div> -->
    <!-- <el-row :gutter="10" style="position: relative;top:20px;left:1% ;z-index: 3;width: 100%;">
        <el-col :span="2">
            <el-button class="icon-project">
            </el-button>
        </el-col>
        <el-col :span="1">
            <el-button class="icon-home" @click="home_click">
            </el-button>
        </el-col >
        <el-col :span="1">
            <el-button class="icon-star">
            </el-button>
        </el-col>
        <el-col :span="1">
            <el-button class="icon-profile">
            </el-button>
        </el-col>
        <el-col :span="1">
            <el-button class="icon-chat">
            </el-button>
        </el-col>
        <el-col :span="4">
            <el-button class="viruscuffs">
            </el-button>
        </el-col>
        <el-col :span="4">
            <el-row>
                <el-button class="database-2">
                </el-button>
            </el-row>
            <el-row>
                <el-button class="software-2">
                </el-button>
            </el-row>
        </el-col>
    </el-row>
    <div class="search-blank">
        <el-text style="position: absolute; top:30%;left:5%;font-size: 25px;">search results</el-text>
        <el-button class="icon-zoom" >
        <div class="rounded-input">
            <el-input v-model="virus_name" placeholder="Please input" />
        </div>
        <el-button @click="GotoResult" style="position: absolute;left:700px;border-radius: 25px;color:white;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" color="#6AD3DC">Go</el-button>
        <el-button style="position: absolute;left:750px;border-radius: 25px;color:white;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" color="#6AD3DC">Clear</el-button>
        </el-button>
    </div> -->
        
    <div>
        <el-card class="card-head">
            <el-button class="download"></el-button>
            <el-radio-group v-model="radio1" class="ml-4" style="position: absolute;left:20%;top:37%;">
                <el-radio label="1" size="small" style="color: white;">all</el-radio>
                <el-radio label="2" size="small" style="color: white;">select</el-radio>
            </el-radio-group>
            <el-dropdown style="position: absolute;left:70%;top:40%;">
                <el-button type="primary" style="width: 150px;height: 27px;border-radius: 20px;background-color: white;color:#384FB9;">
                Dropdown List<el-icon class="icon-droplist"></el-icon>
                </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="v in list" :key="v">Action {{ v }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
            
        </el-card>
        <div style="z-index: 9;position: absolute;height: 100%;">
                <el-checkbox-group v-model="radio1">
                <el-checkbox label="1" style="position: absolute;top:45%;left:210px;width:150px;height:50px;background-color:#00ACC6;border-radius: 30px;color:white;" border>Basic</el-checkbox>
                <el-checkbox label="2" style="position: absolute;top:110%;left:210px;width:150px;height:50px;background-color:#00ACC6;border-radius: 30px;color:white;" border>grna_info</el-checkbox>
                </el-checkbox-group>
                
            </div>
        <el-card class="card-content-bg">
            <el-card style="position: absolute;left:5%; background-color: white;width: 90%;height: 500px;opacity: 1;">
                
                <el-text style="font-family: 'Arial';z-index: 10; position: absolute;top:30%;left: 15%;font-size: 16px;">
                    Accession:
                </el-text>
                <el-text style="font-family: 'Arial';z-index: 10; position: absolute;top:29%;left: 30%;font-size: 24px;font-weight: bold;">
                    {{ detail.accession }}
                </el-text>
                <br>
                <el-text style="font-family: 'Arial';z-index: 10; position: absolute;top:37%;left: 15%;font-size: 16px;">
                    Organism_Name:
                </el-text>
                <el-text style="font-family: 'Arial';z-index: 10; position: absolute;top:36%;left: 30%;font-size: 24px;font-weight: bold;">
                    {{detail.organism_name}}
                </el-text>
                <el-divider style="z-index: 10;position: absolute;top: 40%;width: 80%;left:10%;" />
                <div style="position: absolute;top:50%;left:15%;width:70%;">
                <el-row :gatter="20">
                    <el-col :span="3">Isolate：</el-col>
                    <el-col :span="8" style="font-weight: bold; font-size: large;">{{ detail.isolate }}</el-col>
                    <el-col :span="4">Segment：</el-col>
                    <el-col :span="4" style="font-weight: bold; font-size: large;">{{detail.segment}}</el-col>
                </el-row>
                <br>
                <el-row :gatter="20">
                    <el-col :span="3">Species：</el-col>
                    <el-col :span="8" style="font-weight: bold; font-size: large;">{{ detail.species}}</el-col>
                    <el-col :span="4">Geo_Location：</el-col>
                    <el-col :span="4" style="font-weight: bold; font-size: large;">{{detail.geo_location}}</el-col>
                </el-row>
                <br>
                <el-row :gatter="20">
                    <el-col :span="3">Family：</el-col>
                    <el-col :span="8" style="font-weight: bold; font-size: large;">{{ detail.family}}</el-col>
                    <el-col :span="4">Host：</el-col>
                    <el-col :span="4" style="font-weight: bold; font-size: large;">{{detail.host}}</el-col>
                </el-row>
                <br>
                <el-row :gatter="20">
                    <el-col :span="3">Length：</el-col>
                    <el-col :span="8" style="font-weight: bold; font-size: large;">{{ detail.length}}</el-col>
                    <el-col :span="4">Type：</el-col>
                    <el-col :span="4" style="font-weight: bold; font-size: large;">DNA Virus</el-col>
                </el-row>

            </div>
            </el-card>
            <el-card style="position: absolute;left:5%;top:22% ;background-color: white;width: 90%;height: 80%;opacity: 1;">
                <el-text style="position: absolute;top:2%;left:10%;">
                    description of the green one in the chart description of the green oen one in the chart
                </el-text>
                <div style="position:absolute;background: linear-gradient(#EEEEEE, #EDEDED00);top:5%;left:10%;width:80%;height: 80%;border-radius: 60px;">
                    <div style="position: absolute;background-color: #5EC7D8;width: 50%;height: 50px; border-radius: 20px;top:7%;left:23%;z-index: 15;">
                        <el-text style="position: absolute; top: 30%;left: 42%;font-family: 'Arial';color: white;font-size: large;">sequence</el-text>
                    </div>
                    <div style="position: absolute;background: linear-gradient(#FFFFFF, #EDEDED00);top:8%;left:5%;width:90%;height: 70%;border-radius: 30px;">
                        <el-text style="position: absolute;width: 90%;top:6%;left:5%;font-family: Arial;word-wrap: break-word;">
                            The colors here represent the scores of these gRNAs. The deeper the color, the higher the score of the gRNA. And each gRNA's index is indicated on the display bar. Clicking on an index will take you to the corresponding position in the sequence.
                        </el-text>
                        <br>
                        <div style="position:absolute;top: 20%;left: 5%; border-top:5px solid #5CD2C7 ;width: 90%;height: 5px;">
                            <div v-for="(v,index) in cas_result_order_by_percentage" :key="v.index" :style="{left:v.percentage*700 + 'px'}" class="spacer-div">
                                <div v-if="index%2==0">
                                    <el-button style="background-color:#6FD7CE ;border-radius: 20px;color:black;position:absolute;top:-65px;left:-17px;height: 20px;width: 40px;font-size: 5px;">{{ v.index }}</el-button>
                                    <img src="../assets/pictures/Polygon.png" style="position: absolute;top:-60px;left:-8px;height: 50px;width: 20px;">
                                </div>
                                <div v-else>
                                    <el-button style="background-color:#6FD7CE ;border-radius: 20px;color:black;position:absolute;top:65px;left:-17px;height: 20px;width: 40px;font-size: 5px;">{{ v.index }}</el-button>
                                    <img src="../assets/pictures/Polygon2.png" style="position: absolute;top:30px;left:-8px;height: 50px;width: 20px;">
                                </div>
                            </div>
                        </div>
                        <div style="border: 2px solid black;
                                    position: absolute;
                                    top:33%;width:90%;
                                    left:5%;
                                    height: 10%;
                                    border-radius: 20px;">
                            <div class="scroller">
                                <el-text class="scroller-text">
                                    <span v-for="v in cas_result_order_by_percentage" :key="v.index">
                                        <span style="color:rgba(136, 136, 136, 1)">{{ v.before_seq }}</span>
                                        <span style="color:rgba(56, 79, 185, 1); font-weight: bold;">{{v.show_seq}}</span>
                                        <span style="color:rgba(136, 136, 136, 1)">{{ v.after_seq }}</span>
                                    </span>
                                </el-text>
                            </div>
                        </div>
                    </div>
                    <div style="position: absolute;background-color: #5EC7D8;width: 50%;height: 50px; border-radius: 20px;top:45%;left:23%;z-index: 15;">
                        <el-text style="position: absolute; top: 30%;left: 42%;font-family: 'Arial';color: white;font-size: large;">grna_info</el-text>
                    </div>
                    <div style="position: absolute;background: linear-gradient(#FFFFFF, #EDEDED00);top:46%;left:5%;width:90%;height: 60%;border-radius: 30px;">
                        <el-text style="position: absolute;width: 90%;top:5%;left:5%;font-family: Arial;word-wrap: break-word;">
                            The "GRNA" provided here refers to a segment that pairs complementarily with the viral sequence on the virus nucleic acid sequence, 
                            which is a section of the viral sequence itself rather than the actual "grna." 
                            The actual "grna" is an RNA sequence that complements and pairs with it.
                        </el-text>
                        <div style="position: absolute;width: 90%;height: 5%;background-color: #5EC7D8;top:12%;left:5%;border-radius:30px ;">
                        <el-text style="position: absolute;color: white;left: 5%;top:40%">GRNA_Number</el-text>
                        <el-text style="position: absolute;color: white;left:25%;top:40%">Score</el-text>
                        <el-text style="position: absolute;color: white;left:40%;top:40%">GRNA_sequence</el-text>
                        <el-text style="position: absolute;color: white;left:85%;top:40%">Index</el-text>
                        </div>
                        
                            <div  v-for="v in cas_result_order" :key="v.index" class="sequence" :style="{opacity:1.2-v.order/10}">
                                <el-text style="position: absolute;color: white;left: 5%;top:40%">{{ v.order }}</el-text>
                                <el-text style="position: absolute;color: white;left:25%;top:40%">{{ v.score }}</el-text>
                                <el-text style="position: absolute;color: white;left:40%;top:40%">{{ v.show_seq }}</el-text>
                                <el-text style="position: absolute;color: white;left:85%;top:40%">{{ v.index }}</el-text>
                            </div>
                    </div>
                </div>
            </el-card>
        </el-card>
    </div>

</template>

<script setup>
   //import SearchBox from "@/components/SearchBox.vue";
   import { onMounted, ref,defineProps,defineExpose } from 'vue'
   //import { ArrowDown } from '@element-plus/icons-vue'
   //const virus_name = ref('')
   import axios from 'axios';
   const radio1=ref(['2'])
   const virus_id=ref(111)
   const detail=ref({
    isolate: '',
    geo_location: "",
    species: "",
    segment: '',
    length: 123,
    host: '',
    organism_name: "Giant panda associated gemycircularvirus",
    accession: "NC_075336.1",
    family: "Genomoviridae",
   })
   const cas_result=ref([])
   const cas_result_order_by_percentage=ref([])
   const cas_result_order=ref([])
   const list=ref(['1','2','3','4','5'])
   const props=defineProps({
    message:String,
   })

   onMounted(()=>{
    if(props.message!=null){
        virus_id.value=props.message
        console.log("已接受：id："+props.message)
    }

    get_information();
   })
     
    const get_information=()=>{
    console.log("chufale")
    const data={virus_id:virus_id.value}
    axios.get('http://127.0.0.1:4523/m1/3292035-0-default/virus/detail', data)
      .then(response => {
        // 处理成功响应
        console.log(response.data.accession);
        detail.value.accession=response.data.accession
        detail.value.geo_location=response.data.geo_location
        detail.value.species=response.data.species
        detail.value.segment=response.data.segment
        detail.value.length=response.data.length
        detail.value.host=response.data.host
        detail.value.organism_name=response.data.organism_name
        detail.value.accession=response.data.accession
        detail.value.family=response.data.family
      })
      .catch(error => {
        // 处理错误
        console.error(error);
      });

      const cas_data={
        type:detail.value.type,
        virus_id:virus_id
      }
      axios.get('http://127.0.0.1:4523/m1/3292035-0-default/cas/findAllSeq', cas_data)
      .then(response => {
        // 处理成功响应
        cas_result.value=response.data.cas_result
        console.log(cas_result.value.length)
        cas_result_order_by_percentage.value=JSON.parse(JSON.stringify(cas_result.value));
        cas_result_order.value=JSON.parse(JSON.stringify(cas_result.value));
        cas_result_order_by_percentage.value.sort((a, b) => a.index - b.index)
        cas_result_order.value.sort((a, b) => a.order - b.order)
      })
      .catch(error => {
        // 处理错误
        console.error(error);
      });
     }
    
     defineExpose({get_information})

//    function handle_new_input(message) {
//             console.log("handle_new_input:" + message);
//             this.input = message;
//         }
</script>

<style scoped>
.background{
    position:absolute;
    background-image: url('../assets/pictures/searchpage.jpg');
    background-size: cover;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
}
.icon-home{
    background-image: url('../assets/pictures/icon_home.jpg');
    background-size: cover;
    height: 40px;
    width: 40px;
    position:absolute;
    border: none;
}
.icon-home:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
  .icon-home:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-star{
    position:absolute;
    background-image: url('../assets/pictures/icon_star.jpg');
    background-size: cover;
    background-position: center;
    height: 40px;
    width: 40px;
    border: none;
}
.icon-star:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
  .icon-star:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-profile{
    position:absolute;
    background-image: url('../assets/pictures/icon_profile.jpg');
    background-size: cover;
    height: 40px;
    width: 40px;
    border: none;
}
.icon-profile:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
  .icon-profile:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-chat{
    position:absolute;
    background-image: url('../assets/pictures/icon_chat.jpg');
    background-size: cover;
    height: 40px;
    width: 40px;
    border: none;
}
.icon-chat:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
  .icon-chat:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-project{
    background-image: url('../assets/pictures/project_icon2.jpg');
    background-size: cover;
    position: absolute;
    top: -10px;
    height: 50px;
    width: 100px;
    border: none;
}
.viruscuffs{
    background-image: url('../assets/pictures/viruscuffs.jpg');
    background-size: cover;
    position: absolute;
    height: 60px;
    width: 100px;
    top:-10px;
    left:80%;
    border: none;
}
.database-2{
    background-image: url('../assets/pictures/database2.jpg');
    background-size: cover;
    position: absolute;
    border: none;
    left:280%;
    height: 20px;
    width: 150px;
}
.software-2{
    background-image: url('../assets/pictures/software2.jpg');
    background-size: cover;
    position: absolute;
    border: none;
    top:30px;
    left:280%;
    height: 20px;
    width: 150px;
}
.search-blank{
    background-color: rgba(145, 228, 220, 1);
    z-index: 4;
    position:relative;
    top:100px;
    height: 80px;
    width:100%;
}
.icon-zoom{
    background-image: url('../assets/pictures/search-icon.png');
    background-size: cover;
    position: absolute;
    height: 50px;
    width: 50px;
    left:25%;
    top:30%;
    border: none;
}

.icon-droplist{
    background-image: url('../assets/pictures/icon_outline.jpg');
    background-size: cover;
    left:10%;
    top:10%;
}
.rounded-input{
    height: 35px;
    width: 600px;
    position: absolute;
    left: 80px;
}
:deep(.el-input__wrapper) {
    background-color: rgba(196, 244, 225, 1);
    border-radius: 25px; /* 调整圆角半径 */
    border: 0;
    box-shadow: 0 0 0 0px;
}

.card-head{
    background-color: #5EC7D8;
    border-radius: 25px; /* 调整圆角半径 */
    position: absolute;
    top:35%;
    left:10%;
    height: 15%;
    width: 80%;
    z-index: 7;
}
.card-content-bg{
    background-color: rgba(239, 239, 239,0.6);
    position: absolute;
    top:35%;
    left:10%;
    width: 80%;
    height: 350%;
    z-index: 6;
}

.download{
    background-image: url('../assets/pictures/download.png');
    background-size: cover;
    position: absolute;
    height: 30px;
    width: 150px;
    left:5%;
    top:30%;
    border: none;
}

.spacer-div {
  position: absolute;
  width: 5px;
  height: 20px;
  top:-10px;
  background: linear-gradient(#384FB9, #384FB900);
  /* 添加其他样式属性，如边框、圆角等 */
}

.scroller{
    position: absolute;
    top:3%;
    width:95%;
    left:3%;
    height: 90%;
    overflow-y: auto;
}
.scroller::-webkit-scrollbar{
    width: 7px;
    height: 5px;
    left:5%;
}
.scroller::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* 设置滚动条轨道的背景色 */ 
  width: 10px;
  border-radius: 20px; /* 设置轨道的圆角 */
}

/* 滚动条滑块 */
.scroller::-webkit-scrollbar-thumb {
  background-color: #00C0B0; /* 设置滚动条滑块的背景色 */
  width: 10px;
  border-radius: 20px; /* 设置滑块的圆角 */
}

/* 鼠标悬停在滑块上时的样式 */
.scroller::-webkit-scrollbar-thumb:hover {
  background-color: #00C0B0; /* 设置滚动条滑块的背景色 */
}
.sequence{
    position: relative;  
    z-index: 15;
    width: 90%;
    height: 8%;
    background-color: #00C0AFE5;
    left:5%;
    top:17%;
    border-radius:30px;
    margin-top: 15px;
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
</style>