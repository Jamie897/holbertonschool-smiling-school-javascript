function quotesSlide() {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      beforeSend: function() {
        $('.loader').show();
      },
      complete: function() {
        $('.loader').hide();
      },
      success: function(result) {
        for (let i = 0; i < result.length; i++) {
          let active = "";
          if (i == 0) {
            active = "active";
          }
          $(`.quotes .carousel-inner`).append(`
            <div class="carousel-item ${active}">
              <div class="d-flex flex-column flex-md-row justify-content-around justify-content-md-center align-items-center quotes-slide">
                <div class="col-md-6">
                  <img class="img-fluid rounded-circle float-right" src=${result[i].pic_url} width="200px" />
                </div>
                <div class="col-md-6">
                  <p>${result[i].text}</p>
                  <p>${result[i].name}</p>
                  <p><i>${result[i].title}</p></i>
                </div>
              </div>
            </div>
          `);
        }
      }
    })
  }
  
  function popular() {
    $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/popular-tutorials',
      beforeSend: function() {
        $('.loader').show();
      },
      complete: function() {
        $('.loader').hide();
      },
      success: function(result) {
        let active = "";
        for (let i = 0; i < result.length; i++) {
          if (i == 0) {
            active = "active";
          } else {
            active = "";
          }
          $(`.popular .tutorial-slides`).append(`
            <div class="carousel-item ${active}">
              <div class="col-12 col-sm-6 col-lg-3 vid-item">
                <div class="popular-slides card border-0" style="width: 20rem;">
                  <div class="card-header">
                    <img class="card-img-top" src=${result[i].thumb_url} width="20rem">
                    <img class="play-btn" src="images/play.png" width="80" height="80">
                  </div>
                  <div class="card-body">
                    <strong>${result[i].title}</strong>
                    <p class="text-muted">${result[i]['sub-title']}</p>
                    <div class="d-flex flex-row">
                      <img class="img-fluid rounded-circle" src=${result[i].author_pic_url} width="50px">
                      <p class="pl-4 pt-3 purple-text"><strong>${result[i].author}</strong></p>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                      <div class="d-flex">
                        ${'<img class="mr-3" src="images/star_on.png" width="20px">'.repeat(result[i].star)}
                        ${'<img class="mr-2" src="images/star_off.png" width="18px">'.repeat(5 - result[i].star)}
                      </div>
                      <p class="purple-text">${result[i].duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `)
        }
  
        $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
  
          for (var i=0;i<3;i++) {
            next=next.next();
            if (!next.length) {
              next=$(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
          }
        });
      }
    });
  
  }
  
  function latest() {
    $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/latest-videos',
      beforeSend: function() {
        $('.loader').show();
      },
      complete: function() {
        $('.loader').hide();
      },
      success: function(result) {
        let active = "";
        for (let i = 0; i < result.length; i++) {
          if (i == 0) {
            active = "active";
          } else {
            active = "";
          }
          $(`.latest .tutorial-slides`).append(`
            <div class="carousel-item ${active}">
              <div class="col-12 col-sm-6 col-lg-3 vid-item">
                <div class="popular-slides card border-0" style="width: 20rem;">
                  <div class="card-header">
                    <img class="card-img-top" src=${result[i].thumb_url} width="20rem">
                    <img class="play-btn" src="images/play.png" width="80" height="80">
                  </div>
                  <div class="card-body">
                    <strong>${result[i].title}</strong>
                    <p class="text-muted">${result[i]['sub-title']}</p>
                    <div class="d-flex flex-row">
                      <img class="img-fluid rounded-circle" src=${result[i].author_pic_url} width="50px">
                      <p class="pl-4 pt-3 purple-text"><strong>${result[i].author}</strong></p>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                      <div class="d-flex">
                        ${'<img class="mr-3" src="images/star_on.png" width="20px">'.repeat(result[i].star)}
                        ${'<img class="mr-2" src="images/star_off.png" width="18px">'.repeat(5 - result[i].star)}
                      </div>
                      <p class="purple-text">${result[i].duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `)
        }
  
        $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
  
          for (var i=0;i<3;i++) {
            next=next.next();
            if (!next.length) {
              next=$(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
          }
        });
      }
    });
  }
  
  
  function coursesVideos(key) {
    $('.courses-videos').empty();
    $('.results-top').empty();
    let topic;
    let sort;
  
    if (key) {
      key = key.charAt(0).toUpperCase() + key.slice(1);
    }
  
    try {
      topic = document.getElementById("topic").value;
      topic = topic.charAt(0).toUpperCase() + topic.slice(1)
    } catch {
      topic = 'All';
    }
  
    try {
      sort = document.getElementById("sort").value;
    } catch {
      sort = 'most_popular';
    }
  
    $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/courses',
      data: {
        q: key,
        topic: topic,
        sort: sort
      },
      beforeSend: function() {
        $('.loader').show();
      },
      complete: function() {
        $('.loader').hide();
      },
      success: function(result) {
        let courses = result.courses;
  
        if (sort == 'most_viewed') {
          courses.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
        }
        if (sort == 'most_popular') {
          courses.sort((a, b) => parseFloat(b.stars) - parseFloat(a.stars));
        }
        if (sort == 'most_recent') {
          courses.sort((a, b) => parseFloat(b.published_at) - parseFloat(a.published_at));
        }
  
        $('.results-top').append(`<p class="text-muted">${courses.length} Videos</p>`);
        for (let i = 0; i < courses.length; i++) {
          if ((courses[i].keywords.includes(key) || !key) && (courses[i].topic == topic || topic == 'All')) {
            $(`.courses-videos`).append(`
            <div class="d-flex col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center">
              <div class="card border-0 col-3 col-sm-12" style="width: 20rem;">
              <div class="card-header">
                <img class="card-img-top" src=${courses[i].thumb_url} width="20rem">
                <img class="play-btn2" src="images/play.png" width="80" height="80">
              </div>
              <div class="card-body">
                <strong>${courses[i].title}</strong>
                <p>${courses[i]['sub-title']}</p>
                <div class="d-flex flex-row">
                  <img class="img-fluid rounded-circle" src=${courses[i].author_pic_url}  width="50px">
                  <p class="pl-4 pt-3 purple-text"><strong>${courses[i].author}</strong></p>
                </div>
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <div class="d-flex ">
                  ${'<img class="mr-3" src="images/star_on.png" width="20px">'.repeat(courses[i].star)}
                  ${'<img class="mr-2" src="images/star_off.png" width="18px">'.repeat(5 - courses[i].star)}
                  </div>
                  <p class="purple-text mt-3">${courses[i].duration}</p>
                </div>
              </div>
            </div>
          </div>
          `)
          }
        }
      }
    });
  }
  
  function filter() {
    $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/courses',
      beforeSend: function() {
        $('.loader').show();
      },
      complete: function() {
        $('.loader').hide();
      },
      success: function(result) {
        $('.filter .row').append(`
        <div class="col">
        <label class="float-left" for="search">KEYWORDS</label>
        <input type="text" class="form-control" onkeydown="keywords(this)" placeholder="Search by keywords">
      </div>
      <div class="col">
        <label class="float-left" for="topic">TOPIC</label>
        <select class="form-control" id="topic" onchange="coursesVideos()">
        </select>
      </div>
      <div class="col">
        <label class="float-left for="sort">SORT BY</label>
        <select class="form-control" id="sort" onchange="coursesVideos()">
        </select>
      </div>
        `)
  
        for (let i = 0; i < result.topics.length; i++) {
          let topic = result.topics[i];
          topic = topic.charAt(0).toUpperCase() + topic.slice(1);
          $('#topic').append(`<option class="bg-white text-body" value="${result.topics[i]}">${topic}</option>`)
        }
        for (let i = 0; i < result.sorts.length; i++) {
          let sort = result.sorts[i];
          sort = sort.charAt(0).toUpperCase() + sort.slice(1);
          sort = sort.replace('_', ' ');
          $('#sort').append(`<option class="bg-white text-body" value="${result.sorts[i]}">${sort}</option>`)
        }
      }
    })
  }
  
  function keywords(keyword) {
    if (event.key == "Enter"){
      event.preventDefault();
      coursesVideos(keyword.value);
    }
  }
  
  window.onload = function() {
    quotesSlide();
    popular();
    latest();
    filter();
    coursesVideos();
  }