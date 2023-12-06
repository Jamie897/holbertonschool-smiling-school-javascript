window.onload = function () {
    quotes();
    tutorials();
    vids();
    filters();
    courses();
}

function quotes() {

    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/quotes`,
        dataType: 'json',
        beforeSend: function () {
            $(".loader").show()
        },
        complete: function () {
            $(".loader").hide()
        },
        success: function (result) {
            let active = "active";
            for (let i = 0; i < result.length; i++) {
                if (i != 0) {
                    active -= "active"
                }
                $("#car-inner-1").append(`
                        <div class="carousel-item ${active}">
                            <div class="container">
                                <div class="d-flex  flex-column flex-md-row  align-items-center text-white">
                                    <img class="quote-pic rounded-circle" src=${result[i].pic_url} alt="avatar" width="200px">
                                    <div class=" ml-md-5 mr-md-0 flex-column">
                                        <p style="font-size: 22px;">« ${result[i].text}</p>
                                        <p class="pt-2 mb-0" style="font-size: 22px;"><b>${result[i].name}</b></p>
                                        <p><i style="font-size: 18px;">${result[i].title}</i></p>
                                    </div>
                                </div>
                              </div>
                            </div> `
                )

            }


        }
    });
}



function tutorials() {


    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/popular-tutorials`,
        dataType: 'json',
        beforeSend: function () {
            $(".loader").show()
        },
        complete: function () {
            $(".loader").hide()
        },
        success: function (result) {
            let active = "active";
            let stars = "";
            let no_stars = ""
            for (let i = 0; i < result.length; i++) {
                stars = "";
                no_stars = "";
                if (i != 0) {
                    active -= "active"
                }
                for (j = 0; j < result[i].star; j++) {
                    stars += `<img class="mr-2" src="images/star_on.png" width="18px">`
                }
                for (j = 0; j < 5 - result[i].star; j++) {
                    no_stars += `<img class="mr-2" src="images/star_off.png" width="18px">`
                }
                $("#car-inner-2").append(`
                <div class="carousel-item ${active}">

                            <div class="col-12 col-sm-6 col-lg-3 vid-item">
                                <div class="card bg-white border-0">

                                    <img class="card-img-top " src=${result[i].thumb_url}>
                                    <img class="card-img-top play-btn" src="images/play.png" width="10px">

                                    <div class="card-body">
                                        <h4 class="card-title">${result[i].title}</h4>
                                        <p class="card-text text-muted">${result[i]["sub-title"]} </p>
                                    </div>
                                    <div class="pl-3 d-flex  flex-md-row  align-items-center ">
                                        <img class="rounded-circle" src=${result[i].author_pic_url} width="40px">
                                        <p class="text-royal pl-3 pt-2"><b>${result[i].author}</b></p>
                                    </div>
                                    <div class="pl-3 pb-2 d-flex  flex-md-row  align-items-center ">
                                    ${stars} ${no_stars}
                                        
                                        <p class="pt-3 ml-5 text-royal"><b>${result[i].duration}</b></p>
                                    </div>
                                </div>
                            </div>

                </div>

                `
                )

            }
            $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));

                for (var i = 0; i < 3; i++) {
                    next = next.next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                }
            });
        }

    });


}

function vids() {


    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/latest-videos`,
        dataType: 'json',
        beforeSend: function () {
            $(".loader").show()
        },
        complete: function () {
            $(".loader").hide()
        },
        success: function (result) {
            let active = "active";
            let stars = "";
            let no_stars = ""
            for (let i = 0; i < result.length; i++) {
                stars = "";
                no_stars = "";
                if (i != 0) {
                    active -= "active"
                }
                for (j = 0; j < result[i].star; j++) {
                    stars += `<img class="mr-2" src="images/star_on.png" width="18px">`
                }
                for (j = 0; j < 5 - result[i].star; j++) {
                    no_stars += `<img class="mr-2" src="images/star_off.png" width="18px">`
                }
                $("#car-inner-3").append(`
                <div class="carousel-item ${active}">

                            <div class="col-12 col-sm-6 col-lg-3 vid-item">
                                <div class="card bg-white border-0">

                                    <img class="card-img-top " src=${result[i].thumb_url}>
                                    <img class="card-img-top play-btn" src="images/play.png" width="10px">

                                    <div class="card-body">
                                        <h4 class="card-title">${result[i].title}</h4>
                                        <p class="card-text text-muted">${result[i].title} </p>
                                    </div>
                                    <div class="pl-3 d-flex  flex-md-row  align-items-center ">
                                        <img class="rounded-circle" src=${result[i].author_pic_url} width="40px">
                                        <p class="text-royal pl-3 pt-2"><b>${result[i].author}</b></p>
                                    </div>
                                    <div class="pl-3 pb-2 d-flex  flex-md-row  align-items-center ">
                                    ${stars} ${no_stars}
                                        
                                        <p class="pt-3 ml-5 text-royal"><b>${result[i].duration}</b></p>
                                    </div>
                                </div>
                            </div>

                </div>

                `
                )

            }
            $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));

                for (var i = 0; i < 3; i++) {
                    next = next.next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                }
            });
        }

    });


}

function filters() {
    $("#filters").empty()

    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/courses`,
        dataType: 'json',
        success: function (result) {

            let topics = "";
            let sorts = "";
            for (let i = 0; i < result["topics"].length; i++) {
                topics += `<option value=${result["topics"][i].charAt(0).toUpperCase() + result["topics"][i].slice(1)}>
                ${result["topics"][i].charAt(0).toUpperCase() + result["topics"][i].slice(1)}</option>`
            }
            for (let j = 0; j < result["sorts"].length; j++) {


                sorts += `<option value=${result["sorts"][j].charAt(0).toUpperCase() + result["sorts"][j].slice(1)}>
                ${(result["sorts"][j].charAt(0).toUpperCase() + result["sorts"][j].slice(1)).replace("_", " ")}</option>`
            }

            $("#filters").append(`
                        <div class="form-group col-12 col-lg-4 text-white">
                            <label for="searchInput"><b>KEYWORDS</b></label>
                            <div class=" border-bottom mb-0 mb-lg-3">
                                <span class="filter-input">
                                    <span class="search-icon d-flex align-items-center px-2"></span>
                                </spanf>
                                        
                                <input onkeydown="search(this)"class="form-control border-0" name="gsearch" type="search" id="searchInput" placeholder="Search by keywords">

                            </div>
                        </div>`)
            $("#filters").append(`

                                <div class="form-group col-12 col-lg-4 text-white ">
                                <label for="topicSelect"><b>TOPIC</b></label>
                                <div class="border-bottom mb-0 mb-lg-3">
                                    <select onchange="topic()" class="form-control border-0" id="topicSelect">
                                        ${topics}
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-12 col-lg-4 text-white ">
                                <label for="exampleFormControlSelect1"><b>SORT BY</b></label>
                                <div class="border-bottom mb-0 mb-lg-3">
                                    <select onchange="sort()"class="form-control border-0" id="exampleFormControlSelect1">
                                        ${sorts}
                                    </select>
                                </div>
                            </div>
                
                
                
                `)



        }


    })
}



function courses(keywords) {
    $("#course-videos").empty()

    let keyword
    let topic;
    let sort;
    if (document.getElementById("topicSelect")) {
        topic = document.getElementById("topicSelect").value
    }
    if (document.getElementById("exampleFormControlSelect1")) {
        sort = document.getElementById("exampleFormControlSelect1").value
    }

    $.ajax({
        type: 'GET',
        url: `https://smileschool-api.hbtn.info/courses`,
        dataType: 'json',
        data: {
            q: keyword,
            topic: topic,
            sort: sort
        },
        beforeSend: function () {
            $(".loader").show()
        },
        complete: function () {
            $(".loader").hide()
        },
        error: function (err) {
            alert("problem")
        },
        success: function (result) {
            count = 0;
            console.log(result["topic"])

            if (!topic) {
                topic = result["topic"].charAt(0).toUpperCase() + result["topic"].slice(1);
            }
            if (!sort) {
                sort = result["sort"].charAt(0).toUpperCase() + result["sort"].slice(1);
            }


            console.log("-------------TESTS-----------")

            if (sort == "Most popular") {
                result["courses"].sort((a, b) => b.star - a.star);

            } else if (sort == "Most recent") {
                result["courses"].sort((a, b) => b.published_at - a.published_at);

            } else if (sort == "Most viewed") {
                result["courses"].sort((a, b) => b.views - a.views);

            }
            console.log(sort)


            let stars = "";
            let no_stars = ""
            for (let i = 0; i < result["courses"].length; i++) {
                if (topic == "All") {
                    count++;
                    populate(stars, no_stars, result, i, count)
                } else {
                    if (result["courses"][i].topic == topic) {
                        if (keywords) {
                            if (result["courses"][i].keywords.includes(keywords.charAt(0).toUpperCase() + keywords.slice(1))) {
                                count++;
                                populate(stars, no_stars, result, i, count)
                            }
                        }
                        else {
                            console.log("stars = " + result["courses"][i].star)
                            console.log("published at = " + result["courses"][i].published_at)
                            console.log("Views = " + result["courses"][i].views)


                            count++;

                            populate(stars, no_stars, result, i, count)
                        }
                    }
                }

            }
            $("#count").text(`${count} videos`)

        }

    });


}


function populate(stars, no_stars, result, i, count) {

    stars = "";
    no_stars = "";

    for (j = 0; j < result["courses"][i].star; j++) {
        stars += `<img class="mr-2" src="images/star_on.png" width="18px">`
    }
    for (j = 0; j < 5 - result["courses"][i].star; j++) {
        no_stars += `<img class="mr-2" src="images/star_off.png" width="18px">`
    }

    $("#course-videos").append(`



    <div class="col-12 col-sm-4 col-lg-3 vid-item">
        <div class="card bg-white border-0">
            <img class="card-img-top " src=${result["courses"][i].thumb_url}>
            <img class="card-img-top play-btn" src="images/play.png" width="10px">

            <div class="card-body">
                <h4 class="card-title">${result["courses"][i].title}</h4>
                <p class="card-text text-muted">${result["courses"][i].title} </p>
            </div>
            <div class="pl-3 d-flex  flex-md-row  align-items-center ">
                <img class="rounded-circle" src=${result["courses"][i].author_pic_url} width="40px">
                <p class="text-royal pl-3 pt-2"><b>${result["courses"][i].author}</b></p>
            </div>
            <div class="pl-3 pb-2 d-flex  flex-md-row  align-items-center ">
                ${stars} ${no_stars}
                <p class="pt-3 ml-5 text-royal"><b>${result["courses"][i].duration}</b></p>
            </div>
        </div>
</div>`)
}

function topic() {
    let a = document.getElementById("topicSelect")
    let changeTo = a.options[a.selectedIndex].text;
    a.value = changeTo;
    let searchInput = document.getElementById("searchInput").value
    courses(searchInput);

}
function search(keywords) {
    if (event.key == "Enter") {
        event.preventDefault();
        key = keywords;
        courses(keywords.value)


    }
}
function sort() {
    /*
    let a = document.getElementById("exampleFormControlSelect1")
    let changeTo = a.options[a.selectedIndex].text;
    a.value = changeTo;
    */
    let searchInput = document.getElementById("searchInput").value
    courses(searchInput);
}
