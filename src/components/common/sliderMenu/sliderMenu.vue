<template>
	<div class="leftMenu transform" :class="{'menu-slider':isMenu}">
		<nav class="leftMenu-list">
			<li class="btns-menu" @click="actionRouter('/')">
				<i class="circle"></i>首页
			</li>
			<li>
				<a href="javascript:;" class="btns-project" @click="showDropMenu"><i class="circle"></i>项目</a>
				<div class="more">
					<span class="more-v transform" :class="{'more-slide':dropMenu}"></span>
					<span class="more-h"></span>
				</div>
				<dl class="subNav transform" :class="{'subNav-slide':dropMenu}">
					<dt class="btns-subNav" @click="actionRouter('/project/case')"><i class="fa fa-angle-right"></i>案例展示</dt>
					<dd class="btns-subNav" @click="actionRouter('/project/team')"><i class="fa fa-angle-right"></i>UE MO团队</dd>
				</dl>
			</li>

			<li class="btns-menu" @click="actionRouter('/business')"><i class="circle"></i>业务流程</li>
			<li class="btns-menu" @click="actionRouter('/contact')"><i class="circle"></i>关于我们</li>
			<li class="btns-menu" @click="actionRouter('/news')"><i class="circle"></i>新闻</li>
		</nav>
	</div>
</template>

<script>

	export default {

		props: ['isMenu'],

		data (){

			return {

				isOpenMenu: this.isMenu,

				dropMenu: false
			}

		},

		methods: {

			actionRouter (url) {

				this.$router.push(url)

				this.isOpenMenu = false;

				this.$emit('closeMenu',this.isOpenMenu);

			},

			showDropMenu () {

				this.dropMenu = !this.dropMenu;

			}

		}

	}

</script>
