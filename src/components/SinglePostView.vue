<template>
    <div>
        <h3>{{post.title}}</h3>
        <p>{{post.text}}</p>
        <p></p>
        <div>
          <add-comment @addComment="comment"/>
        </div>
        <ul>
          <li v-for="(comment,index) in post.comments" :key="index">
            {{comment.text}}
          </li>
        </ul>
    </div>
</template>

<script>
import { postsService } from '@/services/PostsService'
import AddComment from '@/components/AddComment'

export default {
  components: {
    AddComment
  },
  
  data() {
    return {
      id: "",
      post: {
        title: "",
        text: "",
        comments: []
      },
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
    },
    comment(value) {
      postsService.commentAdd(this.id,value)
      this.post.comments.push(value)
    }
  }
};
</script>

<style>

</style>
