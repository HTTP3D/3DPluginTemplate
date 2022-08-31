<?php
global $wtwhandlers;
try {
	/* include the class for the functions to save, edit, or delete the records in the database */
	require_once(DEVID_PLUGINTEMPLATE_PATH . '/functions/class_functions.php');
	global $devidplugintemplate_functions;
	/* get sent data */
	$zrequest = $wtwhandlers->openFilefromURL('php://input');
	$zrequest = json_decode($zrequest, TRUE);
	/* get the requested function name for the awitch case below */
	$zfunction = strtolower($wtwhandlers->getPost('function',''));
	
	/* get form Posted Values - your passed data */
	/* $wtwhandlers->getPost(fieldname, defaultvalue); */
	$zfieldid = $wtwhandlers->getPost('fieldid','');
	$zfieldname = $wtwhandlers->getPost('fieldname','');

	/* set response array of values - customize as needed */
	$zresponse = array(
		'serror'=> ''
	);
	switch ($zfunction) {
		case "savesampledata":
			/* Sample function, you can save records in the database and respond with error message if there is an error */
			if ($devidplugintemplate_functions->saveSample($zfieldid, $zfieldname) == false) {
				$zresponse = array(
					'serror'=> 'Could not save Sample Data'
				);
			}
			break;
		case "getsampledata":
			/* Sample function, you can return records from the database as an array */
			$zresponse = $devidplugintemplate_functions->getSample($zfieldid);
			break;
	}

	echo $wtwhandlers->addHandlerHeader($wtwhandlers->domainname);
	echo json_encode($zresponse);

} catch (Exception $e) {
	$wtwhandlers->serror("core-handlers-devid-plugintemplate-samplehandler.php=".$e->getMessage());
}
?>