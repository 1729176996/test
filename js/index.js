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
            usually:function(){
                window.location.href = 'usually.html';
            }
        }
    })
});
