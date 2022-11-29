<template>
    <div class="page">
       <h4>Thông tin người mượn</h4>
       <RenterForm :renter="onAddRenter" @submit:renter="onAddRenter" />
       <p>{{ message }}</p>
    </div>
 </template>
 
 <script>
 import RenterForm from '@/components/RenterForm.vue';
 import { renterService } from '@/services/renter.service';
 export default {
    components: {
       RenterForm,
    },
    data() {
       return {
          renter: null,
          message: '',
       };
    },
    methods: {
       async onAddRenter(renter) {
          try {
             await renterService.create(renter)
             this.message = 'Người mượn đã được thêm thành công';
          } catch (error) {
             console.log(error);
          }
       },
    },
 };
 </script>