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
            
        },
        mounted:function(){
            var engine = Engine.create();
            //render(渲染器)将要渲染的物理引擎是上面的engine，而渲染的对象是html网页的body
            var render = Render.create({element: document.body, engine: engine});
         
            /**
             * Bodies.rectangle = function(x, y, width, height, options)
             * x,y 分别表示矩形中心点的坐标，坐标的原点(0,0)在 Canvas(画布)的左上角
             * width,height 分别表示矩形的宽和高
             * options：描述矩形的参数，是一个 json 对象
             * @type {body}
             */
            var boxA = Bodies.rectangle(200, 0, 80, 80);
            var boxB = Bodies.rectangle(450, 100, 80, 80);
            //将isStatic设为true，表示物体静止
            var ground = Bodies.rectangle(400, 510, 810, 60, {isStatic: true});
            World.add(engine.world, [boxA, boxB, ground]);// 将所有物体添加到世界中
            Engine.run(engine);//运行引擎
            Render.run(render);//运行渲染器
        },
        methods:{
            sub:function(){
                
            }
        }
    })
});
