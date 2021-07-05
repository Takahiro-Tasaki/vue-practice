let app = new Vue({
  el: "#app",
  data: {
    memo: 0
  },
  methods: {
    onchange: function() {
      console.log("入力値は「" + this.memo + "」です。");
    }
  }
});