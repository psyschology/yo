


function checkNewAudioAnnouncement(){
    console.log("check audio lisssener is on................");
var lastAudioAnnouncementId=localStorage.getItem("lastAudioAnnouncementId");

    $.get('Ui/userUi/php/getCurrentAudioAnnouncement.html',
    {"lastAudioAnnouncementId":lastAudioAnnouncementId},
    function(data){
        console.log(" audio announcement lissener:"+data);
        if(data!="no"){
            localStorage.setItem("lastAudioAnnouncementId",data);
           var audioPlayer=new Audio('data/announcementAudio/'+data);
           audioPlayer.load();
           audioPlayer.play();
        }
    });



}