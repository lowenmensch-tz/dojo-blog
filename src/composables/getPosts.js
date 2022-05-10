import { ref,  } from 'vue';

const URL_API = 'http://localhost:3000/posts';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
          let response = await fetch(URL_API, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if(!response.ok){
            throw new Error('no data available');
          }
          posts.value = await response.json();
    
        } catch (e) {
          error.value = e.message;
        }
      };

      return { posts, error, load };
}

  export default getPosts;