$(document).ready(function() {

    var url;
    var channelId;
    var img;
    var width;
    var height;
    var name;
    var totalViews;
    var totalSub;
    var totalVid;


    $("form").submit(function() {

        //get channel id value from inputted form
        channelId = $("#search").val();

        // request from youtube api



        url = "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAjf8dxlIZVoEzQdKCeDSmsiTENHoatxgE&id=" + channelId + "&part=snippet,contentDetails,statistics";

        $.get(url, function(data) {



            fetch(data);
            bindData(img, width, height, name, totalViews, totalSub, totalVid)

        });

        //update subcribers



        return false;


    });

    function fetch(data) {
        img = data.items[0].snippet.thumbnails.medium.url;
        width = data.items[0].snippet.thumbnails.medium.url.width;
        height = data.items[0].snippet.thumbnails.medium.url.height;
        name = data.items[0].snippet.title;
        totalViews = data.items[0].statistics.viewCount;
        totalSub = data.items[0].statistics.subscriberCount;
        totalVid = data.items[0].statistics.videoCount;
    }

    function bindData(img, width, height, name, totalViews, totalSub, totalVid) {
        $("#thumbnail").attr("src", img);
        $("#thumbnail").attr("width", width);
        $("#thumbnail").attr("height", height);
        $("#name").html(name);
        $("#totalViews").html("<h4>Total Views</h4>" + totalViews);
        $("#subscribers").html("<h4>Subscribers</h4>" + totalSub);
        $("#totalVideos").html("<h4>Total Videos</h4>" + totalVid);


    }





});