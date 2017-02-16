var first_card_clicked=null;
var second_card_clicked=null;
var total_possible_matches=2;
var match_counter=0;
var matches=0;
var attempt=0;
var accuracy=0;
var games_played=0;
var time=1;
var myVar;
$(document).on("click", "#button", function(){
    $(".back").show();
    clearInterval(myVar);
    copy=images.slice(0,images.length);
    var length=18;
    for (i=0;i<18;i++)
        shuffle(length--,i+1+"");
    $(".back").hide();
    number=10;
    count_down_timer();
    time=1;
    setTimeout(function(){
        $(".back").show();
        myVar=setInterval(function(){document.getElementById('output').innerHTML =Math.floor(time/60).toString()+"min"+(time-Math.floor(time/60)*60).toString()+"s";time++}, 1000);
    },10000);
    games_played+=1;
    reset_stats();
    display_stats();
});
var card_clicked=function(card) {
    if(first_card_clicked===null||second_card_clicked===null){
        $(card).hide();
        if (first_card_clicked === null) {
            first_card_clicked = card;
        }
        else {
            second_card_clicked = card;
            /*
             console.log($(first_card_clicked).parent().parent().find(".front img").attr("src"));
             console.log($(second_card_clicked).parent().parent().find(".front img").attr("src"));
             */
            attempt+=1;

            if($(first_card_clicked).parent().parent().find(".front img").attr("src")===$(second_card_clicked).parent().parent().find(".front img").attr("src")){
                match_counter+=1;
                matches+=1;
                console.log(match_counter);
                first_card_clicked=null;
                second_card_clicked=null;
                if(match_counter===9){
                    alert("You won!");
                    clearInterval(myVar);
                }
            }
            else{
                setTimeout(function(){
                    $(first_card_clicked).show();
                    $(second_card_clicked).show();
                    first_card_clicked=null;
                    second_card_clicked=null;
                },2000);
            }
            accuracy=Math.round(matches/ attempt* 100);
        }
        display_stats();
    }
};
var display_stats=function(){
    $(".games-played .value").html(games_played);
    $(".attempts .value").html(attempt);
    $(".accuracy .value").html(accuracy+"%");
};
var reset_stats=function(){
    accuracy=0;
    matches=0;
    attempt=0;
    match_counter=0;
    time=1;
    display_stats();
};
/*
var images=["http://www.sanguosha.com/images/23/123/1107/22/29/9856_10100029.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/17/9963_10132317.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/56/6958_10132256.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/35/8014_10132235.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/89/8882_10132089.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/42/1828_10131942.PNG",
    "http://www.sanguosha.com/images/23/123/1107/25/41/1672_10124941.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/77/8449_10134977.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/94/4392_10134994.PNG",
    "http://www.sanguosha.com/images/23/123/1107/22/29/9856_10100029.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/17/9963_10132317.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/56/6958_10132256.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/35/8014_10132235.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/89/8882_10132089.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/42/1828_10131942.PNG",
    "http://www.sanguosha.com/images/23/123/1107/25/41/1672_10124941.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/77/8449_10134977.PNG",
    "http://www.sanguosha.com/images/23/123/1107/26/94/4392_10134994.PNG",
];*/

var images=["http://d.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1dd6e93fdab44aed4d43b6b6d275ec64/2fdda3cc7cd98d109a27e644213fb80e7aec90d0.jpg",
            "http://d.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1dd6e93fdab44aed4d43b6b6d275ec64/2fdda3cc7cd98d109a27e644213fb80e7aec90d0.jpg",
            "http://e.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=dfc4999b8601a18be4e61a1dff466c6d/3801213fb80e7bec00f71c562e2eb9389b506b53.jpg",
            "http://e.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=dfc4999b8601a18be4e61a1dff466c6d/3801213fb80e7bec00f71c562e2eb9389b506b53.jpg",
            "http://c.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=783bea93718b4710da22f59ea2a7a898/d833c895d143ad4b1389547281025aafa50f06d8.jpg",
            "http://c.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=783bea93718b4710da22f59ea2a7a898/d833c895d143ad4b1389547281025aafa50f06d8.jpg",
            "http://d.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=0060f592a864034f1bc0ca54ceaa1254/37d3d539b6003af3711ce72f362ac65c1138b6de.jpg",
            "http://d.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=0060f592a864034f1bc0ca54ceaa1254/37d3d539b6003af3711ce72f362ac65c1138b6de.jpg",
            "http://g.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6a92934a7bcb0a46912f836b0a0a9d41/9d82d158ccbf6c81e66b5d58bc3eb13533fa4025.jpg",
            "http://g.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6a92934a7bcb0a46912f836b0a0a9d41/9d82d158ccbf6c81e66b5d58bc3eb13533fa4025.jpg",
            "http://g.hiphotos.baidu.com/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=819183881b4c510fbac9ea4801304e48/a044ad345982b2b7d677648430adcbef77099b81.jpg",
            "http://g.hiphotos.baidu.com/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=819183881b4c510fbac9ea4801304e48/a044ad345982b2b7d677648430adcbef77099b81.jpg",
            "http://h.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1d94b38e4bfbfbedc8543e2d19999c53/b7003af33a87e9507211d1dd10385343fbf2b478.jpg",
            "http://h.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1d94b38e4bfbfbedc8543e2d19999c53/b7003af33a87e9507211d1dd10385343fbf2b478.jpg",
            "http://b.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=e65061ea0b55b31988f48a2722c0e943/342ac65c10385343b261aaca9213b07ecb8088aa.jpg",
            "http://b.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=e65061ea0b55b31988f48a2722c0e943/342ac65c10385343b261aaca9213b07ecb8088aa.jpg",
            "http://d.hiphotos.baidu.com/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=639e256225f5e0fefa1581533d095fcd/241f95cad1c8a7865a9660756f09c93d70cf5008.jpg",
            "http://d.hiphotos.baidu.com/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=639e256225f5e0fefa1581533d095fcd/241f95cad1c8a7865a9660756f09c93d70cf5008.jpg"]
var copy=images.slice(0,images.length);
function shuffle(length,id){
    var index=Math.floor(Math.random() *length);
    var image=copy[index];
    document.getElementById(id).src = image;
    copy.splice(index,1);
    console.log(copy.length);

}
var number=10;
function count_down_timer() {
    document.getElementById('output').innerHTML =number;
    number-=1;
    if(number==-1){
        document.getElementById('output').innerHTML ="GO!";
    }
    else{
        setTimeout(count_down_timer,1000);
    }
}

$(document).ready(function(){
    var length=18;
    for (i=0;i<18;i++)
        shuffle(length--,i+1+"");
    $(".back").hide();
    count_down_timer();
    setTimeout(function(){
        $(".back").show();
        myVar=setInterval(function(){document.getElementById('output').innerHTML =Math.floor(time/60).toString()+":"+(time-Math.floor(time/60)*60).toString();time++}, 1000);
    },10000);

});
