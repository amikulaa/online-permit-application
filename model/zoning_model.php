<?php 
/**
* Zoning Permit Model
Some code is removed for privacy conerns.
*
**/
namespace JC\Model;

use JC\Core\Model;

use JC\Libs\Helper;

class zoning_model extends Model
{
    var $pin_municipality;
    var $pin_town;
    var $pin_range;
    var $pin_section;
    var $pin_quarter;
    var $pin_id_number;
    
    public function get_valid_parcel($parcel){
        //removed privacy reasons
        return $query->fetchAll();
    }
    
    /**
     * This function returns legal desc
     * 
     * @return unknown
     */
    public function get_legal(){
        //removed privacy reasons
        return json_encode($query->fetchAll());
    }
    
    /**
     * This function fills the section 2 tax description.
     *
     * @return json encoded arr
     */
    public function get_taxyear(){
        //removed privacy reasons
    }
    
    /**
     * This function fills the section 2 tax description.
     * 
     * @return json encoded arr
     */
    public function get_acres($parcel){
        //removed privacy reasons
    }
    
    /**
     * This function gets the zoning districts for 
     * land use permits in jeffco
     */
    public function get_zoning_districts(){
        //removed privacy reasons
    }
    
    /**
     * Convert parcel pin
     * @param varchar $pin
     */
    private function convert_pin($pin) {
        //removed privacy reasons
    }
    
    /**
     * Display the submitted pdf.
     * 
     * @return unknown
     */
    public function get_pdf(){
        $sql = "SELECT * FROM `jefferson`.`zoning_application` WHERE `id` = (SELECT MAX(`id`) FROM `jefferson`.`zoning_application`);";
        $query = $this->db->prepare($sql);
        $query->execute();
        if($query->rowCount() != 0){
            $result = $query->fetchAll();
            foreach ($result as $row){
                return $row->plot_plan_pdf;
            }
        }
    }
    
    /**
     * Sanitize string before insertion.
     * 
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
    
    /**
     * This function gets the parameters to be inserted after
     * application submission.
     * 
     * @param arr $post_arr
     */
    private function get_params($post_arr){
        foreach ($post_arr as $key => $value) {
            $$key = $this->sanitizeString($value);
        }
        
        $var_arr = [
            ':parcel' => isset($parcel) ? $parcel : '',
            ':owner1_fullname' => isset($fullname) ? $fullname : '',
            ':owner1_address' => isset($streetaddress) ? $streetaddress : '',
            ':owner1_city' => isset($city) ? $city : '',
            ':owner1_state' => isset($state) ? $state : '',
            ':owner1_zip' => isset($zip) ? $zip : '',
            ':owner1_phoneno' => isset($phoneno) ? $phoneno : '',
            ':owner2_fullname' => isset($fullname1) ? $fullname1 : '',
            ':owner2_address' => isset($streetaddress1) ? $streetaddress1 : '',
            ':owner2_city' => isset($city1) ? $city1 : '',
            ':owner2_state' => isset($state1) ? $state1 : '',
            ':owner2_zip' => isset($zip1) ? $zip1 : '',
            ':owner2_phoneno' => isset($phoneno1) ? $phoneno1 : '',
            ':contractor_fullname' => isset($contractfullname) ? $contractfullname : '',
            ':contractor_address' => isset($contractstreetaddress) ? $contractstreetaddress : '',
            ':contractor_city' => isset($contractcity) ? $contractcity : '',
            ':contractor_state' => isset($contractstate) ? $contractstate : '',
            ':contractor_zip' => isset($contractzip) ? $contractzip : '',
            ':contractor_phoneno' => isset($contractphoneno) ? $contractphoneno : '',
            //SECTION 2
            ':property_town' => isset($desc_town_name) ? $desc_town_name : '',
            ':property_acres' => isset($desc_acres) ? $desc_acres : '',
            ':property_fireno_road' => isset($desc_fire_num_road) ? $desc_fire_num_road : '',
            ':property_description' => isset($desc) ? $desc : '', 
            //SECTION 3 RES
            ':structure_type_new' => isset($input_new) ? $input_new : 0,
            ':structure_type_add' => isset($input_add) ? $input_add : 0,
            ':structure_res' => isset($input_res) ? $input_res : 0,
            ':structure_res_singlefam' => isset($input_signlefamres) ? $input_signlefamres : 0,
            ':structure_res_singlefam_bed' => isset($inputnobedrooms) ? $inputnobedrooms : '',
            ':structure_res_mobilehome' => isset($inputmh_singlefamily) ? $inputmh_singlefamily : 0,
            ':structure_res_mobilehome_addition' => isset($inputmh_addition) ? $inputmh_addition : 0,
            ':structure_res_mobilehome_accessory' => isset($inputmh_accessory) ? $inputmh_accessory : 0,
            ':structure_res_multifam' => isset($input_multifamily) ? $input_multifamily : 0,
            ':structure_res_multifam_units' => isset($inputmultiunits) ? $inputmultiunits : '',
            ':structure_res_multifam_bed' => isset($inputmultibedrooms) ? $inputmultibedrooms : '',
            ':structure_res_gardet' => isset($input_gardet) ? $input_gardet : 0,
            ':structure_res_other' => isset($input_other) ? $input_other : 0,
            ':structure_res_other_ans' => isset($input_other_ans) ? $input_other_ans : '',
            ':structure_res_garatt' => isset($input_garageattached) ? $input_garageattached : 0,
            ':structure_res_deck' => isset($input_deckporch) ? $input_deckporch : 0,
            ':structure_res_deck_enclsd' => isset($input_deck_enclosed) ? $input_deck_enclosed : 0,
            ':structure_res_deck_nonenclsd' => isset($input_deck_nonenclosed) ? $input_deck_nonenclosed : 0,
            ':structure_res_floodplain' => isset($input_floodplain) ? $input_floodplain : 0,
            ':structure_res_floodplain_ff' => isset($input_ff) ? $input_ff : 0,
            ':structure_res_floodplain_fw' => isset($input_fw) ? $input_fw : 0,
            ':structure_res_wetland' => isset($input_wetland) ? $input_wetland : 0,
            ':structure_res_sqft' => isset($input_sqftres) ? $input_sqftres : '',
            ':structure_res_height' => isset($input_height) ? $input_height : '',
            ':structure_res_gar_sqft' => isset($input_sqftgar) ? $input_sqftgar : '',
            ':structure_res_deck_sqft' => isset($input_sqftdeck) ? $input_sqftdeck : '',
            ':structure_res_use' => isset($input_specify_use) ? $input_specify_use : '',
            ':structure_res_value' => isset($input_value_const) ? $input_value_const : '',
            //SECTTION 3 NONRES
            ':structure_nonres' => isset($input_non_res) ? $input_non_res : 0,
            ':structure_nonres_agricultural' => isset($input_non_agricultural) ? $input_non_agricultural : 0,
            ':structure_nonres_industrial' => isset($input_non_industrial) ? $input_non_industrial : 0,
            ':structure_nonres_business' => isset($input_non_business) ? $input_non_business : 0,
            ':structure_nonres_campground' => isset($input_non_campground) ? $input_non_campground : 0,
            ':structure_nonres_shorewet' => isset($input_non_shorewet) ? $input_non_shorewet : 0,
            ':structure_nonres_other' => isset($input_non_other) ? $input_non_other : 0,
            ':structure_nonres_other_ans' => isset($input_non_other_ans) ? $input_non_other_ans : '',
            ':structure_nonres_sqft' => isset($input_non_sqftres) ? $input_non_sqftres : '',
            ':structure_nonres_height' => isset($input_non_height) ? $input_non_height : '',
            ':structure_nonres_use' => isset($input_non_specify_use) ? $input_non_specify_use : '',
            ':structure_nonres_value' => isset($input_non_value_const) ? $input_non_value_const : '',
            //SECTION 5
            ':permit_mail' => isset($mail_permit) ? $mail_permit : 0,
            ':permit_pickup' => isset($pickup_permit) ? $pickup_permit : 0,
            ':permit_pickup_name' => isset($pickup_name) ? $pickup_name : '',
            ':permit_pickup_number' => isset($pickup_number) ? $pickup_number : '',
            ':permit_accepted_terms' => isset($accept_acknowledge) ? $accept_acknowledge : 0,
            ':permit_accepted_date' => isset($accepted_date) ? $accepted_date : ''
        ];
        
        return $var_arr;
    }
    
    /**
     * Insert pdf into separate pdf table.
     */
    public function insert_pdf(){
        //SECTION 4
        if($pdf_blob = fopen($_FILES['plot_plan']['tmp_name'], 'rb')){
            $project_name = $this->sanitizeString($_FILES['plot_plan']['name']);
            $sql = "INSERT INTO `jefferson`.`zoning_application_pdfs` (`file_name`, `file_data`) VALUES (:project_name, :project_data)";
            $query = $this->db->prepare($sql);
            $query->bindParam(':project_name', $project_name);
            $query->bindParam(':project_data', $pdf_blob, PDO::PARAM_LOB);
            if ($query->execute() === false) {
                echo 'Could not save information to the database.';
            } else {
                echo 'Information saved.';
            }
        }
    }
    
    /**
     * This function takes the users appliocation inputs and inserts them into
     * the database.
     */
    public function insert_db(){
        $var_arr = $this->get_params($_POST);
        $this->insert_pdf($_POST);
        die('Done');
        $sql = "INSERT INTO `jefferson`.`zoning_application` (`parcel`, `owner1_fullname`, 
                `owner1_address`, `owner1_city`, `owner1_state`, `owner1_zip`, 
                `owner1_phoneno`, `owner2_fullname`, `owner2_address`, `owner2_city`, 
                `owner2_state`, `owner2_zip`, `owner2_phoneno`, `contractor_fullname`, 
                `contractor_address`, `contractor_city`, `contractor_state`, `contractor_zip`, 
                `contractor_phoneno`, `property_town`, `property_acres`, `property_fireno_road`, 
                `property_description`, `structure_type_new`, `structure_type_add`, 
                `structure_res`, `structure_res_singlefam`, `structure_res_singlefam_bed`, 
                `structure_res_mobilehome`, `structure_res_mobilehome_addition`, 
                `structure_res_mobilehome_accessory`, `structure_res_multifam`, 
                `structure_res_multifam_units`, `structure_res_multifam_bed`, `structure_res_gardet`, 
                `structure_res_other`, `structure_res_other_ans`, `structure_res_garatt`, 
                `structure_res_deck`, `structure_res_deck_enclsd`, `structure_res_deck_nonenclsd`, 
                `structure_res_floodplain`, `structure_res_floodplain_ff`, 
                `structure_res_floodplain_fw`, `structure_res_wetland`, `structure_res_sqft`, 
                `structure_res_height`, `structure_res_gar_sqft`, `structure_res_deck_sqft`, 
                `structure_res_use`, `structure_res_value`, `structure_nonres`, 
                `structure_nonres_agricultural`, `structure_nonres_industrial`, 
                `structure_nonres_business`, `structure_nonres_campground`, 
                `structure_nonres_shorewet`, `structure_nonres_other`, `structure_nonres_other_ans`, 
                `structure_nonres_sqft`, `structure_nonres_height`, `structure_nonres_use`, 
                `structure_nonres_value`, `permit_mail`, `permit_pickup`, 
                `permit_pickup_name`, `permit_pickup_number`, `permit_accepted_terms`, 
                `permit_accepted_date`)
            VALUES (
                :parcel, 
                :owner1_fullname,
                :owner1_address,
                :owner1_city,
                :owner1_state,
                :owner1_zip,
                :owner1_phoneno,
                :owner2_fullname,
                :owner2_address,
                :owner2_city,
                :owner2_state,
                :owner2_zip,
                :owner2_phoneno,
                :contractor_fullname,
                :contractor_address,
                :contractor_city,
                :contractor_state,
                :contractor_zip,
                :contractor_phoneno,
                :property_town,
                :property_acres,
                :property_fireno_road,
                :property_description,
                :structure_type_new,
                :structure_type_add,
                :structure_res,
                :structure_res_singlefam,
                :structure_res_singlefam_bed,
                :structure_res_mobilehome,
                :structure_res_mobilehome_addition,
                :structure_res_mobilehome_accessory,
                :structure_res_multifam,
                :structure_res_multifam_units,
                :structure_res_multifam_bed,
                :structure_res_gardet,
                :structure_res_other,
                :structure_res_other_ans,
                :structure_res_garatt,
                :structure_res_deck,
                :structure_res_deck_enclsd,
                :structure_res_deck_nonenclsd,
                :structure_res_floodplain,
                :structure_res_floodplain_ff,
                :structure_res_floodplain_fw,
                :structure_res_wetland,
                :structure_res_sqft,
                :structure_res_height,
                :structure_res_gar_sqft,
                :structure_res_deck_sqft,
                :structure_res_use,
                :structure_res_value,
                :structure_nonres,
                :structure_nonres_agricultural,
                :structure_nonres_industrial,
                :structure_nonres_business,
                :structure_nonres_campground,
                :structure_nonres_shorewet,
                :structure_nonres_other,
                :structure_nonres_other_ans,
                :structure_nonres_sqft,
                :structure_nonres_height,
                :structure_nonres_use,
                :structure_nonres_value,
                :permit_mail,
                :permit_pickup,
                :permit_pickup_name,
                :permit_pickup_number,
                :permit_accepted_terms,
                :permit_accepted_date)";
        
        $query = $this->db->prepare($sql);
        $query->execute($var_arr);
        if($query->rowCount() != 0){
            echo 'SUCCESS';
        } else {
            echo 'ERROR';
        }
     }
}

?>
