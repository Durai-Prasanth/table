
/*--------loader script-----------*/
$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    var questionNo = 0;
    var correctCount = 0;
    var q = [
        {'Q':'Desk key on the Cabinet?', 'A':1,'B':['Yes','No']},
        {'Q':'Car key on the Cabinet?', 'A':1,'B':['Yes','No']},
        {'Q':'Confidential papers on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Coffee mug on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'Pen stand on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'Cosmetic items on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'File contain confidential data on the deck?', 'A':1,'B':['Yes','No']},
        {'Q':'Reference book on the Cabinet?', 'A':0,'B':['Yes','No']},
        {'Q':'Unlocked Laptop on the Cabinet?', 'A':1,'B':['Yes','No']},
        {'Q':'Holiday List on the Cabinet?', 'A':0,'B':['Yes','No']},
        {'Q':'Stick on note with passwords written on the Cabinet?', 'A':1,'B':['Yes','No']},
        {'Q':'Mobile on the Cabinet?', 'A':0,'B':['Yes','No']},
        {'Q':'Papers in dust bin?', 'A':1,'B':['Yes','No']},
        {'Q':'Waste boxes on the Cabinet?', 'A':1,'B':['Yes','No']},
    ];

    $(document.body).on('click',"label.element-animation",function (e) {
        
    //ripple start
        // var parent, ink, d, x, y;    	
        //  parent = $(this);
        // if(parent.find(".ink").length == 0)
        //     parent.prepend("<span class='ink'></span>");
            
        // ink = parent.find(".ink");
        // ink.removeClass("animate");
        
        // if(!ink.height() && !ink.width())
        // {
        //     d = Math.max(parent.outerWidth(), parent.outerHeight());
        //     ink.css({height: "100px", width: "100px"});
        // }
        
        //  x = e.pageX - parent.offset().left - ink.width()/2;
        // y = e.pageY - parent.offset().top - ink.height()/2;
        
        // ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    //ripple end

        var choice = $(this).parent().find('input:radio').val();
        console.log(choice);
    	var anscheck =  $(this).checking(questionNo, choice);//$( "#answer" ).html(  );      
        q[questionNo].UC = choice;
        if(anscheck)
        {
         
            
            correctCount++;
            q[questionNo].result = "Correct";
        } else {
           
            
            q[questionNo].result = "Incorrect";   
        }
        console.log("CorrectCount:" + correctCount);
    
        setTimeout(function(){
            document.getElementById("col").style.background="";
            document.getElementById("col2").style.background="";
            // $('#loadbar').show();
            // $('#quiz').fadeOut();
            questionNo++;
            if(questionNo == 1)
            {
                document.getElementsByClassName("qusProp")[0].style.right="60px";
                document.getElementsByClassName("qusProp")[0].style.top="-75px";
                document.getElementsByClassName("box")[0].style.top="-76px";
                document.getElementsByClassName("box")[0].style.left="144px";
            }
                
           
            if(questionNo == 2)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-43px";
                document.getElementsByClassName("qusProp")[0].style.top="-115px";
                document.getElementsByClassName("box")[0].style.top="-155px";
                document.getElementsByClassName("box")[0].style.left="312px";
                document.getElementsByClassName("box")[0].style.width="200px";
                document.getElementsByClassName("box")[0].style.height="200px";
            }
            if(questionNo == 3)
            {
                document.getElementsByClassName("qusProp")[0].style.right="0px";
                document.getElementsByClassName("qusProp")[0].style.top="-130px";
                document.getElementsByClassName("box")[0].style.top="-134px";
                document.getElementsByClassName("box")[0].style.left="198px";
                document.getElementsByClassName("box")[0].style.width="70px";
                document.getElementsByClassName("box")[0].style.height="70px";
            }
            if(questionNo == 4)
            {
                document.getElementsByClassName("qusProp")[0].style.right="20px";
                document.getElementsByClassName("qusProp")[0].style.top="-160px";
                document.getElementsByClassName("box")[0].style.top="-168px";
                document.getElementsByClassName("box")[0].style.left="177px";
                document.getElementsByClassName("box")[0].style.width="80px";
                document.getElementsByClassName("box")[0].style.height="80px";
            }
            if(questionNo == 5)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-240px";
                document.getElementsByClassName("qusProp")[0].style.top="-180px";
                document.getElementsByClassName("box")[0].style.top="-181px";
                document.getElementsByClassName("box")[0].style.left="10px";
                document.getElementsByClassName("box")[0].style.width="80px";
                document.getElementsByClassName("box")[0].style.height="80px";
            }
            if(questionNo == 6)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-266px";
                document.getElementsByClassName("qusProp")[0].style.top="-250px";
                document.getElementsByClassName("box")[0].style.top="-276px";
                document.getElementsByClassName("box")[0].style.left="25px";
                document.getElementsByClassName("box")[0].style.width="120px";
                document.getElementsByClassName("box")[0].style.height="120px";
            }
            if(questionNo == 7)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-250px";
                document.getElementsByClassName("qusProp")[0].style.top="-233px";
                document.getElementsByClassName("box")[0].style.top="-248px";
                document.getElementsByClassName("box")[0].style.left="0px";
                document.getElementsByClassName("box")[0].style.width="110px";
                document.getElementsByClassName("box")[0].style.height="110px";
            }
            if(questionNo == 8)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-200px";
                document.getElementsByClassName("qusProp")[0].style.top="-190px";
                document.getElementsByClassName("box")[0].style.top="-248px";
                document.getElementsByClassName("box")[0].style.left="-100px";
                document.getElementsByClassName("box")[0].style.width="200px";
                document.getElementsByClassName("box")[0].style.height="200px";
            }
            if(questionNo == 9)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-40px";
                document.getElementsByClassName("qusProp")[0].style.top="-258px";
                document.getElementsByClassName("box")[0].style.top="-286px";
                document.getElementsByClassName("box")[0].style.left="-222px";
                document.getElementsByClassName("box")[0].style.width="130px";
                document.getElementsByClassName("box")[0].style.height="130px";
            }
            if(questionNo == 10)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-40px";
                document.getElementsByClassName("qusProp")[0].style.top="-260px";
                document.getElementsByClassName("qusProp")[0].style.width="420px";
                document.getElementsByClassName("box")[0].style.top="-283px";
                document.getElementsByClassName("box")[0].style.left="-321px";
                document.getElementsByClassName("box")[0].style.width="135px";
                document.getElementsByClassName("box")[0].style.height="135px";
            }
            if(questionNo == 11)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-10px";
                document.getElementsByClassName("qusProp")[0].style.top="-108px";
                document.getElementsByClassName("qusProp")[0].style.width="330px";
                document.getElementsByClassName("box")[0].style.top="-101px";
                document.getElementsByClassName("box")[0].style.left="-224px";
                document.getElementsByClassName("box")[0].style.width="75px";
                document.getElementsByClassName("box")[0].style.height="75px";
            }
            if(questionNo == 12)
            {
                document.getElementsByClassName("qusProp")[0].style.right="80px";
                document.getElementsByClassName("qusProp")[0].style.top="65px";
                document.getElementsByClassName("qusProp")[0].style.width="330px";
                document.getElementsByClassName("box")[0].style.top="51px";
                document.getElementsByClassName("box")[0].style.left="-365px";
                document.getElementsByClassName("box")[0].style.width="150px";
                document.getElementsByClassName("box")[0].style.height="150px";
            }
            if(questionNo == 13)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-275px";
                document.getElementsByClassName("qusProp")[0].style.top="20px";
                document.getElementsByClassName("qusProp")[0].style.width="330px";
                document.getElementsByClassName("box")[0].style.top="-33px";
                document.getElementsByClassName("box")[0].style.left="-34px";
                document.getElementsByClassName("box")[0].style.width="200px";
                document.getElementsByClassName("box")[0].style.height="200px";
            }
            if((questionNo + 1) > q.length){
                alert("Quiz completed, Now click ok to get your answer");
                $('label.element-animation').unbind('click');
                setTimeout(function(){
                    var toAppend = '';
                    $.each(q, function(i, a){
                        toAppend += '<tr>'
                        toAppend += '<td>'+(i+1)+'</td>';
                        toAppend += '<td>'+a.A+'</td>';
                        toAppend += '<td>'+a.UC+'</td>';
                        toAppend += '<td>'+a.result+'</td>';
                        toAppend += '</tr>'
                    });
                    $('#quizResult').html(toAppend);
                    $('#totalCorrect').html("Total correct: " + correctCount);
                    $('#quizResult').show();
                    $('#loadbar').fadeOut();
                    $('#result-of-question').show();
                    $('#graph-result').show();
                    chartMake();
                }, 500);
            } else {
                $('#qid').html(questionNo + 1);
                $('input:radio').prop('checked', false);
                // setTimeout(function(){
                //     $('#quiz').show();
                //     $('#loadbar').fadeOut();
                // }, 500);
                $('#question').html(q[questionNo].Q);
                $($('#f-option').parent().find('label')).html(q[questionNo].C[0]);
                $($('#s-option').parent().find('label')).html(q[questionNo].C[1]);
            }
        }, 400);
    });

    
    $.fn.checking = function(qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else 
            return true;
    }; 

// chartMake();
    // function chartMake(){

    //      var chart = AmCharts.makeChart("chartdiv",
    //         {
    //         "type": "serial",
    //         "theme": "dark",
    //         "dataProvider": [{
    //             "name": "Correct",
    //             "points": correctCount,
    //             "color": "#00FF00",
    //             "bullet": "http://i2.wp.com/img2.wikia.nocookie.net/__cb20131006005440/strategy-empires/images/8/8e/Check_mark_green.png?w=250"
    //         }, {
    //             "name": "Incorrect",
    //             "points":q.length-correctCount,
    //             "color": "red",
    //             "bullet": "http://4vector.com/i/free-vector-x-wrong-cross-no-clip-art_103115_X_Wrong_Cross_No_clip_art_medium.png"
    //         }],
    //         "valueAxes": [{
    //             "maximum": q.length,
    //             "minimum": 0,
    //             "axisAlpha": 0,
    //             "dashLength": 4,
    //             "position": "left"
    //         }],
    //         "startDuration": 1,
    //         "graphs": [{
    //             "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
    //             "bulletOffset": 10,
    //             "bulletSize": 52,
    //             "colorField": "color",
    //             "cornerRadiusTop": 8,
    //             "customBulletField": "bullet",
    //             "fillAlphas": 0.8,
    //             "lineAlpha": 0,
    //             "type": "column",
    //             "valueField": "points"
    //         }],
    //         "marginTop": 0,
    //         "marginRight": 0,
    //         "marginLeft": 0,
    //         "marginBottom": 0,
    //         "autoMargins": false,
    //         "categoryField": "name",
    //         "categoryAxis": {
    //             "axisAlpha": 0,
    //             "gridAlpha": 0,
    //             "inside": true,
    //             "tickLength": 0
    //         }
    //     });
    // }
});	
