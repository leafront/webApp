<template>
  <div id="app">
	  <header id="header">
		  <div class="open-menu fl" :class="{'open-btn':isMenu}" @click="openMenu">
        <span class="open-top-bar"></span>
			  <span class="open-bot-bar"></span>
		  </div>
		  <img class="logo" @click="goHome" :src="imgLogo"/>
	  </header>
	  <slider-menu
		  @closeMenu="closeMenu"
		  :isMenu="isMenu">
	  </slider-menu>
	  <router-view class="transform" :class="{'menu-btn':isMenu}"/>
  </div>
</template>

<script>

import imgLogo from './images/logo.png';

import sliderMenu from '@/components/common/sliderMenu'

export default {
	 components: {
		 sliderMenu
	 },
   data () {
   	return {
   		
   		imgLogo: imgLogo,
	    
	    isMenu: false,
   		
    }
   },
	 methods: {
		 goHome () {
		 	
		 	this.$router.push('/');
		 	
		 },
		 openMenu () {
		 
		 	this.isMenu = !this.isMenu;
		 	
		 },
		 closeMenu (val) {
		 	
		 	this.isMenu = val;
		 	
		 }
	 }
}
</script>

<style  lang="scss" >
	@import './styles/main';
</style>

