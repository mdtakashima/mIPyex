// we want strict javascript that fails
// on ambiguous syntax
"using strict";

// to prevent timeout
requirejs.config({
    waitSeconds: 60
});

// do not use notebook loaded  event as it is re-triggerd on
// revert to checkpoint but this allow extension to be loaded
// late enough to work.

$([IPython.events]).on('app_initialized.NotebookApp', function(){

     require(['custom/tweet_me/main'],function(tweet_me){
       // tweet_me.parameters('twitter helper function directory');
       tweet_me.parameters('/home/damian/.ipython/profile_myext/static/custom/tweet_me');
       console.log('Tweet me extension loaded correctly');
     });

     require(['custom/zenmode/main'],function(zenmode){
       // zenmode.parameters(figure);
       zenmode.parameters('images/back12.jpg');
       console.log('Zenmode extension loaded correctly');
     });

});