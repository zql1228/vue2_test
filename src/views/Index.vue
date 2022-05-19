<template>
  <div>
    <Student></Student>
    <School> </School>
  </div>
</template>
<script>
import Student from '../components/Student.vue'
import School from '../components/School.vue'
export default {
  name: 'Index',
  components: { Student, School },
  data() {
    return {}
  },
  mounted() {
    this.hello()
  },
}
</script>

<style></style>
