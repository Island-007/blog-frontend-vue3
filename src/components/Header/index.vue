<template>
	<div class="header">
		<ul class="nav-list">
			<li v-for="(item, index) in navList" :key="index" class="nav-item">
				<router-link :to="item.link" class="link">{{ item.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Header",
	data() {
		return {
			navList: [
				{
					name: "首页",
					link: "/",
				},
				{
					name: "页面一",
					link: "/article-list",
				},
				{
					name: "页面二",
					link: "/page-test",
				},
			],
		};
	},
});
</script>

<style lang="less" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-color: #282c34;
	z-index: 999;
	.nav-list {
		padding: 0 60px;
		.nav-item {
			position: relative;
			display: inline-block;
			padding: 0 20px;
			height: 60px;
			line-height: 60px;
			cursor: pointer;
			transition: all 3s ease-in-out;
			&::after {
				content:'';
				display: inline-block;
				position: absolute;
				left:0;
				right:0;
				bottom:0;
				width: 0%;
				height: 2px;
				background-color: #f0ffff;
			}
			&:hover {
				&::after {
					width: 100%;	
				}
				.link {
					color:#fff;
				}
			}
			.link {
				font-size: 16px;
				color: rgba(240, 255, 255,0.8);
			}
		}
	}
}
</style>