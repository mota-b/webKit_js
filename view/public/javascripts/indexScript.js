$.ajax({
    url: 'http://localhost:4000/api/login/log/local',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify( {
        username: "A",
        password: "0000",
        strat_number: 1
    } ),
    processData: false,
    success: function( data){
        console.log(data);
    }
    
});