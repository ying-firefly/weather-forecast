$(function () {
  // 功能1：点击 "更多"
  $('.menu').hide();
  $('.icon-more').click(function () {
    if ($('.menu').is(':hidden')) {
      $('.menu').show();
    } else {
      $('.menu').hide();
    }
  })

  // 功能2：隐藏 “更多”
  $(document).click(function (e) {
    if (!$(e.target).is('.icon-more') && !$(e.target).is('.icon-refresh')) {
      var e = e || window.event;
      var elem = e.target || e.srcElement;
      while (elem) {
        if (elem.className && elem.className === 'menu') {
          return;
        }
        elem = elem.parentNode;
      }
      $('.menu').css('display', 'none');
    }
  })

  // 功能3：刷新按钮
  $('.icon-refresh').click(function () {
    // let list = [];
    $.get('http://api.tianapi.com/tianqi/index', {
      key: 'f5ed06bc7754e8d5439774641f07d788',
      city: '广州市'
    },
      (res, status) => {
        if (res.code == 200) {
          console.log(res.newslist)
          let list = res.newslist[0]

          $('#area').html(list.area)
          $('#date').html(list.date)
          $('#weather').html(list.weather)
          $('#weatherimg').attr('src', `./img/${list.weatherimg}`)
          $('#real').html(list.real)
          $('#lowest').html(list.lowest)
          $('#highest').html(list.highest)
          $('#wind').html(list.wind)
          $('#windspeed').html(list.windspeed)
          $('#windsc').html(list.windsc)
          $('#sunrise').html(list.sunrise)
          $('#sunset').html(list.sunset)
          $('#moonrise').html(list.moonrise)
          $('#moondown').html(list.moondown)
          $('#pcpn').html(list.pcpn)
          $('#pop').html(list.pop)
          $('#uv_index').html(list.uv_index)
          $('#vis').html(list.vis)
          $('#humidity').html(list.humidity)
          $('#tips').html(list.tips)
        } else {
          alert(res.msg)
        }
      }, 'json')
    // console.log(list)
  })
})