<?php
//YOUTUBE VIDEO LINK FETCH!
//Easy to list all youtube video links return to array from string !
echo '<pre>';
$subject = "ada video yutup loh ! http://www.youtube.com/watch?&v=BMhXexbDmv like so http://www.youtube.com/watch?v=BMhXexbsss ada lg nih http://www.youtube.com/watch?v=X8dj9";

$y_link1 = explode('http://www.youtube.com/',$subject);
foreach($y_link1 as $ytab){
	$y_link2 = explode(' ',$ytab);
	$y_link3 = explode('v=', $y_link2[0]);
	$sperator = explode('&', $y_link3[1]);
	if($y_link3[1]){
		if($sperator[1]){
			$links = str_replace('/','',$sperator[0]);
			$youtube[] = array('video_id' => $links ,'youtube_link' => 'http://www.youtube.com/watch?v='.$links);
		}else{
			$links = str_replace('/','',$y_link3[1]);
			$youtube[] = array('video_id' => $links ,'youtube_link' => 'http://www.youtube.com/watch?v='.$links);
		}
	}else{
		
	}
}

echo $subject.'<br/>';
print_r($youtube);

print_r($y_link1);
echo '</pre>';
?>
