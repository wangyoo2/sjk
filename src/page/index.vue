<template>
    <el-row class="full-container">
        <el-col :span="24" class="left-menu">
            <el-col :span="24" class="logo">
                <img src="../images/aq_03.png" />
            </el-col>
            <el-col :span="24" class="demo-menus scrollbar">
                <my-menu :menus="menus"></my-menu>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <el-col :span="24" class="top-menu">
              <el-col :span="16" class="app-name">株洲市规模化养殖场数据库</el-col>
              <el-col :span="4"><i class="el-icon-fa-user"></i> 管理员</el-col>
              <el-col :span="4"><a href="javascript:void()" @click="logout"><i class="el-icon-fa-sign-out"></i> 退出登录</a></el-col>
            </el-col>
            <el-col :span="24" class="breadcrumb-container">
                    <span class="pos">当前位置：</span>
                    <el-breadcrumb separator="/" class="breadcrumb-inner">
                        <el-breadcrumb-item v-for="item in breadcrumb" :key="item.url" :to="item.url">
                            {{item.menuName}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="content-container">
                <div class="content-wrapper">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </el-col>
        </el-col>
    </el-row>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import myMenu from 'src/components/common/menu'
export default {
    components: { myMenu },
    watch: {
        $route(v) {
            this.GET_CUR_MENU(this.$route.fullPath)
        }
    },
    created() {
        this.INIT_USERINFO()
        this.GET_CUR_MENU(this.$route.fullPath)
    },
    computed: {
        ...mapState([
            'curMenu', 'user', 'menus', 'breadcrumb'
        ])
    },
    methods: {
        ...mapMutations([
            'INIT_USERINFO', 'USER_LOGOUT', 'GET_CUR_MENU'
        ]),
        //退出登录
        logout: function() {
            this.$confirm('确认退出吗?', '提示').then(() => {
                this.USER_LOGOUT()
                this.$router.push('/login')
            })
        },
    }
}
</script>

<style lang="scss">
@import '../style/scss/index';

.full-container{
    height: 100vh;
    padding-left: 250px;
   
    .left-menu{
        width:250px;
        position:fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }
    .demo-menus{
        width:250px;
        overflow: auto;
        height: calc(100vh - 100px);
        border-right: solid 1px #e6e6e6;
        >.el-menu{
            border:none;
        }
    }
    .logo{
        background:#4ba700;
        padding-top: 10px;
        height: 100px;
        box-sizing: border-box;
        img{
            height: 80%
        }
        text-align:center;
    }
}

$color:#4ba700;
.top-menu{
  background:url('../images/aq_top_01.jpg') center;
  background-size:auto 100%;
  padding:5px 30px;
  color:#fff;
  display: flex;
  align-items: center;
  text-align:center;
  .app-name{
    height:50px;
    line-height:50px;
    font-size:24px;
    border-right:1px #fff solid;
    text-align:left;
  }
}
.main {
    flex: 1;
    .breadcrumb-container {
        padding:10px 20px;
        background: #f2f2f2;
        .pos {
            float: left;
            font-size: 13px;
            line-height: 1;
        }
    }
    .content-wrapper {
        position: relative;
        height: calc(100vh - 94px);
        overflow: auto;
        background:#fff;
        
        padding: 20px;
        overflow-y: auto;
        min-height: calc(100vh - 114px);
        box-sizing: border-box;
    }
    a{
      color:#fff;
      text-decoration: none;
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>