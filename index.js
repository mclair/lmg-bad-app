
let axios = require('axios');
let events = require('events');

let boss = 'Luke';
let em = new events.EventEmitter();
let baseUrl = 'https://jsonplaceholder.typicode.com';

console.log('===== STARTING APPLICATION =====')

console.log('getting data from API');

axios.get(`${baseUrl}/posts`).then((pResponse) => {
    let response = pResponse.data;
    if (response.length > 0) {
        for (let i = 0; i < response.length; i++) {
            if (response[i].title.length < 50) {
                if (response[i].title.includes('Linus')) {
                    console.log('Post is valid');
                } else {
                    console.log('Post name contains word Linus');
                }
            } else {
                console.log('Post name is too long');
            }
        }
    } else {
        console.log('There are no posts');
    }

    if (response[0].id == 1) {
        console.log('Post 1, lets get the comments');
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response3) => {
        printAllComments(response3.data);
        em.emit('Boss', boss);
    });
      console.log('All ajax calls are finished');
    };

});

setTimeout(() => {
  console.log('===== ENDING APPLICATION =====')
}, 3000);

function printAllComments(comments) {
  console.log('----------');
  console.log('Comments:');

  comments.forEach((com) => {
    console.log('User ' + com.email + ' wrote:');
    console.log(com.body);
    console.log();
});
}

em.on('Boss', function(name) {
    console.log(`Don't forget. ${name} is the BOSS`);
});

