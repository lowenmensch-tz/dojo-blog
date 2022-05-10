import { ref } from 'vue';

const URL_API = 'http://localhost:3000/posts';

const getPost = (id) => {

    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
          let response = await fetch(`${URL_API}/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if(!response.ok){
            throw new Error('that post does not exist');
          }
          post.value = await response.json();
    
        } catch (e) {
          error.value = e.message;
        }
      };

      return { post, error, load };
};

export default getPost;