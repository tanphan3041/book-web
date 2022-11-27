<template>
   <Form @submit="submitBook" :validation-schema="bookFormSchema">
      <div class="form-group">
         <label for="name">Tên sách</label>
         <Field name="name" type="text" class="form-control" v-model="bookLocal.name" />
         <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="author">Tác giả</label>
         <Field name="author" type="author" class="form-control" v-model="bookLocal.author" />
         <ErrorMessage name="author" class="error-feedback" />
      </div>
      <div class="form-group">
         <label for="address">Nhà xuất bản</label>
         <Field name="address" type="text" class="form-control" v-model="bookLocal.address" />
         <ErrorMessage name="address" class="error-feedback" />
      </div>
      <div class="form-group form-check">
         <input name="favorite" type="checkbox" class="form-check-input" v-model="bookLocal.favorite" />
         <label for="favorite" class="form-check-label">
            <strong>Yêu thích</strong>
         </label>
      </div>
      <div class="form-group">
         <button class="btn btn-primary">Lưu</button>
         <button v-if="bookLocal.id" type="button" class="ml-2 btn btn-danger" @click="deleteBook">
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
         name: yup
            .string()
            .required('Tên sách phải có giá trị.')
            .min(2, 'Tên sách phải ít nhất 2 ký tự.')
            .max(50, 'Tên sách có nhiều nhất 50 ký tự.'),
         author: yup
            .string()
            .email('Tác giả không đúng.')
            .max(50, 'Tác giả tối đa 50 ký tự.'),
         address: yup.string().max(100, 'Nhà xuất bản tối đa 100 ký tự.'),
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
         this.$emit('delete:book', this.bookLocal.id);
      },
   },
};
</script>

<style scoped>
@import '@/assets/form.css';
</style>
