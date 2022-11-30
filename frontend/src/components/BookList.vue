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


         <ul class="list-group">
            <div class="justify-content-center">
                  <div class="card text-center p-3 mb-3">
                     <li class="list-group-item" v-for="(book, index) in books" :key="book.id"
                              :class="{ active: index === activeIndex }"  @click="updateActiveIndex(index)" >
                        <div class="contentBox">
                           <h2>
                              {{book.name}}
                           </h2>

                           <h4>
                              {{book.author}}
                           </h4>

                           <!-- <p>
                              {{book.address}}
                           </p> -->

                           <!-- <p>
                              {{book.price}}
                           </p> -->
                           <hr>

                           <router-link to="/renters">
                              <button class="btn btn-success">
                                 <span>
                                    Rent
                                 </span>
                              </button>
                           </router-link>
                        </div>
                     </li>
                  </div>
            </div>
         </ul>


   

   <!-- dfa;dilashfoashfilshfsa commit -->

</template>
