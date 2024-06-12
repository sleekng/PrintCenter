<template>
  <div>
    <h1>Order Item Files</h1>
    <div v-for="file in files" :key="file.id" class="file-item">
      <div class="file-info flex flex-col flex-start">
        <span v-if="isImage(file.file)" class="file-icon image-icon"><img class="w-20" :src="/storage/+file.file" alt=""></span>
        <span v-else-if="isPdf(file.file)" class="file-icon pdf-icon">📄</span>
        <span v-else-if="isDoc(file.file)" class="file-icon doc-icon">📄</span>
        <span v-else class="file-icon default-icon">📁</span>
      </div>
      <a :href="`/storage/`+file.file" class="btn btn-primary">Download</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    files: Array,
  },
  methods: {
    isImage(file) {
      return /\.(jpg|jpeg|png|gif)$/i.test(file);
    },
    isPdf(file) {
      return /\.pdf$/i.test(file);
    },
    isDoc(file) {
      return /\.(doc|docx)$/i.test(file);
    },
  },
}
</script>

<style scoped>
.file-item {
  margin-bottom: 20px;
}


.file-icon {
  margin-right: 10px;
}

.image-icon::before {
  content: '🖼️';
}

.pdf-icon::before {
  content: '📄';
}

.doc-icon::before {
  content: '📄';
}

.default-icon::before {
  content: '📁';
}

.btn {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 3px;
}

.btn:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
