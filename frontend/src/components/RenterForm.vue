<template>
    <Form @submit="submitRenter" :validation-schema="renterFormSchema">
       <div class="form-group">
          <label for="name">Tên người mượn</label>
          <Field name="name" type="text" class="form-control" v-model="renterLocal.name" />
          <ErrorMessage name="name" class="error-feedback" />
       </div>

       <div class="form-group">
          <label for="age">Tuổi</label>
          <Field name="age" type="age" class="form-control" v-model="renterLocal.age" />
          <ErrorMessage name="age" class="error-feedback" />
       </div>

       <div class="form-group">
          <label for="address">Địa chỉ</label>
          <Field name="address" type="text" class="form-control" v-model="renterLocal.address" />
          <ErrorMessage name="address" class="error-feedback" />
       </div>

      <div class="form-group">
          <label for="phone">Số điện thoại</label>
          <Field name="phone" type="text" class="form-control" v-model="renterLocal.phone" />
          <ErrorMessage name="phone" class="error-feedback" />
       </div>

       <div class="form-group">
          <button class="btn btn-primary">Lưu</button>
          <button v-if="renterLocal.id" type="button" class="ml-2 btn btn-danger" @click="deleteRenter">
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
    emits: ['submit:renter', 'delete:renter'],
    props: {
       renter: { type: Object, required: true }
    },
    data() {
       const renterFormSchema = yup.object().shape({
            name: yup
             .string()
             .required('Tên phải có giá trị.')
             .min(2, 'Tên sách phải ít nhất 2 ký tự.')
             .max(50, 'Tên sách có nhiều nhất 50 ký tự.'),
            age: yup
             .string()
             .min(1, 'Tuổi phải ít nhất 2 ký tự.')
             .max(3, 'Tuổi giả có nhiều nhất 3 ký tự.'),
             
            phone: yup
             .string()
             .required('Số điện thoại phải có giá trị.')
             .min(10, 'Số điện thoại phải ít nhất 10 ký tự.')
             .max(10, 'Số điện thoại có nhiều nhất 10 ký tự.'),
       });
       return {
          // Props are supposed to be immutable, therefore create
          // a local variable bookLocal and bind it to the form
          renterLocal: {
             ...this.renter, favorite: !!this.renter.favorite
          },
          renterFormSchema,
       };
    },
    methods: {
       submitRenter() {
          this.$emit('submit:renter', this.renterLocal);
       },
       deleteRenter() {
          this.$emit('delete:renter', this.renterLocal.id);
       },
    },
 };
 </script>
 
 <style scoped>
 @import '@/assets/form.css';
 </style>
 