<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <div class="card p-md-4 bg-secondary bg-gradient shadow">
      <div class="card-body p-md-5">
        <h2 class="text-center mb-4 text-white">Welcome</h2>
        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label text-dark fw-bold"
              >Username</label
            >
            <input
              v-model="username"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label text-dark fw-bold"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="inputPassword"
            />
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default defineComponent({
  name: "SignIn",
  setup() {
    const router = useRouter();
    const username = ref("demo@admin.com");
    const password = ref("123");

    const loginUser = async () => {
      if (username.value === "demo@admin.com" && password.value === "123") {
        Swal.fire({
          text: "Success Login!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        await router.push("/dashboard");
      } else {
        Swal.fire({
          text: "Wrong Username or Password!",
          icon: "error",
          buttonsStyling: false,
          showConfirmButton: false,
          timer: 1300,
        });
      }
    };
    return {
      router,
      username,
      password,
      loginUser,
    };
  },
});
</script>

<style scoped>
/* Özel stil tanımları burada yer alabilir */
</style>
