<template>
    <div>
        <form @submit.prevent="handleForm">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="newPost.title" required minlength="2">
            </div>
            <div>
                <label for="text">Body</label>
                <input type="text" id="text" v-model="newPost.text" required maxlength="300">
            </div>
            <button type="submit">Post</button>
            <button @click="reset">Reset form</button>
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
            },
            id : ''
        }
    },

    methods: {
        handleForm() {
            if(this.id) {
                postsService.edit(this.id,this.newPost)
                this.$router.push('/posts')
                return
            }
            postsService.add(this.newPost)
            this.$router.push('/posts')
            
        },

        reset() {
            this.newPost = {
                title:'',
                text:''
            }
        }
    },
    created() {
        this.id = this.$router.currentRoute.params.id;
        if(this.id) {
            postsService.getSinglePost(this.id)
            .then(response => {
                console.log(response)
                this.newPost = response.data
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style>

</style>
