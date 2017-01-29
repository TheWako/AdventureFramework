<?php 
return array( 'routes' => array(
        '^(.*)$' => array(
            'call' => 'Main\view\index.php',
            'rawcall' => 'Main/view/index.php',
        ),
        '/intro' => array(
        	'intro' => 'Main/view/intro.php',
        ),
        '/starter' => array(
        	'starter' => 'Main/view/starter.php',
        ),
        '/fight' => array(
        	'fight' => 'Main/view/fight.php',
        ),
    ),
);