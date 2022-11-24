<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-10-21 17:19:33
 * @LastEditors: solid
 * @LastEditTime: 2022-10-26 14:23:55
-->
<template>
  <div >
    <div style="">
      <div style="box-sizing: border-box;">
        <el-upload
          accept=".pdf"
          action="#"
          :auto-upload="false"
          :on-change="handleChange"
          :on-remove="removeFile"
          list-type="picture"
          drag
          multiple
        >
          <div v-if="files.length == 0">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">拖拽 PDF 文件到这</div>
          </div>
        </el-upload>
      </div>
      <div style="position: absolute; bottom: 0px">
        <el-button
          type="primary"
          style="width: 500px; height: 10vh; font-size: 2em"
          @click="UploadFile"
          >转换成{{ fordata.outputFileType }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { FileUpdate, FileUpdate2, FileStatus } from "@/api/file";
import "@/assets/common.css";
let api = window.api;
export default {
  name: "App",
  data() {
    return {
      showUploadList: true,
      fordata: {
        conversionMode: "blocks",
        dpi: 144,
        imageQuality: 85,
        outputFileType: "docx",
        files: [],
      },
      files: [],
      jobId: "",
      timer: "",
      loading: "",
    };
  },
  methods: {
    //上传前判断
    removeFile(_, filelist) {
      
      var files = [];
      for (const file of filelist) {
        files.push(file.raw);
      }
      this.files = files;
    },
    handleChange(file) {
      this.files.push(file.raw);
    },

    async UploadFile() {
      if (this.files.length == 0) {
        return this.$message.warning("文件不能为空!!!");
      }
      this.loading = this.$loading({
        lock: true,
        text: "正在进行转换.......",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      var files = [];
      for (const file of this.files) {
        let formData = new FormData();
        formData.append("file", file);
        var fileInfo = await FileUpdate(formData);
        files.push(fileInfo[0]);
      }
      this.fordata.files = files;
      var res = await FileUpdate2(this.fordata);
      this.jobId = res.jobId;
      this.timer = setInterval(() => {
        FileStatus({
          action: "getStatus",
          jobId: this.jobId,
        }).then((res) => {
          if (res.status == "done") {
            this.loading.close();
            this.$message.success("文件转换完成!!!!");
            var downloadURL =
              "https://filetools13.pdf24.org/client.php?mode=download&action=downloadJobResult&jobId=" +
              this.jobId;
            api.Download(downloadURL);
            clearInterval(this.timer);
          }
        });
      }, 2000);
    },
    ChangeMethod(outputFileType) {
      this.fordata.outputFileType = outputFileType;
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style >
</style>
