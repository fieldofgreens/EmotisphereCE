$(document).ready(function() {

let app = {

  // server: 'https://emotisphere2.herokuapp.com/entries',

  // send: function(message) {
  //   $.ajax({
  //     type: 'POST',
  //     url: app.server,
  //     data: {
  //       // title: this.state.newestTitle,
  //       text: message,
  //       // username: this.state.username
  //     },
  //     success: function() {
  //       console.log('post success')
  //     }
  //   }).then(function() {
  //     context.props.rerender();
  //   }); 
  // },

  handleSubmit: function(thing) {
    console.log('thing ', thing.value);
    console.log(document.getElementById('textfield').value);
    // let message = {
    //   text: app.$message.val()
    // };
    // console.log(message.text);
    // app.send(message);
    // event.preventDefault();
  },

  init: function() {
    console.log('initialized');
    // app.$message = document.getElementById('textfield');

    document.getElementById('submitbutton').addEventListener('click', function() {
      app.handleSubmit(document.getElementById('textfield'));
    });
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

