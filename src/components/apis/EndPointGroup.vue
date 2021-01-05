<template>
  <div>
    <section>
      <base-card>
        {{ GroupName }}
        <ul>
          <end-point
            v-for="a in filterApiList"
            :key="a.ApiId"
            :id="a.ApiId"
            :api-name="a.ApiName"
            :type="a.Type"
          >
          </end-point>
        </ul>
      </base-card>
    </section>
  </div>
</template>

<script>
import EndPoint from "../apis/EndPoint.vue";
export default {
  components: {
    EndPoint,
  },
  props: ["GroupName"],
  computed: {
    filterApiList() {
      const apiList = this.$store.getters["apis"];
      return apiList.filter((group) => {
        if (group.GroupName.includes(this.GroupName)) {
          return true;
        }
        return false;
      });
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

ul > li {
  display: inline-block;
  zoom: 1;
}
</style>