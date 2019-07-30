<?php 
header("Access-Control-Allow-Origin: *");
$randomArray = [];


if ($_GET["number"] === NULL){
    for ($x = 0; $x <= 10; $x++) {
            $dynamicalCreatedData = [];
            $randomNumber = mt_rand(-10, 30);
            array_push($dynamicalCreatedData,$x ,$randomNumber);
            array_push($randomArray, $dynamicalCreatedData);
        } 
}else {
    for ($x = 0; $x <= $_GET["number"]; $x++){
        $dynamicalCreatedData = [];
        $randomNumber = mt_rand(-10, 30);
        array_push($dynamicalCreatedData,$x ,$randomNumber);
        array_push($randomArray, $dynamicalCreatedData);
 } 
}

$myJSON = json_encode($randomArray);
echo $myJSON;
?>