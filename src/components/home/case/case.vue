<template>
	<div class="business-case">
		<h3 class="home-case-title">案例展示<em>product</em></h3>
		<div id="business-swipe">
			<ul class="swipe-wrap">
				<li><img :src="imgUrl" alt=""/></li>
			</ul>
		</div>
		<a href="javascript:;" onclick="caseswipe.prev()" class="prev fa-angle-left"></a>
		<a href="javascript:;" onclick="caseswipe.next()"class="next fa-angle-right"></a>
	</div>

</template>

<script>

import case1 from './images/swipe-case01.jpg'

export  default {
	data (){
		
		return {
			imgUrl: case1
		}
	}
}

</script>



