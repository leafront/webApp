<template>
  <div class = "scroll-view">
    <div class = "project-page">
      <div class="cate-nav">
              <span>全部</span><i class="btn-down fa fa-angle-down transform"></i>
          </div>
          <div class="project-case">
           <ul class="home-case-list">
               <li v-for="item in list"><a href="#"><img :src="item.img" alt=""/></a></li>
           </ul>
      </div>
    </div>
  </div>
</template>
<script>

  import case1  from './images/home-case01.jpg'
  import case2  from './images/home-case02.jpg'
  import case3  from './images/home-case03.jpg'
  import case4  from './images/home-case04.jpg'
  import case5  from './images/home-case05.jpg'
  import case6  from './images/home-case06.jpg'
  import case7  from './images/home-case07.jpg'
  import case8  from './images/home-case08.jpg'


  export default {

    data () {

      return {

        list:[{
          img:case1
        },{
          img:case2
        },{
          img:case3
        },{
          img:case4
        },{
          img:case5
        },{
          img:case6
        },{
          img:case7
        },{
          img:case8
        }]

      }

    }
  }
</script>
