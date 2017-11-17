<template>
  <div class = "scroll-view">
    <div class = "project-page">
      <div class="cate-nav">
        <span>全部</span>
      </div>
           <ul class="team-list">

       <li v-for="item in list">
          <img :src="item.img"/>
           <div class="team-list-desc">
               <h5>{{item.name}}</h5>
               <span>{{item.title}}</span>
               <p>{{item.content}}</p>
           </div>
       </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import pic1 from './images/team_pic01.jpg'

  import pic2 from './images/team_pic02.jpg'

  import pic3 from './images/team_pic03.jpg'

  import pic4 from './images/team_pic04.jpg'

  import pic5 from './images/team_pic05.jpg'

  export default {

    data () {

      return {

        list: [{
          img: pic1,
          name:'曾媚',
          title: '设计师',
          content:`世界权威电子设计杂志 NEWWEBPICK 推荐设计师 收录电子杂志 （第29期）
              新西兰GOUW设计师平台收录
              欧美css设计奖项 cssdesignawards获奖作品
              中国设计联盟2010-11中国十佳网页(互动)设计师及专访设计师
              曲美家具电脑桌面壁纸设计活动 设计评委
              受站酷邀请出版资深设计师的Photoshop创意课丛书
              受邀到飞信进行设计指导讲座 受邀到呱呱视频社区进行设计指导讲座`
        },{
          img: pic2,
          name:'肖欢',
          title:'设计师',
          content:'3年交互体验设计经验，曾服务于神灯理财、润恒集团、汇爱、尚雯婕工作室、ews物流、微播、影时尚、正觉、中天龙等'
        },{
          img: pic3,
          name: '崔莎莎',
          title: '设计总监、资深设计师',
          content: '5年交互体验设计经验，层服务于北京建筑设计研究院（BIAD）、日本电通、联想集团、凤凰传媒、海尔商城、中美设计顾问、佰程旅行网、尚雯婕工作室、黑金时尚、金银岛、德雅视界、汇爱、汀美吉、崔友光律师事务所、鲸鲨软件、节点通、中天龙影视等'
        },{
          img: pic4,
          name:'甄瑞芳',
          title: '总经理、资深设计师',
          content:'9年交互体验设计经验，曾服务雅虎、腾讯、搜狐、新浪、民生银行、北京电视台、宽地摄影、北大方正、欧珀莱、贝玲妃、鼎视传媒、怡海花园、5100矿泉水、SEGWAY、Canon、MIRAPOINT(美邮特)、道达尔、新奥特、HC28、山东硅院、武汉金地、中国抗癌网、颐信科技等客户。作品被国际上多个设计杂志收录和媒体专访等'
        },{
          img: pic5,
          name:'张政',
          title:'程序架构师，技术总监',
          content:'7年互联网经验，曾服务于搜狐火炬传递、北京建筑设计研究院、日本电通、影时尚、宝迪集团、牛扒工厂、悠怡蓝海、富士达电动车、南中圣淇、伟德福思、安陆恩彼、uelike官网、uehtml平台、uemo产品等'
        }]

      }

    }
  }

</script>
