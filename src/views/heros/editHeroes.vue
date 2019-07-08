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
      <button type="submit" @click.prevent="update" class="btn btn-success">修改</button>
    </form>
  </div>
</template>

<script>
//导入axios发送ajax
import axios from "axios";
//选项中添加props属性接收外部传递的id值
export default {
  props: ["id"],
  data() {
    return {
      formData: {
        name: "",
        gender: "男"
      }
    };
  },
  //组件加载完毕后触发查询函数
  mounted () {
      this.loadedit()
  },
  methods: {
    loadedit() {
      //根据传入id发送ajax查询数据
      axios
        .get(`http://localhost:3000/heroes/${this.id}`)
        .then((res) => {
            const {data , status} = res
          //判断查询成功和失败
          if (status == 200) {
            //如果成功,更新formData中的数据
            this.formData = data
          }
        })
        //获取失败
        .catch(err => {
          alert("服务器异常" + err);
          // console.log (err)
        });
    },
    update () {
        //点击按钮发送ajax修改数据
        axios
            .put (`http://localhost:3000/heroes/${this.id}` , this.formData)
            .then ((res) => {
                if (res.status == 200) {
                    this.$router.push ({name : 'heroes'})
                }
            })
            .catch ((err) => {
                alert ("服务器异常" + err)
            })
    }
  }
};
</script>

<style>
</style>
