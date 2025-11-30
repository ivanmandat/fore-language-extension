# IAdhocReportExporter.BulkSettings

IAdhocReportExporter.BulkSettings
-


# IAdhocReportExporter.BulkSettings


## Синтаксис


BulkSettings: [IAdhocBulkSettings](../IAdhocBulkSettings/IAdhocBulkSettings.htm);


## Описание


Свойство BulkSettings возвращает
 параметры пакетных операций аналитической панели.


## Комментарии


По умолчанию пакетный экспорт производится в разные файлы.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1». В репозитории должна быть создана
 аналитическая панель с наименованием «AN_PAN». Добавьте ссылки на системные
 сборки «Metabase», «Adhoc».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    Rep: IAdhocReport;

    Ex: IAdhocReportExporter;

    BulkSettings: IAdhocBulkSettings;

    i: Integer;

    Sel: IAdhocBulkSelection;

Begin

    MB := MetabaseClass.Active;

    // Получаем аналитическую панель

    Rep := MB.ItemById("AN_PANEL").Bind As IAdhocReport;

    // Создаем объект экспорта

    Ex := New AdhocReportExporter.Create;

    // Задаем экспортируемую панель

    Ex.AdhocReport := Rep;

    Ex.Sources.Add(Rep.DataSourceObjects.Item(0));

    BulkSettings := Ex.BulkSettings;

    BulkSettings.Enabled := True;

    For i := 0 To Rep.DataSourceObjects.Item(0).Dimensions.Count - 1 Do

        Sel := BulkSettings.SelectionSet.Add(Rep.DataSourceObjects.Item(0).Dimensions.Item(i));

        Sel.Selection.SelectElement(0, False);

    End For;

    Ex.BulkSettings := BulkSettings;

    Ex.ExportToFile("c:\ANPANEL.XLS", "XLS");

End Sub Button1OnClick;


После выполнения примера данные с аналитической панели будут экспортированы
 в файл «ANPANEL.XLS».


См. также:


[IAdhocReportExporter](IAdhocReportExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
