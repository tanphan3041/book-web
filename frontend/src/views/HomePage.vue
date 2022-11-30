<template>
   <div clas="container">
       <div class="d-flex justify-content-center align-items-center">
           <h3 class="welcome mt-3">WELCOME TO BOOKRENT</h3>
       </div>

       <div class="d-flex justify-content-center align-items-center">
           <p class="mt-3">Welcome script</p>
       </div>
   </div>

   <div class="container mb-5">
       <div class="row first-child justify-content-center mt-4">
           <div class="col-md-3 ">
               <img src="../img/dan-huong-hinh.jpg" alt="Đàn Hương Hình" class="book1 rounded p-2">
           </div>

           <div class="col-md-8">
               <div class="row title">
                   <h4>Đàn Hương Hình</h4>
               </div>
               <div class="row detail">
                   &nbsp;&nbsp; Là một tiểu thuyết nổi tiếng của nhà văn Mạc Ngôn. Ông viết tác phẩm này vào mùa thu năm 1996 và hoàn thành năm 2001. Toàn bộ câu truyện bao gồm 3 phần, 
                   18 chương và mỗi chương đều dùng phương thức nhân vật tự thuật, một cách viết khá tiêu biểu của Mạc Ngôn cũng như một số nhà văn Trung Quốc khác. 
                   Việc cấu tứ, sáng tác tiểu thuyết này bắt nguồn từ âm thanh, một chất liệu mà Mạc Ngôn hay vận dụng nó trong các tác phẩm của ông. 
                   Cụ thể trong tác phẩm này thì đó là hí kịch Miêu Xoang, một loại nhạc dân gian rất thịnh hành ở vùng Đông Bắc Cao Mật. 
                   Tiểu thuyết là một sự tổng hợp về những sự kiện cách mạng, tội phạm, luyến ái... 
                   Đàn hương hình cho người đọc biết được cả lịch sử của các hình thức tra tấn tử hình ở Trung Quốc, về lịch sử của hý kịch Miêu Xoang.
               </div>
           </div>
       </div>
   </div>

   <div class="container mb-5">
      <div class="row first-child justify-content-center mt-4">
           <div class="col-md-8 "> 
               <div class="row title">
                   <h4>Biến</h4>
               </div>
               <div class="row detail">
                   &nbsp;&nbsp; Biến là cuốn tự truyện đầu tiên của Mạc Ngôn, chưa từng được xuất bản bằng tiếng mẹ đẻ, nhưng đã được chuyển ngữ và xuất bản bằng tiếng Anh. 
                   Lần đầu tiên, câu chuyện về cuộc đời của nhà văn được chính thức kể trực tiếp và giản dị. Đọc cuốn sách, không khỏi xúc động khi kỷ niệm đầu 
                   tiên được nhắc đến lại là việc “bị xóa tên trong học tịch, đá đít khỏi trường”. Có thể thấy thấp thoáng ẩn ức về nỗi nghèo đói, bị đối xử bất công vì nghèo, 
                   cố gắng đi bộ đội để thoát nghèo, những miếng ăn nhọc nhằn đã in dấu quá sâu trong ký ức. Chiếc xe Gaz 51 Liên Xô cũ màu xanh lá mạ, ước mơ của tuổi thơ ông, 
                   cứ hiện lên trong từng giai đoạn cuộc đời, như sự ám ảnh chưa bao giờ dứt.
               </div>
           </div>

           <div class="col-md-4">  
                  <img src="../img/Biến.png" alt="Biến" class="book1 rounded p-2">
           </div>
      </div>
   </div>

   <div class="container mb-5">
       <div class="row first-child justify-content-center mt-4">
           <div class="col-md-3 ">
               <img src="../img/dan-huong-hinh.jpg" alt="Mỹ Nhân Nga" class="book1 rounded p-2">
           </div>

           <div class="col-md-8">
               <div class="row title">
                   <h4>Mỹ nhân Nga</h4>
               </div>
               <div class="row detail">
                   &nbsp;&nbsp; Vẻ đẹp Nga quá vãng qua nhãn quan tràn đầy lòng trắc ẩn, nuối tiếc của Nabokov. Khép sách lại, là một giọt nước mắt lăn xuống cho thân phận 
                   những người Nga tha hương. Tôi đã ngần ngại đọc “Mỹ nhân Nga” (Thiên Lương dịch, NXB Văn học ấn hành) bởi lẽ, hồi ức khi đọc “Lolita” 
                   (Dương Tường dịch, NXB Hội Nhà văn xuất bản 2015) trong tôi là khó nhằn và ám ảnh. Nabokov luôn kìm độc giả đọc chậm, đọc kỹ, nhẩn nha. 
                   Sách không dành cho người đọc vội, đọc lướt, cũng không dành cho ai đang mệt mỏi, trầm uất, vì có khi nó khiến người ta xuống tinh thần hơn. 
                   Sách dành cho ai thật cân bằng, tĩnh tại, vì đọc Nabokov vừa là để thưởng thức vừa là để luyện trí não vừa là để tìm kiếm cái đẹp của văn chương.
               </div>
           </div>
       </div>
   </div>


</template>

<script>
import UserService from '../services/user.service';

export default {
    name: 'HomePage',
    data() {
        return {
            content: ''
        };
    },
    mounted() {
        UserService.getPublicContent().then(
            response => {
                this.content = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
    }
};
</script>

<style scoped>
.welcome{
    font-size: 30px;
    color: rgb(0, 150, 250);
}

.first-child{
    /* background-color: aqua; */
    box-shadow: 10px 10px 10px 10px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 5px;
}

.book1{
    height: 260px;
    width: 200px;
}
</style>