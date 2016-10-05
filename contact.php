<?php 
error_reporting(E_ALL ^ E_NOTICE); // hide all basic notices from PHP

//If the form is submitted
if(isset($_POST['submitted'])) {
	
	// require a name from user
	if(trim($_POST['contactName']) === '') {
		$nameError =  'Forgot your name!'; 
		$hasError = true;
	} else {
		$name = trim($_POST['contactName']);
	}
	
	// need valid email
	if(trim($_POST['email']) === '')  {
		$emailError = 'Forgot to enter in your e-mail address.';
		$hasError = true;
	} else if (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($_POST['email']))) {
		$emailError = 'You entered an invalid email address.';
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}
		
	// we need at least some content
	if(trim($_POST['comments']) === '') {
		$commentError = 'You forgot to enter a message!';
		$hasError = true;
	} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['comments']));
		} else {
			$comments = trim($_POST['comments']);
		}
	}
		
	// upon no failure errors let's email now!
	if(!isset($hasError)) {
		
		$emailTo = 'humphrey.asante@gmail.com';
		$subject = 'Submitted message from '.$name;
		$sendCopy = trim($_POST['sendCopy']);
		$body = "Name: $name \n\nEmail: $email \n\nComments: $comments";
		$headers = 'From: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
        
        // set our boolean completion value to TRUE
		$emailSent = true;
	}
}
?>

		
			<div class="col-xs-12 col-lg-10 col-lg-offset-1">
		
		        <?php if(isset($emailSent) && $emailSent == true) { ?>
	                <p class="info">Your email was sent. Asante!</p>
	            <?php } else { ?>
            

				
					<div id="contact-form">
						<?php if(isset($hasError) || isset($captchaError) ) { ?>
	                        <p class="alert">Error submitting the form</p>
	                    <?php } ?>
				
						<form id="contact-us" action="contact.php" method="post">
<div class="float-left">
									<div class="form-field name wow fadeInUp" data-wow-delay="0.5s">
											<label for="name">Name</label>
										
										<input type="text" name="contactName" id="contactName" value="<?php if(isset($_POST['contactName'])) echo $_POST['contactName'];?>" class="txt requiredField" onfocus="if(this.value == 'Your Name') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Your Name'; }" />
										<?php if($nameError != '') { ?>
											<br /><span class="error"><?php echo $nameError;?></span> 
										<?php } ?>
									</div>
									
<div class="form-field email wow fadeInUp" data-wow-delay="0.8s">
									  <label for="email">Email</label>
										<input type="text" name="email" id="email" value="<?php if(isset($_POST['email']))  echo $_POST['email'];?>" class="txt requiredField email"  onfocus="if(this.value == 'E-mail Address') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'E-mail Address'; }" />
<?php if($emailError != '') { ?>
<br /><span class="error"><?php echo $emailError;?></span>
																		<?php } ?>
									</div>
								</div>
								
								<div class="float-left">
								<div class="form-field email wow fadeInUp" data-wow-delay="0.8s">
								<label class="screen-reader-text">Message</label>
								 <textarea name="comments" id="commentsText" class="txtarea requiredField" placeholder="Message:"/><?php if(isset($_POST['comments'])) { if(function_exists('stripslashes')) { echo stripslashes($_POST['comments']); } else { echo $_POST['comments']; } } ?>     </textarea>
								<?php if($commentError != '') { ?>
									<br /><span class="error"><?php echo $commentError;?></span> 
								<?php } ?>
								
</div></div>
                        
						<div class="form-click wow fadeInUp" data-wow-delay="1s">
						<button name="submit" type="submit" class="subbutton">Send Mail!</button>
						<input type="hidden" name="submitted" id="submitted" value="true" />
						</div>
								
						</form>			
					</div>
				
				<?php } ?>
	    </div><!-- End #contact -->