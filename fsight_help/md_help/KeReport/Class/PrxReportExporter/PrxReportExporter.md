# PrxReportExporter

PrxReportExporter
-


# PrxReportExporter


Сборка: Report;


## Описание


Класс PrxReportExporter реализует
 объект, содержащий различные настройки и предоставляющий возможность экспорта
 регламентного отчета в различные форматы.


## Комментарии


Для экспорта создайте экземпляр класса PrxReportExporter
 приведите полученный экземпляр к интерфейсу [IPrxReportExporter](../../Interface/IPrxReportExporter/IPrxReportExporter.htm).
 В свойстве [IPrxReportExporter.Report](../../Interface/IPrxReportExporter/IPrxReportExporter.Report.htm) задайте экспортируемый
 отчёт. Если требуется экспортировать только один определённый лист отчёта,
 то укажите его в свойстве [IPrxReportExporter.Sheet](../../Interface/IPrxReportExporter/IPrxReportExporter.Sheet.htm).
 Используя различные свойства, задайте параметры экспорта. Вызовите метод
 [IExporter.ExportToFile](ModDrawing.chm::/Interface/IExporter/IExporter.ExportToFile.htm) для выполнения
 процесса экспорта регламентного отчёта в файл.


## Свойства, унаследованные от [IPrxReportExporter](../../Interface/IPrxReportExporter/IPrxReportExporter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowSameSheetNames](../../Interface/IPrxReportExporter/IPrxReportExporter.AllowSameSheetNames.htm)
		 Свойство AllowSameSheetNames
		 определяет признак доступности экспорта нескольких регламентных
		 отчётов, содержащих листы с одинаковыми наименованиями, в файл
		 формата XLSX.


		 ![](../../Property_Image.gif)
		 [AutoHeight](../../Interface/IPrxReportExporter/IPrxReportExporter.AutoHeight.htm)
		 Свойство AutoHeight
		 определяет необходимость автоподгонки высоты строк при экспорте
		 в формат HTML (*.html).


		 ![](../../Property_Image.gif)
		 [BreakIntoLayouts](../../Interface/IPrxReportExporter/IPrxReportExporter.BreakIntoLayouts.htm)
		 Свойство BreakIntoLayouts
		 определяет необходимость разбивать лист на печатные страницы при
		 экспорте в формат RTF (*.rtf).


		 ![](../../Property_Image.gif)
		 [BulkSettings](../../Interface/IPrxReportExporter/IPrxReportExporter.BulkSettings.htm)
		 Свойство BulkSettings
		 возвращает параметры пакетного экспорта регламентного отчета.


		 ![](../../Property_Image.gif)
		 [EmfType](../../Interface/IPrxReportExporter/IPrxReportExporter.EmfType.htm)
		 Свойство EmfType определяет
		 тип создаваемого при экспорте метафайла.


		 ![](../../Property_Image.gif)
		 [ExportBreaksRtf](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportBreaksRtf.htm)
		 Свойство ExportBreaksRtf
		 определяет, будут ли экспортироваться разрывы страниц при экспорте
		 в формат RTF.


		 ![](../../Property_Image.gif)
		 [ExportCellImages](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportCellImages.htm)
		 Свойство ExportCellImages
		 определяет, будут ли экспортироваться изображения, содержащиеся
		 в ячейках таблицы.


		 ![](../../Property_Image.gif)
		 [ExportChartsAsImages](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportChartsAsImages.htm)
		 Свойство ExportChartsAsImages
		 определяет необходимость экспорта диаграмм в виде изображений
		 при экспорте отчета в формат XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportComments](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportComments.htm)
		 Свойство ExportComments
		 определяет, будут ли экспортироваться комментарии к ячейкам с
		 данными.


		 ![](../../Property_Image.gif)
		 [ExportEmptyPages](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportEmptyPages.htm)
		 Свойство ExportEmptyPages
		 определяет необходимость экспорта пустых листов при экспорте в
		 формат RTF (*.rtf).


		 ![](../../Property_Image.gif)
		 [ExportFlowDocumentsAsImages](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportFlowDocumentsAsImages.htm)
		 Свойство ExportFlowDocumentsAsImages
		 определяет возможность экспорта текстового блока в виде изображения
		 в формате XLSX(*.xlsx).


		 ![](../../Property_Image.gif)
		 [ExportFootnotes](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportFootnotes.htm)
		 Свойство ExportFootnotes
		 определяет, будут ли экспортироваться сноски.


		 ![](../../Property_Image.gif)
		 [ExportFormulas](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportFormulas.htm)
		 Свойство ExportFormulas
		 определяет необходимость экспорта формул, содержащихся в таблице.


		 ![](../../Property_Image.gif)
		 [ExportHeadlines](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportHeadlines.htm)
		 Свойство ExportHeadlines
		 определяет необходимость экспорта колонтитулов листа при экспорте
		 отчета в формат RTF(*.rtf).


		 ![](../../Property_Image.gif)
		 [ExportHiddenCells](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportHiddenCells.htm)
		 Свойство ExportHiddenCells
		 определяет необходимость экспорта скрытых строк/столбцов при экспорте
		 в форматы XLS (*.xls) и ODS (*.ods).


		 ![](../../Property_Image.gif)
		 [ExportHiddenSheets](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportHiddenSheets.htm)
		 Свойство ExportHiddenSheets
		 определяет необходимость экспорта скрытых листов при экспорте
		 в формат XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportHyperlinkOpenURLAction](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportHyperlinkOpenURLAction.htm)
		 Свойство ExportHyperlinkOpenURLAction
		 определяет, будут ли экспортированы гиперссылки при экспорте отчета
		 в формат PPTX (*.pptx).


		 ![](../../Property_Image.gif)
		 [ExportObjectAsBitmap](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportObjectAsBitmap.htm)
		 Свойство ExportObjectAsBitmap
		 определяет необходимость экспорта объектов в растровом формате
		 при экспорте в форматы PDF (*.pdf) и XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportObjects](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportObjects.htm)
		 Свойство ExportObjects
		 определяет необходимость экспорта объектов (диаграмма, карта,
		 рисунок и т.д.), расположенных на листах отчета.


		 ![](../../Property_Image.gif)
		 [ExportPalette](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportPalette.htm)
		 Свойство ExportPalette
		 определяет необходимость экспорта палитры в Excel (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportRange](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportRange.htm)
		 Свойство ExportRange
		 определяет диапазон экспортируемых листов.


		 ![](../../Property_Image.gif)
		 [ExportReportTitle](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportReportTitle.htm)
		 Свойство ExportReportTitle
		 определяет необходимость экспорта заголовка отчета в формат PDF
		 (расширенный).


		 ![](../../Property_Image.gif)
		 [ExportSecurityLabels](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportSecurityLabels.htm)
		 Свойство ExportSecurityLabels
		 определяет разрешение на экспорт штампа маркировки в формат RTF
		 (*.rtf).


		 ![](../../Property_Image.gif)
		 [ExportSheetTitles](../../Interface/IPrxReportExporter/IPrxReportExporter.ExportSheetTitles.htm)
		 Свойство ExportSheetTitles
		 определяет необходимость экспорта названий листов при экспорте
		 отчета в формат RTF (*.rtf).


		 ![](../../Property_Image.gif)
		 [Label](../../Interface/IPrxReportExporter/IPrxReportExporter.Label.htm)
		 Свойство Label возвращает
		 параметры штампа, которым маркируются документы при экспорте и
		 печати.


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IPrxReportExporter/IPrxReportExporter.Report.htm)
		 Свойство Report определяет
		 экспортируемый регламентный отчет.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IPrxReportExporter/IPrxReportExporter.Sheet.htm)
		 Свойство Sheet определяет
		 экспортируемый лист регламентного отчета.


		 ![](../../Property_Image.gif)
		 [SheetAccess](../../Interface/IPrxReportExporter/IPrxReportExporter.SheetAccess.htm)
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


## Методы, унаследованные от [IPrxReportExporter](../../Interface/IPrxReportExporter/IPrxReportExporter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FinishBatchCommand](../../Interface/IPrxReportExporter/IPrxReportExporter.FinishBatchCommand.htm)
		 Метод FinishBatchCommand
		 завершает пакетный экспорт данных в файл.


		 ![](../../Sub_Image.gif)
		 [IsExportToPdfAvailable](../../Interface/IPrxReportExporter/IPrxReportExporter.IsExportToPdfAvailable.htm)
		 Метод IsExportToPdfAvailable
		 осуществляет проверку возможности экспорта в формат PDF.


		 ![](../../Sub_Image.gif)
		 [LoadSettings](../../Interface/IPrxReportExporter/IPrxReportExporter.LoadSettings.htm)
		 Метод LoadSettings
		 осуществляет загрузку настроек экспорта из XML элемента.


		 ![](../../Sub_Image.gif)
		 [SaveSettings](../../Interface/IPrxReportExporter/IPrxReportExporter.SaveSettings.htm)
		 Метод SaveSettings
		 осуществляет сохранение настроек экспорта в XML элемент.


		 ![](../../Sub_Image.gif)
		 [StartBatchCommand](../../Interface/IPrxReportExporter/IPrxReportExporter.StartBatchCommand.htm)
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


[Классы сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
