$('#btnSave').click(function (e) {

    e.preventDefault();
    
    $('#frmEditProyecto').ajaxSubmit({
        target: '#myModalContent',
        success: function (responseText, statusText, xhr, $form) {
            if(responseText.success === true)
                $('#myModal').modal('hide');
        }
    });
    return false;
});
