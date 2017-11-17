<template>
	<div class="links">
		<ul class="links-list">
			<li v-for="item in linkList">
				<img :src="item.img" alt=""/>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import link1 from './images/link01.png'
	
	import link2 from './images/link02.png'
	
	import link3 from './images/link03.png'
	
	import link4 from './images/link04.png'
	
	import link5 from './images/link05.png'
	
	import link6 from './images/link06.png'
	
	export default {
		
		data () {
			
			return {
				
				linkList: [{
					img: link1
				},{
					img: link2
				},{
					img: link3
				},{
					img: link4
				},{
					img: link5
				},{
					img: link6
				}]
				
			}
		}
	}
</script>