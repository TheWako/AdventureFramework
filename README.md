## Adventure Framework : Pokémon Nocturne


## Resources

* [Architecture Reference](https://blog.lignusdev.com/programmation/creer-son-framework-php-le-commencement/)
* [Base de données](https://www.phpmyadmin.net/)


## Installing

Architecture :

```html
Root => config/routes.php
     => parts => Main => view => index.php
                              => intro.php
                              => starter.php
                              => fight.php
     => vendor => loader.php
               => Root => autoload.php
                       => System => Application.php
     => www => assets => css => style.css
                      => img
                      => js => script.js
            => .htaccess
            => index.php
```     
Vhost à mettre en place : 
```html
<VirtualHost *:80>
    ServerName root.dev
    DocumentRoot "C:/wamp/www/root_framework/www"
    ServerAdmin admin@localhost
    <Directory />
        Options FollowSymLinks
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>
</VirtualHost>
```
Où alors, éxecuter la commande dans le dossier www/:

php -S localhost:8000


## Story :

Dirigez un dresseur de Pokémon qui doit devenir le meilleur d'entre tous ! Pour cela, combattez les dresseurs les plus puissants de cet univers ! Progressez avec vos fidèles compagnons et remportez les défis que vous offre l'univers Pokémon !




