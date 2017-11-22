
/*--------loader script-----------*/
$(function(){
    var reslt =""
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
        {'Q':'Car key on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Confidential papers on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Coffee mug on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'Pen stand on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'Cosmetic items on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'File with Personal documents on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Reference book on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'Unlocked Laptop on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Holiday List on the Desk?', 'A':0,'B':['Yes','No']},
        {'Q':'Stick on note with passwords written on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Mobile on the Desk?', 'A':1,'B':['Yes','No']},
        {'Q':'Papers in dust bin?', 'A':1,'B':['Yes','No']},
        {'Q':'Waste boxes below the Cabinet?', 'A':1,'B':['Yes','No']},
    ];

    $(document.body).on('click',"label.element-animation",function (e) {
          var text = question.innerHTML;
      // alert(text)
  
 

        var choice = $(this).parent().find('input:radio').val();
       
        console.log(choice);
    	var anscheck =  $(this).checking(questionNo, choice);//$( "#answer" ).html(  );      
        q[questionNo].UC = choice;

        // alert("Answer"+q[questionNo].A)
        // alert("choice"+choice)
        // alert("anscheck"+anscheck)
        var invalid="red";    
        var valid="green";  
        var na="block";  
        if(anscheck)
        { 
           
            if(q[questionNo].A==0)
             {  document.getElementById("col").style.background=valid;
               document.getElementById("col2").style.background="";
            }
            else { 
                document.getElementById("col2").style.background=valid;
                document.getElementById("col").style.background="";
        }
            
            correctCount++;
            q[questionNo].result = "Correct";
        } else {
            if(q[questionNo].A==1)
            {
                document.getElementById("col2").style.background=valid;
                document.getElementById("col").style.background=invalid;
            }
            else{
                document.getElementById("col2").style.background=invalid;
                document.getElementById("col").style.background=valid;
            }
            
            q[questionNo].result = "Incorrect";   
        }

        reslt=q[questionNo].result;
        console.log(reslt+"---------")
        //console.log(q[questionNo].result)
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
                document.getElementsByClassName("qusProp")[0].style.right="-280px";
                document.getElementsByClassName("qusProp")[0].style.top="-250px";
                document.getElementsByClassName("qusProp")[0].style.width="340px";
                document.getElementsByClassName("box")[0].style.top="-276px";
                document.getElementsByClassName("box")[0].style.left="25px";
                document.getElementsByClassName("box")[0].style.width="120px";
                document.getElementsByClassName("box")[0].style.height="120px";
            }
            if(questionNo == 7)
            {
                document.getElementsByClassName("qusProp")[0].style.right="-250px";
                document.getElementsByClassName("qusProp")[0].style.top="-233px";
                document.getElementsByClassName("qusProp")[0].style.width="330px";
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
                  //  alert((q[questionNo].result))

        console.log(reslt+"---------66666666")
                    var toAppend = '';
                    $.each(q, function(i, a){
                        var vAns=""
                        if(a.A==1){
                            vAns="NO"
                        }else{
                            vAns="YES"
                        }
                        if(choice==1){
                            vSele="NO"
                        }else{
                            vSele="YES"
                        }
                        console.log(a.Q)
                        toAppend += '<tr>'
                        toAppend += '<td>'+(a.Q)+'</td>';
                        toAppend += '<td>'+vSele+'</td>';
                        toAppend += '<td>'+vAns+'</td>';
                        // toAppend += '<td>'+a.result+'</td>';
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
        },100);
    });

    
    $.fn.checking = function(qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else 
            return true;
    }; 


});	
