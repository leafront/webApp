<template>
 <div class="slideshow-wrap" id = "sliderWrap"></div>

</template>

<script>
	
  import UISlider from '@/components/widget/UISlider'

	import banner1 from './images/banner01.jpg'
	import banner2  from './images/banner02.jpg'
	import banner3 from  './images/banner03.jpg'
	
	export default {
		data: function () {
			return {
				bannerList:[
					{
						imgUrl:banner1
					},{
						imgUrl:banner2
					},{
						imgUrl:banner3
					}
				]
			}
		},
		mounted () {
			var sliderShow = new UISlider({
				data: this.bannerList,
				ele: 'sliderShow',
				autoTime: 5000,
		    slideItem: '.slideshow-item',
        sliderLi: '.slideshow-item li',
        sliderBtn: '.slideshow-dots li',
				renderHTML: function (options) {
					var sliderImg = options.data.map((item) => {
						return `<li><img src="${item.imgUrl}"></li>`
					}).join('')
					var sliderActive = options.data.map((item,index) => {
						if (index == 0) {
							return `<li class="active"></li>`
						} else {
							return `<li></li>`
						}
					}).join('')
					var sliderHtml =
						`<ul class="slideshow-item" id = "sliderShow">
              ${sliderImg}
            </ul>
            <ul class="slideshow-dots">
              ${sliderActive}
            </ul>`
				 document.getElementById('sliderWrap').innerHTML = sliderHtml;
				}
			})
			sliderShow.start();
		}
	}
</script>

<style lang="scss">
	
	.slideshow-wrap {
		overflow: hidden;
		position: relative;
		height: 2.25rem;
		background:#f4f4f8;
	}
	
	.slideshow-item {
		width: 20000px;
	}
	
	.slideshow-item li {
		width: 3.75rem;
		height: 100%;
		float: left;
		overflow: hidden;
		position: relative
	}
	
	.slideshow-item img {
		width: 3.75rem
	}
	
	.slideshow-dots {
		position: absolute;
		bottom: .2rem;
		left: 50%;
		color: #fff;
		font-size: .16rem;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%)
	}
	
	.slideshow-dots li {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #fff;
		float: left;
		margin: 0 8px;
	}
	
	.slideshow-dots li.active {
		background-color: #fa5a4b
	}

</style>



