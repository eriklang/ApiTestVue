<template>
  <li>
    
    <h3>{{ apiName }}</h3>
    <h4>{{ type }}</h4>
    <h5>{{ id }}</h5>
  </li>
</template>

<script>
export default {
    props: ['id', 'apiName', 'type']
};
</script>

<style scoped>
li {
  margin: 1rem 1rem;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>