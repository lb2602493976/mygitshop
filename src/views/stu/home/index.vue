<template>
  <div style="display:flex;">
    <a-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="menu" /><span>综合检测</span></span>
        <!-- <a-menu-item-group key="g1"> -->
          <!-- <template slot="title"> <a-icon type="qq" /><span>Item 1</span> </template> -->
          <a-menu-item key="/test">
            我要检测
          </a-menu-item>
          <a-menu-item key="/report">
            检测报告
          </a-menu-item>
        <!-- </a-menu-item-group> -->
        <!-- <a-menu-item-group key="g2" title="Item 2"> -->
          <!-- <a-menu-item key="/3">
            咨询记录
          </a-menu-item> -->
          <!-- <a-menu-item key="4">
            Option 4
          </a-menu-item> -->
        <!-- </a-menu-item-group> -->
      </a-sub-menu>
      <!-- <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu> -->
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="user" /><span>个人中心</span></span>
        <!-- <a-menu-item key="/integral">
          我的积分
        </a-menu-item> -->
        <a-menu-item key="/thesis">
          论文设置
        </a-menu-item>
        <!-- <a-menu-item key="/account">
          账号设置
        </a-menu-item> -->
        <a-menu-item key="/template">
          模板提交记录
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div >
      <router-view></router-view>
      
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      // console.log('openKeys', val);
    },
  },
  methods: {
    handleClick({ item, key, keyPath }) {
      console.log(item);
      console.log(key);
      console.log(keyPath);
      this.$router.push(key)
    },
    titleClick(e) {
      // console.log('titleClick', e);
    },
  },
};
</script>
