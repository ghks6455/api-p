$(document).ready(() => {
  // api 호출
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.id);
      // html 태그에 데이터 넣기
      json.forEach((post) => {
        console.log(post.title);
        console.log(post.body);

        // 모든 포스트를 담을 요소에 추가
        $("#allPost").append(`
          <div id="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          </div>
        `);
      });
    });
});

// Object.keys(json).forEach((post) => {
//   $("#allPost").html(`<div id="data">aaaa</div>`);
//   console.log(json);
//   console.log(post);
//   $("#data").html(`${post}`);
//   // $("#data").html(`${post.title}`);
//   // $("#data").html(`${post.body}`);
