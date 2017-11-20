function UISlider(options) {
	this.options = {
		ele:null,
		step: 20,
		autoPlay: true,
		slideItem: '.slideshow-item',
		sliderLi: '.slideshow-item li',
		sliderBtn: '.slideshow-dots li',
		// 初次显示第几张
		index: 1,
		// 阻止页面上下滑动
		preventDefault: false
	}

	Object.assign(this.options,options);
}
UISlider.prototype = {
	constructor:UISlider,
	start () {

		this.init(this.options);

		const ele = this.options.ele;

		ele.addEventListener('touchstart',(e) => {
			this.touchstart(e);
		})
		ele.addEventListener('touchmove',(e) => {
			this.touchmove(e);
		})
		ele.addEventListener('touchend',(e) => {
			this.touchend(e);
		})
	},
	touchstart (e) {

		var point = e.touches ? e.touches[0] : e;
		this.startX = this.endX = point.pageX;
		this.startY = this.endY = point.pageY;
		this.isValid = true;
		this.isCheck = false;
		this._start(e);
	},
	touchmove (e) {
		if (!this.isValid) return;
		var point = e.touches ? e.touches[0] : e;
		this.endX = point.pageX;
		this.endY = point.pageY;

		var differX = this.endX - this.startX;
		var differY = this.endY - this.startY;
		if (!this.isCheck) {
			if (Math.abs(differY) > Math.abs(differX)) {
				this.isValid = false;
				return;
			}
			this.isCheck = true;
		}

		this._move(e, differX);
		e.preventDefault();
	},
	touchend (e) {
		if (!this.isValid) return;
		this._end();
	},
	init (options) {

		options.renderHTML(options);

		options.ele = document.getElementById(options.ele);

		options.wrapper = document.querySelector(options.slideItem);

		options.slider = document.querySelectorAll(options.sliderLi);

		options.pagination = document.querySelectorAll(options.sliderBtn);

		this.startTime = new Date().getTime();

		this.itemLength = options.pagination.length;

		var firstElement = options.wrapper.firstElementChild;

		var lastElement = options.wrapper.lastElementChild;

		var firstEleClone = firstElement.cloneNode(true);

		var lastEleClone = lastElement.cloneNode(true);

		firstElement.insertAdjacentElement('beforebegin',lastEleClone);

		lastElement.insertAdjacentElement('afterend',firstEleClone);

		this.options.itemWidth = options.slider[0].offsetWidth;

		this.setWrapperPos(-options.index * this.options.itemWidth);

		this.startAutoPlay();

	},
	_start () {
		this.clearAnimate();
		var left = this.options.wrapper.style.transform;
		// left可能有小数
		this.x = parseInt(left.match(/\(([-\.\d]+)px,/)[1], 10);
		// 控制快速滑动
		if (new Date().getTime() - this.startTime < 300) {
			this.isValid = false;
		}
		if (this.options.preventDefault) {
			this.isCheck = true;
		}
	},
	_move (e, differX) {
		this.setWrapperPos(this.x + differX);
	},
	_end () {
		var left = this.options.wrapper.style.transform;
		var distance = -parseInt(left.match(/\(([-\.\d]+)px,/)[1], 10);
		var width = this.options.itemWidth;
		if (this.startX > this.endX) {
			this.x = - Math.ceil(distance / width) * width;
		} else {
			this.x = - Math.floor(distance / width) * width;
		}

		this.options.wrapper.style.cssText = 'transition:300ms cubic-bezier(0.22, 0.69, 0.72, 0.88);-webkit-transition:300ms cubic-bezier(0.22, 0.69, 0.72, 0.88)';
		this.setWrapperPos(this.x);

		var index = -this.x / width;
		// 最后控制
		if (this.x >= 0) {
			index = this.itemLength;
			setTimeout(() => {
				this.clearAnimate();
				this.setWrapperPos(-this.itemLength * width);
			}, 300);
			this.startTime = new Date().getTime();
		} else if (Math.abs(this.x) >= (this.itemLength +1) * width) {
			index = 1;
			setTimeout(() => {
				this.clearAnimate();
				this.setWrapperPos(-width);
			}, 300);
			this.startTime = new Date().getTime();
		}
		this.options.index = index;
		this.paginationActive();
		this.startAutoPlay();
	},
	setWrapperPos (x) {
		this.options.wrapper.style.transform = 'translate3d(' + x + 'px, 0, 0)';
		this.options.wrapper.style.WebkitTransform = 'translate3d(' + x + 'px, 0, 0)';
	},
	clearAnimate () {
		this.options.wrapper.style.transition =  'none';
	},
	autoPlay () {
		var options = this.options;
		options.index++;
		var x = -options.index * options.itemWidth;
		if (options.index > this.itemLength) {
			options.index = 1;
			setTimeout(() => {
				this.clearAnimate();
				this.setWrapperPos(-options.itemWidth);
			}, 310);
		}

		this.paginationActive();
		options.wrapper.style.cssText = 'transition:300ms ease-in; -webkit-transition:300ms ease-in; transform: translate3d(' + x + 'px, 0, 0); -webkit-transform:translate3d(' + x + 'px, 0, 0)';
	},
	startAutoPlay () {
		if (this.options.autoPlay && this.itemLength > 1) {
			this.stopAutoPlay();
			this.autoPlayTimer = setInterval(() => this.autoPlay(), this.options.autoTime);
		}
	},
	stopAutoPlay () {
		if (this.autoPlayTimer) {
			clearInterval(this.autoPlayTimer);
			this.autoPlayTimer = null;
		}
	},
	paginationActive () {
		var options = this.options;
		for (var i = 0; i < options.pagination.length; i++) {
			options.pagination[i].classList.remove( 'active');
		}
		options.pagination[options.index - 1].classList.add('active');
	}
}

export default UISlider;

