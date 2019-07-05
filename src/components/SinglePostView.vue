<template>
    <div>
        <h3>{{post.title}}</h3>
        <p>{{post.text}}</p>
        <p></p>
    </div>
</template>

<script>
import { postsService } from '@/services/PostsService'

export default {
  data() {
    return {
      id: "",
      post: {
        title: "",
        text: ""
      }
    };
  },

  created() {
    this.id = this.$router.currentRoute.params.id;
    if (this.id) {
      this.getPost(this.id);
    }
  },

  methods: {
    getPost(id) {
        postsService.getSinglePost(id)
        .then(response => {
          this.post = response.data
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>

</style>
