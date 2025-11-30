# ITabPrintScale.FitToPages

ITabPrintScale.FitToPages
-


# ITabPrintScale.FitToPages


## Синтаксис


FitToPages: Boolean;


## Описание


Свойство FitToPages определяет
 будет ли масштаб таблицы при печати подгоняться таким образом, чтобы данные
 вмещались на [PageWidth](ITabPrintScale.PageWidth.htm) страниц
 в ширину и [PageHeight](ITabPrintScale.PageHeight.htm) страниц
 в высоту.


## Комментарии


Если FitToPages=False, то масштаб
 при печати устанавливается в процентном соотношении к натуральной величине.
 Для установки процентного соотношения используется свойство [Value](ITabPrintScale.Value.htm).


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    TabSettig: ITabPageSettings;

	    PrScale: ITabPrintScale;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Reg_rep").Edit;

	    Rep := MObj As IPrxReport;

	    Tab := Rep.ActiveSheet.Table;

	    TabSettig := Tab.PageSettings;

	    PrScale := TabSettig.Scale;

	    PrScale.FitToPages := True;

	    PrScale.PageHeight := 3;

	    PrScale.PageWidth := 1;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для активного листа регламентного отчета будет
 изменены параметры страницы. При печати масштаб будет подгоняться таким
 образом, чтобы данные вместились на 1 лист в ширину и 3 листа в высоту.


См. также:


[ITabPrintScale](ITabPrintScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
