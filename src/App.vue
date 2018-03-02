<template>
  <el-container>
    <el-header>
       <el-col :span="14">
        <div class="logo">
          <!-- <img class="logo-img" :src="companyLogo"> -->
        </div>
        <div class="logo">
          <div class="logo-name">{{conpanyName}}
          </div>
        </div>
       </el-col>
        <el-col :span="10">
        <img class="user-img" :src="userPicture" v-if="!this.isLogin">
        <div class="user" v-else>
          <div class="user-name">{{"欢迎您，"+this.userName}}
          </div>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <img class="user-img" :src="userPicture">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              <el-dropdown-item command="editPassword">
                <router-link to="/manager/changePassword">修改密码</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-header>
    <el-container>
      <!-- aside -->
      <div class="aside" v-if="!isFullScreen()">
        <div @click="isCollapse=!isCollapse" class="collapse">
          <i class="el-icon-d-arrow-right" v-if="isCollapse"></i>
          <i class="el-icon-d-arrow-left" v-else></i>
        </div>
        <el-menu class="el-menu-vertical" :collapse="isCollapse" router unique-opened>
          <el-menu-item v-for="(item,index) in this.$router.options.menus" :index="item.path" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- main/footer -->
      <el-container>
        <el-main>
          <el-col :span="24">
            <router-view/>
          </el-col>
        </el-main>
        <el-footer>Copyright &copy; {{new Date().getFullYear()}}  版权所有</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped src="../static/css/app.css"></style>
<style src="../static/icon/iconfont.css"></style>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
}
html{
  height: 100vh
}
</style>
 <script src="../static/js/app.js"></script>