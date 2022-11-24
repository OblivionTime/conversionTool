<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-10-21 17:19:33
 * @LastEditors: solid
 * @LastEditTime: 2022-10-26 14:14:38
-->
<template>
  <div id="app">
    <Menu @ChangeMethod="ChangeMethod"></Menu>
    <Other-PDF ref="OtherPDF" v-if="t == 'otherPDF'" />
    <PDF-Other ref="PDFOther" v-else-if="t == 'PDFOther'" />
  </div>
</template>
<script>
import OtherPDF from "@/components/Other-PDF";
import PDFOther from "@/components/PDF-Other";
import Menu from "@/components/Menu";
export default {
  components: {
    OtherPDF,
    PDFOther,
    Menu,
  },
  data() {
    return {
      t: "PDFOther",
    };
  },
  methods: {
     ChangeMethod(outputFileType, t) {
      this.t = t;
      this.$nextTick(() => {
         if (t == "PDFOther") {
          this.$refs.PDFOther.ChangeMethod(outputFileType);
        }
      })
     
    },
  },
};
</script>
<style scoped>
#app {
  display: flex;
  height: 100vh;
  width: 100%;
}

.main {
  flex: auto;
  background: blue;
}
</style>
