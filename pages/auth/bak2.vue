<template>
    <div>

<div id="tsparticles">
    <div id="login_form_con" class="">

       <form  @submit.prevent="submitForm">
            <div>
                <div><h3><em>Welcome, please login.</em></h3></div>
                <hr>
                <div class="login-input-con">
                    <i class="fa fa-user"></i>
                    <input v-model="form.username" type="text" class="form-control" placeholder="Enter username" required />
                </div>
                <br>
                <div class="login-input-con">
                    <i class="fa fa-key"></i>
                    <input v-model="form.password" type="password" class="form-control" placeholder="Enter password" required />
                </div>
            </div>

            <br>
            <div>
                <center>
						<b-button v-if="cashierloading" variant="outline-primary" disabled squared >
                         <b-spinner small type="grow"></b-spinner> Autheticating... </b-button>
						<b-button v-else type="submit" squared variant="primary"> Login </b-button>
					</center>

                <!-- <button v-if="cashierloading" type="submit" class="btn btn-success btn-block">Login</button> -->
            </div>
            <br>
        </form>
        <div>
          I don`t have an account <a href="/">Register</a>
        </div>
   </div>
</div>


    </div>
</template>

<script>
export default {
    name:'CashierLogin',

    data(){
        return{
          form: {
            username: null,
            password: null
          },
          cashierloading:false,
        }
    },

    mounted(){
        this.getAnimation();
    },

    methods:{
        async submitForm() {

            this.$axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")

            const formData = {
                username: this.form.username,
                password: this.form.password
            }
           this.cashierloading = true;
            await this.$axios.$post("v1/auth/login", formData)
                .then(response => {
                  
                  if(response.token){
                    const token = response.token

                    this.$store.commit('setToken', token)
                
                    this.$axios.defaults.headers.common["Authorization"] = "Token " + token

                    localStorage.setItem("token", token)

                    const toPath = this.$route.query.to || '/dashboard'
                    this.$router.push(toPath)

                  } else{
                    this.err = 'Unable to log in with provided credentials.'
                  }
                  
                });
                this.cashierloading = false;
               
        },


    getAnimation(){
        const particles = {
        "fpsLimit": 60,
        "particles": {
            "number": {
            "value": 180,
            "density": {
                "enable": true,
                "value_area": 800
            }
            },
            "color": {
            "value": "#ff0000",
            "animation": {
                "enable": true,
                "speed": 20,
                "sync": true
            }
            },
            "shape": {
            "type": "circle",
            "stroke": {
                "width": 0
            },
            "polygon": {
                "nb_sides": 5
            },
            },
            "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 3,
                "opacity_min": 0.1,
                "sync": false
            }
            },
            "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
            },
            "links": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
            }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 0.8
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "background": {
        "color": "#339966",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      }
    };
  
    tsParticles.load('tsparticles', particles);
        }
    }
}
</script>


<style scoped>
#tsparticles{
          height: 100vh;
          width: 100%;
      }
.design_title{
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.8;
}
.design_items_con{
    display: flex;
}
.design_items{
    background-color: white;
    border-radius: 10px;
    padding: 20px 20px 20px 20px;

}
.design_img{
    width: 100px;
    height: 100px;
}
#login_form_con{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    padding: 20px 20px 20px 20px;
}
.login-input-con{
    display: flex;
    align-items: center;
}
.login-input-con i{
    margin-right: 20px;
    font-size: 25px;
}
</style>



</style>
