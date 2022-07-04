
let axios = require('axios');
let events = require('events');

const boss = 'Luke';
const em = new events.EventEmitter();
const baseUrl = 'https://jsonplaceholder.typicode.com';

const BOSS_EVENT = 'Boss';
const END_EVENT = 'End';
const AJAX_COMPLETE_EVENT = 'AjaxC';
const GET_COMMENTS_EVENT = 'GetComments';

console.log('===== STARTING APPLICATION =====')
console.log('getting data from API');

axios.get(`${baseUrl}/posts`).then((pResponse) => {
    let post1Comments = false;
    if (pResponse && pResponse.data) {
        for (let i = 0; i < pResponse.data.length; i++) {
            let post = pResponse.data[i];
            if(post.id === 1) {
                post1Comments = true;
            }
            if (post.title.length < 50) {
                if (post.title.includes('Linus')) {
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

    if(post1Comments) {
        console.log('----------');
        console.log('Comments:');

        em.emit(GET_COMMENTS_EVENT, 1);
    } else {
        em.emit(AJAX_COMPLETE_EVENT);
        em.emit(BOSS_EVENT, boss);
    }
}).catch((error) => {
    logError(error, 'Posts');  
});

em.on(GET_COMMENTS_EVENT, function(id) {
    console.log(`Post ${id} let's get the comments`);
    axios.get(`${baseUrl}/posts/${id}/comments`).then((cResponse) => {
        em.emit(AJAX_COMPLETE_EVENT);
        
        if(cResponse && cResponse.data) {
            cResponse.data.forEach((com) => {
               outputComment(com);
            });
        }
    }).catch((error) => {
        logError(error, 'Comments');
    }).finally(() => {
        em.emit(BOSS_EVENT, boss);
    });
});

function outputComment(com) {
    console.log(`User ${com.email} wrote:`);
    console.log(com.body);
    console.log();
}

function logError(error, type) {
    if(error && error.response) {
        console.log(`${type} request failed with a ${error.response.status}`);
    } else {
        console.log(`${type} request failed for unknown reason`);
    }

    console.log(error);
}

em.on(BOSS_EVENT, function(name) {
    console.log(`Don't forget. ${name} is the BOSS`);
    em.emit(END_EVENT);
});

em.on(AJAX_COMPLETE_EVENT, function() {
    console.log(`All ajax calls are finished`);
});

em.on(END_EVENT, function() {
    console.log('===== ENDING APPLICATION =====');
});
