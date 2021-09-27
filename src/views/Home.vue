<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <section>
      <div class="container py-3">
        <div class="row">
            <div class="card">
              <div class="card-body">
              </div>
          </div>
        </div>
      </div>
    </section>
    <!-- another section -->
    <section>
      <div class="container">
        <div class="row mx-auto py-2">
            <div class="col border">
              <h2>Vue</h2>
              <img src="../assets/js.png" width="250" alt="">
                  <TheTable  :data="this.$store.getters.vue"  />
            </div>
            <div class="col border">
              <h2>Design</h2>
              <img src="../assets/undraw.png" width="250" alt="">
                  <TheTable  :data="this.$store.getters.design"  />
            </div>
            <div class="col border">
              <h2>Development</h2>
              <img src="../assets/dev.png" width="250" alt="">
                  <TheTable  :data="this.$store.getters.development"  />
            </div>
          </div>

          <!-- <div class="row">
             <div class="col border">
              <img src="../assets/apps.png" width="250" alt="">
                  <TheTable  :data="this.$store.getters.vue"  />
            </div>
              <div class="col border">
              <img src="../assets/js.png" width="250" alt="">
                  <TheTable  :data="this.$store.getters.vue"  />
            </div>
          </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TheTable from '@/components/TheTable.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    TheTable
  },
  data () {
    return {

    }
  },
  methods: {
    getData () {
      axios.get('https://ted2xmen.github.io/bookmarks/db.json')
        .then((res) => {
          this.$store.state.bookmarks = res.data
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
