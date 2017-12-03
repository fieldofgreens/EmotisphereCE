
  let app = {
  
    server: 'https://emotisphere2.herokuapp.com/guest',
    test: 'http://localhost:8080/guest',

    send: function(data) {
      console.log('data in send =', data);
      return $.ajax({
        type: 'GET',
        url: app.server,
        // crossDomain: true,
        // dataType: "json",
        // contentType: "application/json",
        data: {
          text: data.text
        }
      });
    },

    handleSubmit: function(thing) {
      let data = {
        "text": thing.value,
      };
      console.log('data in handlesubmit =', data);

      app.send(data).then((result)=>{
        let resultsTitle = document.getElementById('resultsTitle');
        let resultsDiv = document.getElementById('results');
        resultsDiv.append('Please see your results below ');
        resultsDiv.append(JSON.stringify(result));
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
  