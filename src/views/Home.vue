<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <section>
      <div class="container">
        <div class="row">
            <div class="card">
              <div class="card-body">
                {{payload}}
              </div>
          </div>
        </div>
      </div>
    </section>
    <!-- another section -->
    <section>
      <div class="container">
        <div class="row">
          <!-- <TheTable :veriholder="title1" /> -->
           <TheTable v-for="item in items" :data="items" :key="item" :resim="item.image" :url="item.url" :title="title2"/>
           <!-- s -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TheTable from '@/components/TheTable.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    TheTable
  },
  data () {
    return {
      payload: [],
      title2: 'Erdem',
      resim: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png',
      items: [
        { image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png', url: 'https://dribbble.com/' },
        { image: 'https://www.uidesigndaily.com/public/img/uidesigndaily-logo.svg', url: 'https://www.uidesigndaily.com/' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1280px-Behance_logo.svg.png', url: 'https://www.behance.net/' },
        { image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png', url: 'https://dribbble.com/' },
        { image: 'https://www.uidesigndaily.com/public/img/uidesigndaily-logo.svg', url: 'https://www.uidesigndaily.com/' }
      ]
    }
  },
  methods: {
    getData () {
      fetch('./db.json')
        .then(response => response.json())
        .then(json => (this.payload = JSON.parse(json)))
    }
  },
  created () {
    this.getData()
  }
}
</script>
