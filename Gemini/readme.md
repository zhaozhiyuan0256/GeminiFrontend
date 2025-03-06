# Gemini
## 文件结构
``` txt 
/Apis              前后端交互相关函数
/Asserts           存放图片等静态资源文件
/Widgets           各种组件及样式
 |__/Logo          Logo组件
     |__/logo.js   
     |__/logo.css  
 |__/Gemini.js     Gemini容器组件
 |__/Gemini.css    
 |__/widgets.css   合并样式文件
/Utils             存放各种工具函数
build.js           构建页面内容
index.html         Gemini入口页面
index.js           Gemini入口文件
index.css          Gemini全局样式
```

## 命名规范
``` txt
1. 文件夹命名：FileFolderName
2. 文件命名：  fileName.xxx
3. 变量命名：  varName
4. 函数命名：  functionName
5. 常量命名：  CONST_VALUE_NAME
6. 类命名：    ClassName
7. css文件中的命名：
   类： .class-name
   id： #id-name
```
## 接口说明
``` txt
1. 测试接口
   GET /api/hello
   {"message": "hello"}
2. 返回cesium设置模拟场景的json数据，内容主要包含地面设施（GS/UE）和卫星的运动情况
   GET /api/mobility
   {
      "message": "environment", 
      "data": [
          {"id": "document", ...},
          {"id": "Satellite/{gemini1}", ...},
          {"id": "Facility/{groundstation1}", ...}
        ]
    }
3. 返回cesium设置对象连线的json数据，用于描述ue到upf的路径
   GET /api/route
   {
      "message": "route",
      "data": [
        {"id": "xxx", name: "access", ...},
        {"id": "Satellite/gemini1-to-Satellite/gemini2", "name": "gemini1 to gemini2", ...}
      ]
   }
```