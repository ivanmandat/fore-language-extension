# ITabSheetExporter.EmfType

ITabSheetExporter.EmfType
-


# ITabSheetExporter.EmfType


## Синтаксис


EmfType: [GxEmfType](ModDrawing.chm::/enums/GxEmfType.htm);


## Описание


Свойство EmfType определяет
 тип создаваемого при экспорте метафайла.


## Комментарии


Тип создаваемого метафайла по умолчанию - GxEmfType.EmfPlusDual.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки: Drawing, Metabase, Report и Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabSheet: ITabSheet;

    Exp: ITabSheetExporter;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

    // Получим таблицу для экспорта

    TabSheet := Report.Sheets.Item(0).Table;

    Exp := New TabSheetExporter.Create;

    // Настроим и произведем экспорт в метафайл

    Exp.TabSheet := TabSheet;

    Exp.EmfType := GxEmfType.EmfOnly;

    Exp.ExportToFile("C:\img.emf","emf");

End Sub UserProc;


В результате выполнения примера будет произведен экспорт содержимого
 первой страницы отчета в метафайл в формате GxEmfType.EmfOnly.


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
