## 写份文档，简单分析下vue组件抽象规则

1、表单组件

    login           // 登录表单

    // 这里的手机号校验，是登录校验
    // mt-field里的state都属于显示校验

2、成员组件
    
    // 表单用的都是v-model, 进行双向绑定数据
    // mt-field     这个是Mint UI的Field组件
    // 参考地址： http://mint-ui.github.io/docs/#/zh-cn2/field
    // 项目中，都是动态绑定参数，由父元素传入决定
    // 三个表单元素都要监听变化值，返回给父组件引用的v-model

    1、UserName        // 用户名

    // <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>  demo

    实际:  
    <mt-field :label="label" :placeholder="placeholder" v-model="username" :state="state"></mt-field>
        
    用户名组件右侧，为了显示是否准确（state: success, error, warning）,
    需要对输入的userName进行校验，或是中文检验、或是字母组合校验等,当然不校验可是设置state:''



    2、UserValidate    // 验证码, 密码

    // <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password">
    // </mt-field>  demo

    实际:
    <mt-field :label="label" :placeholder="placeholder" type="password" v-model="password">
    </mt-field>

    验证码按钮，为了显示是否激活状态，需要父组件（也就是login）传入userPhone进行校验



    3、UserPhone       // 用户电话

    // <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>  demo

    实际:
    <mt-field :label="label" :placeholder="placeholder" type="tel" v-model="valuePhone" :state="state"></mt-field>

    电话号码组件右侧，为了显示是否准确（state: success, error, warning），需要对输入的valuePhone进行校验

        