<?php

/**
 * Class ZoningController
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */

namespace JC\Controller;

use jc\Model\zoning_model;

class ZoningController
{
    
    function __construct()
    {
        $this->zoning_model = new \JC\Model\zoning_model();
    }
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/zoning_header.php';
        require APP . 'view/zoning/landusepermit.php';
        require APP . 'view/_templates/zoning_footer.php';
    }
    
    /**
     * Draw file call
     */
    public function draw()
    {
        // load views
        require APP . 'view/_templates/zoning_header.php';
        require APP . 'view/zoning/draw.php';
        require APP . 'view/_templates/zoning_footer.php';
    }
    
    /**
     * Show video for use
     */
    public function video()
    {
        // load views
        require APP . 'view/_templates/zoning_header.php';
        require APP . 'view/zoning/video.php';
        require APP . 'view/_templates/zoning_footer.php';
    }
    
    /**
     * Submitted application successfully page
     */
    public function successful_submission()
    {
        // $rs = $this->zoning_model->insert_db($_POST);
        // print_r($rs);
        // exit();
        // load views
        if($this->zoning_model->insert_db($_POST)){
            require APP . 'view/_templates/zoning_header.php';
            require APP . 'view/zoning/successful_submission.php';
            require APP . 'view/_templates/zoning_footer.php';
        } else {
            require APP . 'view/_templates/zoning_header.php';
            require APP . 'view/zoning/NO_submission.php';
            require APP . 'view/_templates/zoning_footer.php';
        }
    }
   
    public function validate_parcel(){
        $ok = 'false';
        if (isset($_POST['parcel']) && strlen($_POST['parcel']) == 17) {
            $parcel = str_replace('-','', $this->sanitizeString($_POST['parcel']));
            if(strlen($parcel) == 14 && is_numeric($parcel)){
                $rs = $this->zoning_model->get_valid_parcel($parcel);
                if($rs){
                    echo 'valid';
                } else {
                    echo 0;
                }
            } else {
                echo 0;
            }
        } else {
            echo 0;
        }
    }
    
    public function validate_parcel_owners(){
        $ok = 'false';
        if (isset($_POST['parcel']) && strlen($_POST['parcel']) == 17) {
            $parcel = str_replace('-','', $this->sanitizeString($_POST['parcel']));
            if(strlen($parcel) == 14 && is_numeric($parcel)){
                $rs = $this->zoning_model->get_valid_parcel($parcel);
                if($rs){
                    echo json_encode($rs);
                } else {
                    echo json_encode(0);
                }
            } else {
                echo json_encode(0);
            }
        } else {
            echo json_encode(0);
        }
    }
    
    /**
     * This function validates the input and returns the cleaned string
     */
    public function validate_input(){
        $val = isset($_POST['curr_value']) ? $_POST['curr_value'] : null;
        if($val == null){
            return;
        }
        if (!is_string($val)) {
            echo "ERROR";
        } else {
            $val = stripslashes($val);
            $val = strip_tags($val);
            $val = htmlentities($val);
            $val = str_replace('%20',' ',$val);
            $val = str_replace('&amp;','&', $val);
            $val = str_replace('&#039;',"'", $val);
            $val = str_replace('&quot;','"', $val);
            $val = str_replace('&rsquo;',"'", $val);
            $val = str_replace('&frac12;','1/2', $val);
            $val = str_replace('&nbsp;',' ', $val);
            $val = trim($val);
            echo $val;
        }
    }
    
    /**
     * This function gets acres
     */
    public function get_acres(){
        echo $this->zoning_model->get_acres();
    }
    
    /**
     * This function gets parcel address / fireno
     */
    public function get_fireno(){
        echo $this->zoning_model->get_fireno();
    }
    
    /**
     * This function gets the current parcel tax description
     */
    public function get_legal(){
        echo $this->zoning_model->get_legal();
    }
    
    /**
     * This function gets curr parcel town
     */
    public function get_town(){
        echo $this->zoning_model->get_town();
    }
    
    /**
     * If no parcel town, get towns select
     */
    public function get_towns_select(){
        echo $this->zoning_model->get_towns_select();
    }
    
    /**
     * Sanatize string from tags, etc.
     * @param unknown $var
     * @return unknown
     */
    private function sanitizeString($var)
    {
        $var = trim($var);
        $var = stripslashes($var);
        $var = strip_tags($var);
        $var = htmlentities($var);
        
        return $var;
    }
}
