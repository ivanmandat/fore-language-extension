# IVZMultiplyDataSource.GetData

IVZMultiplyDataSource.GetData
-


# IVZMultiplyDataSource.GetData


## Синтаксис


GetData(objectId: String, valIndx: Integer): Variant;


## Параметры


objectId. Идентификатор измерения;


valIndx. Индекс элемента.


## Описание


Метод GetData возвращает данные
 элемента заданного измерения по его индексу.


## Комментарии


Данные возвращаются при значении атрибута по умолчанию. Для получения
 атрибута по умолчанию используйте метод [IVZMultiplyDataSource.DefaultAttributeId](IVZMultiplyDataSource.DefaultAttributeId.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки Express, Metabase и Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    DataSource: IVZMultiplyDataSource;

	    StringArrayAttr: IVZStringArray;

	    StringArrayObj: IVZStringArray;

	    DataArray: IVZDataArray;

	    DataDictionary: IVZDataDictionary;

	    AttrId: String;

	    ValIndx: Integer;

	    ObjectId: String;

	    Data: Variant;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим источник данных визуализатора

	    DataSource := BubbleTree.ColorVisual.ColorMapping.DataSource;

	    // Установим наименование источника данных

	    DataSource.Title := "Источник данных визуализатора";

	    // Создадим и заполним массив атрибутов и объектов источника данных

	    StringArrayAttr := New VZStringArray.Create;

	    StringArrayAttr := DataSource.GetAttributes;

	    StringArrayObj := New VZStringArray.Create;

	    StringArrayObj := DataSource.GetObjects;

	    // Получим словарь наименований элементов пузырькового дерева

	    DataSource.ItemsNames := BubbleTree.Captions;

	    // Выведем информацию о источнике данных

	    Debug.WriteLine("Индекс источника данных: " + DataSource.ID);

	    Debug.WriteLine("Заголовок источника данных: " + DataSource.Title);

	    Debug.WriteLine("Максимальная вместимость измерений (временная шкала): " +

	        DataSource.MaxTimelineIndex.ToString);

	    // Получим идентификатор атрибута

	    AttrId := BubbleTree.ColorVisual.ColorMapping.AttributeId;

	    // Зададим индекс относительно временной шкалы

	    ValIndx := 0;

	    // Зададим индекс объекта

	    ObjectId := "99";

	    // Получим идентификатор атрибута по умолчанию

	    Debug.WriteLine("Идентификатор атрибута по умолчанию: " + DataSource.DefaultAttributeId);

	    // Определим наименование атрибута, используя словарь наименований показателей

	    Debug.WriteLine("Наименование показателя: " + DataSource.AttributesNames.Item(AttrId));

	    // Получим максимальное и минимальное значения показателя

	    Debug.WriteLine("Максимальное значение: " + DataSource.GetMaxValue(AttrId, ValIndx, False));

	    Debug.WriteLine("Минимальное значение: " + DataSource.GetMinValue(AttrId, ValIndx , False));

	    // Получим данные по показателю и индексу временной шкалы с атрибутом по умолчанию

	    Data := DataSource.GetData(ObjectId, ValIndx);

	    If Data = Null Then

	        Debug.WriteLine("Метод GetData не возвращает данных.")

	    Else Debug.WriteLine("Значение: " + DataSource.GetData(ObjectId, ValIndx));

	    End If;

	    // Получим данные с заданным атрибутом у выбранного объекта при заданном шаге временной шкалы

	    Data := DataSource.GetDataEx(ObjectId, AttrId, ValIndx);

	    If Data = Null Then

	        Debug.WriteLine("Метод GetDataEx не возвращает данных.");

	    Else Debug.WriteLine("Объект, значение: " + DataSource.ItemsNames.Item(ObjectId) + ", " +

	        DataSource.GetDataEx(ObjectId, AttrId, ValIndx));

	    End If;

	    // Получим все данные для заданного объекта и показателя по всей временной шкале, после чего выведем значение

	    DataArray := New VZDataArray.Create;

	    DataArray := DataSource.GetAllObjectData(ObjectId, attrId);

	    Debug.WriteLine("Значение на третьем шаге временной шкалы: " + DataArray.Item(2));

	    // Получим все данные при заданном атрибуте и шаге временной шкалы

	    DataDictionary := New VZDataDictionary.Create;

	    DataDictionary := DataSource.GetAllLevelDataDictionary(AttrId, ValIndx);

	    Debug.WriteLine("Значение у показателя с индексом 3: " + DataDictionary.Item("3"));

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения параметров
 источника данных визуализатора.


См. также:


[IVZMultiplyDataSource](IVZMultiplyDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
