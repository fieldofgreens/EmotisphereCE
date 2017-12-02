$(document).ready(function() {
  
  let app = {
  
    server: 'https://emotisphere2.herokuapp.com/entries',
  
    send: function(data) {
      console.log('data in send =', data);
      return $.ajax({
        type: 'POST',
        url: app.server,
        crossDomain: true,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data)
      });
    },

    handleSubmit: function(thing) {
      let data = {
        text: thing.value,
        title: "Guest Post from Extension"
      };
      console.log('data in handlesubmit =', data);

      app.send(data).then((result)=>{
        console.log('send then success result =', result);
      }).catch((error)=>{
        console.log('catch error =', error);
      });
      // .then().catch();
      // .then(function() {
      //   console.log('post then?');
      // });

      // console.log('thing ', thing.value);
      // console.log(document.getElementById('textfield').value);
      // console.log('message = ', message);
      // console.log('message.text = ', message.text);
      // console.log(message.text);
      // event.prevent Default();
    },
  
    init: function() {
      console.log('initialized');
      document.getElementById('submitbutton').addEventListener('click', function(event) {
        event.preventDefault();
        app.handleSubmit(document.getElementById('textfield'));
      });
      // app.$message = document.getElementById('textfield');
      //try document.getElementById
      // app.$send = $('#submit');
      // app.$submit.submit(function() {
      //   console.log('submit?');
      // });
      // app.$send.on('click', app.handleSubmit);
    }
  }
  
  app.init();
  
  });
  
  