<?php 

namespace Root\System;

class Application
{
    
    protected $config = array();
    
    public function __construct( $config = array() )
    {
        if( is_array($config) ){
            $this->config = $config;
        }
    }

    public function call($uri = null)
    {
        if( is_null($uri) ){
            $uri = $_SERVER['REQUEST_URI'];
        }
        if( !is_string($uri) ){
            throw new \Exception("The requested URI is not a string.", 1);
        }
        $routes = $this->config['routes'];

        if( isset($routes[$uri]) ){
            $index = $uri;
        } else if( isset( $routes['^(.*)$'] ) ){
            $index = '^(.*)$';
        } else {
            $index = 0;
        }

        if( 
            isset( $routes[$index]['rawcall'] ) &&
            false !== $routes[$index]['rawcall'] && 
            file_exists( PARTPATH . DS . $routes[$index]['rawcall'] )
        ){
            include_once PARTPATH . DS . $routes[$index]['rawcall'];
        }else if(
            isset( $routes[$index]['call'] ) &&
            false !== $routes[$index]['call']
        ){
            include_once PARTPATH . DS . $routes[$index]['call'];                
        }
        return $this;
    }

    public static function _start()
    {
        if( !defined( 'CONFPATH' ) ){
            throw new \Exception("There's no config path defined.", 1);
        } else if( !defined( 'PARTPATH' ) ){
            throw new \Exception("There's no parts path defined.", 1);
        }
        $config = array();
        if( $dir = opendir( CONFPATH ) ){
            while( false !== ($file = readdir( $dir )) ){
                if( !is_dir(__DIR__ . DS . $file) && $file !== '.' && $file !== '..' ){
                    $config = array_merge_recursive(
                        $config,
                        include_once CONFPATH . DS . $file
                    );
                }
            }
            closedir($dir);       
        } else {
            throw new \Exception("Impossible to access the config path.", 1);            
        }
        $app = new self( $config );
        $app->call();
        return $app;
    }
}