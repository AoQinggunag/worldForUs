/**
 * Created by zengxm on 2016/7/13.
 */
exports.install=function(){
    F.route("/map",index);
    F.route("/trips",trips)
};

/**
 * 展示地图
 */
function index(){
    var self = this;
    self.view('index');
}

/**
 * 加载我的旅行列表
 *
 * 交通工具：0=火气 1=动车 2=汽车 3=飞机 4=自驾游 5=轮船 6=步行 7=自行车 8=IronMan
 */
function trips(){
    var self=this;

    self.json([
        {
            id:"1",
            cities:[
                {
                    name:"中国 广西 南宁",
                    lat:22.854974,
                    lng:108.284869
                },
                {
                    name:"中国 广东 广州",
                    lat:23.159077,
                    lng:113.380971
                }
            ],
            startAt:new Date(2015,1,18),
            endAt:new Date(2015,1,20),
            transport:1,
            remark:"长隆欢乐世界",
            category:"情侣出行"
        },
        {
            id:"2",
            cities:[
                {
                    name:"中国 广西 南宁",
                    lat:22.854974,
                    lng:108.284869
                },
                {
                    name:"中国 湖南 长沙",
                    lat:28.21474,
                    lng:112.893119
                },
            ],
            startAt:new Date(2016,1,1),
            endAt:new Date(2016,1,3),
            transport:1,
            remark:"元旦出行",
            category:"情侣出行"
        }
    ]);
}