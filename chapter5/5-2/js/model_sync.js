let MyInput = {
	props: ["value"],
	template: `<label>
		名前：
		<input type="text" v-bind:value="value" v-on:input="$emit('update:value', $event.target.value)">
	</label>
	`
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