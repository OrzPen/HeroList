<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input
          type="text"
          class="form-control"
          id="txtName"
          v-model="formData.name"
          placeholder="英雄姓名"
        />
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button type="submit" @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
     data() {
    return {
      formData : {
        name : '',
        gender : "男"
      }
    }
  },
};
</script>

<style>
</style>
