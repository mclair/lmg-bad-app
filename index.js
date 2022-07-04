
var axios = require('axios');
/**
 * Express is not utilized in any way. It should not be imported
 * Also, it's missing from the package.json, preventing the file from running.
 * This can be resolved by removing it, or adding a dependency on express
 */
var express = require('express');

//Again, unused. Unclear why you'd want this instead of Math.PI
pi = 3.14;
 
this.boss = 'Luke';
 
console.log('===== STARTING APPLICATION =====')
 
/** 
 * Why is this on a timeout? If you want it to be the last thing outputted, 
 * tie it to an event. With a timeout, you have potentially inconsistent behaviour
 * based on how the jsonplaceholder server responds or other network inconsistencies
 */
setTimeout(() => {
    //Use string interpolation
    console.log('Dont forget. ' +this.boss + ' is the BOSS');
}, 500);
 
/**
 * Once again, we can't run with this. `employees` is undefined and prevents the script
 * from running.
 */
console.log('Current Employees:');
for (var i = 0; i < employees.length; i += 1) {
    if(isMe(employees[i])) {
      console.log(employees[i] + ' - Hey.. Its you!');
    }
    else {
      console.log(employees[i]);
    }
}

console.log('getting data from API');

axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    response = response.data;
    if (response.length == 0) {
        for (let i = 0; i < response.length; i++) {
                       if (response[i].length < 50) {
                if (response[i].includes('Linus')) {
                                       const cors = required('cors');
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
      axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response2) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response3) => {
        printAllComments(response3.data);
    });
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

function isMe(employee_name) {
    if (YourName === employee_name) {
        return true;
    } else {
        return false;
    }
}
