/**
 * This whole file would benefit from a formatter. The indentation is all over the place.
 */

/**
 * Axios is not requesting a specific version or version range in the package.json.
 * It's just wildcarded to take whatever the most recent version is, which isn't
 * ideal. The package-lock.json should help, but if it's not present (as it wasn't for
 * the initial file set) `npm install` will just grab the newest verion which might
 * not be compatible.
 */
var axios = require('axios');
/**
 * Express is not utilized in any way. It should not be imported
 * Also, it's missing from the package.json, preventing the file from running.
 * This can be resolved by removing it, or adding a dependency on express
 */
var express = require('express');

//Again, unused. Unclear why you'd want this instead of Math.PI
pi = 3.14;

/**
 * Using `this` in this context is simply the global execution context. 
 * Should not be using `this` here
 */
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
 * Once again, we can't run without this. `employees` is undefined in the base version and prevents the script
 * from running.
 */
const employees = [];

console.log('Current Employees:');
/**
 * Odd choice of syntax for incrementing i. 
 * Also, unnecessary to index the loop, just use foreach.
 */
for (var i = 0; i < employees.length; i += 1) {
    /**
     * In either case here, you're outputting the employee name. 
     * There are a few different ways to get this result
     * 1) console.log(`${employees[i]} ${isMe(employees[i])}`) having isMe return a string instead of a boolean
     * 2) console.log(`${employees[i]} ${isMe(employees[i]) ? ' - Hey.. Its you!' : '')}`)
     * 
     * It's simpler syntax if you're using the foreach loop
     */
    if(isMe(employees[i])) {
      console.log(employees[i] + ' - Hey.. Its you!');
    }
    else {
      console.log(employees[i]);
    }
}

console.log('getting data from API');

//Extract the base url
axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //don't rebind the input variable. Also no context about what response is
    response = response.data;
    /**
     * Didn't check that your input `response` wasn't null.
     * Bad logic, intent appears to be a greater than check or an inequality op.
     * As it currently it, internal code will not be run with provided url
     */
    if (response.length == 0) {
        //Again use foreach
        for (let i = 0; i < response.length; i++) {
                       /**
                        * The output messages reference 'Post Name' so I think this 
                        * should be referring to the post title.
                        */
                       if (response[i].length < 50) {
                //This could be much shorter with a ternary operator
                //Whether or not that's clearer is somewhat in the eye of the reader
                if (response[i].includes('Linus')) {
                    /**
                     * can't say I've ever seen `required` before. Looks to be an alias
                     * of `require` but either way, this is the incorrect spot to be
                     * pulling in this. Plus it's not even used
                     */
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

    /**
     * Dangerous to assume you've got a response. Also the response id's might not be sorted
     * so if you only want the comments for id:1 it'd be better to find it in the preceeding loop
     */
    if (response[0].id == 1) {
        console.log('Post 1, lets get the comments');
      /**
       * This call isn't being used for anything. Only the internal call to retrieve comments
       */
      axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response2) => {
        //This isn't reusable
        //response, response2, response3 are susceptable to usage mistakes as in this function all
        //3 are in scope.
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response3) => {
        printAllComments(response3.data);
    });
    });
      //This prints before the preceeding ajax requests are complete, which is deceiving
      console.log('All ajax calls are finished');
    };

});

/**
 * Again a timeout. Assumptions about execution time. Maybe it'll be done in 3 seconds, maybe not.
 * Better to have it deterministic and use an event when you know you're done
 */
setTimeout(() => {
  console.log('===== ENDING APPLICATION =====')
}, 3000);

/**
 * No defensive coding in place. Comments might be null. Even if it's empty, it's unclear
 * as the comments header will be outputted but not comments.
 * 
 */
function printAllComments(comments) {
  console.log('----------');
  console.log('Comments:');

  comments.forEach((com) => {
    //String interpolation would avoid concatenation ops
    console.log('User ' + com.email + ' wrote:');
    console.log(com.body);
    console.log();
});
}

/**
 * This function could be a single line of 
 * `return YourName === employee_name`
 * However, YourName isn't defined, so it'll always be a mystery.
 * It's not called though due to the `employees` list not being defined (or populated)
 */
function isMe(employee_name) {
    if (YourName === employee_name) {
        return true;
    } else {
        return false;
    }
}
