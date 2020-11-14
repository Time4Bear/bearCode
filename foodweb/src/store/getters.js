export default {
  //显示用户的名字：NO.+数字 数字前补零为四位数
  showNum (state) {
    let pad = "0000";
    let userNum = state.user_num.toString();
    let username = pad.substring(0, pad.length - userNum.length) + userNum
    return ('NO.' + username);
  },
  //显示某食堂的 精选评价
  getCanteenDesc (state) {
    switch (state.canteen){
      case '南苑':
        return state.canteenDesc.nanyuanDesc;
        break;
      case '西苑':
        return state.canteenDesc.xiyuanDesc;
    }
  },
  // getOptionIndex (state, option) {
  //   // console.log("获得第一个选项的选择个数：" + starNum);
  //   switch (option) {
  //     case this.$store.state.vote_option[0] :
  //       return 0;
  //       break;
  //     case this.$store.state.vote_option[1] :
  //       return 1;
  //       break;
  //     case this.$store.state.vote_option[2] :
  //       return 2;
  //       break;
  //     case this.$store.state.vote_option[3] :
  //       return 3;
  //       break;
  //   }
  // }
}