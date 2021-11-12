<?php

function showQuestions($questions) {

    $htmlContent = "";

    for ($j = 0; $j < count($questions); $j++) {    
        $question = $questions[$j];

        $htmlContent = $htmlContent . "<h3 class=\"h3 mt-3\">" . $question['question'] . "</h3>";
        
        
        for ($i = 0; $i < count($question["choices"]); $i++) {
            $htmlContent = $htmlContent . "<input type=\"radio\" name=\"\"/> " . $question["choices"][$i] . "<br/>";
        }


    } 

    return $htmlContent;
}
?>