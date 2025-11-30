# IPrxReportExporter

IPrxReportExporter
-


# IPrxReportExporter


Сборка: Report;


## Описание


Интерфейс IPrxReportExporter
 определяет параметры экспорта регламентного отчёта.


## Иерархия наследования


           [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


           IPrxReportExporter


## Комментарии


Экспорт регламентного отчёта возможен в следующие форматы:


	- xlsx;


	- xls;


	- pdf;


	- rtf;


	- ppxt;


	- html;


	- mht;


	- ods;


	- emf;


	- png. Для корректного экспорта регламентного отчёта в формат
	 png определите [диапазон
	 экспортируемых листов](IPrxReportExporter.ExportRange.htm).


Для работы с объектом репозитория «Регламентный
 отчёт» используйте свойства и методы интерфейса [IPrxReport](../IPrxReport/IPrxReport.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowSameSheetNames](IPrxReportExporter.AllowSameSheetNames.htm)
		 Свойство AllowSameSheetNames
		 определяет признак доступности экспорта нескольких регламентных
		 отчётов, содержащих листы с одинаковыми наименованиями, в файл
		 формата XLSX.


		 ![](../../Property_Image.gif)
		 [AutoHeight](IPrxReportExporter.AutoHeight.htm)
		 Свойство AutoHeight
		 определяет необходимость автоподгонки высоты строк при экспорте
		 в формат HTML (*.html).


		 ![](../../Property_Image.gif)
		 [BreakIntoLayouts](IPrxReportExporter.BreakIntoLayouts.htm)
		 Свойство BreakIntoLayouts
		 определяет необходимость разбивать лист на печатные страницы при
		 экспорте в формат RTF (*.rtf).


		 ![](../../Property_Image.gif)
		 [BulkSettings](IPrxReportExporter.BulkSettings.htm)
		 Свойство BulkSettings
		 возвращает параметры пакетного экспорта регламентного отчета.


		 ![](../../Property_Image.gif)
		 [EmfType](IPrxReportExporter.EmfType.htm)
		 Свойство EmfType определяет
		 тип создаваемого при экспорте метафайла.


		 ![](../../Property_Image.gif)
		 [ExportBreaksRtf](IPrxReportExporter.ExportBreaksRtf.htm)
		 Свойство ExportBreaksRtf
		 определяет, будут ли экспортироваться разрывы страниц при экспорте
		 в формат RTF.


		 ![](../../Property_Image.gif)
		 [ExportCellImages](IPrxReportExporter.ExportCellImages.htm)
		 Свойство ExportCellImages
		 определяет, будут ли экспортироваться изображения, содержащиеся
		 в ячейках таблицы.


		 ![](../../Property_Image.gif)
		 [ExportChartsAsImages](IPrxReportExporter.ExportChartsAsImages.htm)
		 Свойство ExportChartsAsImages
		 определяет необходимость экспорта диаграмм в виде изображений
		 при экспорте отчета в формат XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportComments](IPrxReportExporter.ExportComments.htm)
		 Свойство ExportComments
		 определяет, будут ли экспортироваться комментарии к ячейкам с
		 данными.


		 ![](../../Property_Image.gif)
		 [ExportEmptyPages](IPrxReportExporter.ExportEmptyPages.htm)
		 Свойство ExportEmptyPages
		 определяет необходимость экспорта пустых листов при экспорте в
		 формат RTF (*.rtf).


		 ![](../../Property_Image.gif)
		 [ExportFlowDocumentsAsImages](IPrxReportExporter.ExportFlowDocumentsAsImages.htm)
		 Свойство ExportFlowDocumentsAsImages
		 определяет возможность экспорта текстового блока в виде изображения
		 в формате XLSX(*.xlsx).


		 ![](../../Property_Image.gif)
		 [ExportFootnotes](IPrxReportExporter.ExportFootnotes.htm)
		 Свойство ExportFootnotes
		 определяет, будут ли экспортироваться сноски.


		 ![](../../Property_Image.gif)
		 [ExportFormulas](IPrxReportExporter.ExportFormulas.htm)
		 Свойство ExportFormulas
		 определяет необходимость экспорта формул, содержащихся в таблице.


		 ![](../../Property_Image.gif)
		 [ExportHeadlines](IPrxReportExporter.ExportHeadlines.htm)
		 Свойство ExportHeadlines
		 определяет необходимость экспорта колонтитулов листа при экспорте
		 отчета в формат RTF(*.rtf).


		 ![](../../Property_Image.gif)
		 [ExportHiddenCells](IPrxReportExporter.ExportHiddenCells.htm)
		 Свойство ExportHiddenCells
		 определяет необходимость экспорта скрытых строк/столбцов при экспорте
		 в форматы XLS (*.xls) и ODS (*.ods).


		 ![](../../Property_Image.gif)
		 [ExportHiddenSheets](IPrxReportExporter.ExportHiddenSheets.htm)
		 Свойство ExportHiddenSheets
		 определяет необходимость экспорта скрытых листов при экспорте
		 в формат XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportHyperlinkOpenURLAction](IPrxReportExporter.ExportHyperlinkOpenURLAction.htm)
		 Свойство ExportHyperlinkOpenURLAction
		 определяет, будут ли экспортированы гиперссылки при экспорте отчета
		 в формат PPTX (*.pptx).


		 ![](../../Property_Image.gif)
		 [ExportObjectAsBitmap](IPrxReportExporter.ExportObjectAsBitmap.htm)
		 Свойство ExportObjectAsBitmap
		 определяет необходимость экспорта объектов в растровом формате
		 при экспорте в форматы PDF (*.pdf) и XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportObjects](IPrxReportExporter.ExportObjects.htm)
		 Свойство ExportObjects
		 определяет необходимость экспорта объектов (диаграмма, карта,
		 рисунок и т.д.), расположенных на листах отчета.


		 ![](../../Property_Image.gif)
		 [ExportPalette](IPrxReportExporter.ExportPalette.htm)
		 Свойство ExportPalette
		 определяет необходимость экспорта палитры в Excel (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportRange](IPrxReportExporter.ExportRange.htm)
		 Свойство ExportRange
		 определяет диапазон экспортируемых листов.


		 ![](../../Property_Image.gif)
		 [ExportReportTitle](IPrxReportExporter.ExportReportTitle.htm)
		 Свойство ExportReportTitle
		 определяет необходимость экспорта заголовка отчета в формат PDF
		 (расширенный).


		 ![](../../Property_Image.gif)
		 [ExportSecurityLabels](IPrxReportExporter.ExportSecurityLabels.htm)
		 Свойство ExportSecurityLabels
		 определяет разрешение на экспорт штампа маркировки в формат RTF
		 (*.rtf).


		 ![](../../Property_Image.gif)
		 [ExportSheetTitles](IPrxReportExporter.ExportSheetTitles.htm)
		 Свойство ExportSheetTitles
		 определяет необходимость экспорта названий листов при экспорте
		 отчета в формат RTF (*.rtf).


		 ![](../../Property_Image.gif)
		 [Label](IPrxReportExporter.Label.htm)
		 Свойство Label возвращает
		 параметры штампа, которым маркируются документы при экспорте и
		 печати.


		 ![](../../Property_Image.gif)
		 [Report](IPrxReportExporter.Report.htm)
		 Свойство Report определяет
		 экспортируемый регламентный отчет.


		 ![](../../Property_Image.gif)
		 [Sheet](IPrxReportExporter.Sheet.htm)
		 Свойство Sheet определяет
		 экспортируемый лист регламентного отчета.


		 ![](../../Property_Image.gif)
		 [SheetAccess](IPrxReportExporter.SheetAccess.htm)
		 Свойство SheetAccess
		 определяет необходимость экспорта защиты листов и ячеек в формат
		 XLS (*.xls).


## Свойства, унаследованные от [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CSSClassName](ModDrawing.chm::/Interface/IExporter/IExporter.CSSClassName.htm)
		 Свойство CSSClassName
		 определяет префикс для элементов таблицы стилей HTML.


		 ![](../../Property_Image.gif)
		 [Encoding](ModDrawing.chm::/Interface/IExporter/IExporter.Encoding.htm)
		 Свойство Encoding устанавливает
		 кодовую страницу таблицы преобразования, в соответствии с которой
		 будет осуществляться экспорт данных.


		 ![](../../Property_Image.gif)
		 [ExportFromWeb](ModDrawing.chm::/Interface/IExporter/IExporter.ExportFromWeb.htm)
		 Свойство ExportFromWeb
		 определяет, какое действие производится с отчетом в веб-приложении
		 - экспорт или открытие в режиме предварительного просмотра.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FinishBatchCommand](IPrxReportExporter.FinishBatchCommand.htm)
		 Метод FinishBatchCommand
		 завершает пакетный экспорт данных в файл.


		 ![](../../Sub_Image.gif)
		 [IsExportToPdfAvailable](IPrxReportExporter.IsExportToPdfAvailable.htm)
		 Метод IsExportToPdfAvailable
		 осуществляет проверку возможности экспорта в формат PDF.


		 ![](../../Sub_Image.gif)
		 [LoadSettings](IPrxReportExporter.LoadSettings.htm)
		 Метод LoadSettings
		 осуществляет загрузку настроек экспорта из XML элемента.


		 ![](../../Sub_Image.gif)
		 [SaveSettings](IPrxReportExporter.SaveSettings.htm)
		 Метод SaveSettings
		 осуществляет сохранение настроек экспорта в XML элемент.


		 ![](../../Sub_Image.gif)
		 [StartBatchCommand](IPrxReportExporter.StartBatchCommand.htm)
		 Метод StartBatchCommand
		 начинает пакетный экспорт данных в файл указанного формата.


## Методы, унаследованные от [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ExportToFile](ModDrawing.chm::/Interface/IExporter/IExporter.ExportToFile.htm)
		 Метод ExportToFile
		 осуществляет экспорт данных в файл указанного формата.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
