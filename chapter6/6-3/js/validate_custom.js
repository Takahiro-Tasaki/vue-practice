Vue.use(VeeValidate, {locale: "ja", fastExit: false});

let app = new Vue({
	el: "#app",
	created: function () {
		console.log(this);
		this.$validator.extend("ngword", {
			getMessage(field, args) {
				return field + "で「" + args + "」は利用できない単語です。";
			},
			validate(value, args) {
				return args.every(function (arg) {
					return value.indexOf(arg) === -1;
				});
			}
		});
	}
});