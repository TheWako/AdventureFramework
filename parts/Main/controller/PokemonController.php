<?php
class PokemonController extends AbstractController{
  public function indexAction(){
    $destinations = CityModel::getList($this->pdo);
    include("../view/home.php");
    return;
  }
}