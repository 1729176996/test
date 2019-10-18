var mainData,loading;
$(function(){
    FastClick.attach(document.body);
    mainData = new Vue({
        el: "#main",
        data:{
            list:[],
            bscroll:null
        },
        mounted:function(){
            var _this = this;
            
            //渲染节点结束后执行
            _this.$nextTick(function(){
                if(_this.bscroll) _this.bscroll.destroy();
                _this.bscroll = new BScroll(".content",{
                    click: true,
                    pullUpLoad: {
                      threshold: 50
                    }
                })
            })
        },
        methods:{
            //weui toast消息提示
            weuiToast:function(){
                weui.toast('weui toast消息提示', 3000);
                
                //消失后要执行回调函数的
                /*weui.toast('操作成功', {
                    duration: 3000,
                    className: 'custom-classname',
                    callback: function(){ console.log('close') }
                });*/
            },
            //weui alert弹出框
            weuiAlert:function(){
                weui.alert('weui alert弹出框');
                
                //带回调的alert
                //weui.alert('带回调的alert', function(){ console.log('ok') });
                
                //手动关闭的alert
                /*var alertDom = weui.alert('手动关闭的alert', function(){
                    return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
                });*/
                
                //自定义标题的alert
                //weui.alert('自定义标题的alert', { title: '自定义标题' });
                
                //带回调的自定义标题的alert
                /*weui.alert('带回调的自定义标题的alert', function(){
                   console.log('ok')
                }, {
                   title: '自定义标题'
                });*/
                
                //自定义按钮的alert
                /*weui.alert('自定义按钮的alert', {
                    title: '自定义按钮的alert',
                    buttons: [{
                        label: 'OK',
                        type: 'primary',
                        onClick: function(){ console.log('ok') }
                    }]
                });*/
            },
            //weui confirm确认弹窗
            weuiConfirm:function(){
                weui.confirm('weui confirm确认弹窗');
                
                //自定义标题的confirm
                //weui.confirm('自定义标题的confirm', { title: '自定义标题' });
                
                //带回调的confirm
                //weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
                
                //手动关闭的confirm
                /*var confirmDom = weui.confirm('手动关闭的confirm', function(){
                    return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
                });*/
                
                //带回调的自定义标题的confirm
                /*weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
                    title: '自定义标题'
                });*/
                
                //自定义按钮的confirm
                /*weui.confirm('自定义按钮的confirm', {
                    title: '自定义按钮的confirm',
                    buttons: [{
                        label: 'NO',
                        type: 'default',
                        onClick: function(){ console.log('no') }
                    }, {
                        label: 'YES',
                        type: 'primary',
                        onClick: function(){ console.log('yes') }
                    }]
                });*/
            },
            //weui 单列picker选择器
            weuiDanPicker:function(){
                // 单列picker
                weui.picker([
                    {
                        label: '飞机票',
                        value: 0,
                        disabled: true // 不可用
                    },
                    {
                        label: '火车票',
                        value: 1
                    },
                    {
                        label: '汽车票',
                        value: 3
                    },
                    {
                        label: '公车票',
                        value: 4,
                    }
                ], {
                    className: 'custom-classname',
                    container: 'body',
                    defaultValue: [3],
                    onChange: function (result) {
                        console.log(result)
                    },
                    onConfirm: function (result) {
                        console.log(result)
                    },
                    id: 'singleLinePicker'
                });
            },
            //weui 多列picker选择器
            weuiDuoPicker:function(){
                // 多列picker
                weui.picker([
                    {
                        label: '1',
                        value: '1'
                    }, {
                        label: '2',
                        value: '2'
                    }, {
                        label: '3',
                        value: '3'
                    }
                ], [
                    {
                        label: 'A',
                        value: 'A'
                    }, {
                        label: 'B',
                        value: 'B'
                    }, {
                        label: 'C',
                        value: 'C'
                    }
                ], {
                    defaultValue: ['3', 'A'],
                    onChange: function (result) {
                        console.log(result);
                    },
                    onConfirm: function (result) {
                        console.log(result);
                    },
                    id: 'multiPickerBtn'
                });
            },
            //weui 级联picker选择器
            weuiJiPicker:function(){
                // 级联picker
                weui.picker([
                    {
                        label: '飞机票',
                        value: 0,
                        children: [
                            {
                                label: '经济舱',
                                value: 1
                            },
                            {
                                label: '商务舱',
                                value: 2
                            }
                        ]
                    },
                    {
                        label: '火车票',
                        value: 1,
                        children: [
                            {
                                label: '卧铺',
                                value: 1,
                                disabled: true // 不可用
                            },
                            {
                                label: '坐票',
                                value: 2
                            },
                            {
                                label: '站票',
                                value: 3
                            }
                        ]
                    },
                    {
                        label: '汽车票',
                        value: 3,
                        children: [
                            {
                                label: '快班',
                                value: 1
                            },
                            {
                                label: '普通',
                                value: 2
                            }
                        ]
                    }
                ], {
                    className: 'custom-classname',
                    container: 'body',
                    defaultValue: [1, 3],
                    onChange: function (result) {
                        console.log(result)
                    },
                    onConfirm: function (result) {
                        console.log(result)
                    },
                    id: 'doubleLinePicker'
                });
            },
            //weui datePicker时间选择器
            weuiDatePicker:function(){
                // 示例1：
                /*weui.datePicker({
                    start: 1990,
                    end: 2000,
                    defaultValue: [1991, 6, 9],
                    onChange: function(result){
                        console.log(result);
                    },
                    onConfirm: function(result){
                        console.log(result);
                    },
                    id: 'datePicker'
                });*/
                
                // 示例2：
                weui.datePicker({
                    start: new Date(), // 从今天开始
                    end: 2030,
                    defaultValue: [2020, 6, 9],
                    onChange: function(result){
                        console.log(result);
                    },
                    onConfirm: function(result){
                        console.log(result);
                    },
                    id: 'datePicker'
                });
                
                // 示例3：
                /*weui.datePicker({
                    start: new Date(), // 从今天开始
                    end: 2030,
                    cron: '* * 0,6',  // 每逢周日、周六
                    onChange: function(result){
                        console.log(result);
                    },
                    onConfirm: function(result){
                        console.log(result);
                    },
                    id: 'datePicker'
                });*/
                
                // 示例4：
                /*weui.datePicker({
                    start: new Date(), // 从今天开始
                    end: 2030,
                    cron: '1-10 * *',  // 每月1日-10日
                    onChange: function(result){
                        console.log(result);
                    },
                    onConfirm: function(result){
                        console.log(result);
                    },
                    id: 'datePicker'
                });*/
            },
            //weui loading加载提示
            weuiLoading:function(){
                var loading = weui.loading('loading加载提示', {
                    className: 'custom-classname'
                });
                //几秒后延长执行
                setTimeout(function () {
                    //关闭loading
                    loading.hide();
                    
                    //关闭loading后执行回调函数
                    /*loading.hide(function() {
                        console.log('`loading` has been hidden');
                    });*/
                }, 3000);
            },
            //weui toptips顶部报错提示
            weuiToptips:function(){
                weui.topTips('weui toptips顶部报错提示');
                
                //weui.topTips('请填写正确的字段', 3000);
                
                /*weui.topTips('请填写正确的字段', function(){
                    console.log('close')
                });*/
                
                /*weui.topTips('请填写正确的字段', {
                    duration: 3000,
                    className: 'custom-classname',
                    callback: function(){
                        console.log('close')
                    }
                });*/
            },
            //weui actionsheet弹出式菜单
            weuiActionsheet:function(){
                weui.actionSheet([
                    {
                        label: '拍照',
                        onClick: function () {
                            console.log('拍照');
                        }
                    }, {
                        label: '从相册选择',
                        onClick: function () {
                            console.log('从相册选择');
                        }
                    }, {
                        label: '其他',
                        onClick: function () {
                            console.log('其他');
                        }
                    }
                ], [
                    {
                        label: '取消',
                        onClick: function () {
                            console.log('取消');
                        }
                    }
                ], {
                    className: 'custom-classname',
                    onClose: function(){
                        console.log('关闭');
                    }
                });
            },
            //weui gallery图片预览
            weuiGallery:function(){
                var url = 'http://himg2.huanqiucdn.cn/attachment2010/2019/1014/20191014050120338.jpg';
                var gallery = weui.gallery(url, {
                    className: 'custom-classname',
                    onDelete: function(){
                        if(confirm('确定删除该图片？')){
                            console.log('删除');
                        }
                        gallery.hide(function() {
                            console.log('`gallery` has been hidden');
                        });
                    }
                });
            },
            //获取浏览器所在端
            getBrowser:function(){
                function IsPC(){  
                    var userAgentInfo = navigator.userAgent;
                    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
                    var flag = true;  
                    for(var v = 0; v < Agents.length; v++){  
                        if(userAgentInfo.indexOf(Agents[v]) > 0){
                            flag = false; break;
                        }  
                    }  
                    return flag;  
                }
                var browser = '';
                if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
                    //苹果端
                    browser = '苹果端';
                }else if(/(Android)/i.test(navigator.userAgent)){
                    //安卓端
                    browser = '安卓端';
                }else{
                    //PC端
                    browser = '电脑端';
                };
                weui.alert('现在页面是'+browser);
            },
            submit:function(){
                
            }
        }
    })
});
