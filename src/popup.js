
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
        let resultsTitle = $('#resultsTitle');
        let resultsDiv = $('#results');
        let chartContainer = $('#chartContainer');
        resultsTitle.append('Most impactful sentences: ');


        result.watsonData.sentences.map((sentence, i) => {
        //create new sentence div
          let newLine = $('<div class=\"sentence\"></div>');
          newLine.text('\"' + sentence.text + '\"');
          resultsDiv.append(newLine) + sentence.allSentiments.map(emotion => {
        //create new sentiment result div
            let newSentiment = $('<div class=\"sentiment\"></div>');
            newSentiment.text(emotion);
            resultsDiv.append(newSentiment);
          });
        });
        // resultsDiv.append(output);

        let chart = function() {
          Highcharts.chart('chartContainer', {

            chart: {
              polar: true,
              type: 'area'
          },

          title: {
              text: "Your Text's Sentiments",
              x: -80
          },

          pane: {
              size: '80%'
          },

          xAxis: {
              categories: ['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical', 'Confident', 'Tentative'],
              tickmarkPlacement: 'on',
              lineWidth: 0
          },

          yAxis: {
              gridLineInterpolation: 'polygon',
              lineWidth: 0,
              min: 0
          },

          tooltip: {
              shared: true,
              pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f}%</b><br/>'
          },

          legend: {
              verticalAlign: 'top',
              y: 70,
              layout: 'vertical'
          },

          series: [{
      name: 'Sentiment Scores (0-100)',
      data: result.watsonData.overallData,
      pointPlacement: 'on'
  }]

                    });
        };

        chartContainer.append(chart());
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



