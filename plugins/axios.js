export default function({ $axios, store }){
    $axios.onError(error => {
        if (error.response.status === 422) {
            // store.dispatch('validation/setErrors', error.response.data.errors);
            store.dispatch('validation/setErrors', error.response.data.errorPayload.errors);

        }
        return Promise.reject(error);
    });

    $axios.onRequest((config) => {
        store.dispatch('validation/clearErrors');
        // check if the user is authenticated
        let token = localStorage.getItem("is_iam_auth._token.local")
        if (token != '') {
          // set the Authorization header using the access token
          config.headers.Authorization = token;
        }
    
        return config
      });
}
