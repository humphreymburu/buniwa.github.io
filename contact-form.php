<?php
$subjectPrefix = '[Contato via Site]';
$emailTo = 'humphrey.asante@gmail.com';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name    = stripslashes(trim($_POST['form-name']));
    $email   = stripslashes(trim($_POST['form-email']));
    $message = stripslashes(trim($_POST['form-message']));
    $pattern = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';

    if (preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $subject)) {
        die("Header injection detected");
    }

    $emailIsValid = filter_var($email, FILTER_VALIDATE_EMAIL);

    if($name && $email && $emailIsValid && $subject && $message){
        $subject = "$subjectPrefix $subject";
        $body = "Nome: $name <br /> Email: $email <br />  Message: $message";

        $headers  = "MIME-Version: 1.1" . PHP_EOL;
        $headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
        $headers .= "Content-Transfer-Encoding: 8bit" . PHP_EOL;
        $headers .= "Date: " . date('r', $_SERVER['REQUEST_TIME']) . PHP_EOL;
        $headers .= "Message-ID: <" . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>' . PHP_EOL;
        $headers .= "From: " . "=?UTF-8?B?".base64_encode($name)."?=" . "<$email>" . PHP_EOL;
        $headers .= "Return-Path: $emailTo" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;
        $headers .= "X-Originating-IP: " . $_SERVER['SERVER_ADDR'] . PHP_EOL;

        mail($emailTo, "=?utf-8?B?".base64_encode($subject)."?=", $body, $headers);
        $emailSent = true;
    } else {
        $hasError = true;
    }
}
?>

    <?php if(!empty($emailSent)): ?>
        <div class="col-md-6 col-md-offset-3">
            <div class="alert alert-success text-center">Successful.</div>
        </div>
    <?php else: ?>
		
        <?php if(!empty($hasError)): ?>
        <div class="col-md-5 col-md-offset-4">
            <div class="alert alert-danger text-center">Unsuccessful.</div>
        </div>
        <?php endif; ?>




	<div class="row">
		<div class="col-xs-12 col-lg-10 col-lg-offset-1">
        
		<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" id="contact-form" class="form-horizontal" role="form" method="post">
            
			<fieldset>
				<div class="float-left">
					<div class="form-field name wow fadeInUp" data-wow-delay="0.5s">
						
						<span><input type="text" class="form-control required" id="form-name" name="form-name" onfocus="if(this.value == 'Your Name') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Your Name'; }" value="Your Name" /></span>
					</div>
					<div class="form-field email wow fadeInUp" data-wow-delay="0.8s">
						
						<span><input type="email" class="form-control required" id="form-email" name="form-email" onfocus="if(this.value == 'E-mail Address') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'E-mail Address'; }" value="E-mail Address" /></span>
					</div>
				</div>
				<div class="float-right">
					<div class="form-field message wow fadeInUp" data-wow-delay="1s">
						
						<span><textarea class="form-control required" id="form-message" name="form-message" onfocus="if(this.value == 'If you wish to work with us or just get in touch - do it.') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'If you wish to work with us or just get in touch - do it.'; }">If you wish to work with us or just get in touch - do it.</textarea></span>
					</div>
				</div>
			</fieldset>
			
			<div class="form-click wow fadeInUp" data-wow-delay="1s">
				<button id="submit">Send Message</button>
			</div>
			</div>
		</form>	
		</div>
			
    <?php endif; ?>


