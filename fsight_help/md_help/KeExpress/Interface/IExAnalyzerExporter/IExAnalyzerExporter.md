# IExAnalyzerExporter

IExAnalyzerExporter
-


# IExAnalyzerExporter


Сборка: Express;


## Описание


Интерфейс IExAnalyzerExporter
 содержит свойства и методы для экспорта экспресс-отчета.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoHeight](IExAnalyzerExporter.AutoHeight.htm)


		 Свойство AutoHeight
		 определяет, будет ли при экспорте в HTML (*.html) производиться
		 автоматический подгон высоты строк.


		 ![](../../Property_Image.gif)
		 [BulkSettings](IExAnalyzerExporter.BulkSettings.htm)


		 Свойство BulkSettings
		 возвращает параметры пакетного экспорта экспресс-отчета.


		 ![](../../Property_Image.gif)
		 [EmfType](IExAnalyzerExporter.EmfType.htm)


		 Свойство EmfType определяет
		 тип создаваемого при экспорте метафайла.


		 ![](../../Property_Image.gif)
		 [ExAnalyzer](IExAnalyzerExporter.ExAnalyzer.htm)


		 Свойство ExAnalyzer
		 определяет экспресс-отчет, который необходимо экспортировать.


		 ![](../../Property_Image.gif)
		 [ExportCellImages](IExAnalyzerExporter.ExportCellImages.htm)


		 Свойство ExportCellImages
		 определяет, будут ли экспортироваться изображения, содержащиеся
		 в ячейках таблицы.


		 ![](../../Property_Image.gif)
		 [ExportChartAsImage](IExAnalyzerExporter.ExportChartAsImage.htm)


		 Свойство ExportChartAsImage
		 определяет параметры экспорта диаграммы при экспорте в файл формата
		 XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportFootnotes](IExAnalyzerExporter.ExportFootnotes.htm)


		 Свойство ExportFootnotes
		 определяет, будут ли экспортироваться сноски.


		 ![](../../Property_Image.gif)
		 [ExportObjectAsBitmap](IExAnalyzerExporter.ExportObjectAsBitmap.htm)


		 Свойство ExportObjectAsBitmap
		 определяет необходимость экспорта объектов в растровом формате
		 при экспорте в файлы форматов PDF (*.pdf) и XLS (*.xls).


		 ![](../../Property_Image.gif)
		 [ExportPalette](IExAnalyzerExporter.ExportPalette.htm)


		 Свойство ExportPalette
		 определяет необходимость экспорта палитры в Excel (*.xls).


		 ![](../../Property_Image.gif)
		 [Label](IExAnalyzerExporter.Label.htm)


		 Свойство Label возвращает
		 параметры штампа, которым маркируются документы при экспорте и
		 печати.


		 ![](../../Property_Image.gif)
		 [Sheet](IExAnalyzerExporter.Sheet.htm)


		 Свойство Sheet экспортирует
		 указанный лист экспресс-отчета.


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
		 [FinishBatchCommand](IExAnalyzerExporter.FinishBatchCommand.htm)


		 Метод FinishBatchCommand
		 завершает пакетный экспорт данных в файл.


		 ![](../../Sub_Image.gif)
		 [GetChartExporter](IExAnalyzerExporter.GetChartExporter.htm)


		 Метод GetChartExporter
		 создает объект для экспорта диаграммы экспресс-отчета.


		 ![](../../Sub_Image.gif)
		 [StartBatchCommand](IExAnalyzerExporter.StartBatchCommand.htm)


		 Метод StartBatchCommand
		 запускает пакетный экспорт данных в файл указанного формата.


## Методы, унаследованные от [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ExportToFile](ModDrawing.chm::/Interface/IExporter/IExporter.ExportToFile.htm)


		 Метод ExportToFile
		 осуществляет экспорт данных в файл указанного формата.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
