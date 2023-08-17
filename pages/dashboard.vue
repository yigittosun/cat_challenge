<template>
  <div class="card m-4">
    <div class="card-body">
      <div>
        <h2 class="text-center fw-bold">Random Cat</h2>
        <div
          class="img-content bg-dark text-white border border-secondary border-4 rounded-2 shadow-lg"
        >
          <transition name="fade" mode="out-in">
            <div v-if="imageLoading" class="spinner-container">
              <div class="spinner"></div>
            </div>
            <img
              class="w-100 h-100"
              v-else-if="catImageUrl"
              :key="catImageUrl.id"
              :src="catImageUrl.url"
              alt="Random Cat"
            />
          </transition>
        </div>
        <div class="text-center">
          <button class="btn btn-info mt-3" @click="fetchNewCatImage">
            Paw Me!
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-end mb-4 me-4">
    <button class="btn btn-danger" @click="logout">
      <span class="icon">&#10162;</span> Sign Out
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useRandomCatStore } from "~/store/catRepositories";
import type { ICatInfo } from "~/interface/cat-interface";

export default defineComponent({
  name: "dashboard",
  setup() {
    const router = useRouter();
    const randomCatStore = useRandomCatStore();
    const catImageUrl = ref<ICatInfo | null>(null);
    const imageLoading = ref(false); // imageLoading state

    const logout = async () => {
      Swal.fire({
        text: "Success Logout!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      await router.push("/");
    };

    onMounted(() => {
      fetchCatImage();
    });

    const fetchCatImage = () => {
      imageLoading.value = true; // Set imageLoading to true when fetching
      randomCatStore
        .getRandomCats()
        .then((response) => {
          catImageUrl.value = response[0];
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          imageLoading.value = false; // Set imageLoading to false after fetching
        });
    };

    const fetchNewCatImage = () => {
      fetchCatImage();
    };

    return {
      router,
      logout,
      catImageUrl,
      imageLoading,
      fetchCatImage,
      fetchNewCatImage,
    };
  },
});
</script>
<style lang="css">
.img-content {
  max-width: 400px;
  height: 300px;
  margin: auto;
  overflow: hidden;
}

.img-content img {
  width: auto;
  height: 100%;
  object-fit: contain;
}
</style>
