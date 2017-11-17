<template>
	<div class="scroll-view">
		<Banner></Banner>
		<Case></Case>
		<Contact></Contact>
		<News></News>
		<Friendship></Friendship>
		<app-footer></app-footer>
	</div>
</template>

<script type="text/javascript">

	import Banner from '@/components/home/banner'
	
	import Case from '@/components/home/case'
	
	import Contact from '@/components/home/contact'
	
	import News from '@/components/common/news'
	
	import Friendship from '@/components/home/friendship'

	import appFooter from '@/components/home/footer'
	
	export default {
		components:{
			Banner,
			Case,
			Contact,
			News,
			appFooter,
			Friendship
		}
	}
</script>



