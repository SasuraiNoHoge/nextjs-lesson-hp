<template>
  <div id="app"></div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "App",
  components: {},
  created() {
    const db = getFirestore();
    this.addItem(db);
  },
  methods: {
    async addItem(db) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
