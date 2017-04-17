
app.controller("mainctrl",function($scope)
                {
                    $scope.introduce = {name:"李浩平",site:"河北省，沧州",fans:"260",click:"3K",pic:"images/a6.jpg",job:"学生",hobby:"speak english with foreigner"};
                    $scope.delivercontent = {content1:"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。",
                    content2:"我只是从这里路过......",
                    content3:"日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。",
                    content4:"这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。",
                    content5:"孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。",
                    time1:"1hour ago",time2:"2hours ago",time3:"3hours ago",time4:"4hours ago",time5:"5 hours ago"

                };
                    $scope.fan = [
                    {'name':"小李",'occupation':"设计师，博客",'imageurl':"images/a1.jpg",'count':"233"},
                    {'name':"小赵",'occupation':"作家，杂志编辑",'imageurl':"images/a2.jpg",'count':"144"},
                    {'name':"李小明",'occupation':"艺术总监，电影剪辑",'imageurl':"images/a3.jpg",'count':"155"},
                    {'name':"赵大成",'occupation':"音乐家，运动员",'imageurl':"images/a4.jpg",'count':"166"}
                    ];
                    
                    $scope.myvar = false;
                    $scope.show = function(){
                    	$scope.myvar = !$scope.myvar;
                    }
                    $scope.xinxi = true;
                    $scope.list = function(){
                    	$scope.xinxi = !$scope.xinxi;
                    }

                })