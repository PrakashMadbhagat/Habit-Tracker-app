const cron = require('node-cron');


// Daily at 9 AM 
cron.schedule("0 9 * * *", function() {
    console.log("Sending Notification to user");
});

// // Creating a cron job which runs on every 10 second
// cron.schedule("*/10 * * * * *", function() {
//     console.log("running a task every 10 second");
// });