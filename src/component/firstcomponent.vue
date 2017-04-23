<template>
  <div>
    Component No.{{index}}  title: {{title}}
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
    };
  },
  props:{
    index: Number,
    title : String
  }
};
</script>

<style>

</style>
