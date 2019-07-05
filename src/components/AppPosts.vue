<template>
    <div>
        <ul>
            <li v-for="(post,index) in posts" :key="index">
                <single-post
                :post="post" 
                />
                <button @click="handleDelete(post.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { postsService } from '@/services/PostsService'
import SinglePost from '@/components/SinglePost'

export default {
    components: {
        SinglePost
    },

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

    methods: {
        handleDelete(id) {
            return postsService.delete(id)
                .then(response => {
                    this.posts = this.posts.filter(post => post.id !== id)
                })
        }
    }
    

    
}
</script>

<style>

</style>
