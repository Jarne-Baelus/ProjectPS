<!-- Sample HTML Form -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Supermarket project</title>

</head>
<body>
<form method="post" action="subscriberform.php">
    <textarea name="message"></textarea>
    <input type="submit">
</form>
</body>
</html>

<?php
if($_POST["Message"]) {
    mail("jarnebaelus@gmail.com", "Testmail",
        $_POST["Insert Your Message"]. "From: jane@janedoe.com");
}
?>