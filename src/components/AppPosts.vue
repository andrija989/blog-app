<template>
    <div>
        <ul>
            <li v-for="(post,index) in posts" :key="index">
                <single-post
                :post="post" 
                />
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
    

    
}
</script>

<style>

</style>
