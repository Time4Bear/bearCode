<template>
  <div class="nav_login_state">
    <div class="pick_color" :class="{red: color == 'red', yellow: color == 'yellow', blue: color == 'blue', green: color == 'green'}"
         :title=getDer
    >
    </div>
    <div class="show_name">
      <h2>{{ $store.getters.showNum }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav_login_state",
  data() {
    return {
      color: this.$store.state.user_color,
    }
  },
  computed: {
    getDer() {
      switch (this.color){
        case 'red':
          return this.$store.state.user_color_title[0];
          break;
        case 'yellow':
          return this.$store.state.user_color_title[1];
          break;
        case 'blue':
          return this.$store.state.user_color_title[2];
          break;
        case 'green':
          return this.$store.state.user_color_title[3];
          break;
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .nav_login_state {
    float: right;
    position: relative;
    width: 200px;
    height: 49px;
    background-color: #2577e3;
  }
  .pick_color {
    position: absolute;
    width: 49px;
    height: 49px;
    right: 130px;
    border-radius: 50%;
    background-color: red;
  }
  .show_name {
    position: absolute;
    width: 130px;
    height: 49px;
    right: 0px;
    line-height: 5px;
    text-align: center;
    background-color: #ffff00;
  }
  .red {
    background-color: red;
  }
  .yellow {
    background-color: yellow;
  }
  .blur {
    background-color: blue;
  }
  .green {
    background-color: green;
  }
</style>