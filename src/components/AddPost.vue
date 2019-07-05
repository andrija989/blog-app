<template>
    <div>
        <form @submit.prevent="handleForm">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="newPost.title" required>
            </div>
            <div>
                <label for="text">Body</label>
                <input type="text" id="text" v-model="newPost.text" required>
            </div>
            <button type="submit">Post</button>
            <button type="reset">Reset form</button>
        </form>
    </div>
</template>

<script>
import { postsService } from '@/services/PostsService'

export default {
    data() {
        return {
            newPost : {
                title : '',
                text : ''
            }
        }
    },

    methods: {
        handleForm() {
            postsService.add(this.newPost)
            this.$router.push('/posts')
            
        },

        reset() {
            this.newPost = {
                title:'',
                text:''
            }
        }
    }
}
</script>

<style>

</style>
