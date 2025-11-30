# IAdhocReportExporter

IAdhocReportExporter
-


# IAdhocReportExporter


Сборка: Adhoc;


## Описание


Интерфейс IAdhocReportExporter
 предназначен для экспорта аналитических панелей.


## Иерархия наследования


           [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


           IAdhocReportExporter


## Комментарии


Карты и диаграммы, содержащиеся в аналитической панели, экспортируются
 в виде изображений.


Доступны следующие форматы экспорта аналитических панелей:


	- Книга Excel (*.xls);


	- Документ PDF (*.pdf);


	- Документ в формате RTF (*.rtf);


	- Веб-страница, архив в одном файле (*.mht);


	- Файл в формате EMF (*.emf);


	- Презентация PowerPoint (*.ppxt).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdhocReport](IAdhocReportExporter.AdhocReport.htm)
		 Свойство AdhocReport
		 определяет экспортируемый отчёт.


		 ![](../../Property_Image.gif)
		 [BulkSettings](IAdhocReportExporter.BulkSettings.htm)
		 Свойство BulkSettings
		 возвращает параметры пакетных операций аналитической панели.


		 ![](../../Property_Image.gif)
		 [EmfType](IAdhocReportExporter.EmfType.htm)
		 Свойство EmfType определяет
		 тип создаваемого при экспорте метафайла.


		 ![](../../Property_Image.gif)
		 [ExportFootnotes](IAdhocReportExporter.ExportFootnotes.htm)
		 Свойство ExportFootnotes
		 определяет, будут ли экспортироваться сноски.


		 ![](../../Property_Image.gif)
		 [ExportObjectAsBitmap](IAdhocReportExporter.ExportObjectAsBitmap.htm)
		 Свойство ExportObjectAsBitmap
		 определяет, будут ли экспортированы объекты отчета в формат PDF
		 в виде изображения или в виде метафайла.


		 ![](../../Property_Image.gif)
		 [Sources](IAdhocReportExporter.Sources.htm)
		 Свойство Sources возвращает
		 набор экспортируемых источников данных для аналитической
		 панели.


## Свойства, унаследованные от [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CSSClassName](ModDrawing.chm::/Interface/IExporter/iexporter.cssclassname.htm)


		 Свойство CSSClassName
		 определяет префикс для элементов таблицы стилей HTML.


		 ![](../../Property_Image.gif)
		 [Encoding](ModDrawing.chm::/Interface/IExporter/iexporter.encoding.htm)


		 Свойство Encoding устанавливает
		 кодовую страницу таблицы преобразования, в соответствии с которой
		 будет осуществляться экспорт данных.


		 ![](../../Property_Image.gif)
		 [ExportFromWeb](ModDrawing.chm::/Interface/IExporter/iexporter.exportfromweb.htm)


		 Свойство ExportFromWeb
		 определяет, какое действие производится с отчетом в веб-приложении
		 - экспорт или открытие в режиме предварительного просмотра.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FinishBatchCommand](IAdhocReportExporter.FinishBatchCommand.htm)


		 Метод FinishBatchCommand
		 завершает пакетный экспорт аналитических панелей.


		 ![](../../Sub_Image.gif)
		 [StartBatchCommand](IAdhocReportExporter.StartBatchCommand.htm)


		 Метод StartBatchCommand
		 начитает пакетный экспорт аналитических панелей в файл указанного
		 формата.


## Методы, унаследованные от [IExporter](ModDrawing.chm::/Interface/IExporter/IExporter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ExportToFile](ModDrawing.chm::/Interface/IExporter/iexporter.exporttofile.htm)


		 Метод ExportToFile
		 осуществляет экспорт данных в файл указанного формата.


См. также:


[Интерфейсы
 сборки Adhoc](../KeAdHoc_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
