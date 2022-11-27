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
         {{ book.Tua_sach }}
      </div>
      <div class="p-1">
         <strong>Tái bản:</strong>
         {{ book.Lan_xuat_ban }}
      </div>
      <div class="p-1">
         <strong>Số trang:</strong>
         {{ book.So_trang }}
      </div>
      <div class="p-1">
         <strong>Quốc gia:</strong>
         {{ book.Quoc_gia }}
      </div>
      <div class="p-1">
         <strong>NXB:</strong>
         {{ book.NXB }}
      </div>
      <div class="p-1">
         <strong>Tác giả:</strong>
         {{ book.Tac_gia }}
      </div>
      <div class="p-1">
         <strong>Thể loại:</strong>
         {{ book.The_loai }}
      </div>
      <!-- <div class="p-1">
         <strong>Liên hệ yêu thích:&nbsp;</strong>
         <i v-if="book.favorite" class="fas fa-check" />
         <i v-else class="fas fa-times" />
      </div> -->
   </div>
</template>
