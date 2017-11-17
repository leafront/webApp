<template>
	<div class="scroll-view">
		<div class = "business-page">
			<ul class="business-page-list">
				<li v-for="item in list">
					<img :src="item.img"/>
					<span>{{item.title}}</span>
					<p>{{item.content}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>

	import swipeCase1 from './images/swipe-case01.jpg'

	import swipeCase2 from './images/swipe-case01.jpg'

	import swipeCase3 from './images/swipe-case03.jpg'

	export default {

		data () {
			return {
				list:[{
					img: swipeCase1,
					title: '写真摄影',
					content: '自国母彭丽媛使用努比亚拍照的图片被媒体曝光但也有部分网友对其质疑'
				},{
					img: swipeCase2,
					title: '动物摄影',
					content: '我们用10年的建站经验，打造出适合中小企业的高端企业模板-UEMO，精致的设计，人性化的后台...'
				},{
					img: swipeCase3,
					title: '儿童摄影',
					content: '我们是UELIKE(北京优艺客文化传播有限公司)，是一个有着研发精神和创新精神的团队。'
				}]
			}

		}
	}
</script>
