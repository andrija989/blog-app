<template>
  <div>
    <h3>{{post.title}}</h3>
    <p>{{post.text}}</p>
    <router-link :to="routeToPost(post.id)">View Post</router-link>
  </div>
</template>

<script>
export default {
  props: ['post'],

  methods: {
    routeToPost(id) {
      return `/post/${id}`;
    }
  }
};
</script>

<style>
</style>
