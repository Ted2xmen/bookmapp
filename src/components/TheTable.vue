<template>
  <div class="col border mx-2 my-4 py-3">
    <img src="../assets/undraw.png" width="250" alt="">
    <div class="card my-1"  v-for="item in 5" :key="item"  >

      <div class="card-body">
          <a :href="url" target="_blank">
              <img :src="resim" alt="" width="120">
              {{item.image}}</a>
              <p>{{item.url}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTable',
  props: ['resim', 'url', 'data']

}
</script>
