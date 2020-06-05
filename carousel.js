$(document).ready(function() {
  var carouselImages = [
    {
      image_url: "https://wallpapersite.com/images/pages/pic_w/872.jpg",
      title: "Watch Dogs",
      photographer_id: "Dog201"
    },
    {
      image_url:
        "https://cdn.allwallpaper.in/wallpapers/1280x720/13655/video-games-assassins-creed-game-1280x720-wallpaper.jpg",
      title: "Assassins Creed",
      photographer_id: "Assassin20"
    },
    {
      image_url: "https://i.ytimg.com/vi/4TOy_8_h4n4/maxresdefault.jpg",
      title: "God of War",
      photographer_id: "GodofWar22"
    },
    {
      image_url: "http://paperlief.com/images/tomb-raider-cast-wallpaper-3.jpg",
      title: "Tomb Raider",
      photographer_id: "Raider7"
    }
  ]

  var htmlStr = ""

  carouselImages.forEach(function(item, i) {
    htmlStr += `
  					<div id="image${i}" class="pics">
  						<img src='${item.image_url}'/>
  						<p class="title">"${item.title}" by <span>${item.photographer_id}</span></p>
  						<div class= "prev">&laquo</div>
             	<div class= "next">&raquo</div>
  					</div>
  					`
  })

  $("#container").html(htmlStr)
  $(".pics:first-child").addClass("current opacity")

  $(".next").on("click", function() {
    var current = $(".current")
      .attr("id")
      .substr(5)
    var nextIndex = Number(current) + 1

    if (nextIndex === carouselImages.length) {
      nextIndex = 0
    }

    $(`#image${current}`).removeClass("current opacity")
    $(`#image${nextIndex}`).addClass("current opacity")
  })
  $(".prev").on("click", function() {
    var current = $(".current")
      .attr("id")
      .substr(5)
    var prevIndex = Number(current) - 1

    if (prevIndex === -1) {
      prevIndex = carouselImages.length - 1
    }

    $(`#image${current}`).removeClass("current opacity")
    $(`#image${prevIndex}`).addClass("current opacity")
  })
})
