<template>
  <!-- Page Content -->
  <div id="tsparticles">

    <div class="hero-static">
    <div class="content">
      <b-row class="justify-content-center">
        <b-col md="8" lg="6" xl="4">
          <!-- Sign In Block -->
          <base-block rounded themed header-class="bg-primary-dark" class="mb-0" title="Sign In">
            <template #options>
              <router-link to="/auth/login" class="btn-block-option font-size-sm">Forgot Password?</router-link>
              <router-link to="/auth/login" class="btn-block-option" v-b-tooltip.hover.nofade.left="'New Account'">
                <i class="fa fa-user-plus"></i>
              </router-link>
            </template>
            <div class="p-sm-3 px-lg-4 py-lg-5">
              <h1 class="h2 mb-1">GECSS</h1>
              <p class="text-muted">
                Welcome, please login.
              </p>

              <!-- Sign In Form -->
              <b-form @submit.prevent="submitForm">
                <div class="py-3">
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt" id="username" name="username" placeholder="Username" v-model="form.username" aria-describedby="username-feedback"></b-form-input>
                <div>
                </div>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt" id="password" name="password" placeholder="Password" v-model="form.password" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-checkbox id="remember" name="remember">Remember Me</b-form-checkbox>
                  </div>
                </div>
                <b-row class="form-group">
                  <b-col md="6" xl="5">
                    <b-button type="submit" variant="alt-primary" block>
                      <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
              <!-- END Sign In Form -->
            </div>
          </base-block>
          <!-- END Sign In Block -->
        </b-col>
      </b-row>
    </div>
    <div class="content content-full font-size-sm text-muted text-center">
      <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
    </div>
  </div>
  </div>
  <!-- END Page Content -->
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  layout: "empty",
  mixins: [validationMixin],
  data () {
    return {
      form: {
        username: null,
        password: null
      },
      err:''
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  },
   mounted(){
     this.getAnimation()
   },
  methods: {

     async submitForm() {

            this.$axios.defaults.headers.common["Authorization"] = ""

            localStorage.removeItem("token")

            const formData = {
                username: this.form.username,
                password: this.form.password
            }
           
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
                  
                })             
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
</style>
