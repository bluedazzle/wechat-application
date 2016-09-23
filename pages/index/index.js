// var http = require('../../utils/http.js');
//index.js
var app = getApp()
//获取应用实例
Page({
  data: {
    data: {
        "page_obj": {
            "current": 1, 
            "next": 2, 
            "total": 3, 
            "page_range": [
                {
                    "page": 1
                }, 
                {
                    "page": 2
                }, 
                {
                    "page": 3
                }
            ], 
            "previous": null
        }, 
        "is_paginated": true, 
        "video_list": [
            {
                "classification": 1, 
                "thumb_nail": "http://oda176fz0.bkt.clouddn.com/WeChatSight2.mp4?vframe/jpg/offset/1/w/200/h/200/", 
                "reference": "dd", 
                "title": "WeChatSight2", 
                "url": "http://oda176fz0.bkt.clouddn.com/WeChatSight2.mp4", 
                "author": "pp", 
                "create_time": "2016-09-12 15:31:52", 
                "modify_time": "2016-09-12 15:31:52", 
                "id": 1, 
                "like": 0
            },
            {
                "classification": 1, 
                "thumb_nail": "http://oda176fz0.bkt.clouddn.com/bensile.mp4?vframe/jpg/offset/1/w/200/h/200/", 
                "reference": "dd", 
                "title": "WeChatSight2", 
                "url": "http://oda176fz0.bkt.clouddn.com/bensile.mp4", 
                "author": "pp", 
                "create_time": "2016-09-12 15:31:52", 
                "modify_time": "2016-09-12 15:31:52", 
                "id": 1, 
                "like": 0
            }
        ]
    }
  },
  bindItemTap: function(id){
    console.log(id);
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    
  }
})
