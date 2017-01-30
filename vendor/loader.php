<?php 

define( 'DS', DIRECTORY_SEPARATOR );
define( 'CONFPATH', join( DS, array(dirname(__DIR__), 'config/route')) );
define( 'PARTPATH', join( DS, array(dirname(__DIR__), 'parts')) );

if( $dir = opendir( __DIR__ ) ){
    while( false !== ($file = readdir( $dir )) ) {
        if( is_dir(__DIR__ . DS . $file) && $file !== '.' && $file !== '..' ){
            require_once join(DS, array($file, 'autoload.php'));
        }
    }
    closedir($dir);  
}