<template>
    <div class="dashBoard">
        <el-card class="box-card box-card1">
            <div slot="header" class="clearfix" >
                <span style="font-size: 20px;">常用文档</span>
            </div>

        </el-card>
        <el-card class="box-card box-card2" style="margin-top: 20px;">
            <div slot="header" class="clearfix" >
                <span style="font-size: 20px;">近期日志<span style="font-size: 12px;margin-left: 20px;">展示最近10个设备中产生的日志</span></span>
            </div>
        </el-card>
    </div>
</template>


<script>

export default {
    name: 'dashBoard',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.log{


}
.title-log {
    font-weight: normal;
    font-size: 20px;
    height:60px;
    line-height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /*margin: 0px 0 50px 20px;*/
    padding: 0 0 50px 20px;
    box-sizing: border-box;
    background: #cccccc;
}

.title-log span {
    font-size: 13px;
    margin-left: 20px;
}

.log-list {
    min-height: 200px;
    margin: 0 auto 20px;
    overflow: hidden;
}

.log-list li {
    width: 330px;
    height: 150px;
    margin: 10px;
    float: left;
}

.log-info {
    line-height: 24px;
    margin: 0 3px;
}

.search-log {
    float: right;
}

.log-info-search {
    overflow: hidden;
    float: right;
    color: #409EFF;
}
.doc-list li {

}
.doc-text {
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f3f3f3;
}

.doc-text:hover{
    -webkit-box-shadow:0 0 2px 1px #ebeef5;
    -moz-box-shadow:0 0 2px 1px #ebeef5;
    box-shadow:0 0 2px 1px #ebeef5;
    -webkit-transition: .3s;
    transition: .3s;
    color:#409EFF;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    /*width: 480px;*/
}

</style>
