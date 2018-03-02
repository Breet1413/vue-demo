export default {
    data() {
      return {
        isCollapse: true,
        fullScreenPage: ['/login'],
        companyLogo: require('../image/defaultlogo.png'),
        userPicture: require('../image/defaultuser.jpg'),
        conpanyName: "测试测试测试",
        isLogin: true,
        userName: ""
      }
    },
    methods: {
        isFullScreen: function () {
            var that = this
            var newArr = this.fullScreenPage.filter(function (item) {
              return item == that.$route.path
            })
            if (newArr && newArr.length > 0) {
              return true
            } else {
              return false
            }
        },
        handleCommand(command) {
            switch (command) {
              case "logout":
                // this.$http.post(process.env.API_ROOT + '/login/logout').then(response => {
                //   if (response && response.code == 1001) {
                //     localStorage.removeItem("examUserInfo")
                //     // localStorage.removeItem("examUserPermission")
                //     this.$router.push('/login')
                //   }
                // })
              case "logout":{}
            }
          }
    },
    mounted: function () {
      window.this = this;
    },
    watch: {
      '$route': function (toPage, fromPage) {
      }
    }
  }
  