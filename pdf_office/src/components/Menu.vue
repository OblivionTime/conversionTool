<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-10-25 18:43:28
 * @LastEditors: solid
 * @LastEditTime: 2022-10-26 14:14:44
-->
<template>
  <div class="menu">
    <div :class="outputFileType == 'docx' ? 'menu-item active' : 'menu-item'" @click="ChangeMethod('docx','PDFOther')">
      <img
        src="../assets/word.png"
        alt=""
        srcset=""
        style="width: 2em; object-fit: contain"
      />
      PDF转WORD
    </div>
    <div :class="outputFileType == 'xlsx' ? 'menu-item active' : 'menu-item'" @click="ChangeMethod('xlsx','PDFOther')"> 
      <img
        src="../assets/excel.png"
        alt=""
        srcset=""
        style="width: 2em; object-fit: contain"
      />
      PDF转EXCEL
    </div>
    <div :class="outputFileType == 'pptx' ? 'menu-item active' : 'menu-item'" @click="ChangeMethod('pptx','PDFOther')">
      <img
        src="../assets/ppt.png"
        alt=""
        srcset=""
        style="width: 2em; object-fit: contain"
      />
      PDF转PPT
    </div>
    <div :class="outputFileType == 'other' ? 'menu-item active' : 'menu-item'" @click="ChangeMethod('other','otherPDF')">
      <img
        src="../assets/others.png"
        alt=""
        srcset=""
        style="width: 2em; object-fit: contain"
      />
      其他转PDF
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      outputFileType: "docx",
    };
  },
  methods: {
    ChangeMethod(outputFileType,t){
        this.outputFileType=outputFileType
        this.$emit("ChangeMethod",outputFileType,t)
    }
  },
};
</script>

<style>
.menu {
  flex-basis: 280px;
  display: flex;
  flex-direction: column;
}
.menu .menu-item {
  padding: 20px;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
.active{
  background: #eee;
}
</style>