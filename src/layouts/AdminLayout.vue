<template>
  <h1>Admin Layout</h1>
  <ul>
    <li>
      <router-link to="/admin/products">Products</router-link>
    </li>
    <li>
      <router-link to="/admin/users">Users</router-link>
    </li>
    <li>
      <router-link to="/admin/posts">Posts</router-link>
    </li>
  </ul>
  <hr />
  <router-view />
</template>

<script>
export default {};
</script>

<style></style>
