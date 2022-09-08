<template>
	<div class="home">
		<h1>HOME</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { getList } from "apis/test";
export default defineComponent({
	name: "Home",
	setup(props, ctx) {
		onMounted(() => {
			getList({
				currPage: 1,
				size: 4,
			}).then((res) => {
				console.log(res);
			});
		});
	},
});
</script>

<style>
</style>