function getStates()
{
    var op = document.getElementById('country').value;
    var state_list="";
    if(op == 1)
    {
        state_list = [" - - - -  Select  - - - -","Kerala","Tamilnadu","Karnataka"];
    }
    else if(op == 2)
    {
        state_list = [" - - - -  Select  - - - -","Beijing","Jilin","Yunnan"];
    }
    else    
    /*{              
        document.getElementById('name_err').innerHTML='please select a country !!';
    }*/
    var inner_state="";
    for(var state of state_list)
    {
        inner_state += "<option value='"+state+"'>"+state+"</option>"
    }
    document.getElementById('state').innerHTML=inner_state;
}


function getDistricts()
{
    var op = document.getElementById('state').value;
    var dist_list="";
    if(op == "Kerala")
    {
        dist_list = [" - - - -  Select  - - - -","Kozhikode","Wayanad","Ernakulam"];
    }
    else if(op == "Tamilnadu")
    {
        dist_list = [" - - - -  Select  - - - -","Chennai","Coimbatore","Erode"];
    }
    else if(op == "Karnataka")
    {
        dist_list = [" - - - -  Select  - - - -","Bangalore","Mysore","Udupi"];
    }
    else if(op == "Beijing")
    {
        dist_list = [" - - - -  Select  - - - -","Haidian","Fangshan","Daxing"];
    }
    else if(op == "Jilin")
    {
        dist_list = [" - - - -  Select  - - - -","Changyi","Longtan"];
    }
    else if(op == "Yunnan")
    {
        dist_list = [" - - - -  Select  - - - -","Jinning","Chenggong"];
    }
    /*else    
    {              
        document.getElementById('name_err').innerHTML='please select a state !!';
    }*/
    var inner_dist="";
    for(var dist of dist_list)
    {
        inner_dist += "<option>"+dist+"</option>";
    }
    document.getElementById('dist').innerHTML=inner_dist;
}
