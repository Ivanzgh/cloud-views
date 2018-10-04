<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .clearfix::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .img-item{
    width: 80px;
    height: 100px;
  }
</style>
