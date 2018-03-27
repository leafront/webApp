<template>
	<div>
		<div @click="togglePicker(true)">日期：{{selectPicker}}
		</div>
		
		<div>
			<DatePicker
				:startTime="start"
				:end="end"
				:selectValue="selectValue"
				:isPicker="isPicker"
				:isDays="isDays"
				:attr="attr"
				@togglePicker="togglePicker"
				@confirm="confirm">
			</DatePicker>
		</div>
	
	</div>
</template>

<script>
	import DatePicker from '@/components/widget/datePicker'
	
	export default {
		data () {
			return {
				start: 1980,
				end:  new Date().getFullYear(),
				selectValue: ['2001','02','01'],
				isPicker: false,
				isDays: true,
				attr: "selectPicker",
				selectPicker: ""
			}
		},
		components: {
			DatePicker
		},
		methods: {
			togglePicker (val) {
				
				this.isPicker = val
			},
			confirm (val) {
				this[this.attr] = val
			}
		}
	}
	
</script>