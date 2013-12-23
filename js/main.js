// $(document).ready(function(){
//   $('#loader').hide();
//   $("#git-repos").on("click", function(){
//     $.ajax({
//       beforeSend: function(e){
//         e.preventDefault();
//         $('#loader').show();
//       },
//       success: function(data){
//       console.log(this);
//         setTimeout(function(){
//           $('#loader').hide();
//           $('.wrapper').empty();
//           $('.wrapper').html(data['Title']);
//         }, 100000);
//       }
//     });
//   });
// });

// (function(){
//   var delay = 3000;
//   window.setTimeout(function(){$('#downloadLink')[0].click();},delay);
// })();
