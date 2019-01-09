<template>
<div class="app-head" style="overflow:hidden;">
    <router-link :to="{path: '/'}" class="head-logo">
        <img src="@/assets/logo.png">
    </router-link>
    <span class="title">{{ title }}</span>
    <el-select class='select' v-model="game_code" placeholder="请选择gamecode" @change='chooseGameCode'>
        <el-option v-for="(item,index) in options" :key="index" :label="item" :value="index"></el-option>
    </el-select>
    <el-form :inline="true" action='/auth/logout' method="post" style="float:right;margin-right:50px">
        <el-form-item>
            <span style="line-height:90px">当前用户：{{user_name}}</span>
        </el-form-item>
        <el-form-item class="submit-logout" style="line-height:90px">
            <el-button type="info" plain native-type="submit" size="small" @click="logout">退出</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
import slimvue from 'slimvue'

export default {
    name: 'bodyTop',
    methods: {
        logout(){
            if(window.sessionStorage.getItem("defaultActive")){
                window.sessionStorage.removeItem('defaultActive');
            }
        },
        chooseGameCode(value) {
            window.location.reload();
            this.game_code = value;
            window.localStorage.setItem("game_code", value);
        },
        loadGame() {
            var games = this.options;
            for (let i in games) {
                var game_code = i
                break;
            };
            if (window.localStorage.getItem("game_code") === null || this.options[window.localStorage.getItem("game_code")] === undefined) {
                window.localStorage.setItem("game_code", game_code)
                this.game_code = game_code
            }
        }
    },
    mounted: function () {
        if ((slimvue.bridge.games) instanceof Array && (slimvue.bridge.games).length === 0) {
            // alert("kong")
            this.game_code = ''
            this.$emit('emitData', 'gameIsEmpty')
        } else {
            //alert("feikong")
            this.options = slimvue.bridge.games;
            this.loadGame();
        }
    },
    data() {
        return {
            options: '',
            game_code: (window.localStorage.getItem("game_code") == null) ? "" : window.localStorage.getItem("game_code"),
            user_name: slimvue.bridge.user_info.name ? slimvue.bridge.user_info.name : slimvue.bridge.user_info.email,
            title: slimvue.bridge.title
        }
    }
}
</script>
<style>
.app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
}

.head-logo {
    overflow: hidden;
    display: block;
    float: left;
}

.head-logo img {
    width: 50px;
    margin: 20px 20px 0 50px;
}

.app-head .title {
    font-size: 24px;
    margin-top: 30px;
    float: left;
}

.app-head .select {
    margin-left: 50px;
    margin-top: 24px;
}

.app-head .submit-logout div {
    line-height: 90px;
}

.el-select-dropdown {}
</style>
