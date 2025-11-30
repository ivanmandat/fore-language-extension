# ICalculateReportScheduledTask.FormatTag

ICalculateReportScheduledTask.FormatTag
-


# ICalculateReportScheduledTask.FormatTag


## Синтаксис


FormatTag: String;


## Описание


Свойство FormatTag определяет
 формат файла, в который будет сохранен результат вычисления отчета.


## Комментарии


Свойство может принимать следующие значения:


	- rtf. Документ в формате
	 RTF.


	- xls. Книга Excel.


	- pdf. Документ PDF.


	- emf. Файл в формате
	 EMF.


	- mht. Веб-страница полностью.


	- ppreport. Экспортированный
	 регламентный отчет в формате ppreport.


	- ods. Электронная таблица
	 OpenDocument.


Если файл не задан, то результаты сохраняются в виде регламентного отчета.


## Пример


Использование свойства приведено в примере для [ICalculateReportScheduledTask.PutExportSettings](ICalculateReportScheduledTask.PutExportSettings.htm).


См. также:


[ICalculateReportScheduledTask](ICalculateReportScheduledTask.htm)
 | [ICalculateReportScheduledTask.ReadResult](ICalculateReportScheduledTask.ReadResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
