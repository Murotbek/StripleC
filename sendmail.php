<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CHarSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// $mail->Host = 'ssl://smtp.gmail.com';
// $mail->Port = 465;
// $mail->Username = 'murotahmedoc@gmail.com';
// $mail->Password = '20000920a';

$mail->setFrom('murotahmedoc@gmail.com', 'Заказчик');

$mail->addAddress('akhmedov_2000@mail.ru');

$mail->Subject = 'StripleC"';

$project = "Лендинг";
if($_POST['project'] == "store"){
  $project = "Интернет-магазин";
}else if($_POST['project'] == "corporate"){
  $project = "Корпоративный сайт";
}

$body = '<h1>Заказ!</h1>';

if (trim(!empty($_POST['name']))){
  $body.='<p><strong>Имя:</strong> '.$_POST['name'].'<p>';
}
if (trim(!empty($_POST['phoneNumber']))){
  $body.='<p><strong>Номер телефона:</strong> '.$_POST['phoneNumber'].'<p>';
}
if (trim(!empty($_POST['email']))){
  $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'<p>';
}
if (trim(!empty($_POST['project']))){
  $body.='<p><strong>Вид услуги:</strong> '.$project.'<p>';
}


$mail ->Body = $body;

if(!$mail->send()){
  $message = 'Ошибка';
}else{
  $message = "Данные отправлены!";
}
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
