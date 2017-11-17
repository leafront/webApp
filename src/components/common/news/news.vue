<template>
	<article class="home-news">
		<h3 class="home-case-title">案例展示<em>product</em></h3>
		<ul class="home-news-list">
			<li v-for="item in list">
				<time>{{item.times}}</time>
				<h4>{{item.title}}</h4>
				<p>{{item.content}}</p>
			</li>
		</ul>
		<a href="#" class="home-news-more">MORE</a>
	</article>
</template>
<script>
	export default {
		data () {
			
			return {
				list: [{
					times:'2015-08-05',
					title:'UEMO后台初步完成，已经进入测试阶段。',
					content:'千呼万唤始出来，千树万树梨花开。等了这么久，勤劳的技术哥哥马不停蹄的敲着代码，终于UEMO的后台于今日初步完成，已经“duang~ duang~”的进入了测（zhao）试（cha）阶段。虽然技术哥哥有着超乎自信的小眼神，但我们是不会放过任何一个不完美，不人性的Bug的。'
				},{
					times:'2015-07-30',
					title:'企业版UEMO的设计部分已完成二十余套！',
					content: '经过多年的研究与调查，从今年的6月开工设计至今，勤劳的设计精英们已完成二十余套企业版UEMO。每一套设计我们都细心研究，集体讨论。从美观度到延展性，从体验度到适用性。技术哥哥前端姐姐提出的中肯建议，设计师们都虚心接受，悉心改良。技术哥哥也在快马加鞭的赶制后台部分，相信过不了多久一套完整的产品就可以跟大家见面了！'
				},{
					times: '2015-06-18',
					title: '让早期的想法变为现实！',
					content: '经过多年的研究与调查，从今年的6月开工设计至今，勤劳的设计精英们已完成二十余套企业版UEMO。每一套设计我们都细心研究，集体讨论。从美观度到延展性，从体验度到适用性。技术哥哥前端姐姐提出的中肯建议，设计师们都虚心接受，悉心改良。技术哥哥也在快马加鞭的赶制后台部分，相信过不了多久一套完整的产品就可以跟大家见面了！'
				}]
			}
		}
	}
</script>