<script>
export default {
   props: {
      book: { type: Object, required: true },
   },
};
</script>

<template>
   <div>
      <div class="p-1">
         <strong>Tựa sách:</strong>
         {{ book.name }}
      </div>
      <div class="p-1">
         <strong>Tác giả:</strong>
         {{ book.author }}
      </div>
      <div class="p-1">
         <strong>Địa chỉ:</strong>
         {{ book.address }}
      </div>
      <div class="p-1">
         <strong>Yêu thích:&nbsp;</strong>
         <i v-if="book.favorite" class="fas fa-check" />
         <i v-else class="fas fa-times" />
      </div>
   </div>
</template>
