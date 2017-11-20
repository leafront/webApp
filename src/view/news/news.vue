<template>
	<div class="scroll-view-wrapper">
		<div class="scroll-view">
			<div class="news-page">
				<div class="cate-nav">
					<span>全部</span>
					<i class="btn-down fa fa-angle-down transform"></i>
				</div>
				<News></News>
			</div>
		</div>
  </div>
</template>

<script>

	import News from '@/components/common/news'
	
	export default {
		
		components: {
			News
		}
	}
	
</script>