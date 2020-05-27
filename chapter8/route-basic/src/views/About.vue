<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="onClick">トップへ</button>
    <button v-on:click="onClickBefore">戻る</button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$router.push('/');
      },
      onClickBefore() {
        this.$router.replace('/');
      }
    }
  }
</script>