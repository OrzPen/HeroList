<template>
  <!-- 左侧 -->
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active">
        <a href="#">
          Overview
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li>
        <a href="#">Reports</a>
      </li>
      <li>
        <a href="#">Analytics</a>
      </li>
      <li>
        <a href="#">Export</a>
      </li> -->
      <router-link to="/heroes" tag="li">
        <a>英雄列表</a>
      </router-link>
      <router-link to="/weapons" tag="li">
        <a>武器列表</a>
      </router-link>
      <router-link to="/equips" tag="li">
        <a>装备列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
