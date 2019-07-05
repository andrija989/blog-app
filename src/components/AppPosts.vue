<template>
    <div>
        <ul>
            <li v-for="(post,index) in posts" :key="index">
                <h3>{{post.title}}</h3>
                <p>{{post.text}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { postsService } from '@/services/PostsService'

export default {
    data() {
        return {
            posts:[]
        }
    },

    created() {
        postsService.getAll() 
        .then(response => {
            this.posts = response.data
        })
        .catch(e => {
            console.log(e)
        })
    },
}
</script>

<style>

</style>
