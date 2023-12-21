<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Variables
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

if(empty(trim($name))) $name = 'Anonymous';

$body = <<<HTML
    <h1>Web Quote</h1>
    <h3>From: $name / $email</h3>
    <p>Phone Number: $phone</p>
    <p>Message: $message</p>
HTML;

$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-Type: text/html; charset=utf-8 \r\n";
$headers.= "From: $name / $email \r\n";
$headers.= "To: WebSite <pruebas@bryanparedes.com> \r\n";


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'pruebas@bryanparedes.com';                     //SMTP username
    $mail->Password   = '6tS&U+=Fzd2ExE9';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('pruebas@bryanparedes.com');
    $mail->addAddress('pruebas@bryanparedes.com', 'WebSite Quote');
    //Add a recipient            //Name is optional

    //Attachments
    /*$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');*/    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'WebSite Quote';
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);
    $mail->CharSet = 'UTF-8';

    $mail->send();
    header("Location: /thanks");
} catch (Exception $e) {
    header('Location: /error');
}