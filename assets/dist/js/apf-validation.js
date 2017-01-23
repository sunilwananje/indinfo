$( document ).ready( function () {

	$( "#apfForm" ).validate( {
		rules: {
			mail_received_time: "required",
			request_type_id: "required",
			audit_status_id: "required",
			audit_rfi_type_id: "required",
			audit_rfi_description: "required",
			audit_rfi_end_date: "required",
			rfi_etd: "required",
			audit_rfi_comment: "required",
			audit_error_cat_id: "required",
			audit_error_type_id: "required",
			audit_error_description: "required",
			audit_root_cause: "required",
			audit_correction: "required",
			audit_corrective_action: "required",
			audit_preventive_action: "required",
			audit_proposed_comp_date: "required",
			audit_proposed_act_date: "required",
			audit_error_done_by: "required",		
		},
		messages: {
			mail_received_time: "Enter mail received datetime",
			request_type_id: "Select request type",
			audit_status_id: "Select status",
			audit_rfi_type_id: "Select RFI type",
			audit_rfi_description: "Enter RFI description",
			audit_rfi_end_date: "Enter RFI resolved date",
			rfi_etd: "Enter RFI resolved date",
			audit_rfi_comment: "Enter RFI resolved comment",
			audit_error_cat_id: "Select error category",
			audit_error_type_id: "Select error type",
			audit_error_description: "Enter error description",
			audit_root_cause: "Enter root cause",
			audit_correction: "Enter correction",
			audit_corrective_action: "Enter corrective action",
			audit_preventive_action: "Enter preventive action",
			audit_proposed_comp_date: "Enter proposed completion date",
			audit_proposed_act_date: "Enter proposed actual date",
			audit_error_done_by: "Select error done by",
			
		},
	    errorPlacement: function ( error, element ) {
            if (element.attr("type") == "checkbox") {
               error.insertAfter($(element).parent().parent());
            }else {
	            error.insertAfter(element);
	        }

		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).parent().addClass( 'has-error' );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).parent().removeClass( 'has-error' );
		},

		submitHandler: function (form) {
		  alert("success");
		  //form.submit();
		}
	} );
    


	
	
} );