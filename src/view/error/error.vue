<template>
	<div>
		<h2 style="text-align:center;margin:2.5rem 0 .2rem;font-size:.2rem;">很抱歉，您要访问的页面不存在！</h2>
	  <div style="font-size:.18rem;text-align:center;text-decoration:underline;color:#00c" @click="goHome">点击回首页</div>
	</div>
	
</template>

<script>

 export default {

	 methods: {
		 goHome() {

			 this.$router.push('/')

		 }

	 }
 }

</script>
