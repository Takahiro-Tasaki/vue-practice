let app = new Vue({
  el: "#app",
  data: {
    current: new Date()
  },
  created: function() {
    let that = this;

    this.timer = setInterval(function() {
      that.current = new Date();
    }, 1000);
  },
  methods:{
    onclick: function() {
      clearInterval(this.timer);
    }
  }
});