<template>
	<div class="weui-picker" :class="{'active':isPicker}">
		<div class = "weui-picker__hd">
			<span class="weui-picker__action" @click="cancel">取消</span>
			<span class="weui-picker__action" @click="confirm">确定</span>
		</div>
		<div class = "weui-picker__bd">
			<div class="weui-picker__group">
				<ul class="weui-picker__content" id = "webui-year">
					<li v-for="num in 3"></li>
					<li class="weui-picker__item" v-for="(item,index) in pickerData">{{item.label}}</li>
					<li v-for="num in 3"></li>
				</ul>
				<div class="weui-picker__mask"></div>
				<div class="weui-picker__indicator"></div>
			</div>
			<div class="weui-picker__group">
				<ul class="weui-picker__content" id = "webui-month">
					<li v-for="num in 3"></li>
					<li class="weui-picker__item" v-for="(item,index) in months">{{item.label}}</li>
					<li v-for="num in 3"></li>
				</ul>
				<div class="weui-picker__mask"></div>
				<div class="weui-picker__indicator"></div>
			</div>
			<div class="weui-picker__group" v-if="isDays">
				<ul class="weui-picker__content" id = "webui-date">
					<li v-for="num in 3"></li>
					<li class="weui-picker__item" v-for="(item,index) in dates">{{item.label}}</li>
					<li v-for="num in 3"></li>
				</ul>
				<div class="weui-picker__mask"></div>
				<div class="weui-picker__indicator"></div>
			</div></div>
	</div>
</template>

<script>

	import IScroll from '@/lib/iScroll'
	export default {
		props: {
			start: {
				default: 1980,
				type: Number
			},
			end: {
				default: 2018,
				type: Number
			},
			selectValue: {
				default: () => {
					return ['2001','02','01']
				},
				type: Array
			},
			isPicker: {
				default: false,
				type: Boolean
			},
			isDays: {
				default: false,
				type: Boolean
			},
			selectPicker: {
				default: '',
				type: String
			}
		},
		data () {
			return {
				selectYear: this.selectValue[0] - this.start,
				selectMonth:  this.selectValue[1] - 1,
				selectDate:  this.selectValue[2] - 1,
				scroll: [],
				checkedDate: [],
				pickerData: [],
			
			}
		},
		computed: {
			months () {
				
				return this.pickerData[this.checkedDate[0]].children
			},

			dates () {
				return this.months[this.checkedDate[1]].children
			}
		},
		created () {
			this.initData()
			this.checkedDate = [this.selectYear, this.selectMonth, this.selectDate]
		},
		watch: {
			isPicker () {
				setTimeout(() => {
					this.scrollList()
				},200)
			}
		},
		methods: {
			initData () {
				let data = []
				const daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]           //所有月份的天数
				for (let i = this.start; i <= this.end; i++) {
					let months = []
					if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {                     //判定为闰年
						daysTotal[1] = 29
					} else {
						daysTotal[1] = 28
					}
					for (let j = 0; j < 12; j++) {
						let dates = []
						for (var k = 1; k < daysTotal[j] + 1; k++) {
							let date = {
								label: k + '日',
								value: k
							}
							dates.push(date)
						}
						months.push({
							label: j + 1 + '月',
							value: j + 1,
							children: dates,
						})
					}
					let year = {
						label: i + '年',
						value: i,
						children: months
					}
					data.push(year)
				}
				this.pickerData = data
			},
			scrollList () {
				var self = this
				this.scroll = []
				
				var itemHeight = document.querySelector('.weui-picker__item').offsetHeight
				var itemEle = document.querySelectorAll('.weui-picker__item')
				var groupEle = document.querySelectorAll('.weui-picker__group')
				var len = groupEle.length
			
				Array.from(groupEle).forEach((item,idx) => {
					var iscroll = new IScroll(item, {
						scrollX: false
					})

					self.scroll.push(iscroll)

					iscroll.on('scrollEnd', function () {

						var itemLen = item.querySelectorAll('.weui-picker__content li').length - 7

						var result = ( -this.y / itemHeight)

						if (result > itemLen) {
							result = itemLen
						}

						var index = parseInt(result, 10)

						var diff = result - index

						if (diff > 0.5) {
							index++;
						}
						self.checkedDate.splice(idx,1,index)
		
						self.scroll[len-1].refresh();
						iscroll.scrollTo(0, -index * itemHeight)
					})
					this.scroll[idx].scrollTo(0, -self.checkedDate[idx] * itemHeight)
				})
			},
			cancel () {

				this.$emit('togglePicker',false)
			},
			confirm () {
				let value = this.checkedDate[0] + this.start + '年' + (this.checkedDate[1] + 1) + '月';
				if (this.isDays) {
					value += (this.checkedDate[2] + 1) + '日'
				}
				this.$emit('togglePicker',false)
				this.$emit('confirm',value)
			}
		}
	}

</script>

<style scoped>
	
	.weui-picker {
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		z-index: 5000;
		transform: translateY(100%) translate3d(0, 0, 0);
		
		transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
		background: #fff;
	}
	
	.weui-picker.active {
		transform: translateY(0)
	}
	.weui-picker__hd {
		display: flex;
		background-color: #fbf9fe;
		position: relative;
		text-align: center;
	}
	.weui-picker__hd:after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-bottom: 1px solid #E5E5E5;
		color: #E5E5E5;
		transform-origin: 0 100%;
		transform: scaleY(0.5);
	}
	.weui-picker__action {
		display: block;
		flex: 1;
		color: #586C94;
		padding: 10px 15px;
		font-size: 16px;
	}
	.weui-picker__action:first-child {
		text-align: left;
	}
	.weui-picker__action:last-child {
		text-align: right;
	}
	.weui-picker__bd {
		display: flex;
		position: relative;
		background-color: #fff;
		height: 238px;
		overflow: hidden;
	}
	.weui-picker__group {
		flex: 1;
		position: relative;
		height: 100%;
	}
	.weui-picker__mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		z-index: 3;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
		background-position: top, bottom;
		background-size: 100% 102px;
		background-repeat: no-repeat;
		transform: translateZ(0);
	}
	.weui-picker__indicator {
		width: 100%;
		height: 34px;
		position: absolute;
		left: 0;
		top: 102px;
		z-index: 3;
	}
	.weui-picker__indicator:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #E5E5E5;
		color: #E5E5E5;
		transform-origin: 0 0;
		transform: scaleY(0.5);
	}
	.weui-picker__indicator:after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-bottom: 1px solid #E5E5E5;
		color: #E5E5E5;
		transform-origin: 0 100%;
		transform: scaleY(0.5);
	}
	.weui-picker__content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.weui-picker__content li{
		line-height: 34px;
		height:34px;
		text-align: center;
		color: #000;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size:16px;
	}
	.weui-picker__item_disabled {
		color: #999999;
	}
</style>