<template>
  <div class="container-fluid">
    <div class="row">
      <!-- 右侧 -->
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄管理</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item , index) in list" :key="item.id">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="javascript:" @click="del(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入axios
import axios from "axios";
export default {
  //定义英雄列表页数据
  data() {
    return {
      list: []
    };
  },
  //在组件挂载完毕时发送ajax
  mounted() {
    this.getHeros();
  },
  methods: {
    getHeros() {
      axios
        //开启json-server服务器,虚拟数据服务器
        .get("http://localhost:3000/heroes")
        .then(res => {
          //解构res
          const { data, status } = res;
          //判断获取成功和失败
          if (status == 200) {
            //把获取到的数据添加到实例中准备好的空数组中
            this.list = data;
            // console.log (this.list)
          }
        })
        //获取失败
        .catch(err => {
          alert("服务器异常" + err);
          // console.log (err)
        });
    },
    del(id) {
      //确认是否要删除
      if (!confirm("确认删除?")) {
        return false;
      }
      axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then(res => {
          //判断删除成功和失败
          if (res.status == 200) {
            //如果成功,重新加载页面
            this.getHeros();
          }
        })
        //获取失败
        .catch(err => {
          alert("服务器异常" + err);
          // console.log (err)
        });
    }
  }
};
</script>

<style>
</style>
