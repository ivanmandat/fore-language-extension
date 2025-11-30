# IAdhocReportExporter.EmfType

IAdhocReportExporter.EmfType
-


# IAdhocReportExporter.EmfType


## Синтаксис


EmfType: [GxEmfType](ModDrawing.chm::/enums/GxEmfType.htm);


## Описание


Свойство EmfType определяет
 тип создаваемого при экспорте метафайла.


## Комментарии


Тип создаваемого метафайла по умолчанию - GxEmfType.EmfPlusDual.


## Пример


Для выполнения примера предполагается наличие аналитической панели с
 идентификатором «ADHOC».


Добавьте ссылки на системные сборки: Adhoc, Drawing, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Adhoc: IAdhocReport;

    Exp: IAdhocReportExporter;

Begin

    MB := MetabaseClass.Active;

    Adhoc := MB.ItemById("ADHOC").Bind As IAdhocReport;

    Exp := New AdhocReportExporter.Create;

    Exp.AdhocReport := Adhoc;

    Exp.EmfType := GxEmfType.EmfOnly;

    Exp.ExportToFile("C:\img.emf","emf");

End Sub UserProc;


В результате выполнения примера будет произведен экспорт содержимого
 аналитической панели в метафайл в формате GxEmfType.EmfOnly.


См. также:


[IAdhocReportExporter](IAdhocReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
