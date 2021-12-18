var ccLS5 = "most consistent with renal cell carcinoma; clear cell subtype very likely (ccLS 5)";
var ccLS4 = "most consistent with renal cell carcinoma; clear cell subtype likely (ccLS 4)";
var ccLS3 = "indeterminate for histologic subtype, but differential diagnosis includes renal cell carcinoma (ccLS 3)";
var ccLS2_Onco = "indeterminate for histologic subtype, but oncocytoma suspected. Differential diagnosis includes renal cell carcinoma (ccLS 2)";
var ccLS2_fpAML = "most consistent with fat-poor angiomyolipoma (ccLS 2); however, renal cell carcinoma cannot be excluded";
var ccLS2 = "most consistent with renal cell carcinoma; clear cell subtype unlikely (ccLS 2)";
var ccLS1 = "most consistent with renal cell carcinoma; papillary subtype very likely (ccLS 1). Rarely, other tumors, such as fat-poor angiomyolipoma, can have these findings";


// Get the button that opens the modal
var icn = document.querySelectorAll(".openmodal");
console.log(icn.length);

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < icn.length; i++) {
 icn[i].onclick = function(e) {
    e.preventDefault();
	console.log("hi");
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

function CheckPrior(NewVal) {
	var PriorDiv = document.getElementById("Prior_Info");
	var PriorDate = document.getElementById("Prior_Date");
	var PriorAP = document.getElementById("Prior_AP_sz");
	var PriorLL = document.getElementById("Prior_LL_sz");
	var PriorCC = document.getElementById("Prior_CC_sz");
	
	if (NewVal == 1) {
		PriorDiv.style.display = "block";
	} else {
		PriorDiv.style.display = "none";
		PriorDate.value = '';
		PriorAP.value = '';
		PriorLL.value = '';
		PriorCC.value = '';
	}
}

function MacroFat() {
	alert("A renal tumor with macroscopic fat is highly likely to be a classic angiomyolipoma (AML) and the ccLS algorithm does not apply to such tumors");
}

function CM_OpenCalc() {
	var CM_CalcBtn = document.getElementById("Btn_CM_OpenCalc");
	var CMCalcDiv = document.getElementById("CalcEnhance");
	var Inp_T_Pre = document.getElementById("SI_Tumor_Pre");
	
	if (CMCalcDiv.style.display == "none") {
		SelectBtn(CM_CalcBtn);
		CMCalcDiv.style.display = "block";
		Inp_T_Pre.focus();
	} else {
		UnselectBtn(CM_CalcBtn);
		CMCalcDiv.style.display = "none";
		CM_ClearVars();
	}
}

function CM_ClearVars() {
	var Inp_T_Pre = document.getElementById("SI_Tumor_Pre");
	var Inp_T_Art = document.getElementById("SI_Tumor_CM");
	var Inp_C_Pre = document.getElementById("SI_Cortex_Pre");
	var Inp_C_Art = document.getElementById("SI_Cortex_CM");
	var CM_Tumor_Text = document.getElementById("CM_Tumor");
	var CM_Cortex_Text = document.getElementById("CM_Cortex");
	var TC_Ratio_Text = document.getElementById("TC_Ratio");
	
	Inp_T_Pre.value = '';
	Inp_T_Art.value = '';
	Inp_C_Pre.value = '';
	Inp_C_Art.value = '';
	
	CM_Tumor_Text.innerHTML = "NaN";
	CM_Cortex_Text.innerHTML = "NaN";
	TC_Ratio_Text.innerHTML = "NaN"
}

function CM_RunCalc() {
	var SI_T_Pre = parseFloat(document.getElementById("SI_Tumor_Pre").value);
	var SI_T_Art = parseFloat(document.getElementById("SI_Tumor_CM").value);
	var SI_C_Pre = parseFloat(document.getElementById("SI_Cortex_Pre").value);
	var SI_C_Art = parseFloat(document.getElementById("SI_Cortex_CM").value);
	
	var Calc_CMEnhDiv = document.getElementById("Calc_CMEnh");
	
	var CM_Tumor_Text = document.getElementById("CM_Tumor");
	var CM_Cortex_Text = document.getElementById("CM_Cortex");
	var TC_Ratio_Text = document.getElementById("TC_Ratio");

	var Int_CME = document.getElementById("CME_Int");
	var Mod_CME = document.getElementById("CME_Mod");
	var Mld_CME = document.getElementById("CME_Mld");
	
	var CM_Cortex = (SI_C_Art-SI_C_Pre)/SI_C_Pre
	var CM_Tumor = (SI_T_Art-SI_T_Pre)/SI_T_Pre;
	var TC_Ratio = CM_Tumor/CM_Cortex;
	
	CM_Cortex_Text.innerHTML = (CM_Cortex*100).toFixed(1);
	CM_Tumor_Text.innerHTML = (CM_Tumor*100).toFixed(1);
	TC_Ratio_Text.innerHTML = (TC_Ratio*100).toFixed(1);
	
	Calc_CMEnhDiv.style.display="block";
		
	if (TC_Ratio<0.4) {
		Mld_CME.checked = true;
	} else if (TC_Ratio<=0.75) {
		Mod_CME.checked = true;
	} else {
		Int_CME.checked = true;
	}
}

function CM_ResetCalc() {
	var Int_CME = document.getElementById("CME_Int");
	var Mod_CME = document.getElementById("CME_Mod");
	var Mld_CME = document.getElementById("CME_Mld");
	
	Int_CME.checked = false;
	Mod_CME.checked = false;
	Mld_CME.checked = false;
	
	CM_ClearVars();
}

function T1_OpenCalc() {
	var T1_CalcBtn = document.getElementById("Btn_T1_OpenCalc");
	var T1CalcDiv = document.getElementById("CalcT1");
	var Inp_SI_IP = document.getElementById("SI_IP");
	
	if (T1CalcDiv.style.display == "none") {
		SelectBtn(T1_CalcBtn);
		T1CalcDiv.style.display = "block";
		Inp_SI_IP.focus();
	} else {
		UnselectBtn(T1_CalcBtn);
		T1CalcDiv.style.display = "none";
		T1_ClearVars();
	}
}

function T1_ClearVars() {
	var Inp_SI_IP = document.getElementById("SI_IP");
	var Inp_IP_SD = document.getElementById("IP_SD");
	var Inp_SI_OP = document.getElementById("SI_OP");
	var Inp_OP_SD = document.getElementById("OP_SD");

	Inp_SI_IP.value = '';
	Inp_IP_SD.value = '';
	Inp_SI_OP.value = '';
	Inp_OP_SD.value = '';
}

function T1_RunCalc() {
	var SI_IP = parseFloat(document.getElementById("SI_IP").value);
	var IP_SD = parseFloat(document.getElementById("IP_SD").value);
	var SI_OP = parseFloat(document.getElementById("SI_OP").value);
	var OP_SD = parseFloat(document.getElementById("OP_SD").value);
	
	var Micro = document.getElementById("T1_Micro");
	var NoFat = document.getElementById("T1_NoFat");
	
	var MicFatPresent = (SI_IP-SI_OP)-(IP_SD+OP_SD);
	if (MicFatPresent>0) {
		Micro.checked = true;
	} else {
		NoFat.checked = true;
	}
}

function T1_ResetCalc() {
	var Micro = document.getElementById("T1_Micro");
	var NoFat = document.getElementById("T1_NoFat");
	
	Micro.checked = false;
	NoFat.checked = false;
	
	T1_ClearVars();
}

function ADER_OpenCalc() {
	var ADER_CalcBtn = document.getElementById("Btn_ADER_OpenCalc");
	var Inp_ADER_Pre_SI = document.getElementById("ADER_Pre_SI");
	var ADERCalcDiv = document.getElementById("CalcADER");
	
	if (ADERCalcDiv.style.display == "none") {
		SelectBtn(ADER_CalcBtn);
		ADERCalcDiv.style.display = "block";
		Inp_ADER_Pre_SI.focus();
	} else {
		UnselectBtn(ADER_CalcBtn);
		ADERCalcDiv.style.display = "none";
		ADER_ClearVars();
	}
}

function ADER_ClearVars() {
	var ADER_Pre_SI = document.getElementById("ADER_Pre_SI");
	var ADER_CM_SI = document.getElementById("ADER_CM_SI");
	var ADER_NG_SI = document.getElementById("ADER_NG_SI");
	var ADER_Text = document.getElementById("ADER_Num");

	ADER_Pre_SI.value = '';
	ADER_CM_SI.value = '';
	ADER_NG_SI.value = '';
	ADER_Text.innerHTML = "NaN";
}

function ADER_RunCalc() {
	var ADER_Pre_SI = parseFloat(document.getElementById("ADER_Pre_SI").value);
	var ADER_CM_SI = parseFloat(document.getElementById("ADER_CM_SI").value);
	var ADER_NG_SI = parseFloat(document.getElementById("ADER_NG_SI").value);
	var Wash_Y = document.getElementById("Wash_Y");
	var Wash_N = document.getElementById("Wash_N");
	var ADER_Text = document.getElementById("ADER_Num");

	var ADER_val = (ADER_CM_SI-ADER_Pre_SI)/(ADER_NG_SI-ADER_Pre_SI);
	ADER_Text.innerHTML = ADER_val.toFixed(2);
	
	if (ADER_val>1.5) {
		Wash_Y.checked = true;
	} else {
		Wash_N.checked = true;
	}
}

function ADER_ResetCalc() {
	var Wash_Y = document.getElementById("Wash_Y");
	var Wash_N = document.getElementById("Wash_N");
	var Inp_ADER_Pre_SI = document.getElementById("ADER_Pre_SI");

	Wash_N.checked = false;
	Wash_Y.checked = false;
	
	ADER_ClearVars();
	
	Inp_ADER_Pre_SI.focus();
}

function Generate_Report() {
	//Get the Laterality Info
	var LR = document.querySelector('input[name=Loc_LR]:checked')?.value;
	document.getElementById('Loc_LR').innerHTML = LR || 'Unknown Laterality';
	document.getElementById('Mass_Lat').innerHTML = LR || '';
	
	var MaxSize = RunGetSize();
	
	RunPriorReport();
	
	//Get the Location Info
	var Loc_CC = document.querySelector('input[name=Loc_CC]:checked')?.value;
	var Loc_LL = document.querySelector('input[name=Loc_LL]:checked')?.value;
	var Loc_AP = document.querySelector('input[name=Loc_AP]:checked')?.value;
	
	document.getElementById('Loc_CC').innerHTML = Loc_CC;
	document.getElementById('Loc_LL').innerHTML = Loc_LL;
	document.getElementById('Loc_AP').innerHTML = Loc_AP;
	
	//Get the Depth Info
	var Depth = document.querySelector('input[name=Depth]:checked')?.value;
	
	document.getElementById('Dep_Ext').innerHTML = Depth;
	
	//Get the T2 Info
	var T2_SI = document.querySelector('input[name=T2_Int]:checked')?.value;
	var T2_Pat = document.querySelector('input[name=T2_Ptr]:checked')?.value;
	
	document.getElementById('T2_SI').innerHTML = T2_SI;
	document.getElementById('T2_Pat').innerHTML = T2_Pat;
	
	//Get the T1 Chem Shift Info
	var T1_Fat = document.querySelector('input[name=T1fat]:checked')?.value;
	
	document.getElementById('T1_Fat').innerHTML = T1_Fat;
	
	//Get the Diffusion Info
	var DWI_Sig = document.querySelector('input[name=DWI]:checked')?.value;
	var DWI_Pat = document.querySelector('input[name=DWI_Ptr]:checked')?.value;
	var ADC_Sig = document.querySelector('input[name=ADC]:checked')?.value;
	
	document.getElementById('DWI_Sig').innerHTML = DWI_Sig;
	document.getElementById('DWI_Pat').innerHTML = DWI_Pat;
	document.getElementById('ADC_Sig').innerHTML = ADC_Sig;
	
	//Get the Enhancement Info
	var CMEnh = document.querySelector('input[name=CME]:checked')?.value;
	var CME_Pat = document.querySelector('input[name=CM_Ptr]:checked')?.value;
	
	document.getElementById('CMEnh').innerHTML = CMEnh;
	document.getElementById('CME_Pat').innerHTML = CME_Pat;
	
	//Get the SEI Info
	var SEI_Prz = document.querySelector('input[name=SEI]:checked')?.value;
	
	document.getElementById('SEI_Prz').innerHTML = SEI_Prz;
	
	//Geth the MRI Staging Info
	var MRI_Stg = document.querySelector('input[name=MR_St]:checked')?.value;
	var MRI_Stg_Shrt = MRI_Stg?.split(' ')[0]
	
	document.getElementById('MRI_Stg').innerHTML = MRI_Stg;
	document.getElementById('MR_Stg').innerHTML = MRI_Stg_Shrt;
	
	//Get the Renal Vein Anatomy Info
	var RVA_Char = document.querySelector('input[name=RV_Anat]:checked')?.value;
	
	document.getElementById('RVA_Char').innerHTML = RVA_Char;
	
	//Get the Renal Vein Thrombus 
	var RVT_Prz = document.querySelector('input[name=RV_Thr]:checked')?.value;
	
	document.getElementById('RVT_Prz').innerHTML = RVT_Prz;
	
	//Get the  Renal Artery Anatomy Info
	var RAA_Char = document.querySelector('input[name=RA_Anat]:checked')?.value;
	
	document.getElementById('RAA_Char').innerHTML = RAA_Char;
	
	Run_ccLS();
	
}
 
function Run_ccLS() {
	var T2_SI = document.querySelector('input[name=T2_Int]:checked')?.value;
	var CMEnh = document.querySelector('input[name=CME]:checked')?.value;
	var T1_Fat = document.querySelector('input[name=T1fat]:checked')?.value;
	var SEI_Prz = document.querySelector('input[name=SEI]:checked')?.value;
	var Washout = document.querySelector('input[name=Wash]:checked')?.value;
	var DWI_Sig = document.querySelector('input[name=DWI]:checked')?.value;
	var DWI_Pat = document.querySelector('input[name=DWI_Ptr]:checked')?.value;
	var ADC_Sig = document.querySelector('input[name=ADC]:checked')?.value;
	
	if (T1_Fat == "Macroscopic Fat") {
		document.getElementById('ccLS_Val').innerHTML = 'N/A';
		document.getElementById('Is_fpAML').innerHTML = 'No';
		document.getElementById('Is_Onco').innerHTML = 'No';
		document.getElementById('ccLS_Imp').innerHTML = 'are typical of classic angiomyolipoma with bulk fat';
		return;
	}
	
	switch (T2_SI) {
		case "Hyperintense":
			switch (CMEnh) {
				case "Intense":
					ccLS_T2HypIso_Avid();
					break;
				case "Moderate":
					ccLS_T2HypIso_Mod();
					break;
				case "Mild":
					document.getElementById('ccLS_Val').innerHTML = '3';
					document.getElementById('Is_fpAML').innerHTML = 'No';
					document.getElementById('Is_Onco').innerHTML = 'No';
					document.getElementById('ccLS_Imp').innerHTML = ccLS3;
					break;
				default:
					Cannot_Calc_ccLS("Corticomedullary Enhancement");
			}
			break;
		case "Isointense":
			switch (CMEnh) {
				case "Intense":
					ccLS_T2HypIso_Avid();
				break;
				case "Moderate":
					ccLS_T2HypIso_Mod();
					break;
				case "Mild":
					switch(T1_Fat) {
						case "Microscopic Fat":
							document.getElementById('ccLS_Val').innerHTML = '3';
							document.getElementById('Is_fpAML').innerHTML = 'No';
							document.getElementById('Is_Onco').innerHTML = 'No';
							document.getElementById('ccLS_Imp').innerHTML = ccLS3;
							break;
						case "No Fat":
							if (DWI_Sig && ADC_Sig) {
								if ((DWI_Sig == "Hyperintense") && (ADC_Sig == "Hypointense")) {
									document.getElementById('ccLS_Val').innerHTML = '1';
									document.getElementById('Is_fpAML').innerHTML = 'No';
									document.getElementById('Is_Onco').innerHTML = 'No';
									document.getElementById('ccLS_Imp').innerHTML = ccLS1;
								} else {
									document.getElementById('ccLS_Val').innerHTML = '2';
									document.getElementById('Is_fpAML').innerHTML = 'No';
									document.getElementById('Is_Onco').innerHTML = 'No';
									document.getElementById('ccLS_Imp').innerHTML = ccLS2;
								}
							} else {
								Cannot_Calc_ccLS("Diffusion Characteristics");
							}
							break;
						default:
							Cannot_Calc_ccLS("T1 Chemical Shift");
					}
					break;
				default:
					Cannot_Calc_ccLS("Corticomedullary Enhancement");
			}
			break;
		case "Hypointense":
			switch (CMEnh) {
				case "Intense":
					switch (Washout) {
						case "Yes":
							if (DWI_Sig && ADC_Sig && DWI_Pat) {
								if (((DWI_Sig == "Hyperintense") && (ADC_Sig == "Hypointense")) || (DWI_Pat = "Homogeneous")){
									document.getElementById('ccLS_Val').innerHTML = '2';
									document.getElementById('Is_fpAML').innerHTML = 'Yes';
									document.getElementById('Is_Onco').innerHTML = 'No';
									document.getElementById('ccLS_Imp').innerHTML = ccLS2_fpAML;
								} else {
									document.getElementById('ccLS_Val').innerHTML = '3';
									document.getElementById('Is_fpAML').innerHTML = 'No';
									document.getElementById('Is_Onco').innerHTML = 'No';
									document.getElementById('ccLS_Imp').innerHTML = ccLS3;
								}
							} else {
								Cannot_Calc_ccLS("Diffusion Characteristics");
							}
							break;
						case "No":
							if (DWI_Sig && ADC_Sig && DWI_Pat) {
								if (((DWI_Sig == "Hyperintense") && (ADC_Sig == "Hypointense")) || (DWI_Pat = "Homogeneous")){
									document.getElementById('ccLS_Val').innerHTML = '3';
									document.getElementById('Is_fpAML').innerHTML = 'No';
									document.getElementById('Is_Onco').innerHTML = 'No';
									document.getElementById('ccLS_Imp').innerHTML = ccLS3;
								} else {
									document.getElementById('ccLS_Val').innerHTML = '4';
									document.getElementById('Is_fpAML').innerHTML = 'No';
									document.getElementById('Is_Onco').innerHTML = 'No';
									document.getElementById('ccLS_Imp').innerHTML = ccLS4;
								}
							} else {
								Cannot_Calc_ccLS("Diffusion Characteristics");
							}
							break;
						default:
							Cannot_Calc_ccLS('Washout (ADER)');
					}
				break;
				case "Moderate":
					document.getElementById('ccLS_Val').innerHTML = '3';
					document.getElementById('Is_fpAML').innerHTML = 'No';
					document.getElementById('Is_Onco').innerHTML = 'No';
					document.getElementById('ccLS_Imp').innerHTML = ccLS3;
					break;
				case "Mild":
					switch (T1_Fat) {
						case "Microscopic Fat":
							document.getElementById('ccLS_Val').innerHTML = '3';
							document.getElementById('Is_fpAML').innerHTML = 'No';
							document.getElementById('Is_Onco').innerHTML = 'No';
							document.getElementById('ccLS_Imp').innerHTML = ccLS3;
							break;
						case "No Fat":
							document.getElementById('ccLS_Val').innerHTML = '1';
							document.getElementById('Is_fpAML').innerHTML = 'No';
							document.getElementById('Is_Onco').innerHTML = 'No';
							document.getElementById('ccLS_Imp').innerHTML = ccLS1;
							break;
						default:
							Cannot_Calc_ccLS('T1 Chemical Shift');
					}
					break;
				default:
					Cannot_Calc_ccLS("Corticomedullary Enhancement");
			}
			break;
		default:
			Cannot_Calc_ccLS("T2 Intensity");
	}
}	

function Cannot_Calc_ccLS(Missing) {
	alert('No value given for ' + Missing + '. ccLS cannot be calculated.');
	document.getElementById('ccLS_Val').innerHTML = 'N/A';
	document.getElementById('ccLS_Imp').innerHTML = 'are indeterminate with unknown  ' + Missing;
}

function ccLS_T2HypIso_Avid() {
	var T1_Fat = document.querySelector('input[name=T1fat]:checked')?.value;
	var SEI_Prz = document.querySelector('input[name=SEI]:checked')?.value;
	switch (T1_Fat) {
		case "Microscopic Fat":
			document.getElementById('ccLS_Val').innerHTML = '5';
			document.getElementById('Is_fpAML').innerHTML = 'No';
			document.getElementById('Is_Onco').innerHTML = 'No';
			document.getElementById('ccLS_Imp').innerHTML = ccLS5;
			break;
		case "No Fat":
			switch (SEI_Prz) {
				case "Yes":
					document.getElementById('ccLS_Val').innerHTML = '3';
					document.getElementById('Is_fpAML').innerHTML = 'No';
					document.getElementById('Is_Onco').innerHTML = 'No';
					document.getElementById('ccLS_Imp').innerHTML = ccLS3;
					break;
				case "No":
					document.getElementById('ccLS_Val').innerHTML = '4';
					document.getElementById('Is_fpAML').innerHTML = 'No';
					document.getElementById('Is_Onco').innerHTML = 'No';
					document.getElementById('ccLS_Imp').innerHTML = ccLS4;
					break;
				default:
					Cannot_Calc_ccLS("Segmental Enhancement Inversion");
			}
			break;
		default:
			Cannot_Calc_ccLS("T1 Chemical Shift");
	}
}

function ccLS_T2HypIso_Mod() {
	var T1_Fat = document.querySelector('input[name=T1fat]:checked')?.value;
	var SEI_Prz = document.querySelector('input[name=SEI]:checked')?.value;
	switch (T1_Fat) {
		case "Microscopic Fat":
			document.getElementById('ccLS_Val').innerHTML = '3';
			document.getElementById('Is_fpAML').innerHTML = 'No';
			document.getElementById('Is_Onco').innerHTML = 'No';
			document.getElementById('ccLS_Imp').innerHTML = ccLS3;
			break;
		case "No Fat":
			switch (SEI_Prz) {
				case "Yes":
					document.getElementById('ccLS_Val').innerHTML = '2';
					document.getElementById('Is_fpAML').innerHTML = 'No';
					document.getElementById('Is_Onco').innerHTML = 'Yes';
					document.getElementById('ccLS_Imp').innerHTML = ccLS2_Onco;
					break;
				case "No":
					document.getElementById('ccLS_Val').innerHTML = '3';
					document.getElementById('Is_fpAML').innerHTML = 'No';
					document.getElementById('Is_Onco').innerHTML = 'No';
					document.getElementById('ccLS_Imp').innerHTML = ccLS3;
					break;
				default:
					Cannot_Calc_ccLS("Segmental Enhancement Inversion");
			}
			break;
		default:
			Cannot_Calc_ccLS("T1 Chemical Shift");
	}
}

function RunGetSize() {
	var AP_sz = parseFloat(document.getElementById('AP_sz').value);
	var LL_sz = parseFloat(document.getElementById('LL_sz').value);
	var CC_sz = parseFloat(document.getElementById('CC_sz').value);
	var Sz_Txt = '';
	
	var Max_Sz = Math.max(AP_sz || 0, LL_sz || 0, CC_sz || 0);
	
	if (AP_sz) {
			Sz_Txt += AP_sz.toFixed(1) + ' (AP) ';
		}
	if (LL_sz) {
		if (Sz_Txt) {
			Sz_Txt += 'x ' + LL_sz.toFixed(1) + ' (LL) ';
		} else {
			Sz_Txt += LL_sz.toFixed(1) + ' (LL) ';
		}
	}
	if (CC_sz) {
		if (Sz_Txt) {
			Sz_Txt += 'x ' + CC_sz.toFixed(1) + ' (CC) ';
		} else {
			Sz_Txt += CC_sz.toFixed(1) + ' CC ';
		}
	}
	if (Sz_Txt) {
		Sz_Txt += 'cm.';
	} else {
		Sz_Txt += 'Not Recorded';
	}
	document.getElementById('T_Sz').innerHTML = Sz_Txt;
	document.getElementById('Max_Dim').innerHTML = Max_Sz.toFixed(1);
		
	return Max_Sz;
}
	
function RunPriorReport() {
	var Has_Pr = document.querySelector('input[name=Prior_Avl]:checked')?.value;
	if (Has_Pr=="true") {
		var Pr_Dt = document.getElementById('Prior_Date').value || 'No Date';
		var Pr_AP = parseFloat(document.getElementById('Prior_AP_sz').value);
		var Pr_LL = parseFloat(document.getElementById('Prior_LL_sz').value);
		var Pr_CC = parseFloat(document.getElementById('Prior_CC_sz').value);
		var Pr_Sz_Txt = '';
		if (Pr_AP) {
			Pr_Sz_Txt += Pr_AP.toFixed(1) + ' (AP) ';
		}
		if (Pr_LL) {
			if (Pr_Sz_Txt) {
				Pr_Sz_Txt += 'x ' + Pr_LL.toFixed(1) + ' (LL) ';
			} else {
				Pr_Sz_Txt += Pr_LL.toFixed(1) + ' (LL) ';
			}
		}
		if (Pr_CC) {
			if (Pr_Sz_Txt) {
				Pr_Sz_Txt += 'x ' + Pr_CC.toFixed(1) + ' (CC) ';
			} else {
				Pr_Sz_Txt += Pr_CC.toFixed(1) + ' CC ';
			}
		}
		if (Pr_Sz_Txt) {
			Pr_Sz_Txt += 'cm.';
		} else {
			Pr_Sz_Txt += 'Not Recorded';
		}
		var OutTxt = '- Size on prior study dated ' + Pr_Dt + ': ' + Pr_Sz_Txt;
		document.getElementById('Prior_Txt').innerHTML = OutTxt + '<br>';
	} else {
		document.getElementById('Prior_Txt').innerHTML = '';
	}
}
	
function Copy_Div(div) {
	var r = document.createRange();
	r.selectNode(document.getElementById(div));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
}

function UnselectBtn(btn) {
	btn.style.backgroundColor = "#D3D3D3";
	btn.style.color = "#000000";
}

function SelectBtn(btn) {
	btn.style.backgroundColor = "#4CAF50";
	btn.style.color = "#FFFFFF";
}