Vue.directive("highlight", {
	bind: function (el, binding, vnode, oldVnode) {
		el.style.backgroundColor = binding.value;
	}
});

let app = new Vue({
	el: "#app",
	data: {
		color: "yellow"
	}
});