<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Add City</h2>
          <form @submit.prevent="createCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Name"
                v-model="info.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="County"
                v-model="info.county"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Country"
                v-model="info.country"
              />
            </div>
            <button class="btn btn-primary">Create City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data: () => ({
    info: {
      name: null,
      county: null,
      country: null,
    },
  }),
  methods: {
    async createCity() {
      console.log("Creating Document");
      const addedDoc = await addDoc(citiesColRef, this.info);
      alert("Document created successfully!");
      console.log("1", addedDoc);
      this.$router.push("/");
    },
  },
};
</script>