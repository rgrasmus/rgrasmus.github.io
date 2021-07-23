var MacroFat = 0;
var SolidMass = 0;
var T2Int = 0;
var CMEnh = 0;
var SEI = 0;
var DWI = 0;

var ADER_Pre_SI = 0;
var ADER_CM_SI = 0;
var ADER_NG_SI = 0;
var ADER_val = 0;
var ADER_state = 0;

var SI_T_Pre = 0;
var SI_C_Pre = 0;
var SI_T_Art = 0;
var SI_C_Art = 0;
var CM_Tumor = 0;
var CM_Cortex = 0;
var TC_Ratio = 0;

var MicFatval = 0;
var SI_IP = 0;
var SI_OP = 0;
var IP_SD = 0;
var OP_SD = 0;
var MicFatPresent = 0;

var UpgMicFatval = 0;
var Upg_SI_IP = 0;
var Upg_IP_SD = 0;
var Upg_SI_OP = 0;
var Upg_OP_SD = 0;
var UpgMicFatPresent = 0;

var ccLS5 = "5<br>Very Likely clear cell renal cell carcinoma";
var ccLS4 = "4<br>Likely clear cell renal cell carcinoma";
var ccLS3 = "3<br>Intermediate likelihood clear cell renal cell carcinoma";
var ccLS2 = "2<br>Unlikely clear cell renal cell carcinoma";
var ccLS1 = "1<br>Very Unikely clear cell renal cell carcinoma";

function ReferenceFn() {
	var Refs = document.getElementById("ccLS_Refs");
	if (Refs.classList.contains("h-hide")) {
		Refs.classList.remove("h-hide");
	} else {
		Refs.classList.add("h-hide");
	}
}

function MacFat(NewVal) {
	var NoccLSDiv = document.getElementById("NoccLS");
	var cAMLDiv = document.getElementById("cAML");
	var SolidDiv = document.getElementById("SolidCystic");
	var YesMFBtn = document.getElementById("Btn_YesMFat");
	var NoMFBtn = document.getElementById("Btn_NoMFat");
	
	if (MacroFat==NewVal) {
		ResetMacFat(0);
	} else {
		ResetMacFat(NewVal);
		switch(NewVal) {
			case 1:
				SelectBtn(YesMFBtn)
				NoccLSDiv.style.display = "block";
				cAMLDiv.style.display = "block";
				cAMLDiv.scrollIntoView();
				break;
			case 2:
				SelectBtn(NoMFBtn)
				SolidDiv.style.display = "block";
				SolidDiv.scrollIntoView();
	
				break;
		}
	}
}

function ResetMacFat(NewVal) {
	var NoccLSDiv = document.getElementById("NoccLS");
	var cAMLDiv = document.getElementById("cAML");
	var SolidDiv = document.getElementById("SolidCystic");
	var YesMFBtn = document.getElementById("Btn_YesMFat");
	var NoMFBtn = document.getElementById("Btn_NoMFat");
	
	UnselectBtn(YesMFBtn)
	UnselectBtn(NoMFBtn)
	NoccLSDiv.style.display = "none";
	cAMLDiv.style.display = "none";
	SolidDiv.style.display = "none";
	
	MacroFat = NewVal;
	
	ResetSolid(0);
}

function Solid(NewVal) {
	var NoccLSDiv = document.getElementById("NoccLS");
	var BosniakDiv = document.getElementById("Bosniak");
	var YesSolidBtn = document.getElementById("Btn_YesSolid");
	var NotSolidBtn = document.getElementById("Btn_NotSolid");
	var T2SIDiv = document.getElementById("T2SI");
	
	if (SolidMass==NewVal) {
		ResetSolid(0);
	} else {
		ResetSolid(NewVal);
		switch(NewVal) {
			case 1:
				SelectBtn(YesSolidBtn)
				T2SIDiv.style.display = "block";
				T2SIDiv.scrollIntoView();
				
				break;
			case 2:
				SelectBtn(NotSolidBtn)
				NoccLSDiv.style.display = "block";
				BosniakDiv.style.display = "block";
				BosniakDiv.scrollIntoView();
				break;
		}
	}
}

function ResetSolid(NewVal) {
	var NoccLSDiv = document.getElementById("NoccLS");
	var BosniakDiv = document.getElementById("Bosniak");
	var YesSolidBtn = document.getElementById("Btn_YesSolid");
	var NotSolidBtn = document.getElementById("Btn_NotSolid");
	var T2SIDiv = document.getElementById("T2SI");
	
	UnselectBtn(YesSolidBtn)
	UnselectBtn(NotSolidBtn)
	NoccLSDiv.style.display = "none";
	BosniakDiv.style.display = "none";
	T2SIDiv.style.display = "none";
	
	SolidMass = NewVal;
	
	ResetT2Int(0);
}

function T2IntFn(NewVal) {
	var CMDiv = document.getElementById("CMEnhance");
	var HyperT2Btn = document.getElementById("Btn_HyperT2");
	var HypoT2Btn = document.getElementById("Btn_HypoT2");
	var IsoT2Btn = document.getElementById("Btn_IsoT2");
	
	if (T2Int==NewVal) {
		ResetT2Int(0);
	} else {
		ResetT2Int(NewVal);
		CMDiv.style.display = "block";
		CMDiv.scrollIntoView();
		switch(NewVal) {
			case 1:
				SelectBtn(HyperT2Btn);
				break;
			case 2:
				SelectBtn(IsoT2Btn);
				break;
			case 3:
				SelectBtn(HypoT2Btn);
				break;
		}
	}
}

function ResetT2Int(NewVal) {
	var CMDiv = document.getElementById("CMEnhance");
	var HyperT2Btn = document.getElementById("Btn_HyperT2");
	var HypoT2Btn = document.getElementById("Btn_HypoT2");
	var IsoT2Btn = document.getElementById("Btn_IsoT2");
	
	UnselectBtn(HyperT2Btn)
	UnselectBtn(HypoT2Btn)
	UnselectBtn(IsoT2Btn)
	CMDiv.style.display = "none";
	
	T2Int = NewVal;
	
	ResetCM_Enh(0);
}

function CM_EnhFn(NewVal) {
	if (CMEnh == NewVal) {
		ResetCM_Enh(0);
	} else if (NewVal == 4){
		ResetCM_Enh(0);
		Switch_CM_Enh(NewVal);
	} else {
		ResetCM_Enh(NewVal);
		Switch_CM_Enh(NewVal)
	}
}

function Switch_CM_Enh(NewVal) {
	var MicFatDiv = document.getElementById("MicroFat");
	var ADER_Div = document.getElementById("ADER");
	var SEI_Div = document.getElementById("SEI");
	var DWI_Div = document.getElementById("DWI");
	var UpgrMicFatDiv = document.getElementById("UpgradeMicroFat");
	var ccLS_Div = document.getElementById("Final_ccLS");
	var MildCMBtn = document.getElementById("Btn_MildCM");
	var ModCMBtn = document.getElementById("Btn_ModCM");
	var IntCMBtn = document.getElementById("Btn_IntCM");
	var ccLS_Text = document.getElementById("ccLS_Num");
	var CM_CalcBtn = document.getElementById("Btn_HelpCM");
	var Inp_SI_Tumor_Pre = document.getElementById("SI_Tumor_Pre");
	var CMCalcDiv = document.getElementById("CalcEnhance");

	
	switch(NewVal) {
		case 1:
			SelectBtn(IntCMBtn);
			switch(T2Int) {
				case 1:
					MicFatDiv.style.display = "block";
					MicFatDiv.scrollIntoView();
					break;
				case 2:
					MicFatDiv.style.display = "block";
					MicFatDiv.scrollIntoView();
					break;
				case 3:
					ADER_Div.style.display = "block";
					ADER_Div.scrollIntoView();
					break;
			}
			break;
		case 2:
			SelectBtn(ModCMBtn);
			switch(T2Int) {
				case 1:
					SEI_Div.style.display = "block";
					SEI_Div.scrollIntoView();
					break;
				case 2:
					SEI_Div.style.display = "block";
					SEI_Div.scrollIntoView();
					break;
				case 3:
					ccLS_Text.innerHTML=ccLS3;
					ccLS_Div.style.display = "block";
					ccLS_Div.scrollIntoView();
					break;
			}
			break;
		case 3:
			SelectBtn(MildCMBtn);
			switch(T2Int) {
				case 1:
					ccLS_Text.innerHTML=ccLS3;
					ccLS_Div.style.display = "block";
					ccLS_Div.scrollIntoView();
					break;	
				case 2:
					DWI_Div.style.display = "block";
					DWI_Div.scrollIntoView();
					break;
				case 3:
					UpgrMicFatDiv.style.display = "block";
					UpgrMicFatDiv.scrollIntoView();
					break;						
			}
			break;
		case 4:
			SelectBtn(CM_CalcBtn);
			CM_CalcBtn.disabled = true;
			CMCalcDiv.style.display = "block";
			CMCalcDiv.scrollIntoView();
			Inp_SI_Tumor_Pre.focus();
			break;
	}
}

function ResetCM_Enh(NewVal) {
	var MicFatDiv = document.getElementById("MicroFat");
	var ADER_Div = document.getElementById("ADER");
	var SEI_Div = document.getElementById("SEI");
	var DWI_Div = document.getElementById("DWI");
	var UpgrMicFatDiv = document.getElementById("UpgradeMicroFat");
	var ccLS_Div = document.getElementById("Final_ccLS");
	var MildCMBtn = document.getElementById("Btn_MildCM");
	var ModCMBtn = document.getElementById("Btn_ModCM");
	var IntCMBtn = document.getElementById("Btn_IntCM");
	var CM_CalcBtn = document.getElementById("Btn_HelpCM");
	var CM_RunCalcBtn = document.getElementById("Btn_CalcEnh")
	var CMCalcDiv = document.getElementById("CalcEnhance");
	var Calc_CMEnhDiv = document.getElementById("Calc_CMEnh");

	var ccLS_Text = document.getElementById("ccLS_Num");
	var CM_Tumor_Text = document.getElementById("CM_Tumor");
	var CM_Cortex_Text = document.getElementById("CM_Cortex");
	var TC_Ratio_Text = document.getElementById("TC_Ratio");
	
	var Inp_SI_T_Pre = document.getElementById("SI_Tumor_Pre");
	var Inp_SI_T_Art = document.getElementById("SI_Tumor_CM");
	var Inp_SI_C_Pre = document.getElementById("SI_Cortex_Pre");
	var Inp_SI_C_Art = document.getElementById("SI_Cortex_CM");
	
	UnselectBtn(IntCMBtn);
	UnselectBtn(ModCMBtn);
	UnselectBtn(MildCMBtn);
	UnselectBtn(CM_CalcBtn);
	
	CM_CalcBtn.disabled = false;
	CM_RunCalcBtn.disabled = false;
	
	MicFatDiv.style.display = "none";
	ADER_Div.style.display = "none";
	ccLS_Div.style.display = "none";
	SEI_Div.style.display = "none";
	DWI_Div.style.display = "none";
	UpgrMicFatDiv.style.display = "none";
	CMCalcDiv.style.display = "none";
	Calc_CMEnhDiv.style.display = "none";
	
	ccLS_Text.innerHTML="NA";
	CM_Tumor_Text.innerHTML="NA";
	CM_Cortex_Text.innerHTML="NA";
	TC_Ratio_Text.innerHTML="NA";
	
	Inp_SI_T_Pre.value = "";
	Inp_SI_T_Art.value = "";
	Inp_SI_C_Pre.value = "";
	Inp_SI_C_Art.value = "";
	
	CMEnh = NewVal;
	
	ResetMicFat(0);
	ResetSEI(0);
	ResetADER(0);
	ResetDWI(0);
	ResetUpgMicFat(0);
}

function CM_RunCalc() {
	SI_T_Pre = parseFloat(document.getElementById("SI_Tumor_Pre").value);
	SI_T_Art = parseFloat(document.getElementById("SI_Tumor_CM").value);
	SI_C_Pre = parseFloat(document.getElementById("SI_Cortex_Pre").value);
	SI_C_Art = parseFloat(document.getElementById("SI_Cortex_CM").value);
	var CM_CalcBtn = document.getElementById("Btn_HelpCM");
	var CM_RunCalcBtn = document.getElementById("Btn_CalcEnh");
	
	var Calc_CMEnhDiv = document.getElementById("Calc_CMEnh");
	
	var CM_Tumor_Text = document.getElementById("CM_Tumor");
	var CM_Cortex_Text = document.getElementById("CM_Cortex");
	var TC_Ratio_Text = document.getElementById("TC_Ratio");
	
	CM_Cortex = (SI_C_Art-SI_C_Pre)/SI_C_Pre
	CM_Tumor = (SI_T_Art-SI_T_Pre)/SI_T_Pre;
	TC_Ratio = CM_Tumor/CM_Cortex;
	
	CM_Cortex_Text.innerHTML = (CM_Cortex*100).toFixed(1);
	CM_Tumor_Text.innerHTML = (CM_Tumor*100).toFixed(1);
	TC_Ratio_Text.innerHTML = (TC_Ratio*100).toFixed(1);
	
	Calc_CMEnhDiv.style.display="block";
	
	if (TC_Ratio<0.4) {
		CMEnh = 3;
	} else if (TC_Ratio<0.75) {
		CMEnh = 2;
	} else {
		CMEnh = 1;
	}
	UnselectBtn(CM_CalcBtn);
	
	CM_CalcBtn.disabled = false;
	CM_RunCalcBtn.disabled = true;
	
	Switch_CM_Enh(CMEnh);
}

function CM_CalcEnh_Reset() {
	ResetCM_Enh(0);
	Switch_CM_Enh(4);
}

function MicFat(NewVal) {
	if (MicFatval == NewVal) {
		ResetMicFat(0);
	} else if (NewVal == 3){
		ResetMicFat(0);
		Switch_MicFat(NewVal);
	} else {
		ResetMicFat(NewVal);
		Switch_MicFat(NewVal)
	}
}

function Switch_MicFat(NewVal) {
	var Btn_Y_MicFat = document.getElementById("Btn_Y_MicFat");
	var Btn_N_MicFat = document.getElementById("Btn_N_MicFat");
	var MicFat_CalcBtn = document.getElementById("Btn_HelpMicFat");
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
	var SEI_Div = document.getElementById("SEI");
	var Inp_SI_IP = document.getElementById("SI_IP");
	var MicFatCalcDiv = document.getElementById("CalcMicFat");	

	switch(NewVal) {
		case 1:
			SelectBtn(Btn_Y_MicFat);
			ccLS_Text.innerHTML=ccLS5;
			ccLS_Div.style.display = "block";
			ccLS_Div.scrollIntoView();
			break;
		case 2:
			SelectBtn(Btn_N_MicFat);
			SEI_Div.style.display = "block";
			SEI_Div.scrollIntoView();
			break;
		case 3:
			SelectBtn(MicFat_CalcBtn);
			MicFat_CalcBtn.disabled = true;
			MicFatCalcDiv.style.display = "block";
			MicFatCalcDiv.scrollIntoView();
			Inp_SI_IP.focus();
			break;
	}
}

function ResetMicFat(NewVal) {
	var SEI_Div = document.getElementById("SEI");
	var ccLS_Div = document.getElementById("Final_ccLS");
	var Btn_Y_MicFat = document.getElementById("Btn_Y_MicFat");
	var Btn_N_MicFat = document.getElementById("Btn_N_MicFat");
	var MicFat_CalcBtn = document.getElementById("Btn_HelpMicFat");
	var MicFat_RunCalcBtn = document.getElementById("Btn_CalcMicFat")
	var MicFatCalcDiv = document.getElementById("CalcMicFat");

	var ccLS_Text = document.getElementById("ccLS_Num");
	
	var Inp_SI_IP = document.getElementById("SI_IP");
	var Inp_IP_SD = document.getElementById("IP_SD");
	var Inp_SI_OP = document.getElementById("SI_OP");
	var Inp_OP_SD = document.getElementById("OP_SD");
	
	UnselectBtn(Btn_Y_MicFat);
	UnselectBtn(Btn_N_MicFat);
	UnselectBtn(MicFat_CalcBtn);
	
	MicFat_CalcBtn.disabled = false;
	MicFat_RunCalcBtn.disabled = false;

	ccLS_Div.style.display = "none";
	SEI_Div.style.display = "none";
	MicFatCalcDiv.style.display = "none";
	
	ccLS_Text.innerHTML="NA";

	Inp_SI_IP.value = "";
	Inp_IP_SD.value = "";
	Inp_SI_OP.value = "";
	Inp_OP_SD.value = "";
	
	MicFatval = NewVal;
	
	ResetSEI(0);
}

function MicFat_RunCalc() {
	SI_IP = parseFloat(document.getElementById("SI_IP").value);
	IP_SD = parseFloat(document.getElementById("IP_SD").value);
	SI_OP = parseFloat(document.getElementById("SI_OP").value);
	OP_SD = parseFloat(document.getElementById("OP_SD").value);
	var MicFat_CalcBtn = document.getElementById("Btn_HelpMicFat");
	var MicFat_RunCalcBtn = document.getElementById("Btn_CalcMicFat")
	
	MicFatPresent = (SI_IP-SI_OP)-(IP_SD+OP_SD);
	if (MicFatPresent>0) {
		MicFatval = 1;
	} else {
		MicFatval = 2;
	}
	UnselectBtn(MicFat_CalcBtn);
	
	MicFat_CalcBtn.disabled = false;
	MicFat_RunCalcBtn.disabled = true;
	
	Switch_MicFat(MicFatval);
}

function CalcMicFat_Reset() {
	ResetMicFat(0);
	Switch_MicFat(3);
}

function SEI_Fn(NewVal) {	
	var Y_SEI_Btn = document.getElementById("Y_SEI_Btn");
	var N_SEI_Btn = document.getElementById("N_SEI_Btn");
	var UpgrMicFatDiv = document.getElementById("UpgradeMicroFat")
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
		
	if (SEI == NewVal) {
		ResetSEI(0);
	} else {
		ResetSEI(NewVal);
		switch(NewVal) {
			case 1:
			SelectBtn(Y_SEI_Btn);
				switch(CMEnh) {
					case 1:
						ccLS_Text.innerHTML=ccLS3;
						ccLS_Div.style.display = "block";
						ccLS_Div.scrollIntoView();
						break;
					case 2:
						UpgrMicFatDiv.style.display = "block";
						UpgrMicFatDiv.scrollIntoView();
						break;
				}
				break;
			case 2:
			SelectBtn(N_SEI_Btn);
				switch(CMEnh) {
					case 1:
						ccLS_Text.innerHTML=ccLS4;
						break;
					case 2:
						ccLS_Text.innerHTML=ccLS3;
						break;
				}
				ccLS_Div.style.display = "block";
				ccLS_Div.scrollIntoView();
				break;
		}
		
	}
}

function ResetSEI(NewVal) {
	var Y_SEI_Btn = document.getElementById("Y_SEI_Btn");
	var N_SEI_Btn = document.getElementById("N_SEI_Btn");
	var UpgrMicFatDiv = document.getElementById("UpgradeMicroFat")
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
	
	ccLS_Div.style.display = "none";
	
	UnselectBtn(Y_SEI_Btn)
	UnselectBtn(N_SEI_Btn)
	UpgrMicFatDiv.style.display = "none";
	ccLS_Div.style.display = "none";
	
	ccLS_Text.innerHTML="NA";
	
	SEI = NewVal;
	
	ResetUpgMicFat(0);
}

function UpgMicFat(NewVal) {
	if (UpgMicFatval == NewVal) {
		ResetUpgMicFat(0);
	} else if (NewVal == 3){
		ResetUpgMicFat(0);
		Switch_UpgMicFat(NewVal);
	} else {
		ResetUpgMicFat(NewVal);
		Switch_UpgMicFat(NewVal)
	}
}

function Switch_UpgMicFat(NewVal) {
	var Btn_Y_UpgMicFat = document.getElementById("Btn_Y_UpgMicFat");
	var Btn_N_UpgMicFat = document.getElementById("Btn_N_UpgMicFat");
	var UpgMicFat_CalcBtn = document.getElementById("Btn_HelpUpgMicFat");
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
	var Inp_Upg_SI_IP = document.getElementById("Upg_SI_IP");
	var UpgMicFatCalcDiv = document.getElementById("CalcUpgMicFat");
	
	switch(NewVal) {
		case 1:
			SelectBtn(Btn_Y_UpgMicFat);
			ccLS_Text.innerHTML=ccLS3;
			ccLS_Div.style.display = "block";
			ccLS_Div.scrollIntoView();
			break;
		case 2:
			SelectBtn(Btn_N_UpgMicFat);
			switch(T2Int) {
				case 1:
					if (SEI == 1) {
						ccLS_Text.innerHTML=ccLS2;
					} else {
						ccLS_Text.innerHTML=ccLS3;
					}
					break;
				case 2:
					if (CMEnh == 2) {
						if (SEI == 1) {
							ccLS_Text.innerHTML=ccLS2;
						} else {
							ccLS_Text.innerHTML=ccLS3;
						}
					} else {
						if (DWI == 1) {
							ccLS_Text.innerHTML=ccLS1;
						} else {
							ccLS_Text.innerHTML=ccLS2;
						}
					}
					break;
				case 3:
					ccLS_Text.innerHTML=ccLS1;
					break;
			}
			ccLS_Div.style.display = "block";
			ccLS_Div.scrollIntoView();
			break;
		case 3:
			SelectBtn(UpgMicFat_CalcBtn);
			UpgMicFat_CalcBtn.disabled = true;
			UpgMicFatCalcDiv.style.display = "block";
			UpgMicFatCalcDiv.scrollIntoView();
			Inp_Upg_SI_IP.focus();
			break;
	}
}

function ResetUpgMicFat(NewVal) {
	var Btn_Y_UpgMicFat = document.getElementById("Btn_Y_UpgMicFat");
	var Btn_N_UpgMicFat = document.getElementById("Btn_N_UpgMicFat");
	var UpgMicFat_CalcBtn = document.getElementById("Btn_HelpUpgMicFat");
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
	var UpgMicFatCalcDiv = document.getElementById("CalcUpgMicFat");
	var UpgMicFat_RunCalcBtn = document.getElementById("Btn_UpgCalcMicFat")
	
	var Inp_Upg_SI_IP = document.getElementById("Upg_SI_IP");
	var Inp_Upg_IP_SD = document.getElementById("Upg_IP_SD");
	var Inp_Upg_SI_OP = document.getElementById("Upg_SI_OP");
	var Inp_Upg_OP_SD = document.getElementById("Upg_OP_SD");
	
	UnselectBtn(Btn_Y_UpgMicFat);
	UnselectBtn(Btn_N_UpgMicFat);
	UnselectBtn(UpgMicFat_CalcBtn);
	
	UpgMicFat_CalcBtn.disabled = false;
	UpgMicFat_RunCalcBtn.disabled = false;

	ccLS_Div.style.display = "none";
	UpgMicFatCalcDiv.style.display = "none";
	
	ccLS_Text.innerHTML="NA";

	Inp_Upg_SI_IP.value = "";
	Inp_Upg_IP_SD.value = "";
	Inp_Upg_SI_OP.value = "";
	Inp_Upg_OP_SD.value = "";
	
	UpgMicFatval = NewVal;
}

function UpgMicFat_RunCalc() {
	Upg_SI_IP = parseFloat(document.getElementById("Upg_SI_IP").value);
	Upg_IP_SD = parseFloat(document.getElementById("Upg_IP_SD").value);
	Upg_SI_OP = parseFloat(document.getElementById("Upg_SI_OP").value);
	Upg_OP_SD = parseFloat(document.getElementById("Upg_OP_SD").value);
	var UpgMicFat_CalcBtn = document.getElementById("Btn_HelpUpgMicFat");
	var UpgMicFat_RunCalcBtn = document.getElementById("Btn_UpgCalcMicFat")
	
	UpgMicFatPresent = (Upg_SI_IP-Upg_SI_OP)-(Upg_IP_SD+Upg_OP_SD);
	if (UpgMicFatPresent>0) {
		UpgMicFatval = 1;
	} else {
		UpgMicFatval = 2;
	}
	UnselectBtn(UpgMicFat_CalcBtn);
	
	UpgMicFat_CalcBtn.disabled = false;
	UpgMicFat_RunCalcBtn.disabled = true;
	
	Switch_UpgMicFat(UpgMicFatval);
}

function UpgCalcMicFat_Reset() {
	ResetUpgMicFat(0);
	Switch_UpgMicFat(3);
}

function ADERFn(NewVal) {
	if (ADER_state == NewVal) {
		ResetADER(0);
	} else if (NewVal == 3){
		ResetADER(0);
		Switch_ADER(NewVal);
	} else {
		ResetADER(NewVal);
		Switch_ADER(NewVal)
	}
}

function Switch_ADER(NewVal) {
	var Btn_ADER_GT = document.getElementById("Btn_ADER_GT");
	var Btn_ADER_LT = document.getElementById("Btn_ADER_LT");
	var ADER_CalcBtn = document.getElementById("Btn_Help_ADER");
	var DWI_Div = document.getElementById("DWI");
	var Inp_ADER_Pre_SI = document.getElementById("ADER_Pre_SI");
	var ADERCalcDiv = document.getElementById("CalcADER");
	
	switch(NewVal) {
		case 1:
			SelectBtn(Btn_ADER_GT);
			DWI_Div.style.display = "block";
			DWI_Div.scrollIntoView();
			break;
		case 2:
			SelectBtn(Btn_ADER_LT);
			DWI_Div.style.display = "block";
			DWI_Div.scrollIntoView();
			break;
		case 3:
			SelectBtn(ADER_CalcBtn);
			ADER_CalcBtn.disabled = true;
			ADERCalcDiv.style.display = "block";
			ADERCalcDiv.scrollIntoView();
			Inp_ADER_Pre_SI.focus();
			break;
	}
}

function ResetADER(NewVal) {
	var Btn_ADER_GT = document.getElementById("Btn_ADER_GT");
	var Btn_ADER_LT = document.getElementById("Btn_ADER_LT");
	var ADER_CalcBtn = document.getElementById("Btn_Help_ADER");
	var DWI_Div = document.getElementById("DWI");
	var ADERCalcDiv = document.getElementById("CalcADER");
	var ADER_RunCalcBtn = document.getElementById("Btn_CalcADER");
	var ADER_Text = document.getElementById("ADER_Num");
	var Calc_ADER = document.getElementById("Calc_ADER");

	
	var Inp_ADER_Pre_SI = document.getElementById("ADER_Pre_SI");
	var Inp_ADER_CM_SI = document.getElementById("ADER_CM_SI");
	var Inp_ADER_NG_SI = document.getElementById("ADER_NG_SI");
	UnselectBtn(Btn_ADER_GT);
	UnselectBtn(Btn_ADER_LT);
	UnselectBtn(ADER_CalcBtn);
	
	ADER_CalcBtn.disabled = false;
	ADER_RunCalcBtn.disabled = false;

	DWI_Div.style.display = "none";
	ADERCalcDiv.style.display = "none";
	
	ADER_Text.innerHTML = "NA";
	Calc_ADER.style.display = "none";
	
	Inp_ADER_Pre_SI.value = "";
	Inp_ADER_CM_SI.value = "";
	Inp_ADER_NG_SI.value = "";
	
	ADER_state = NewVal;

	ResetDWI(0);
}

function ADER_RunCalc() {
	ADER_Pre_SI = parseFloat(document.getElementById("ADER_Pre_SI").value);
	ADER_CM_SI = parseFloat(document.getElementById("ADER_CM_SI").value);
	ADER_NG_SI = parseFloat(document.getElementById("ADER_NG_SI").value);
	var Calc_ADER = document.getElementById("Calc_ADER");
	var ADER_Text = document.getElementById("ADER_Num");
	var ADER_CalcBtn = document.getElementById("Btn_Help_ADER");
	var ADER_RunCalcBtn = document.getElementById("Btn_CalcADER")

	ADER_val = (ADER_CM_SI-ADER_Pre_SI)/(ADER_NG_SI-ADER_Pre_SI);
	ADER_Text.innerHTML = ADER_val.toFixed(2);
	
	Calc_ADER.style.display="block";
	
	if (ADER_val>1.5) {
		ADER_state = 1;
	} else {
		ADER_state = 2;
	}
	UnselectBtn(ADER_CalcBtn);
	
	ADER_CalcBtn.disabled = false;
	ADER_RunCalcBtn.disabled = true;
	
	Switch_ADER(ADER_state);
}

function CalcADER_Reset() {
	ResetADER(0);
	Switch_ADER(3);
}

function DWI_Fn(NewVal) {
	var Y_DWI_Btn = document.getElementById("Y_DWI_Btn");
	var N_DWI_Btn = document.getElementById("N_DWI_Btn");
	var UpgrMicFatDiv = document.getElementById("UpgradeMicroFat")
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
		
	if (DWI == NewVal) {
		ResetDWI(0);
	} else {
		ResetDWI(NewVal);
		switch(NewVal) {
			case 1:
				SelectBtn(Y_DWI_Btn);
				if (CMEnh==3) {
					UpgrMicFatDiv.style.display = "block";
					UpgrMicFatDiv.scrollIntoView();
				} else {
					if (ADER_state == 1) {
						ccLS_Text.innerHTML=ccLS2;
					} else {
						ccLS_Text.innerHTML=ccLS3;
					}
					ccLS_Div.style.display = "block";
					ccLS_Div.scrollIntoView();
				}
				break;
			case 2:
				SelectBtn(N_DWI_Btn);
				if (CMEnh==3) {
					UpgrMicFatDiv.style.display = "block";
					UpgrMicFatDiv.scrollIntoView();
				} else {
					if (ADER_state == 1) {
						ccLS_Text.innerHTML=ccLS3;
					} else {
						ccLS_Text.innerHTML=ccLS4;
					}
					ccLS_Div.style.display = "block";
					ccLS_Div.scrollIntoView();
				}
				break;
		}
		
	}
}

function ResetDWI(NewVal) {
	var Y_DWI_Btn = document.getElementById("Y_DWI_Btn");
	var N_DWI_Btn = document.getElementById("N_DWI_Btn");
	var UpgrMicFatDiv = document.getElementById("UpgradeMicroFat")
	var ccLS_Div = document.getElementById("Final_ccLS");
	var ccLS_Text = document.getElementById("ccLS_Num");
	
	ccLS_Div.style.display = "none";
	
	UnselectBtn(Y_DWI_Btn)
	UnselectBtn(N_DWI_Btn)
	UpgrMicFatDiv.style.display = "none";
	ccLS_Div.style.display = "none";
	
	ccLS_Text.innerHTML="NA";
	
	DWI = NewVal;
	
	ResetUpgMicFat(0);
}

function UnselectBtn(btn) {
	btn.style.backgroundColor = "#D3D3D3";
	btn.style.color = "#000000";
}

function SelectBtn(btn) {
	btn.style.backgroundColor = "#4CAF50";
	btn.style.color = "#FFFFFF";
}
