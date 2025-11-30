# ITabPrintScale.Value

ITabPrintScale.Value
-


# ITabPrintScale.Value


## Синтаксис


Value: Double;


## Описание


Свойство Value определяет процентное
 соотношение, используемое для подгонки масштаба при печати таблицы.


Актуально, если свойству [FitToPages](ITabPrintScale.FitToPages.htm)
 установлено значение False.


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

	    PrScale.FitToPages := False;

	    PrScale.Value := 0.5;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для активного листа регламентного отчета будет
 изменены параметры страницы. При печати, масштаб будет уменьшаться в два
 раза по отношению к натуральной величине таблицы.


См. также:


[ITabPrintScale](ITabPrintScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
