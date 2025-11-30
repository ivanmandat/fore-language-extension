# IPrxReportExporter.LoadSettings

IPrxReportExporter.LoadSettings
-


# IPrxReportExporter.LoadSettings


## Синтаксис


LoadSettings: (Container: Variant);


## Параметры


Container. Параметр,
 содержащий Xml элемент с настройками экспорта регламентного отчета.


## Описание


Метод LoadSettings осуществляет
 загрузку настроек экспорта из XML элемента.


## Комментарии


Xml-файл можно получить с помощью свойства [IPrxReportExporter.SaveSettings](IPrxReportExporter.SaveSettings.htm).


Названия атрибутов в xml-файле настроек совпадают с названиями соответствующих
 свойств [IPrxReportExporter](IPrxReportExporter.htm).


[![](../../Opened.gif)![](../../Closed.gif)Пример xml-файла
 с настройками экспорта](javascript:TextPopup(this))


	<ExportSettings Encoding="65001" ExportFromWeb="FALSE" CSSClassName="" ExportRange="" ExportReportTitle="FALSE" ExportSheetTitles="FALSE" ExportObjects="FALSE" ExportHiddenCells="TRUE" ExportPalette="TRUE" ExportChartsAsImages="TRUE" ExportEmptyPages="TRUE" BreakIntoLayouts="TRUE" ExportHeadlines="TRUE" AutoHeight="FALSE" SheetAccess="FALSE" ExportObjectAsBitmap="TRUE" ExportChartAsBitmap="TRUE" ExportMapAsBitmap="TRUE"  ExportHiddenSheets="FALSE" ExportCellImages="TRUE" SheetToGrid="FALSE"
	 IsPrintMode="FALSE" PreviewScale="1" />


## Пример


Для выполнения примера предполагается наличие сохраненных ранее настроек
 в файле c:\test.xml.


Добавьте ссылки на системные сборки: Report, Xml.


	Sub UserProc;

	Var

	    Exporter: IPrxReportExporter;

	    element: IXMLDOMElement;

	    xml: IXMLDOMDocument;

	Begin

	    Exporter := New PrxReportExporter.Create;

	    xml := New DOMDocument60.Create;

	    xml.load("c:\test.xml");

	    element := xml.documentElement;

	    Exporter.LoadSettings(element);

	End Sub UserProc


После выполнения примера будет произведена загрузка настроек экспорта
 регламентного отчета из файла c:\test.xml.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
