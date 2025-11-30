# IPrxReportExporter.SaveSettings

IPrxReportExporter.SaveSettings
-


# IPrxReportExporter.SaveSettings


## Синтаксис


SaveSettings: (Container: Variant);


## Параметры


Container. Параметр, содержащий
 Xml элемент с настройками экспорта регламентного отчета.


## Описание


Метод SaveSettings осуществляет
 сохранение настроек экспорта в XML элемент.


## Комментарии


Названия атрибутов в xml-файле настроек совпадают с названиями соответствующих
 свойств [IPrxReportExporter](IPrxReportExporter.htm).


[![](../../Opened.gif)![](../../Closed.gif)Пример xml-файла
 с настройками экспорта](javascript:TextPopup(this))


	<ExportSettings Encoding="65001" ExportFromWeb="FALSE" CSSClassName="" ExportRange="" ExportReportTitle="FALSE" ExportSheetTitles="FALSE" ExportObjects="FALSE" ExportHiddenCells="TRUE" ExportPalette="TRUE" ExportChartsAsImages="TRUE" ExportEmptyPages="TRUE" BreakIntoLayouts="TRUE" ExportHeadlines="TRUE" AutoHeight="FALSE" SheetAccess="FALSE" ExportObjectAsBitmap="TRUE" ExportChartAsBitmap="TRUE" ExportMapAsBitmap="TRUE"  ExportHiddenSheets="FALSE" ExportCellImages="TRUE" SheetToGrid="FALSE"
	 IsPrintMode="FALSE" PreviewScale="1" />


## Пример


Добавьте ссылки на системные сборки: Report, Xml.


	Sub UserProc;

	Var

	    Exporter: IPrxReportExporter;

	    element: IXMLDOMElement;

	    xml: IXMLDOMDocument;

	Begin

	    Exporter := New PrxReportExporter.Create;

	    Exporter.ExportObjects := False;

	    Exporter.ExportChartsAsImages := True;

	    xml := New DOMDocument60.Create;

	    element := xml.createElement("test");

	    xml.appendChild(element);

	    Exporter.SaveSettings(element);

	    xml.save("c:\test.xml");

	End Sub UserProc


После выполнения примера будет произведено сохранение настроек экспорта
 регламентного отчета в файл c:\test.xml.


См. также:


[IPrxReportExporter](IPrxReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
