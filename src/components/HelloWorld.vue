<template>
  <div>
 
   
  </div>
</template>

<script>

export default {
  name: "simple",
  components: {

  },
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        return { title: `Item ${i}`, content: `🚀 Simple content ${i}` };
      }),
      options: {},
    };
  },
};
</script>

<style scoped>
.item {
  padding: 16px 24px;
  border-radius: 3px;
  background: #f5f5f5;
}
</style>

