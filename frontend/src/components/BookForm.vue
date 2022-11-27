<template>
   <Form @submit="submitBook" :validation-schema="bookFormSchema">
      <div class="form-group">
         <label for="Tua_sach">Tựa sách</label>
         <Field name="Tua_sach" type="text" class="form-control" v-model="bookLocal.Tua_sach" />
         <ErrorMessage name="Tua_sach" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="Lan_xuat_ban">Lần xuất bản</label>
         <Field name="Lan_xuat_ban" type="text" class="form-control" v-model="bookLocal.Lan_xuat_ban" />
         <ErrorMessage name="Lan_xuat_ban" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="So_trang">Số trang</label>
         <Field name="So_trang" type="text" class="form-control" v-model="bookLocal.So_trang" />
         <ErrorMessage name="So_trang" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="Quoc_gia">Quốc gia</label>
         <Field name="Quoc_gia" type="text" class="form-control" v-model="bookLocal.Quoc_gia" />
         <ErrorMessage name="Quoc_gia" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="NXB">Nhà xuất bản</label>
         <Field name="NXB" type="text" class="form-control" v-model="bookLocal.NXB" />
         <ErrorMessage name="NXB" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="Tac_gia">Tác giả</label>
         <Field name="Tac_gia" type="text" class="form-control" v-model="bookLocal.Tac_gia" />
         <ErrorMessage name="Tac_gia" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="The_loai">Thể loại</label>
         <Field name="The_loai" type="text" class="form-control" v-model="bookLocal.The_loai" />
         <ErrorMessage name="The_loai" class="error-feedback" />
      </div>
      <!-- <div class="form-group form-check">
         <input name="favorite" type="checkbox" class="form-check-input" v-model="bookLocal.favorite" />
         <label for="favorite" class="form-check-label">
            <strong>Liên hệ yêu thích</strong>
         </label>
      </div> -->
      <div class="form-group">
         <button class="btn btn-primary">Lưu</button>
         <button v-if="bookLocal.sid" type="button" class="ml-2 btn btn-danger" @click="deleteBook">
            Xóa
         </button>
      </div>
   </Form>
</template>

<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
   components: {
      Form,
      Field,
      ErrorMessage,
   },
   emits: ['submit:book', 'delete:book'],
   props: {
      book: { type: Object, required: true }
   },
   data() {
      const bookFormSchema = yup.object().shape({
         Tua_sach: yup
            .string()
            .required('Tên phải có giá trị.')
            .min(2, 'Tên phải ít nhất 2 ký tự.')
            .max(50, 'Tên có nhiều nhất 50 ký tự.'),
         Lan_xuat_ban: yup
            .number()
            .required('Tên phải có giá trị.')
            .min(2, 'Tên phải ít nhất 2 ký tự.')
            .max(50, 'Tên có nhiều nhất 50 ký tự.'),
         So_trang: yup
            .number()
            .required('Tên phải có giá trị.')
            .min(0, 'Tên phải ít nhất 2 ký tự.')
            .max(100000, 'Tên có nhiều nhất 50 ký tự.'),
         Quoc_gia: yup
            .string()
            .required('Tên phải có giá trị.')
            .min(2, 'Tên phải ít nhất 2 ký tự.')
            .max(50, 'Tên có nhiều nhất 50 ký tự.'),
         NXB: yup
            .string()
            .required('Tên phải có giá trị.')
            .min(2, 'Tên phải ít nhất 2 ký tự.')
            .max(50, 'Tên có nhiều nhất 50 ký tự.'),
         Tac_gia: yup
            .string()
            .required('Tên phải có giá trị.')
            .min(2, 'Tên phải ít nhất 2 ký tự.')
            .max(50, 'Tên có nhiều nhất 50 ký tự.'),
         The_loai: yup
            .string()
            .required('Tên phải có giá trị.')
            .min(2, 'Tên phải ít nhất 2 ký tự.')
            .max(50, 'Tên có nhiều nhất 50 ký tự.'),
      });
      return {
         // Props are supposed to be immutable, therefore create
         // a local variable bookLocal and bind it to the form
         bookLocal: {
            ...this.book, favorite: !!this.book.favorite
         },
         bookFormSchema,
      };
   },
   methods: {
      submitBook() {
         this.$emit('submit:book', this.bookLocal);
      },
      deleteBook() {
         this.$emit('delete:book', this.bookLocal.sid);
      },
   },
};
</script>

<style scoped>
@import '@/assets/form.css';
</style>
