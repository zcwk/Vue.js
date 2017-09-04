// 注册界面

<template>
<div class="toast">
  <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
    <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <mt-button @click.native="openToast" >点击弹出 Toast</mt-button>
  <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
  <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
</div>
</template>

<script>
import {
  Toast
} from 'mint-ui';
export default {
  name: 'toast',
  methods: {
    openToast() {
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 1000,
      });
    },

    openToastWithIcon() {
      Toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success'
      });
    },

    openBottomToast() {
      Toast({
        message: '提示信息',
        position: 'center'
      });
    }
  }
}
</script>
