$(document).ready(() => {
  // api 호출
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      // html 태그에 데이터 넣기
      json.forEach((post) => {
        // 모든 포스트를 담을 요소에 추가
        $("#allPost").append(`
          <div id="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p>id: ${post.id}</p>
          </div>
        `);
      });
      $("#a").click((id) => {
        window.location.href = `detail.html?id=${id.id}`;
        console.log(id);
      });
    });
  $(`#search`).click(() => {
    let searchPlaceEl = $("#searchPlace").val();
    // console.log(searchPlaceEl);
    $("h2").parent().hide();
    $(`h2:contains(${searchPlaceEl})`).parent().show();
  });
});

// Object.keys(json).forEach((post) => {
//   $("#allPost").html(`<div id="data">aaaa</div>`);
//   console.log(json);
//   console.log(post);
//   $("#data").html(`${post}`);
//   // $("#data").html(`${post.title}`);
//   // $("#data").html(`${post.body}`);
