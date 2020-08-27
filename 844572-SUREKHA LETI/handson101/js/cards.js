$(document).ready(function($) {

    //ajax row data 
    var ajax_data =  [
    {
    Name:"John",
    Id:"123456",
    Skills:"ReactJS,Angular,JS",
    Project:"Cognizant Internal",
    HCM:"Alex"
    },
    {
    Name:"Riya",
    Id:"123457",
    Skills:"ReactJS,Angular,JS",
    Project:"Cognizant Internal",
    HCM:"Alex"
    },
    {
    Name:"Jack",
    Id:"123458",
    Skills:"ReactJS,Angular,JS",
    Project:"Cognizant Internal",
    HCM:"Alex"
    }

] 

    var random_id = function() {
        var id_num = Math.random().toString(9).substr(2, 3);
        var id_str = Math.random().toString(36).substr(2);

        return id_num + id_str;
    }

    //---->create data table > start 
    var tbl = '';

    

    tbl += '<div class= "row">';

    //--->create table body rows> start 
    $.each(ajax_data, function(index, val) {
        var key = Object.keys(ajax_data[index]);
        var row_id = random_id();
        tbl += '<div class= "col-md-4">';
        tbl += '<div class= "card mt-3">';
        tbl += '<div class= "card-body">';
        tbl += '<p><img class="mx-auto d-block" src="images/1.jpeg" alt="Person Image"></p>'
        tbl += '<p><div class ="row_data" edit_type="click" col_name="fname"><b class="text-capitalize">' + key[0] + ': </b>' + val['Name'] + '</div></p>';
        tbl += '<p><div class ="row_data" edit_type="click" col_name="lname"><b class="text-uppercase">' + key[1] + ': </b>' + val['Id'] + '</div></p>';
        tbl += '<p><div class ="row_data" edit_type="click" col_name="email"><b class="text-capitalize">' + key[2] + ': </b>' + val['Skills'] + '</div></p>';
        tbl += '<p><div class ="row_data" edit_type="click" col_name="email"><b class="text-capitalize">' + key[3] + ': </b>' + val['Project'] + '</div></p>';
        tbl += '<p><div class ="row_data" edit_type="click" col_name="email"><b class="text-uppercase">' + key[4] + ': </b>' + val['HCM'] + '</div></p>';
        //--->edit options > strat 
        tbl += '<p class="editbtn">';
        tbl += '<span class="btn_edit"><a href="#" class="btn btn-link" row_id="' + row_id + '"><i class="fas fa-pencil-square-o" aria-hidden="true" style="font-size:20px;color:blue"></i></a></span>';
        //only show this button if edit button is click 
        tbl += '<span class="btn_save"><a href="#" class="btn btn-link" row_id="' + row_id + '"><i class="fas fa-floppy-o" aria-hidden="true" style="font-size:20px;color:green"></i> </a></span>';
        tbl += '<span class="btn_delete"><a href="#" class="btn btn-link" row_id="' + row_id + '"><i class="fas fa-trash" style="font-size:20px;color:red"></i> </a></span>';
        tbl += '</p>';
        //--->edit options > end 
        tbl += '</p>';
        tbl += '</div>';
        tbl += '</div>';
        tbl += '</div>';
    });
    //---> create table body rows > end                 
    //--->create table body > end 
    tbl += '</div>';
    tbl += '<br><br>';
    //--->create data table  > end 
    //out put table data 
    $(document).find('.tbl_user_data').html(tbl);

    $(document).find('.btn_save').hide();

    $(document).find('.tbl1_user_data1').hide();
    //--->save single field data > start 
    $(document).on('focusout', '.row_data', function(event) {
            event.preventDefault();
            if ($(this).attr('edit_type') == 'button') {
                return false;
            }
            var row_id = $(this).closest('.col-md-4').attr('row_id');

            var row_div = $(this)
                .removeClass('bg-warning') //add bg css 
                .css('padding', '')

            var col_name = row_div.attr('col_name');
            var col_val = row_div.html();
            var arr = {};
            arr[col_name] = col_val;

            //use the "arr" object for your ajax call 
            $.extend(arr, {
                row_id: row_id
            });

            //out put to show 
            $('.post_msg').html('<pre class="bg-success">' + JSON.stringify(arr, null, 2) + '</pre>');
        })
        //---> save single field data > end 

    //--->button > edit > start 
    $(document).on('click', '.btn_edit', function(event) {
        event.preventDefault();
        var tbl_row = $(this).closest('.col-md-4');
        var row_id = tbl_row.attr('row_id');
        tbl_row.find('.btn_save').show();
        tbl_row.find('.btn_delete').show();
        //hid edit button 
        tbl_row.find('.btn_edit').hide();
        //make the whole row editable 
        tbl_row.find('.row_data')
            .attr('contenteditable', 'true')
            .attr('edit_type', 'button')
            // .addClass('bg-warning') 
            .css('padding', '')
            //--->add the original entry > start 
        tbl_row.find('.row_data').each(function(index, val) {
            //this will help in case user decided to click on delete button 
            $(this).attr('original_entry', $(this).html());
        });
    });
    //---> button > edit > end 

    //-->button > delete > start 
    $(document).on('click', '.btn_delete', function(event) {
        event.preventDefault();
        var tbl_row = $(this).closest('.col-md-4').remove();

    });
    //---> button > delete > end 

    //---> button > save > start 
    $(document).on('click', '.btn_save', function(event) {
        event.preventDefault();
        var tbl_row = $(this).closest('.col-md-4');
        var row_id = tbl_row.attr('row_id');

        //hide save and delete buttons 
        tbl_row.find('.btn_save').hide();
        // tbl_row.find('.btn_delete').hide(); 

        //show edit button 
        tbl_row.find('.btn_edit').show();

        //make the whole row editable 
        tbl_row.find('.row_data')
            .attr('edit_type', 'click')
            .removeClass('bg-warning')
            .css('padding', '')
            //---> get row data > start 
        var arr = {};
        tbl_row.find('.row_data').each(function(index, val) {
            var col_name = $(this).attr('col_name');
            var col_val = $(this).html();
            arr[col_name] = col_val;
        });
        //---> get row data > end 
        //-->use the "arr" object for your ajax cell 
        $.extend(arr, {
            row_id: row_id
        });
        //out put to show 

        $('.post_msg').html('<pre class="bg-success">' + JSON.stringify(arr, null, 2) + '</pre>')
    });
});
    //---> button > save > end 