<template>
  <div>
    <section>
      <h1>Vue Api Validator</h1>

      <!-- <div v-for="a in getApiGroups" :key="a.groupName">
        <h2>{{ a }}</h2>
        <pre v-for="item in group">{{ a.item }}</pre>
      </div> -->

      <base-card>
        <ul>
          <end-point-group
            v-for="a in getApiGroups"
            :key="a.GroupName"
            :id="a.GroupName"
            :GroupName = a
          >
          </end-point-group>

        </ul>
      </base-card>
    </section>
  </div>
</template>

<script>
import EndPointGroup from "../components/apis/EndPointGroup.vue";

export default {
  components: {
    EndPointGroup,
  },
  computed: {
    getApis() {
      // returns a property
      const apiList = this.$store.getters["apis"];
      return apiList;
    },
    getApiGroups() {
      const apiList = this.$store.getters["apiGroups"];
      return apiList;
    },
    getGroups() {
      console.log("groups");
      var array = this.$store.getters["apis"];
      console.log("Got the array");
      return this.groupBy(array, "GroupName");
    },
  },
  created() {
    this.loadApis();
    this.loadApiGroups();
  },
  methods: {
    async loadApis() {
      // Gets list of apis from database or where ever and loads it into state
      //console.log("loadApis");
      try {
        await this.$store.dispatch("loadApis", {});
      } catch (error) {
        console.log("Error:  " + error.message);
        this.error = error.message || "Something went wrong!";
      }
    },
    async loadApiGroups() {
      // console.log("loadApis");
      try {
        await this.$store.dispatch("loadApiGroups", {});
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      // this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    groupBy(array, key) {
      // console.log("groupBy");
      const result = {};
      array.forEach((item) => {
        if (!result[item[key]]) {
          result[item[key]] = [];
        }

        result[item[key]].push(item);
      });
      //console.log(result);
      return result;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>