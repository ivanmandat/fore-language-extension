# IPrxBulkSettings.FilesMapping

IPrxBulkSettings.FilesMapping
-


# IPrxBulkSettings.FilesMapping


## Синтаксис


FilesMapping: [IDictionary](ModCollections.chm::/Interface/IDictionary/IDictionary.htm);


## Описание


Свойство FilesMapping определяет
 сопоставление ключей элементов отметки и соответствующих им файлов.


## Комментарии


Данное свойство полезно, например, если необходимо определить какой
 экспортированный файл соответствует какой отметке при выполнении пакетного
 экспорта.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REPORT_PUB». Данный отчет должен иметь элементы
 управления, общие для всех листов отчета. Элементы управления должны быть
 связаны с фиксированными измерениями.


Добавьте ссылки на системные сборки: Collections, Dimensions, Metabase,
 Report.


			Sub UserProc;

Var

    MB: IMetabase;

    RegRep: IPrxReport;

    Exporter: IPrxReportExporter;

    BulkSetting: IPrxBulkSettings;

    SelSet: IPrxBulkSelectionSet;

    filesDict: IDictionary;

    keys: ICollection;

    values: ICollection;

    keysArr, valuesArr: Array;

    vValue: Variant;

    stringToMemo: String;

    v: Variant;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем регламентный отчет

    RegRep := MB.ItemById("REG_REPORT_PUB").Bind As IPrxReport;

    // Создаем объект для экспорта отчета

    Exporter := New PrxReportExporter.Create;

    // Указываем экспортируемый отчет

    Exporter.Report := RegRep;

    // Задаем отметку фиксированных измерений отчета

    SelSet := RegRep.GetBulkSelectionSet("1-2");

    SelSet.Item(0).Selection.SelectElement(1, False);

    SelSet.Item(0).Selection.SelectElement(2, False);

    SelSet.Item(0).Selection.SelectElement(3, False);

    // Задаем параметры выполнения пакетного экспорта

    BulkSetting := Exporter.BulkSettings;

    BulkSetting.Enabled := True;

    BulkSetting.SelectionSet := SelSet;

    // Выполняем экспорт

    Exporter.ExportToFile("c:\" + RegRep.Name + ".XLS", "XLS");

    // Получаем сопоставление экспортированных файлов и ключей элементов отметки

    filesDict := BulkSetting.FilesMapping;

    // Получаем массив ключей отметки

    keys := filesDict.Keys;

    keysArr := New Variant[keys.Count];

    keys.CopyTo(keysArr, 0);

    // Получаем массив названий экспортированных файлов

    values := filesDict.Values;

    valuesArr := New Variant[values.Count];

    values.CopyTo(valuesArr, 0);

    // Выводим сопоставление ключей элементов отметки и

    // соответствующих экспортированных файлов

    For Each v In keysArr Do

        vValue := filesDict.Item(v);

        stringToMemo := "Key: " + v + " ---> Value: " + vValue;

        Debug.WriteLine(stringToMemo);

    End For;

End Sub


В результате выполнения примера в окно консоли будет выведено сопоставление
 ключей элементов отметки и соответствующих им экспортированных файлов.


См. также:


[IPrxBulkSettings](IPrxBulkSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
