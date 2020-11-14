import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex)

export default new Vuex.Store({
  //推荐只使用一个state，不然会变得难以维护
  //这些属性都会被加入到响应式系统中：响应式系统会监听属性的变化，当属性发生变化使会通知所有界面中用到该属性的地方让界面发生刷新
  //在开发时(后期)添加的属性没有响应式，因为这个新加的属性在一开始没有被定义
  state: {
    // nav_login_state中的属性
    user_num: 1023 ,         //用户编号从1开始加
    user_color: 'red',           //用户阵营代表的颜色
    user_color_title: ['红色', '黄色', '绿色', '蓝色', ],       //自己设置的颜色div的title，鼠标悬浮可显示每种颜色所代表的内容

    // voteTitle中的属性
    canteen: '南苑',      //MapArea处点击的食堂，也是本次投票的食堂名*****
    canteenDesc: {
      dongyuanDesc: [],
      xiyuanDesc: ['22', '33'],
      nanyuanDesc: ['难吃', '卫生不好', '打饭量少', '态度差'],
      beiyuanDesc: [],
      pujiangDesc: [],
      xiangshanDesc: [],
      yaqingDesc: [],
    },    //自己设置的食堂的精选描述
    // voteTable中的属性
    vote_option: ['口味', '卫生', '饭量', '态度'],    //自己设置的投票选项数组
    vote_poll: [0, 0, 0, 0],    // Mytable中的票数 {des1: 0, des2: 0, des3: 0, des4: 0}*****
    //tableArea中的信息
    reference: '',     //投票区备注栏的内容*******
    referenceLength: 30,  //自己设置在这里可以方便的设置对文本框输入数字的限制
    //打印的表格信息
    canteens: ['东苑', '西苑','南苑' ,'北苑', '浦江', '象山', '亚青'],  //自己设置的食堂数组
    voteData: [
      {voteData_name: '东苑', voteData_sum: 100, voteData_items: [50, 0, 0, 0]},
      {voteData_name: '西苑', voteData_sum: 200, voteData_items: [50, 3, 2, 2]},
      {voteData_name: '南苑', voteData_sum: 300, voteData_items: [23, 50, 2, 2]},
      {voteData_name: '北苑', voteData_sum: 400, voteData_items: [2, 3, 2, 2]},
      {voteData_name: '浦江', voteData_sum: 500, voteData_items: [2, 3, 50, 2]},
      {voteData_name: '象山', voteData_sum: 600, voteData_items: [2, 3, 2, 50]},
      {voteData_name: '亚青', voteData_sum: 700, voteData_items: [2, 50, 2, 2]},
    ],
    //注册信息
    register_message: [{用户名: ''}, {密码: ''}, {邮箱: ''}],
    register_error_mess:['saddadadad'],

  },
  //Vuex的store状态的更新的唯一方式：提交Mutation。
  //字符串的事件类型（type） 一个回调函数（handler），该回调函数的第一个参数就是state
  //Vuex要求我们Mutations的方法必须是同步方法，不要在mutations中使用异步操作
  //主要是我们使用devtools时，可以帮助我们捕捉mutation的快照，如果异步操作，那么devtool将不能很好的追踪这个操作什么时候被完成
  mutations: mutations,
  //Action类似于Mutation，但是是用来代替Mutation进行异步操作的
  //context:上下文，这里理解为store对象
  actions: {

  },
  //从store中获取一些state变异后的状态
  getters,
  // 导入store对象，模块里定义的mutations与被调用时和普通的语句一样(先去store中的mutations中找，再到module中的找)
  modules: {
  }
})
