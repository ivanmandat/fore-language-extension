# IExportFormat

IExportFormat
-


# IExportFormat


Сборка: Drawing;


## Описание


Интерфейс IExportFormat содержит
 свойства, возвращающие информацию о формате, в который производится экспорт
 объекта.


## Комментарии


Информацию о формате можно получить, используя следующие свойства:


	- [IEaxBeforeExportEventArgs.Format](KeExpress.chm::/Interface/IEaxBeforeExportEventArgs/IEaxBeforeExportEventArgs.Format.htm);


	- [IUiPrxExportCancelEventArgs.Format](KeReport.chm::/Interface/IUiPrxExportCancelEventArgs/IUiPrxExportCancelEventArgs.Format.htm);


	- [IUiPrxExportEventArgs.Format](KeReport.chm::/Interface/IUiPrxExportEventArgs/IUiPrxExportEventArgs.Format.htm);


	- [IUiPrxReportExportSubstitutionEventArgs.ExportFormat](KeReport.chm::/Interface/IUiPrxReportExportSubstitutionEventArgs/IUiPrxReportExportSubstitutionEventArgs.ExportFormat.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Description](IExportFormat.Description.htm)
		 Свойство Description
		 возвращает описание формата, в который производится экспорт.


		 ![](../../Property_Image.gif)
		 [FileExtension](IExportFormat.FileExtension.htm)
		 Свойство FileExtension
		 возвращает расширение файлов, соответствующих формату, в который
		 производится экспорт.


		 ![](../../Property_Image.gif)
		 [FilterString](IExportFormat.FilterString.htm)
		 Свойство FilterString
		 возвращает строку фильтрации, используемую в различных диалогах
		 для получения файлов данного формата.


		 ![](../../Property_Image.gif)
		 [MimeType](IExportFormat.MimeType.htm)
		 Свойство MimeType определяет
		 тип MIME для данного формата.


		 ![](../../Property_Image.gif)
		 [Tag](IExportFormat.Tag.htm)
		 Свойство Tag возвращает
		 идентификатор формата, в который производится экспорт.


См. также:


[Интерфейсы сборки Drawing](../ModDrawing_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
