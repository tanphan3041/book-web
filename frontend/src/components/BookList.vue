<script>
export default {
   props: {
      books: { type: Array, default: () => [] },
      activeIndex: { type: Number, default: -1 },
   },
   emits: ['update:activeIndex'],
   methods: {
      updateActiveIndex(index) {
         this.$emit('update:activeIndex', index);
      },
   },
};
</script>

<template>
   <div class="justify-content-center">

         <div class="card text-center p-3 mb-3" v-for="(book, index) in books" :key="book.id"
         :class="{ active: index === activeIndex }">
               
               <div class="imgBox">
                  <!-- <img src="" alt="" srcset=""> -->
               </div>

               <div class="contentBox">
                  <h2>
                     {{book.name}}
                  </h2>

                  <h4>
                     {{book.author}}
                  </h4>

                  <p>
                     Price Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati labore, commodi ab distinctio nobis sequi adipisci maxime rem iste eaque ipsum atque quidem totam consequatur iusto doloribus nulla ad.
                  </p>

                  <p>
                     Price 
                  </p>
                  <hr>

                  <router-link to="/renters">
                     <button class="btn btn-primary">
                        <span>
                           Rent
                        </span>
                     </button>
                  </router-link>
               </div>
         </div>

   </div>

   <!-- dfa;dilashfoashfilshfsa commit -->

</template>
