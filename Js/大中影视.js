var rule = {
    title:'大中影视',
    host:'https://www.malustv.com',
    // homeUrl:'/',
    //url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    url:'/index.php/vod/show/id/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {"1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"101"},{"n":"喜剧片","v":"102"},{"n":"爱情片","v":"103"},{"n":"科幻片","v":"104"},{"n":"剧情片","v":"105"},{"n":"悬疑片","v":"106"},{"n":"惊悚片","v":"107"},{"n":"恐怖片","v":"108"},{"n":"犯罪片","v":"109"},{"n":"冒险片","v":"111"},{"n":"奇幻片","v":"112"},{"n":"灾难片","v":"113"},{"n":"战争片","v":"114"},{"n":"动画片","v":"115"},{"n":"歌舞片","v":"116"},{"n":"网络电影","v":"207"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"/class/剧情"},{"n":"悬疑","v":"/class/悬疑"},{"n":"动作","v":"/class/动作"},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"科幻","v":"/class/科幻"},{"n":"惊悚","v":"/class/惊悚"},{"n":"恐怖","v":"/class/恐怖"},{"n":"犯罪","v":"/class/犯罪"},{"n":"谍战","v":"/class/谍战"},{"n":"冒险","v":"/class/冒险"},{"n":"奇幻","v":"/class/奇幻"},{"n":"灾难","v":"/class/灾难"},{"n":"战争","v":"/class/战争"},{"n":"动画","v":"/class/动画"},{"n":"歌舞","v":"/class/歌舞"},{"n":"历史","v":"/class/历史"},{"n":"传记","v":"/class/传记"},{"n":"纪录","v":"/class/纪录"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最热","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"201"},{"n":"港台剧","v":"202"},{"n":"日韩剧","v":"203"},{"n":"欧美剧","v":"204"},{"n":"海外剧","v":"205"},{"n":"其他剧","v":"206"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"/class/剧情"},{"n":"悬疑","v":"/class/悬疑"},{"n":"爱情","v":"/class/爱情"},{"n":"都市","v":"/class/都市"},{"n":"古装","v":"/class/古装"},{"n":"武侠","v":"/class/武侠"},{"n":"神话","v":"/class/神话"},{"n":"喜剧","v":"/class/喜剧"},{"n":"青春","v":"/class/青春"},{"n":"科幻","v":"/class/科幻"},{"n":"军事","v":"/class/军事"},{"n":"警匪","v":"/class/警匪"},{"n":"谍战","v":"/class/谍战"},{"n":"奇幻","v":"/class/奇幻"},{"n":"偶像","v":"/class/偶像"},{"n":"年代","v":"/class/年代"},{"n":"乡村","v":"/class/乡村"},{"n":"家庭","v":"/class/家庭"},{"n":"历史","v":"/class/历史"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":" 法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最热","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"3":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"脱口秀","v":"/class/脱口秀"},{"n":"真人秀","v":"/class/真人秀"},{"n":"搞笑","v":"/class/搞笑"},{"n":"访谈","v":"/class/访谈"},{"n":"生活","v":"/class/生活"},{"n":"美食","v":"/class/美食"},{"n":"亲子","v":"/class/亲子"},{"n":"旅游","v":"/class/旅游"},{"n":"文化","v":"/class/文化"},{"n":"体育","v":"/class/体育"},{"n":"时尚","v":"/class/时尚"},{"n":"纪实","v":"/class/纪实"},{"n":"益智","v":"/class/益智"},{"n":"演艺","v":"/class/演艺"},{"n":"歌舞","v":"/class/歌舞"},{"n":"音乐","v":"/class/音乐"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最热","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"4":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"国产动漫","v":"/class/国产动漫"},{"n":"日本动漫","v":"/class/日本动漫"},{"n":"欧美动漫","v":"/class/欧美动漫"},{"n":"日韩动漫","v":"/class/日韩动漫"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"韩国","v":"/area/韩国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最热","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],"5":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"人物","v":"/class/人物"},{"n":"军事","v":"/class/军事"},{"n":"历史","v":"/class/历史"},{"n":"自然","v":"/class/自然"},{"n":"动物","v":"/class/动物"},{"n":"探险","v":"/class/探险"},{"n":"科技","v":"/class/科技"},{"n":"文化","v":"/class/文化"},{"n":"刑侦","v":"/class/刑侦"},{"n":"社会","v":"/class/社会"},{"n":"旅游","v":"/class/旅游"},{"n":"其他","v":"/class/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"最新","v":"/by/time"},{"n":"最热","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]},
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        5:{cateId:'5'}
    },
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&纪录',
    class_url:'1&2&3&4&5',
    //class_parse:'.myui-panel-box&&ul&&li;a&&Text;a&&href;/v/(.*)/',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.hl-vod-list;li;a&&title;.hl-item-thumb.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.hl-list-item;a&&title;.hl-item-thumb.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级:{"title":".hl-item-thumb.hl-lazy&&title;.hl-full-box&&ul li:eq(6)&&Text","img":".hl-item-thumb.hl-lazy&&data-original","desc":".hl-full-box&&ul&&li:eq(-1)&&Text;.hl-full-box&&ul&&li:eq(-2)&&Text;.hl-full-box&&ul&&li:eq(-3)&&Text;.hl-full-box&&ul&&li:eq(2)&&Text;.hl-full-box&&ul&&li:eq(3)&&Text","content":".hl-col-xs-12.blurb&&Text","tabs":".hl-plays-from:eq(0) a","lists":".hl-plays-list:eq(#id) li"},
    搜索:'.hl-item-div;a&&title;.hl-item-thumb&&data-original;.hl-lc-1&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
