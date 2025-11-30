# ITabSheetExporter.AutoHeight

ITabSheetExporter.AutoHeight
-


# ITabSheetExporter.AutoHeight


## Синтаксис


AutoHeight: Boolean;


## Описание


Свойство AutoHeight определяет,
 будет ли при экспорте в форматы HTML (*.html) и RTF (*.rtf) использоваться
 автоподгон высоты строк.


## Комментарии


Допустимые значения:


	- True. При экспорте высота
	 строк устанавливается автоматически, в зависимости от содержания ячеек
	 строки;


	- False. Значение по умолчанию.
	 Высота строк не меняется.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGL_EXPORT».


Добавьте ссылки на системные сборки «Metabase», «Report», «Tab».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Tab: ITabSheet;

	    Exp: ITabSheetExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REGL_EXPORT").Edit As IPrxReport;

	    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

	    Exp := New TabSheetExporter.Create;

	    Exp.TabSheet := Tab;

	    Exp.AutoHeight := True;

	    Exp.BreakIntoLayouts := True;

	    // Экспорт в формате RTF

	    Exp.ExportToFile("C:\Export.rtf", "RTF");

	End Sub UserProc;


После выполнения примера будет выполнен экспорт отчета в формате RTF.
 В результирующем файле высота строк установлена автоматически в зависимости
 от содержания. При экспорте лист будет разбит на
 печатные страницы.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
