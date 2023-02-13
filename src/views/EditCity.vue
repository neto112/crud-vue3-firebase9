<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit City</h2>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="City"
                v-model="cityInfo.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="County"
                v-model="cityInfo.county"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Country"
                v-model="cityInfo.country"
              />
            </div>
            <button class="btn btn-primary">Update City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      cityId: null,
      docRef: null,
      cityInfo: {
        name: null,
        county: null,
        country: null,
      },
    };
  },

  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.county = cityData.county;
      this.cityInfo.country = cityData.country;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `The city with ID of ${this.cityId} has been updated successfully!`
      );
      this.$router.push("/");
    },
  },

  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>