<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created() {

        }
    };
</script>
<style lang='less'>
    a,
    abbr,
    acronym,
    address,
    applet,
    article,
    aside,
    audio,
    b,
    big,
    blockquote,
    body,
    canvas,
    caption,
    center,
    cite,
    code,
    dd,
    del,
    details,
    dfn,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    hgroup,
    html,
    i,
    iframe,
    img,
    ins,
    kbd,
    label,
    legend,
    li,
    mark,
    menu,
    nav,
    object,
    ol,
    output,
    p,
    pre,
    q,
    ruby,
    s,
    samp,
    section,
    small,
    span,
    strike,
    strong,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    tfoot,
    th,
    thead,
    time,
    tr,
    tt,
    u,
    ul,
    var,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:after,
    blockquote:before,
    q:after,
    q:before {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ol,ul,li{
        list-style: none;
    }
    body {
        background: #f9fafc;
        font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        font-size: 14px;
        color: #444;
    }
    .button {
        background: #409EFF;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
    }
    .log-info-search-btn:hover {
        text-decoration: underline;
    }
    .button-edit {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
    }
    .button-cancel {
        background: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
    }
    .btn-delete {
        color: #dd4b39;
    }
    .btn-delete:hover {
        color: red;
        text-decoration: underline;
    }
    .btn-edit:hover,
    .btn-test:hover {
        text-decoration: underline;

    }
    .btn-edit .el-button:hover {
        text-decoration: underline;
    }
    .el-menu-item.is-active{
        border-left: 4px solid rgb(64, 158, 255);
        /*background: rgb(204, 204, 204)!important;*/
    }
    .form-area {
        width: 800px;
    }
    .info .el-dialog {
        width: 1180px!important;
        .el-dialog__body{
            height: 500px;
            overflow-x:hidden;
            overflow-y:auto;
        }
    }
    .interfaceLog-box .el-form-item__label {
        width: 110px!important;
    }
    .interfaceLog-box .el-select {
        width: 100%!important;
    }

    .el-dialog__header {
        background: #5c5c60;
        .el-dialog__headerbtn .el-dialog__close,
        .el-dialog__title {
            color: #fff!important;
        }
        .el-dialog__headerbtn .el-dialog__close:hover {
            color: #409EFF!important;
        }
    }
    .search-key {
        float: left;
        width: 240px;
        .el-input__inner {
            height: 30px!important;
            line-height: 30px!important;
        }
    }
    .packageConf .add-form-area .el-dialog,
    .packageConf .edit-form-area .el-dialog {
        width: 800px!important;
    }
    .serviceInterInfo .el-dialog,
    .serviceInterf-test .el-dialog {
        width: 960px!important;
    }
    .serviceInterf-test .el-dialog {
        width: 1060px!important;
        .el-dialog__body {
            overflow: hidden;
        }
    }
    .serviceInterf-test .el-dialog {
        .el-form-item__label {
            width: auto!important;
        }
        .el-form-item__content {
            margin-left: 196px !important;
        }
    }

    .serviceInterf-test .test-list {
        .el-checkbox-group {
            border: 1px solid #dcdfe6;
            padding: 20px;
            .el-checkbox {
                display: block;
                margin-bottom: 30px;
            }
        }
        .el-checkbox+.el-checkbox {
            margin-left: 0;
        }
    }
    .packageConf .add-form-area .el-input__inner,
    .packageConf .add-form-area .el-select {
        width: 600px!important;
    }
    .app-head .el-select-dropdown{
        top: 60px!important;
    }
    .DashBoard .el-loading-mask{
        margin-top: -100px;
    }
    .sync-success .el-dialog__body{
        overflow: hidden;
    }
    .vjs__tree .vjs__value__string {
        color: #13ce66;
        word-wrap: break-word!important;
        word-break: break-all!important;
    }
    .el-dialog__wrapper {
        position: fixed;
        top: -90px!important;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
    }
    .interfaceLog-box-form .el-form--inline .el-form-item__content {
        display: inline-block;
        vertical-align: top;
        width: 78%;
    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 100%!important;
    }
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
        margin-bottom: 14px;
    }
    .test-list{
        .el-form-item__content{
            position: absolute;
        }
    }
    .password .el-form-item__label:before{
        content: '*';
        color: #f56c6c;
        margin-right: 4px;
    }
    .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
        background-color: #e7ebf2;
    }


    .editor-preview-side {
        position: fixed;
        bottom: 0;
        width: 49% !important;
        top: 50px;
        right: 0;
        z-index: 9;
        border: 1px solid #ddd;
    }


    .fix_nav .el-scrollbar__wrap{
        overflow-x: hidden;
    }
    .dashBoard .el-card__header{
        background: #e7e8ea!important;
    }
    .cont_bg{
        min-height: 800px;
        background: #fff;
        padding: 30px 20px 30px 20px;
    }
    .packageConf .el-select {
        width: 40%!important;
        margin-right:20px;
    }
    .versionManage .version .el-form-item__content{
        display: block!important;
        width:480px;
    }
</style>
