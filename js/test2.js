var mainData,loading;

var Engine = Matter.Engine;//引擎.引擎模块包含创建和操作引擎的方法
var Render = Matter.Render;//基于HTML5画布的渲染器
var World = Matter.World;//演出舞台. Matter.js 中任何的物体都需要一个舞台/容器，而存放这些物体的地方，则称之为World(世界)
var Bodies = Matter.Bodies;//用于创建各种形状的物体，物体必须添加到Wolrd中，然后由引擎运行世界

$(function(){
    FastClick.attach(document.body);
    mainData = new Vue({
        el: "#main",
        data:{
            engine:null,
            render:null
        },
        mounted:function(){
            var _this = this;
            //引擎对象
            _this.engine = Engine.create();
            //render(渲染器)将要渲染的物理引擎是上面的engine，而渲染的对象是html网页的元素
            //options属性里width和height设置渲染出来的画布大小
            var renderOptions = {
                element: $('.content')[0],//渲染的对象为html网页的元素
                engine: _this.engine,//要渲染的引擎对象
                options:{
                    width:$('.content').width(),//渲染出来的画布的宽
                    height:$('.content').height(),//渲染出来的画布的高
                    background:'#FFFFFF',//背景色或背景图片
                    wireframes: false,//当为false就可以显示出设置的背景色或背景图片了
                    showAngleIndicator: false//是否显示一个表示物体角度的横线
                }
            };
            _this.render = Render.create(renderOptions);
            
            /**
             * Bodies.rectangle = function(x, y, width, height, options)
             * x,y 分别表示矩形中心点的坐标，坐标的原点(0,0)在 Canvas(画布)的左上角
             * width,height 分别表示矩形的宽和高
             * options：描述矩形的参数，是一个 json 对象
             * @type {body}
             */
            var boxA = Bodies.rectangle(200, 0, 80, 80);
            var boxB = Bodies.rectangle(450, 100, 180, 80);
            //将isStatic设为true，表示物体静止
            //render.sprite.texture可以设置贴图
            var ground = Bodies.rectangle(400, 510, 810, 60, {
                isStatic: true,
                render: {
                    sprite: {
                        //texture: 'http://himg2.huanqiucdn.cn/attachment2010/2019/1018/20191018021315992.jpg'
                    }
                }
            });
            World.add(_this.engine.world, [boxA, boxB, ground]);// 将所有物体添加到世界中
            Engine.run(_this.engine);//运行引擎
            Render.run(_this.render);//运行渲染器
        },
        methods:{
            add:function(){
                var _this = this;
                _this.addBox(200,0,80,80);
            },
            addBox:function(x,y,width,height){
                var _this = this;
                /**
                 * Bodies.rectangle = function(x, y, width, height, options)
                 * x,y 分别表示矩形中心点的坐标，坐标的原点(0,0)在 Canvas(画布)的左上角
                 * width,height 分别表示矩形的宽和高
                 * options：描述矩形的参数，是一个 json 对象
                 * @type {body}
                 */
                var box = Bodies.rectangle(x, y, width, height);
                World.add(_this.engine.world, [box]);// 将所有物体添加到世界中
            }
        }
    })
});
function mouseclick(){
    var x = event.pageX-$('.content')[0].offsetLeft;
    var y = event.pageY-$('.content')[0].offsetTop;
    mainData.addBox(x,y,20,20);
}
