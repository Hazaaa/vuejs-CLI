import showBlogs from './primeri/Primer4/showBlogs.vue'
import addBlog from './primeri/Primer4/addBlog.vue'
import singleBlog from './primeri/Primer7/singleBlog.vue'

export default [
    {
        path: '/',
        component: showBlogs
    },

    {
        path: '/add',
        component: addBlog
    },

    {
        path: '/blog/:id',
        component: singleBlog
    }
]