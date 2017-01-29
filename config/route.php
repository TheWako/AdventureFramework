<?php 
return array( 'routes' => array(
        '^(.*)$' => array(
            'call' => 'Main\view\index.php',
            'rawcall' => 'Main/view/index.php',
        ),
        '/intro' => array(
        	'call' => 'Main/view/intro.php',
        ),
        '/starter' => array(
        	'call' => 'Main/view/starter.php',
        ),
        '/fight' => array(
        	'call' => 'Main/view/fight.php',
        ),
    ),
);