let MyInput = {
	props: ["value"],
	template: `<label>
		名前：
		<input type="text" v-model="internalValue">
	</label>
	`,
	computed: {
		internalValue: {
			get() {
				console.log(this.value);
				return this.value;
			},
			set(newValue) {
				console.log(this.value);
				if (this.value !== newValue) {
					this.$emit("input", newValue);
				}
			}
		}
	}
}

let app = new Vue({
	el: "#app",
	components: {
		"my-input": MyInput
	},
	data: {
		message: ""
	}
});