var ccLS5 = "most consistent with renal cell carcinoma; clear cell subtype very likely (ccLS 5)";
var ccLS4 = "most consistent with renal cell carcinoma; clear cell subtype likely (ccLS 4)";
var ccLS3 = "indeterminate for histologic subtype, but differential diagnosis includes renal cell carcinoma (ccLS 3)";
var ccLS2_Onco = "indeterminate for histologic subtype, but oncocytoma suspected. Differential diagnosis includes renal cell carcinoma (ccLS 2)";
var ccLS2_fpAML = "most consistent with fat-poor angiomyolipoma (ccLS 2); however, renal cell carcinoma cannot be excluded";
var ccLS2 = "most consistent with renal cell carcinoma; clear cell subtype unlikely (ccLS 2)";
var ccLS1 = "most consistent with renal cell carcinoma; papillary subtype very likely (ccLS 1). Rarely, other tumors, such as fat-poor angiomyolipoma, can have these findings";
var ccLS_cAML = 'are typical of classic angiomyolipoma with bulk fat';

// Get the button that opens the modal
var icn = document.querySelectorAll(".openmodal");

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

function Toggle_Dark() {
	var element = document.body;
	element.classList.toggle("dark_mode");
	var DarkTgl = document.getElementById("Dark_Toggle");
	DarkTgl.classList.toggle("fa-moon");
	DarkTgl.classList.toggle("fa-sun")
}

function CheckStage() {
	var MaxSize = RunGetSize();
	var RVT_Prz = document.querySelector('input[name=RV_Thr]:checked')?.value;

	var T1a_Btn = document.getElementById("Stage_T1a");
	var T1b_Btn = document.getElementById("Stage_T1b");
	var T2_Btn = document.getElementById("Stage_T2");
	var T3_Btn = document.getElementById("Stage_T3");
	var T4_Btn = document.getElementById("Stage_T4");

	if (RVT_Prz !== "Absent") {
		T1a_Btn.disabled = true;
		T1b_Btn.disabled = true;
		T2_Btn.disabled = true;
		if (T4_Btn.checked == false) T3_Btn.checked = true;
	} else if (MaxSize > 7) {
		T1a_Btn.disabled = true;
		T1b_Btn.disabled = true;
		T2_Btn.disabled = false;
		if ((T4_Btn.checked == false) && (T3_Btn.checked == false)) T2_Btn.checked = true;
	} else if (MaxSize > 4) {
		T1a_Btn.disabled = true;
		T2_Btn.disabled = true;
		T1b_Btn.disabled = false;
		if ((T4_Btn.checked == false) && (T3_Btn.checked == false)) T1b_Btn.checked = true;
	} else if (MaxSize > 0) {
		T1b_Btn.disabled = true;
		T2_Btn.disabled = true;
		T1a_Btn.disabled = false;
		if ((T4_Btn.checked == false) && (T3_Btn.checked == false)) T1a_Btn.checked = true;
	} else {
		T1a_Btn.disabled = false;
		if ((T4_Btn.checked == false) && (T3_Btn.checked == false)) T1a_Btn.checked = true;
		T1b_Btn.disabled = false;
		T2_Btn.disabled = false;
	}
}

function ChoosePrior(event) {
	var key = event.key;
	var Yes_Btn = document.getElementById("Prior_Avl_Y");
	var No_Btn = document.getElementById("Prior_Avl_N");
	switch (key) {
		case "1":
		case "y":
			Yes_Btn.checked = true;
			No_Btn.checked = false;
			CheckPrior(1);
			break;
		case "2":
		case "n":
			Yes_Btn.checked = false;
			No_Btn.checked = true;
			CheckPrior(2);
			break;
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

function ChooseLat(event) {
	var key = event.key;
	var L_Btn = document.getElementById("Loc_Left");
	var R_Btn = document.getElementById("Loc_Right");

	switch (key) {
		case "1":
		case "l":
			L_Btn.checked = true;
			R_Btn.checked = false;
			break;
		case "2":
		case "r":
			L_Btn.checked = false;
			R_Btn.checked = true;
			break;
	}
}

function ChooseCC(event) {
	var key = event.key;
	var Upr_Btn = document.getElementById("Loc_CC_Upr");
	var Mid_Btn = document.getElementById("Loc_CC_Mid");
	var Lwr_Btn = document.getElementById("Loc_CC_Lwr");

	switch (key) {
		case "1":
			Upr_Btn.checked = true;
			Mid_Btn.checked = false;
			Lwr_Btn.checked = false;
			break;
		case "2":
			Upr_Btn.checked = false;
			Mid_Btn.checked = true;
			Lwr_Btn.checked = false;
			break;
		case "3":
			Upr_Btn.checked = false;
			Mid_Btn.checked = false;
			Lwr_Btn.checked = true;
			break;
	}
}

function ChooseLL(event) {
	var key = event.key;
	var Med_Btn = document.getElementById("Loc_LL_Med");
	var Mid_Btn = document.getElementById("Loc_LL_Mid");
	var Lat_Btn = document.getElementById("Loc_LL_Lat");

	switch (key) {
		case "1":
			Med_Btn.checked = true;
			Mid_Btn.checked = false;
			Lat_Btn.checked = false;
			break;
		case "2":
			Med_Btn.checked = false;
			Mid_Btn.checked = true;
			Lat_Btn.checked = false;
			break;
		case "3":
			Med_Btn.checked = false;
			Mid_Btn.checked = false;
			Lat_Btn.checked = true;
			break;
	}
}

function ChooseAP(event) {
	var key = event.key;
	var Ant_Btn = document.getElementById("Loc_AP_Ant");
	var Mid_Btn = document.getElementById("Loc_AP_Mid");
	var Pos_Btn = document.getElementById("Loc_AP_Pos");

	switch (key) {
		case "1":
			Ant_Btn.checked = true;
			Mid_Btn.checked = false;
			Pos_Btn.checked = false;
			break;
		case "2":
			Ant_Btn.checked = false;
			Mid_Btn.checked = true;
			Pos_Btn.checked = false;
			break;
		case "3":
			Ant_Btn.checked = false;
			Mid_Btn.checked = false;
			Pos_Btn.checked = true;
			break;
	}
}

function ChooseDepth(event) {
	var key = event.key;
	var Par_Btn = document.getElementById("Depth_Par");
	var Int_Btn = document.getElementById("Depth_Int");
	var Hil_Btn = document.getElementById("Depth_Hil");

	switch (key) {
		case "1":
			Par_Btn.checked = true;
			Int_Btn.checked = false;
			Hil_Btn.checked = false;
			break;
		case "2":
			Par_Btn.checked = false;
			Int_Btn.checked = true;
			Hil_Btn.checked = false;
			break;
		case "3":
			Par_Btn.checked = false;
			Int_Btn.checked = false;
			Hil_Btn.checked = true;
			break;
	}
	CheckStage();
}

function ChooseT2Int(event) {
	var key = event.key;
	var Hyper_Btn = document.getElementById("T2_Hyper");
	var Iso_Btn = document.getElementById("T2_Iso");
	var Hypo_Btn = document.getElementById("T2_Hypo");

	switch (key) {
		case "1":
			Hyper_Btn.checked = true;
			Iso_Btn.checked = false;
			Hypo_Btn.checked = false;
			break;
		case "2":
			Hyper_Btn.checked = false;
			Iso_Btn.checked = true;
			Hypo_Btn.checked = false;
			break;
		case "3":
			Hyper_Btn.checked = false;
			Iso_Btn.checked = false;
			Hypo_Btn.checked = true;
			break;
	}
}

function ChooseT2Ptr(event) {
	var key = event.key;
	var Homo_Btn = document.getElementById("T2_Homo");
	var SlHet_Btn = document.getElementById("T2_SlHet");
	var Het_Btn = document.getElementById("T2_Het");

	switch (key) {
		case "1":
			Homo_Btn.checked = true;
			SlHet_Btn.checked = false;
			Het_Btn.checked = false;
			break;
		case "2":
			Homo_Btn.checked = false;
			SlHet_Btn.checked = true;
			Het_Btn.checked = false;
			break;
		case "3":
			Homo_Btn.checked = false;
			SlHet_Btn.checked = false;
			Het_Btn.checked = true;
			break;
	}
}

function ChooseCME(event) {
	var key = event.key;
	var Int_Btn = document.getElementById("CME_Int");
	var Mod_Btn = document.getElementById("CME_Mod");
	var Mld_Btn = document.getElementById("CME_Mld");

	switch (key) {
		case "1":
			Int_Btn.checked = true;
			Mod_Btn.checked = false;
			Mld_Btn.checked = false;
			break;
		case "2":
			Int_Btn.checked = false;
			Mod_Btn.checked = true;
			Mld_Btn.checked = false;
			break;
		case "3":
			Int_Btn.checked = false;
			Mod_Btn.checked = false;
			Mld_Btn.checked = true;
			break;
		case "4":
		case "h":
			Int_Btn.checked = false;
			Mod_Btn.checked = false;
			Mld_Btn.checked = false;
			CM_OpenCalc();
	}
}

function ChooseCMPtr(event) {
	var key = event.key;
	var Homo_Btn = document.getElementById("CM_Homo");
	var SlHet_Btn = document.getElementById("CM_SlHet");
	var Het_Btn = document.getElementById("CM_Het");

	switch (key) {
		case "1":
			Homo_Btn.checked = true;
			SlHet_Btn.checked = false;
			Het_Btn.checked = false;
			break;
		case "2":
			Homo_Btn.checked = false;
			SlHet_Btn.checked = true;
			Het_Btn.checked = false;
			break;
		case "3":
			Homo_Btn.checked = false;
			SlHet_Btn.checked = false;
			Het_Btn.checked = true;
			break;
	}
}


function ChooseT1CS(event) {
	var key = event.key;
	var Macro_Btn = document.getElementById("T1_Macro");
	var Micro_Btn = document.getElementById("T1_Micro");
	var NoFat_Btn = document.getElementById("T1_NoFat");

	switch (key) {
		case "1":
			Macro_Btn.checked = true;
			Micro_Btn.checked = false;
			NoFat_Btn.checked = false;
			T1CS();
			break;
		case "2":
			Macro_Btn.checked = false;
			Micro_Btn.checked = true;
			NoFat_Btn.checked = false;
			break;
		case "3":
			Macro_Btn.checked = false;
			Micro_Btn.checked = false;
			NoFat_Btn.checked = true;
			break;
		case "4":
		case "h":
			Macro_Btn.checked = false;
			Micro_Btn.checked = false;
			NoFat_Btn.checked = false;
			T1_OpenCalc();
	}
}

function ChooseDWI(event) {
	var key = event.key;
	var Hyper_Btn = document.getElementById("DWI_Hyper");
	var Iso_Btn = document.getElementById("DWI_Iso");
	var Hypo_Btn = document.getElementById("DWI_Hypo");

	switch (key) {
		case "1":
			Hyper_Btn.checked = true;
			Iso_Btn.checked = false;
			Hypo_Btn.checked = false;
			break;
		case "2":
			Hyper_Btn.checked = false;
			Iso_Btn.checked = true;
			Hypo_Btn.checked = false;
			break;
		case "3":
			Hyper_Btn.checked = false;
			Iso_Btn.checked = false;
			Hypo_Btn.checked = true;
			break;
	}
}

function ChooseADC(event) {
	var key = event.key;
	var Hyper_Btn = document.getElementById("ADC_Hyper");
	var Iso_Btn = document.getElementById("ADC_Iso");
	var Hypo_Btn = document.getElementById("ADC_Hypo");

	switch (key) {
		case "1":
			Hyper_Btn.checked = true;
			Iso_Btn.checked = false;
			Hypo_Btn.checked = false;
			break;
		case "2":
			Hyper_Btn.checked = false;
			Iso_Btn.checked = true;
			Hypo_Btn.checked = false;
			break;
		case "3":
			Hyper_Btn.checked = false;
			Iso_Btn.checked = false;
			Hypo_Btn.checked = true;
			break;
	}
}

function ChooseSEI(event) {
	var key = event.key;
	var Yes_Btn = document.getElementById("SEI_Y");
	var No_Btn = document.getElementById("SEI_N");
	switch (key) {
		case "1":
		case "y":
			Yes_Btn.checked = true;
			No_Btn.checked = false;
			break;
		case "2":
		case "n":
			Yes_Btn.checked = false;
			No_Btn.checked = true;
			break;
	}
}

function ChooseWash(event) {
	var key = event.key;
	var Yes_Btn = document.getElementById("Wash_Y");
	var No_Btn = document.getElementById("Wash_N");
	switch (key) {
		case "1":
		case "y":
			Yes_Btn.checked = true;
			No_Btn.checked = false;
			break;
		case "2":
		case "n":
			Yes_Btn.checked = false;
			No_Btn.checked = true;
			break;
		case "3":
		case "h":
			Yes_Btn.checked = false;
			No_Btn.checked = false;
			ADER_OpenCalc();
			break;
	}
}

function ChooseStage(event) {
	var key = event.key;
	var T1a_Btn = document.getElementById("Stage_T1a");
	var T1b_Btn = document.getElementById("Stage_T1b");
	var T2_Btn = document.getElementById("Stage_T2");
	var T3_Btn = document.getElementById("Stage_T3");
	var T4_Btn = document.getElementById("Stage_T4");

	switch (key) {
		case "1":
			if (!T1a_Btn.disabled) {
				T1a_Btn.checked = true;
				T1b_Btn.checked = false;
				T2_Btn.checked = false;
				T3_Btn.checked = false;
				T4_Btn.checked = false;
			}
			break;
		case "2":
			if (!T1b_Btn.disabled) {
				T1a_Btn.checked = false;
				T1b_Btn.checked = true;
				T2_Btn.checked = false;
				T3_Btn.checked = false;
				T4_Btn.checked = false;
			}
			break;
		case "3":
			if (!T2_Btn.disabled) {
				T1a_Btn.checked = false;
				T1b_Btn.checked = false;
				T2_Btn.checked = true;
				T3_Btn.checked = false;
				T4_Btn.checked = false;
			}
			break;
		case "4":
			if (!T3_Btn.disabled) {
				T1a_Btn.checked = false;
				T1b_Btn.checked = false;
				T2_Btn.checked = false;
				T3_Btn.checked = true;
				T4_Btn.checked = false;
			}
			break;
		case "5":
			if (!T4_Btn.disabled) {
				T1a_Btn.checked = false;
				T1b_Btn.checked = false;
				T2_Btn.checked = false;
				T3_Btn.checked = false;
				T4_Btn.checked = true;
			}
			break;
	}

}

function ChooseRVA(event) {
	var key = event.key;
	var Norm_Btn = document.getElementById("RVA_Norm");
	var Circ_Btn = document.getElementById("RVA_Circ");
	var Retr_Btn = document.getElementById("RVA_Retr");
	switch (key) {
		case "1":
		case "n":
			Norm_Btn.checked = true;
			Circ_Btn.checked = false;
			Retr_Btn.checked = false;
			break;
		case "2":
		case "c":
			Norm_Btn.checked = false;
			Circ_Btn.checked = true;
			Retr_Btn.checked = false;
			break;
		case "3":
		case "r":
			Norm_Btn.checked = false;
			Circ_Btn.checked = false;
			Retr_Btn.checked = true;
			break;
	}
}

function ChooseRVT(event) {
	var key = event.key;
	var No_Btn = document.getElementById("RVT_No");
	var Intra_Btn = document.getElementById("RVT_Intra");
	var Extra_Btn = document.getElementById("RVT_Extra");
	var IVC1_Btn = document.getElementById("RVT_IVC_1");
	var IVC2_Btn = document.getElementById("RVT_IVC_2");
	var IVC3_Btn = document.getElementById("RVT_IVC_3");
	var IVC4_Btn = document.getElementById("RVT_IVC_4");
	switch (key) {
		case "1":
		case "n":
			No_Btn.checked = true;
			Intra_Btn.checked = false;
			Extra_Btn.checked = false;
			IVC1_Btn.checked = false;
			IVC2_Btn.checked = false;
			IVC3_Btn.checked = false;
			IVC4_Btn.checked = false;
			break;
		case "2":
			No_Btn.checked = false;
			Intra_Btn.checked = true;
			Extra_Btn.checked = false;
			IVC1_Btn.checked = false;
			IVC2_Btn.checked = false;
			IVC3_Btn.checked = false;
			IVC4_Btn.checked = false;
			break;
		case "3":
			No_Btn.checked = false;
			Intra_Btn.checked = false;
			Extra_Btn.checked = true;
			IVC1_Btn.checked = false;
			IVC2_Btn.checked = false;
			IVC3_Btn.checked = false;
			IVC4_Btn.checked = false;
			break;
		case "4":
			No_Btn.checked = false;
			Intra_Btn.checked = false;
			Extra_Btn.checked = false;
			IVC1_Btn.checked = true;
			IVC2_Btn.checked = false;
			IVC3_Btn.checked = false;
			IVC4_Btn.checked = false;
			break;
		case "5":
			No_Btn.checked = false;
			Intra_Btn.checked = false;
			Extra_Btn.checked = false;
			IVC1_Btn.checked = false;
			IVC2_Btn.checked = true;
			IVC3_Btn.checked = false;
			IVC4_Btn.checked = false;
			break;
		case "6":
			No_Btn.checked = false;
			Intra_Btn.checked = false;
			Extra_Btn.checked = false;
			IVC1_Btn.checked = false;
			IVC2_Btn.checked = false;
			IVC3_Btn.checked = true;
			IVC4_Btn.checked = false;
			break;
		case "7":
			No_Btn.checked = false;
			Intra_Btn.checked = false;
			Extra_Btn.checked = false;
			IVC1_Btn.checked = false;
			IVC2_Btn.checked = false;
			IVC3_Btn.checked = false;
			IVC4_Btn.checked = true;
			break;
	}
	CheckStage();
}

function ChooseRAA(event) {
	var key = event.key;
	var Norm_Btn = document.getElementById("RA_Norm");
	var Upr_Btn = document.getElementById("RA_Ac_Upr");
	var Lwr_Btn = document.getElementById("RA_Ac_Lwr");
	var Both_Bth = document.getElementById("RA_Ac_Both")
	switch (key) {
		case "1":
		case "n":
			Norm_Btn.checked = true;
			Upr_Btn.checked = false;
			Lwr_Btn.checked = false;
			Both_Btn.checked = false;
			break;
		case "2":
		case "u":
			Norm_Btn.checked = false;
			Upr_Btn.checked = true;
			Lwr_Btn.checked = false;
			Both_Btn.checked = false;
			break;
		case "3":
		case "l":
			Norm_Btn.checked = false;
			Upr_Btn.checked = false;
			Lwr_Btn.checked = true;
			Both_Btn.checked = false;
			break;
		case "4":
		case "b":
			Norm_Btn.checked = false;
			Upr_Btn.checked = false;
			Lwr_Btn.checked = false;
			Both_Btn.checked = true;
			break;
	}
}

function T1CS() {
	alert("A renal tumor with macroscopic fat is highly likely to be a classic angiomyolipoma (AML) and the ccLS algorithm does not apply to such tumors");
}

function CM_OpenCalc() {
	var CM_CalcBtn = document.getElementById("Btn_CM_OpenCalc");
	var CMCalcDiv = document.getElementById("CalcEnhance");
	
	if (CMCalcDiv.style.display == "none") {
		SelectBtn(CM_CalcBtn);
		CMCalcDiv.style.display = "block";
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
	
	CM_Tumor_Text.innerHTML = "TBD";
	CM_Cortex_Text.innerHTML = "TBD";
	TC_Ratio_Text.innerHTML = "TBD"
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
	
	if (T1CalcDiv.style.display == "none") {
		SelectBtn(T1_CalcBtn);
		T1CalcDiv.style.display = "block";
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
	var T1Dif_Text = document.getElementById("T1_Dif");

	Inp_SI_IP.value = '';
	Inp_IP_SD.value = '';
	Inp_SI_OP.value = '';
	Inp_OP_SD.value = '';

	T1Dif_Text.innerHTML = "TBD";
}

function T1_RunCalc() {
	var SI_IP = parseFloat(document.getElementById("SI_IP").value);
	var IP_SD = parseFloat(document.getElementById("IP_SD").value);
	var SI_OP = parseFloat(document.getElementById("SI_OP").value);
	var OP_SD = parseFloat(document.getElementById("OP_SD").value);
	
	var Micro = document.getElementById("T1_Micro");
	var NoFat = document.getElementById("T1_NoFat");
	
	var T1Dif_Text = document.getElementById("T1_Dif");

	var MicFatPresent = (SI_IP-SI_OP)-(IP_SD+OP_SD);
	if (MicFatPresent>0) {
		Micro.checked = true;
		T1Dif_Text.innerHTML = "+" + MicFatPresent.toFixed(1);
	} else {
		NoFat.checked = true;
		T1Dif_Text.innerHTML = MicFatPresent.toFixed(1);
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
	var ADERCalcDiv = document.getElementById("CalcADER");
	
	if (ADERCalcDiv.style.display == "none") {
		SelectBtn(ADER_CalcBtn);
		ADERCalcDiv.style.display = "block";
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
	ADER_Text.innerHTML = "TBD";
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
	var ADC_Sig = document.querySelector('input[name=ADC]:checked')?.value;
	
	document.getElementById('DWI_Sig').innerHTML = DWI_Sig;
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
	document.getElementById("Btn_CopyFind").focus();
	document.getElementById("Findings").scrollIntoView({block: 'center'});
}
function set_ccLS(val, fpAML, Onco, Imp) {
	document.getElementById('ccLS_Val').innerHTML = val;
	document.getElementById('Is_fpAML').innerHTML = fpAML;
	document.getElementById('Is_Onco').innerHTML = Onco;
	document.getElementById('ccLS_Imp').innerHTML = Imp;
}

function Run_ccLS() {
	var T2_SI = document.querySelector('input[name=T2_Int]:checked')?.value;
	var CMEnh = document.querySelector('input[name=CME]:checked')?.value;
	var T1_Fat = document.querySelector('input[name=T1fat]:checked')?.value;
	var SEI_Prz = document.querySelector('input[name=SEI]:checked')?.value;
	var Washout = document.querySelector('input[name=Wash]:checked')?.value;
	var DWI_Sig = document.querySelector('input[name=DWI]:checked')?.value;
	var ADC_Sig = document.querySelector('input[name=ADC]:checked')?.value;

	if (T1_Fat == "Macroscopic Fat") {
		set_ccLS(val='N/A', fpAML='No', Onco='No', Imp=ccLS_cAML);
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
					set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
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
							set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
							break;
						case "No Fat":
							if (DWI_Sig && ADC_Sig) {
								if ((DWI_Sig == "Hyperintense") && (ADC_Sig == "Hypointense")) {
									set_ccLS(val='1', fpAML='No', Onco='No', Imp=ccLS1);
								} else {
									set_ccLS(val='2', fpAML='No', Onco='No', Imp=ccLS2);
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
							EvalDiffusion(YesVal=2, NoVal=3);
							break;
						case "No":
							EvalDiffusion(YesVal=3, NoVal=4);
							break;
						default:
							Cannot_Calc_ccLS('Washout (ADER)');
					}
				break;
				case "Moderate":
					set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
					break;
				case "Mild":
					switch (T1_Fat) {
						case "Microscopic Fat":
							set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
							break;
						case "No Fat":
							set_ccLS(val='1', fpAML='No', Onco='No', Imp=ccLS1);
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

function EvalDiffusion(YesVal, NoVal) {
	var DWI_Sig = document.querySelector('input[name=DWI]:checked')?.value;
	var ADC_Sig = document.querySelector('input[name=ADC]:checked')?.value;
	var CME_Pat = document.querySelector('input[name=CM_Ptr]:checked')?.value;
	var T2_Pat = document.querySelector('input[name=T2_Ptr]:checked')?.value;
	console.log(YesVal + " + " + NoVal);
	if (DWI_Sig && ADC_Sig) {
		if ((DWI_Sig == "Hyperintense") && (ADC_Sig == "Hypointense")){
			setDifccLS(YesVal);
		} else {
			if (CME_Pat && T2_Pat) {
				if ((CME_Pat == "Homogeneous") && (T2_Pat == "Homogeneous")) {
					setDifccLS(YesVal);
				} else {
					setDifccLS(NoVal);
				}
			} else {
				Cannot_Calc_ccLS("Heterogeneity Characteristics");
			}
		}
	} else {
		if (CME_Pat && T2_Pat) {
			if ((CME_Pat == "Homogeneous") && (T2_Pat == "Homogeneous")) {
				setDifccLS(YesVal);
			} else {
				setDifccLS(NoVal);
			}
		} else {
			Cannot_Calc_ccLS("Heterogeneity and Diffusion Characteristics");
		}
	}
}

function setDifccLS(setVal) {
	console.log(setVal);
	switch (setVal) {
		case 2:
			set_ccLS(val='2', fpAML='Yes', Onco='No', Imp=ccLS2_fpAML);
			break;
		case 3:
			set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
			break;
		case 4:
			set_ccLS(val='4', fpAML='No', Onco='No', Imp=ccLS4);
			break;
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
			set_ccLS(val='5', fpAML='No', Onco='No', Imp=ccLS5);
			break;
		case "No Fat":
			switch (SEI_Prz) {
				case "Yes":
					set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
					break;
				case "No":
					set_ccLS(val='4', fpAML='No', Onco='No', Imp=ccLS4);
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
	switch (T1_Fat) {
		case "Microscopic Fat":
			set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
			break;
		case "No Fat":
			ccLS_T2HypIso_Mod_NF();
			break;
		default:
			Cannot_Calc_ccLS("T1 Chemical Shift");
	}
}

function ccLS_T2HypIso_Mod_NF() {
	var SEI_Prz = document.querySelector('input[name=SEI]:checked')?.value;
	switch (SEI_Prz) {
		case "Yes":
			set_ccLS(val='2', fpAML='No', Onco='Yes', Imp=ccLS2_Onco);
			break;
		case "No":
			set_ccLS(val='3', fpAML='No', Onco='No', Imp=ccLS3);
			break;
		default:
			Cannot_Calc_ccLS("Segmental Enhancement Inversion");
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
	var to_Copy = document.getElementById(div);
	r.selectNode(to_Copy);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	to_Copy.classList.toggle('anim');
	setTimeout(() => {  to_Copy.classList.toggle('anim'); }, 500);

}

function UnselectBtn(btn) {
	btn.style.backgroundColor = "#D3D3D3";
	btn.style.color = "#000000";
}

function SelectBtn(btn) {
	btn.style.backgroundColor = "#4CAF50";
	btn.style.color = "#FFFFFF";
}
