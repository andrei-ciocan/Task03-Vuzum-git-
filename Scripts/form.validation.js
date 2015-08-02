$().ready(function(){

$(".signupForm").validate({
	rules:{
		name:{
			required:true,
			minlength:2,
			letterswithbasicpunc:true
		},

		email:{
			required:true,
			email:true
			}

		},

		messages:{
			name:{
				required:"Please enter your name.",
				minlength:"Your name must be atleast 2 characters long.",
				letterswithbasicpunc:"Your name can only contain letters and punctuation."

			}

		}

	})

})



