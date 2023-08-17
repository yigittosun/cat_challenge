import { defineStore } from "pinia";
import axios from "axios";

export const useRandomCatStore = defineStore("randomCats", () => {
  async function getRandomCats() {
    try {
      const response = await axios.get("/api/images/search", {
        headers: {
          "x-api-key": process.env.CAT_API_KEY,
        },
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return {
    getRandomCats,
  };
});
