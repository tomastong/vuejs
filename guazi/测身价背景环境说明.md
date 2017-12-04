关于测身价项目的业务流程，主要判断过程都是在首页进行判断的

1、在app内部的业务实现(js域名信息判断)

    1、如果登录了app（jssdk判断，首页判断）

        1、如果帐号玩过游戏（接口判断）

            跳转到结果页面

        2、如果帐号没有玩过游戏

            1、如果有缓存

                跳转到结果页 -> 进入到预审页

            2、如果没有缓存

                开始玩游戏 -> 计算结果(保存数据，拿到用户信息，发送结果) -> 进入到预审页

    2、如果没有登录app（首页判断）

        1、如果本地有缓存（首页判断）

            跳转到结果页 -> 登录页 -> 中间页(获取帐号信息+本地成绩，发送服务器) -> 进入预审页

        2、如果本地没有缓存

            开始玩游戏 -> 保存本地结果(调用接口) -> 登录页 -> 中间页(获取帐号信息+本地成绩，发送服务器) -> 

            进入预审页

2、在wap上面的业务实现

    1、如果登录了wap（接口判断判断）

        1、如果帐号玩过游戏（接口判断）

            跳转到结果页面

        2、如果帐号没有玩过游戏

            1、如果有缓存

                跳转到结果页 -> 进入到预审页

            2、如果没有缓存 done

                开始玩游戏 -> 计算结果(保存数据，拿到用户信息，发送结果) -> 进入到预审页

    2、如果没有登录wap

        1、如果本地有缓存

            跳转到结果页 -> 登录页 -> 中间页(获取帐号信息+本地成绩，发送服务器) -> 进入预审页

        2、如果本地没有缓存 done

            开始玩游戏 -> 保存本地结果(接口判断) -> 登录页 -> 中间页(获取帐号信息+本地成绩，发送服务器) -> 

            进入预审页


3、此次开发项目环境问题

    1、开发环境地址（本地）

        开发代码位置在~/fe/ceshenjia目录下，需要build发布/data/www/finance/wap/growing/ceshenjia下

        地址：https://dev-m-jr.guazi.com/growing/ceshenjia/#/pages/start

        方便调试接口，和后端彪良的php代码，在同一分支进行开发(FINANCE-4299)开发

        host:  dev-m-jr.guazi.com配置的127.0.0.1 的host指向

        nginx: 将nginx的配置运行起来，guazi.conf包含证书支持https访问

    2、测试环境地址（线上）

        地址：https://m-jrtest.guazi.com/growing/ceshenjia/#/pages/start

        wap登录就是https://m-jrtest.guazi.com  无需配置host

        app地址：https://app2-jrtest.guazi.com/growing/ceshenjia/#/pages/first

        代码位置一切都不发生变化，只是需要将代码提交MergeRequest合并到develop分支（相当于common），

        宇哥合并下链接即可访问

    3、线上环境地址（实实在在的线上）

        地址：https://m-jr.guazi.com/growing/ceshenjia/#/pages/start

        app地址：https://app2-jr.guazi.com/growing/ceshenjia/#/pages/first

        代码会经过测试，确认没毛病后需要合并到master分支进行发布，以上就是访问地址

4、目前项目遇到的问题

    1、在wap中打开测一测，最后唤起登录的时候，有一个切换帐号点击无反应

    2、在app中打不开app版测一测加载不出来，但是可以打开m站的测一测

5、瓜子二手车wap项目

    1、跑起来项目所需配置

       将switchhost打开finance-wap-v2

       将nginx的配置运行起来，jr.siteapi.conf, jr.wap.server.conf, finance.conf, guazi_we.conf

       遇到问题，跳转跨域需要解决

6、Native-Api的问题
  
    1、本地测试app内部是否支持相关函数

    打开native-api的host（直接访问瓜子服务器的ip），在app的webview中跳转以下链接，查看支持情况

    http://sta.guazi.com/c2c_client/sale.html#native-test(手机访问需打开charles代理)

    另外存在的一种是stu.guazistatic.com，这种线上的是直接走cdn的，不需要配置host


