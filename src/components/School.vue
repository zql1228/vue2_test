<template>
  <div>
    <h5>姓名:{{ name }}</h5>
    <h5>学校:{{ school | mySlice }}</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '张三2',
      school: '不知道？？？',
    }
  },
  mounted() {},
}
</script>

<style scoped></style>
