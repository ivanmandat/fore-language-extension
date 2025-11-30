# IEaxDrillSettingsValues.Add

IEaxDrillSettingsValues.Add
-


# IEaxDrillSettingsValues.Add


## Синтаксис


Add(Value: Variant): Integer;


## Параметры


Value. Значение [подстановки
 расшифровки](UiAnalyticalArea.chm::/Hyperlinks/Hyperlinks_sub.htm).


## Описание


Метод Add добавляет значение
 [подстановки
 расшифровки](UiAnalyticalArea.chm::/Hyperlinks/Hyperlinks_sub.htm) в коллекцию.


## Комментарии


Метод возвращает ключ значения [подстановки
 расшифровки](UiAnalyticalArea.chm::/Hyperlinks/Hyperlinks_sub.htm), добавленного в коллекцию.


Нумерация элементов коллекции начинается с нуля. Если из коллекции были
 удалены элементы с помощью метода [IEaxDrillSettingsValues.RemoveAt](IEaxDrillSettingsValues.RemoveAt.htm),
 то новый элемент будет добавлен с наименьшим свободным ключом. Для получения
 массива существующих ключей используйте свойство [IEaxDrillSettingsValues.Keys](IEaxDrillSettingsValues.Keys.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REG_VALUES. Источником данных является куб, в
 котором содержится календарное измерение. Отчёт содержит один лист, на
 котором создана аналитическая область данных.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report, System, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    PivSlice: IEaxDataAreaPivotSlice;

	    Pivot: IPivot;

	    HeadSets: IDataAreaHeaderSettingsBase;

	    Grid: IEaxGrid;

	    DimSettings: IEaxGridDimensionSettings;

	    PivotDims: IPivotDimension;

	    DimModel: IDimensionModel;

	    DimIndex: IDimIndex;

	    Attributes: IDimAttributesInstance;

	    Attribute: IDimAttribute;

	    Drill: IEaxDrillSettings;

	    ElementKey: Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Rep := MB.ItemById("REG_VALUES").Edit As IPrxReport;

	    // Получим срез данных в качестве области данных таблицы отчета

	    PivSlice := Rep.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получим таблицу данных

	    Pivot := PivSlice.Pivot;

	    // Получим измерение Calendar

	    PivotDims := Pivot.Dimensions.Item(1);

	    // Получим структуру измерения

	    DimModel := PivotDims.DimInstance.Dimension;

	    // Получим структуру указанного индекса измерения

	    DimIndex := DimModel.Indexes.Item(0);

	    // Получим коллекцию атрибутов измерения

	    Attributes := PivotDims.DimInstance.Attributes;

	    // Получим структуру указанного атрибута

	    Attribute := Attributes.Item(0).Attribute;

	    // Получим настройки заголовка аналитической области данных

	    HeadSets := PivotDims As IDataAreaHeaderSettingsBase;


	    // Включим настройки расшифровки для указанного представления

	    Grid := (PivSlice As IEaxDataAreaSlice).Views.Item(0) As IEaxGrid;

	    Grid.ViewSettings.HyperlinkAsText := False;

	    DimSettings := Grid.ViewSettings.GetViewSettings(HeadSets) As IEaxGridDimensionSettings;

	    If Not DimSettings.IsDrilled Then

	        DimSettings.Drilled := TriState.OnOption;

	    End If;


	    // Получим настройки расшифровки

	    Drill := DimSettings.Drill;

	    // Укажем лист

	    Drill.SheetKey := Rep.Sheets.Item(0).Key;

	    // Укажем измерение

	    Drill.Dimension := PivotDims;

	    // Установим способ изменения отметки - замена

	    Drill.Mode := EaxDataDrillMode.Replace;

	    // Установим индекс для поиска элементов

	    Drill.DimensionIndex := DimIndex;

	    // Установим атрибут поиска в индексе

	    Drill.DimensionAttribute := Attribute;

	    Drill.DimensionAttributes := "BLOCK_TYPE";

	    // По щелчку по гиперссылке будет осуществлен переход на указанный сайт

	    // Ссылка откроется в новой вкладке браузера

	    Drill.ActionType := TabHyperlinkActionType.OpenURL;


	    // Очистим коллекцию от возможных уже хранящихся значений

	    Drill.Values.Clear;


	    // Добавим значение подстановки в коллекцию и временно сохраним его ключ

	    ElementKey := Drill.Values.Add("первый элемент коллекции");

	    // Выведем этот элемент коллекции в консоль

	    Debug.WriteLine("Ключ добавленного элемента: " + ElementKey.ToString);

	    Debug.WriteLine("Значение добавленного элемента: " + Drill.Values.GetAt(ElementKey));

	    Debug.WriteLine("");


	    // Добавим ещё одно значение подстановки, но без сохранения ключа

	    Drill.Values.Add("second element in collection");

	    // Получим ключ нового элемента

	    ElementKey := Drill.Values.Keys[Drill.Values.Count - 1];

	    // Выведем этот элемент коллекции в консоль

	    Debug.WriteLine("Ключ добавленного элемента: " + ElementKey.ToString);

	    Debug.WriteLine("Значение добавленного элемента: " + Drill.Values.GetAt(ElementKey));

	    Debug.WriteLine("");


	    // Добавим третье значение подстановки, но сразу перед выводом в консоль

	    Debug.WriteLine("Ключ добавленного элемента: " + Drill.Values.Add("Подстановка номер три").ToString);

	    Debug.WriteLine("Значение добавленного элемента: " + Drill.Values.GetAt(Drill.Values.Keys[Drill.Values.Count - 1]));

	    Debug.WriteLine("");


	    // Выведем список ключей в консоль

	    Debug.WriteLine("Список ключей:");

	    For Each ElementKey In Drill.Values.Keys Do

	        Debug.WriteLine(ElementKey);

	    End For;

	    Debug.WriteLine("");


	    // Удалим второй элемент коллекции

	    Debug.WriteLine("Успешность удаления существующего элемента: " + Drill.Values.RemoveAt(1).ToString);

	    // Попробуем удалить его повторно

	    Debug.WriteLine("Успешность удаления отсутствующего элемента: " + Drill.Values.RemoveAt(1).ToString);

	    // Выведем в консоль список ключей после удаления элемента

	    Debug.WriteLine("Список ключей после удаления элемента с ключом 1:");

	    For Each ElementKey In Drill.Values.Keys Do

	        Debug.WriteLine(ElementKey);

	    End For;

	    Debug.WriteLine("");


	    // Добавим новый элемент и узнаем его ключ

	    ElementKey := Drill.Values.Add("Четвёртый (в порядке добавления)");

	    // Выведем этот элемент коллекции в консоль

	    Debug.WriteLine("Ключ добавленного элемента: " + ElementKey.ToString);

	    Debug.WriteLine("Значение добавленного элемента: " + Drill.Values.GetAt(ElementKey));

	    Debug.WriteLine("");

	    // Выведем список ключей после добавления элемента

	    Debug.WriteLine("Список ключей после добавления элемента:");

	    For Each ElementKey In Drill.Values.Keys Do

	        Debug.WriteLine(ElementKey);

	    End For;

	    Debug.WriteLine("");


	    // Изменим значение первого элемента

	    Drill.Values.SetAt(0, "Отредактированная Подстановка");

	    // Выведем его в консоль

	    Debug.WriteLine("Новое значение первого элемента: " + Drill.Values.GetAt(0));

	    Debug.WriteLine("");


	    Debug.WriteLine("Список элементов коллекции:");

	    Debug.WriteLine(Drill.Values.GetAt(0));

	    Debug.WriteLine(Drill.Values.GetAt(1));

	    Debug.WriteLine(Drill.Values.GetAt(2));


	    // Укажем необходимые ключи элементов коллекции в качестве подстановок.

	    // В браузере будет открыт поисковый запрос со значениями элементов коллекции,

	    // ключи которых указаны в подстановке

	    Drill.Action := "http://www.google.com/search?q=&[2]&nbsp;и &[0]";

	    Drill.Target := TabHyperlinkTarget.Top;


	    // Обновим отчёт и сохраним изменения

	    Rep.Recalc;

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- для указанного регламентного отчёта будет использоваться расшифровка
	 элементов измерения;


	- при нажатии по элементу измерения будет осуществляться переход
	 по указанной гиперссылке. В гиперссылку в будут подставлены значения
	 элементов коллекции с указанными ключами;


	- в консоль выведется отладочная информация о поэтапных изменениях
	 содержимого коллекции.


См. также:


[IEaxDrillSettingsValues](IEaxDrillSettingsValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
