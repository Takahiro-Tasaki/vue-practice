Vue.directive("highlight", {
	bind: function (el, binding, vnode, oldVnode) {
		el.addEventListener("mouseenter", function () {
			this.style.backgroundColor = binding.value;
		}, false);
		el.addEventListener("mouseleave", function () {
			this.style.backgroundColor = null;
		}, false);
	}
});

let app = new Vue({
	el: "#app",
	data: {
		color: "red"
	}
});