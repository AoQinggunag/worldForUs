/**
 * Created by zengxm on 2016/7/13.
 */

var fs=require("fs");

exports.install=function(){
    F.route("/map",index);
    F.route("/trips",trips)
    F.route("/tripsFile", readTripsFile);
};

/**
 * 展示地图
 */
function index(){
    var self = this;
    self.view('index',{transports:CONFIG("transports")});
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
            startAt:"2015-01-18",
            endAt:"2015-01-20",
            transport:1,
            remark:"长隆欢乐世界",
            category:"情侣出行"
        },
        {
            id:"1",
            cities:[
                {
                    name:"中国 广西 南宁",
                    lat:22.854974,
                    lng:108.284869
                },
                {
                    name:"中国 海南 海口",
                    lat:20.043582,
                    lng:110.344116
                },
                {
                    name:"中国 海南 三亚",
                    lat: 18.25209,
                    lng:109.516
                }
            ],
            startAt:"2015-06-18",
            endAt:"2015-06-20",
            transport:3,
            remark:"",
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
            startAt:"2016-01-01",
            endAt:"2015-01-03",
            transport:1,
            remark:"元旦出行",
            category:"情侣出行"
        }
    ]);
}

function readTripsFile(){
    var self=this;
    //读取文件
    var filePath=F.path.private("trips.json");
    var stream=fs.createReadStream(filePath, {flags:'r',encoding:"utf-8"});

    stream.on("error",function(){
        self.send(404);
    });

    stream.pipe(self.res);
}