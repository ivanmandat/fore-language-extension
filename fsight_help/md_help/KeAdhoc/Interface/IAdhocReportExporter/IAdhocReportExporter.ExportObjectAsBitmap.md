# IAdhocReportExporter.ExportObjectAsBitmap

IAdhocReportExporter.ExportObjectAsBitmap
-


# IAdhocReportExporter.ExportObjectAsBitmap


## Синтаксис


ExportObjectAsBitmap: Boolean;


## Описание


Свойство ExportObjectAsBitmap
 определяет, будут ли экспортированы объекты отчета в формат PDF в виде
 изображения или в виде метафайла.


## Комментарии


Допустимые значения:


	- True. Объект экспортируется
	 в виде изображения;


	- False. Значение по умолчанию.
	 Объект экспортируется в виде метафайла.


## Пример


Для выполнения примера предполагается наличие аналитической панели с
 идентификатором «ADHOC».


Добавьте ссылки на системные сборки «Adhoc», «Metabase».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IAdhocReport;

    Exporter: IAdhocReportExporter;

Begin

    MB := MetabaseClass.Active;

    // Получаем аналитическую панель

    Report := MB.ItemById("ADHOC").Bind As IAdhocReport;

    // Создаем объект экспорта

    Exporter := New AdhocReportExporter.Create;

    Exporter.AdhocReport := Report;

    // Выполняем экспорт

    // Экспорт сносок

    Exporter.ExportFootnotes := True;

    // Объекты в виде изображений

    Exporter.ExportObjectAsBitmap := True;

    Exporter.ExportToFile("C:\Adhoc(ObjectImage).pdf", "pdf");

    // Объекты в виде метафайлов

    Exporter.ExportObjectAsBitmap := False;

    Exporter.ExportToFile("C:\Adhoc(ObjectMetafile).pdf", "pdf");

End Sub UserProc;


После выполнения примера содержимое аналитической панели будет экспортировано
 в два файла формата PDF. В одном из них объекты отчета будут в виде изображений,
 в другом - в виде метафайлов. Также будут экспортированы сноски.


См. также:


[IAdhocReportExporter](IAdhocReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
