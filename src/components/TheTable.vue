<template>
<div class="div">
      <div class="card my-1" v-for="item in data" :key="item">
      <div class="card bg-glass hover" style="border-radius: 5px;">
            <div class="row">
              <div class="col-md-2 pe-5">
                <!-- <img
                  :src="item.image"
                  width="200"
                  style="border-radius: 5px;"
                  class="card-img-top ms-0"
                  alt="blank"
                /> -->
              </div>
              <div class="col-md-10 ps-0">
                <h6 class="card-title text-warning ms-1 ps-0 pt-3">
               <a :href="item.url" target="_blank"> {{item.name}}</a>
                </h6>
              </div>
            </div>
          </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'TheTable',
  props: ['data', 'logo']

}
</script>
