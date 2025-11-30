# ITabPrintScale.PageWidth

ITabPrintScale.PageWidth
-


# ITabPrintScale.PageWidth


## Синтаксис


PageWidth: Integer;


## Описание


Свойство PageWidth определяет
 количество страниц, ограничивающих размер таблицы при печати, по ширине.


Актуально, если свойству [FitToPages](ITabPrintScale.FitToPages.htm)
 установлено значение True.


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
