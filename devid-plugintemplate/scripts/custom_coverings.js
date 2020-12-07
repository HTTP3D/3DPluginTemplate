DEVID_PLUGINTEMPLATE.prototype.addCoveringMyCustomCovering = function(zmoldname, zmolddef, zlenx, zleny, zlenz, zspecial1, zspecial2) {
	let covering;
	try {
		/* each custom Covering will have a separate function */
		let zopacity = 1;
		if (zmolddef.opacity != undefined) {
			if (WTW.isNumeric(zmolddef.opacity)) {
				zopacity = Number(zmolddef.opacity) / 100;
				if (zopacity > 1) {
					zopacity = 1;
				} else if (zopacity < 0) {
					zopacity = 0;
				}
			}
		}
		covering = new BABYLON.StandardMaterial(zmoldname + "mat", scene);
		covering.alpha = zopacity;
		covering.specularColor = new BABYLON.Color3(Number(zmolddef.color.specular.r), Number(zmolddef.color.specular.g), Number(zmolddef.color.specular.b));
		covering.emissiveColor = new BABYLON.Color3(Number(zmolddef.color.emissive.r), Number(zmolddef.color.emissive.g), Number(zmolddef.color.emissive.b));
		covering.diffuseColor = new BABYLON.Color3(Number(zmolddef.color.diffuse.r), Number(zmolddef.color.diffuse.g), Number(zmolddef.color.diffuse.b));

		/* replace the covering directly with your material. */
		/* examples of existing coverings (materials) can be found at /core/scripts/coverings/wtw_basiccoverings.js */
		/* you can use one of the coverings as a base and build off it as needed */
		/* names of your additions should be: */
		/* zmoldname + "-DEVIDpartname" */
		/* where partname is whatever you want it to be (suggest 'mat' in the partname but not required). */

	} catch (ex) {
		WTW.log("plugins:devid-plugintemplate:scripts-custom_coverings.js-addCoveringMyCustomCovering=" + ex.message);
	}
	return covering;
}

DEVID_PLUGINTEMPLATE.prototype.setCoveringFormFields = function(zcoveringname) {
	try {
		/* add each custom covering to this one function as a case - no need to add additional hooks */
		/* zcoveringname is name of my custom covering (material) - all lowercase and no spaces */
		switch (zcoveringname) {
			case "mycustomcovering":
				/* show or hide the section divs on the MOLD form (/core/forms/mold.php) */
				WTW.show('wtw_moldtexturetitle');
				WTW.show('wtw_moldbumptexturetitle');
				WTW.show('wtw_moldbumptextureset2div');
				WTW.show('wtw_moldtexturepreview');
				WTW.show('wtw_moldbasictextureset2div');
				WTW.closeColorSelector();
				break;
		}
	} catch (ex) {
		WTW.log("plugins:devid-plugintemplate:scripts-custom_molds.js-setCoveringFormFields=" + ex.message);
	}
	return mold;
}
