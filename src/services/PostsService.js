import axios from 'axios'

export default class PostsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts')
    }

    getSinglePost(id) {
        return axios.get(`posts/${id}`)
    }

    add(newPost) {
        return axios.post('posts',newPost)
            .then(response => {
                this.posts = this.posts.filter(post => post.id !== id)
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const postsService = new PostsService();