import {SWITCHCANTEEN} from "@/store/mutations-type";
import Vue from "vue"

export default {
  //方法
  switchCanteen(state,canteenName) {
    state.canteen = canteenName
  },
}