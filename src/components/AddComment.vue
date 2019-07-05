<template>
    <div>
        <label for="comment">Comment</label>
        <input type="text" id="comment" v-model="comment.text" required>
        
        <button @click="handleComment">Submit comment</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            comment: {
                text:''
                
            }
        }
    },
    methods: {
        handleComment (comment) {
            this.$emit('addComment',this.comment)
        }
    },
    
}
</script>

<style>

</style>
