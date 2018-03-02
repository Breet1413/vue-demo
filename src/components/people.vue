<template>
  <el-form :inline="true" :model="filters">
    <el-table class="table"  ref="multipleTable" :data="tableData3" align="center" @selection-change="handleSelectionChange">
        <el-table-column type="selection" prop='invigilatorId'>
        </el-table-column>
        <el-table-column label="日期" prop="invigilatorName">
             <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="姓名" prop="name">
        </el-table-column>
        <el-table-column label="地址" prop="address"  show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="editInvigilator(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" @click="delInvigilator(scope.row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
     <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        filters: {
        currentPage: 1,
        pageSize: 10
        },
        total: 0,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      loadData(){
        let params = {
          page:this.filters.currentPage,
          limit:this.filters.pageSize
        };
        this.$http.post(process.env.API_ROOT + '/invigilator/list', this.querystring.stringify(params)).then(response => {
          if (response && response.code == 1001) {
            this.tableData3 = response.list.data;//列表list
            this.filters.currentPage = response.list.page//第几页
            this.filters.pageSize = response.list.limit;//每页大小
            this.total = response.list.total;//总页数
          } else {

          }
        })
      }
    },
    mounted: function() {
        window.this = this;
        this.loadData();
    }
  }
</script>