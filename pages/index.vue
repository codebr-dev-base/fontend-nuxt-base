<template>
  <div>
    <pagination
      v-model="currentPage"
      :page-count="10"
      :per-page="10"
      :total="1000"
    >
    </pagination>
    <p>
      Lorem ipsum dolor sit amet, consectet Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Perspiciatis eius ipsum corrupti eveniet
      ipsa omnis odio, ducimus velit. Aspernatur esse dolorem ipsam soluta
      autem! Provident doloremque dolore quisquam sequi autem?
    </p>
    <modal>
      <p>
        Lorem ipsum dolor sit amet, consectet Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Perspiciatis eius ipsum corrupti eveniet
        ipsa omnis odio, ducimus velit. Aspernatur esse dolorem ipsam soluta
        autem! Provident doloremque dolore quisquam sequi autem?
      </p>
    </modal>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  auth: false,
  data() {
    return {
      sidebarShow: false,
      currentPage: 1,
    };
  },
  mounted() {},
};
</script>
