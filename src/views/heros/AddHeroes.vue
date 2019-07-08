<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtName">姓名</label>
            <input type="text" class="form-control" id="txtName" v-model="formData.name" placeholder="英雄姓名">
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
  methods : {
    add() {
      this.axios.post ("heroes" , this.formData)
      .then((res) => {
          //判断删除成功和失败
          if (res.status == 201) {
            //如果成功,跳转回英雄列表页
            this.$router.push ({name : 'heroes'})
          }
        })
        //获取失败
        .catch(err => {
          alert("服务器异常" + err);
          // console.log (err)
        });
    }
  }
}
</script>

<style>

</style>
