<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div class="title-header">
          <h4>Github Search</h4>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'home',
  components: {
    SearchInput
  }
}
</script>

<style lang="scss" scoped>
  h4 {
    color: #6f737b;
    position: relative;
  }

  h4::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background: black;
    width: calc(100% - 160px);
    top: 56%;
    right: 0;
  }
</style>
