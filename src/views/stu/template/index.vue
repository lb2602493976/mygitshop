<template>
  <div class="container">
    <!-- 标题 -->
    <div class="title">
      <div class="s1">模板提交记录</div>
    </div>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '审核状态',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '审核备注说明',
    dataIndex: 'age',
    key: 'age',
    // width: 80,
  },
  {
    title: '审核时间',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: '模板文件名',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: '规范文件名',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: '提交时间',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style lang="less" scoped>
  .container{
    text-align: left;
    width:980px;
    // height:630px;
    padding: 20px;
    // 头
    .title{
      width:940px;
      height:55px;
      margin: 0px 0px 10px;
      background: #f2f2f2;
      padding: 15px;
      border-left: 5px solid #f395d2;
      .s1{
        font-size: 20px;
        font-weight: 300;

      }
    }
  }
</style>