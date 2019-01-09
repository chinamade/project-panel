<template>
    <div v-loading.fullscreen.lock="loading">
        <body-top v-on:emitData="getData"></body-top>
        <div class="container-info" v-if="!showMainContent">
            <span>当前用户无游戏权限</span>
        </div>
        <div class="container" v-if="showMainContent">
            <el-row>
                <el-col :span="0.5" style='background: #f9fafc;'><span @click='changeDefaultActive'></span>&nbsp;&nbsp;
                </el-col>
                <el-col :span="4">
                    <div class="nav-board">
                        <el-col>
                            <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @select='handleSelect' :router="true">
                                <el-menu-item index="/dashBoard" @click="reload('/dashBoard')">
                                    <i class="icon iconfont icon-185093dashboardspeedstreamline"></i>
                                    <span slot="title" class="nav1">DashBoard</span>
                                </el-menu-item>
                            </el-menu>
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="0.5" style='background: #f9fafc;'>&nbsp;&nbsp;</el-col>
                <el-col :span="19">
                    <div class="cont-area">
                        <a id="backtop" class="btn-meau" title="返回顶部" style="display: flex;" v-show="showToTop"
                           @click="toTop">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12">
                                <path d="M9.314 0l9.313 9.314-2.12 2.121-7.193-7.192-7.193 7.192L0 9.314z" fill="#FFF"
                                      fill-rule="evenodd"></path>
                            </svg>
                        </a>
                        <keep-alive>
                            <router-view v-if="$route.meta.keepAlive"></router-view>
                        </keep-alive>
                        <router-view v-if="!$route.meta.keepAlive"></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import bodyTop from '../../components/common/top';
    import '@/assets/iconfont/iconfont.css';
    import '@/assets/iconfont/iconfont2.css';
    import {
        isDevRole,
    } from '@/common/accessDecision.js';

    export default {
        name: 'menuNav',
        data() {
            return {
                showUnity: true,
                showCocos: true,
                showIOS: true,
                showAndroid: true,
                showServer: true,
                showToTop: false,
                isDevUser: isDevRole(),
                loading: true,
                arr: [],
                arr2: [],
                arr3: [],
                arr4: [],
                arr5: [],
                showMainContent: true,
                defaultActive: (window.sessionStorage.getItem('defaultActive') == null) ? (this.$route.path !== "/" ? this.$route.path : '/dashBoard') : window.sessionStorage.getItem('defaultActive'),
            };
        },
        watch: {},
        mounted() {
            //   alert(this.defaultActive)
            if (this.isDevUser) {
                this.getVersionList("Dev");
            }
            else {
                this.getVersionList("User");
            }
            this.listenScroll();
        },
        methods: {
            listenScroll() {
                var this_ = this;
                window.onscroll = function () {
                    var scrollTop = 0;
                    if (document.documentElement && document.documentElement.scrollTop) {
                        scrollTop = document.documentElement.scrollTop;
                    }
                    else if (document.body) {
                        scrollTop = document.body.scrollTop;
                    }
                    //console.log( scrollTop)
                    if (scrollTop > 160) {
                        this_.showToTop = true;
                    }
                    else {
                        this_.showToTop = false;
                    }
                };
            },
            toTop() {
                let scrollToptimer = setInterval(function () {
                    // console.log("定时循环回到顶部")
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    var speed = top / 4;
                    if (document.body.scrollTop != 0) {
                        document.body.scrollTop -= speed;
                    }
                    else {
                        document.documentElement.scrollTop -= speed;
                    }
                    if (top == 0) {
                        clearInterval(scrollToptimer);
                    }
                }, 20);
            },
            toPath() {
                let str = this.$route.path;
                str = str.substring(0, 8);
                let idArr = [], idArr2 = [], idArr3 = [], idArr4 = [], idArr5 = [];
                if (str === "/sdk/ser") {
                    for (let i of this.arr) {
                        idArr.push(i.version_id);
                    }
                    if (idArr.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
                if (str === "/sdk/and") {
                    for (let i of this.arr2) {
                        idArr2.push(i.version_id);
                    }
                    if (idArr2.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
                if (str === "/sdk/ios") {
                    for (let i of this.arr3) {
                        idArr3.push(i.version_id);
                    }
                    if (idArr3.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
                if (str === "/sdk/uni") {
                    for (let i of this.arr4) {
                        idArr4.push(i.version_id);
                    }
                    if (idArr4.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
                if (str === "/sdk/coc") {
                    for (let i of this.arr5) {
                        idArr5.push(i.version_id);
                    }
                    if (idArr5.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
            },
            getVersionList(user_type) {
                var this_ = this;
                this.$http({
                    method: 'post',
                    url: '/version/menuList',
                    data: {
                        user_type: user_type,
                    },
                }).then(function (response) {
                    // console.log(response)
                    // console.log(response.length)
                    if (response.length > 0) {
                        // console.log(response[0].server)
                        if (response[0].server !== undefined && response[0].server.length > 0) {
                            this_.showServer = true;
                            let versionArrSer = response[0].server;
                            for (let i of versionArrSer) {
                                this_.arr.push(i);
                            }
                            localStorage.setItem('versionArrServer', JSON.stringify(this_.arr));
                        }
                        else {
                            this_.showServer = false;
                        }

                        if (response[0].android !== undefined && response[0].android.length > 0) {
                            this_.showAndroid = true;
                            let versionArrAndroid = response[0].android;
                            for (let i of versionArrAndroid) {
                                this_.arr2.push(i);
                            }
                            localStorage.setItem('versionArrAndroid', JSON.stringify(this_.arr2));
                        }
                        else {
                            this_.showAndroid = false;
                        }

                        if (response[0].ios !== undefined && response[0].ios.length > 0) {
                            this_.showIOS = true;
                            let versionArrIOS = response[0].ios;
                            for (let i of versionArrIOS) {
                                this_.arr3.push(i);
                            }
                            localStorage.setItem('versionArrIOS', JSON.stringify(this_.arr3));
                        }
                        else {
                            this_.showIOS = false;
                        }

                        if (response[0].unity !== undefined && response[0].unity.length > 0) {
                            this_.showUnity = true;
                            let versionArrUnity = response[0].unity;
                            for (let i of versionArrUnity) {
                                this_.arr4.push(i);
                            }
                            localStorage.setItem('versionArrUnity', JSON.stringify(this_.arr4));
                        }
                        else {
                            this_.showUnity = false;
                        }

                        if (response[0].cocos !== undefined && response[0].cocos.length > 0) {
                            this_.showCocos = true;
                            let versionArrCocos = response[0].cocos;
                            for (let i of versionArrCocos) {
                                this_.arr5.push(i);
                            }
                            localStorage.setItem('versionArrCocos', JSON.stringify(this_.arr5));
                        }
                        else {
                            this_.showCocos = false;
                        }
                    }

                    this_.loading = false;

                }).catch(function (error) {
                    this_.loading = false;
                });
            },
            handleSelect(index, indexPath) {
                window.sessionStorage.setItem('defaultActive', index);
                this.defaultActive = index;
                this.toTop();
            },
            changeDefaultActive() {
                this.defaultActive = window.sessionStorage.getItem('defaultActive');
            },
            reload(path) {
                // 之后将页面push进去
                this.$router.push('/black');
                //再次返回上一页即可
                this.$router.go(-1);
            },
            getData(data) {
                if (data == 'gameIsEmpty') {
                    this.showMainContent = false;
                    if (this.$route.path !== "/noRight") {
                        this.$router.push("/noRight");
                    }

                }
            },
        },
        components: {
            'body-top': bodyTop,
        },
        watch: {
            $route(to, from) {
                this.defaultActive = to.path;
                // console.log(to.path)
                let str = to.path;
                str = str.substring(0, 11);
                let idArr = [];
                if (str === "/sdk/server/") {
                    for (let i of this.arr) {
                        idArr.push(i.id);
                    }
                    if (idArr.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
                let idArr2 = [];
                if (str === "/sdk/andori") {
                    for (let i of this.arr2) {
                        idArr2.push(i.id);
                    }
                    if (idArr2.indexOf(Number(this.$route.params.id)) == -1) {
                        this.$router.push("/page404");
                    }
                }
            },
        },
    };
</script>
<style>

    .container {
        background: #f9fafc;
        min-width: 1300px;
        padding-top: 10px;
    }

    .container-info {
        background: #f0f2f5;
        min-width: 1300px;
        padding-top: 100px;
        text-align: center;
        font-size: 20px;

    }

    .nav-board {
        border-radius: 5px;
        background: #fff;
        padding: 5px;
        margin: 0 5px;
        overflow: hidden;
    }

    .cont-area {
        border-radius: 5px;
        min-width: 100px;
        width: 99%;
        /*background: #fff;*/
        /*padding: 30px 20px 30px 20px;*/
        padding: 0 0 20px 0;
        overflow: hidden;
        min-height: 810px;
    }

    .cont-area:after {
        content: "";
        　height: 0;
        　visibility: hidden;
        　display: block;
        　clear: both;
    }

    .el-menu {
        border-right: none;
    }

    .icon {
        margin-right: 5px;
    }

    #backtop {
        z-index: 99999;
        position: fixed;
        bottom: 30px;
        right: 10px;
        height: 44px;
        width: 44px;
        background-color: #ccc;
        border-radius: 2px;
        cursor: pointer;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        transition: background .3s ease-in-out;
        -webkit-transition: background .3s ease-in-out;
        outline: 0;
    }

    .nav1 {
        color: #4c4c4c;
    }

    .nav2 {
        margin-left: 30px;
    }

    .nav3 {

    }
</style>
