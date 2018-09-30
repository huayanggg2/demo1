<template>
  <div>
    <div class="left"><Dropdown trigger="click">
      <a href="javascript:void(0)">
        下拉菜单
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
      <DropdownItem>呵呵呵</DropdownItem>
      <DropdownItem selected>哈哈哈</DropdownItem>
      <DropdownItem disabled>嘿嘿嘿</DropdownItem>
      <DropdownItem disabled>吼吼吼</DropdownItem>
      <DropdownItem disabled>哼哼哼</DropdownItem>
      </DropdownMenu>
    </Dropdown></div>
    <div class="right"><selectEd></selectEd></div>
    <!-- <div><myMenu></myMenu></div> -->
    <div><my-input :biaoq='yong'></my-input></div>
    <div><my-input biaoq='密码：'></my-input></div>
  </div>
</template>

<script>
import selectEd from '@/view/Selected.vue'
import myInput from '@/components/myInput.vue'
import myMenu from '@/view/myMenu.vue'
export default {
              data () {
            return {
              yong:'用户名mama'
            }
        },
              components: {
                selectEd,
                myMenu,
                myInput
              }
}
</script>

