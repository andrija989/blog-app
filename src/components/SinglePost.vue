<template>
  <div>
    <h3>{{post.title}}</h3>
    <p>{{post.text}}</p>
    <p>{{humanFormat(post.createdAT)}}</p>
    <router-link :to="routeToPost(post.id)">View Post</router-link>
    <router-link :to="routeToEdit(post.id)">Edit</router-link>
    
  </div>
</template>

<script>
import { dataMixin } from  '@/mixins/mixin'

export default {
  mixins: [dataMixin],
  props: ['post'],

  methods: {
    routeToPost(id) {
      return `/post/${id}`;
    },

    routeToEdit(id) {
      return `/edit/${id}`
    },
       
  },
  
};
</script>

<style>
</style>
