# IEaxBulkSettings.FilesMapping

IEaxBulkSettings.FilesMapping
-


# IEaxBulkSettings.FilesMapping


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


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором REPORT_MAPPING. Данный отчет должен использовать источники
 данных, содержащие одно или несколько фиксированных измерений, общих для
 всех листов и не являющихся метриками.


Добавьте ссылки на системные сборки: Collections, Dimensions, Express,
 Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    eExp: IEaxAnalyzer;

	    eExporter: IExAnalyzerExporter;

	    eBulkSetting: IEaxBulkSettings;

	    SelSet: IDimSelectionSet;

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

	    // Получаем отчет

	    eExp := MB.ItemById("REPORT_MAPPING").Bind As IEaxAnalyzer;

	    // Создаем объект для экспорта отчета

	    eExporter := New ExAnalyzerExporter.Create;

	    // Указываем экспортируемый отчет

	    eExporter.ExAnalyzer := eExp;

	    // Задаем отметку фиксированных измерений отчета

	    SelSet := eExp.BulkSelectionSet;

	    SelSet.Item(0).SelectElement(1, False);

	    SelSet.Item(0).SelectElement(2, False);

	    SelSet.Item(0).SelectElement(3, False);

	    // Задаем параметры выполнения пакетного экспорта

	    eBulkSetting := eExporter.BulkSettings;

	    eBulkSetting.Enabled := True;

	    eBulkSetting.SelectionSet := SelSet;

	    // Выполняем экспорт

	    eExporter.ExportToFile("c:\" + eExp.Name + ".XLS", "XLS");

	    // Получаем сопоставление экспортированных файлов и ключей элементов отметки

	    filesDict := eBulkSetting.FilesMapping;

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

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено сопоставление
 ключей элементов отметки и соответствующих им экспортированных файлов.


См. также:


[IEaxBulkSettings](IEaxBulkSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
