# IEaxDataAreaHierarchies.AddDependant

IEaxDataAreaHierarchies.AddDependant
-


# IEaxDataAreaHierarchies.AddDependant


## Синтаксис


AddDependant(S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);

            Key:
 Integer;

            SS:
 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);

            EId:
 String;

            T:
 [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm));


## Параметры


S. Измерение, в котором находится
 альтернативная иерархия;


Key. Ключ измерения;


SS. Отметка измерения;


EId. Идентификатор элемента
 измерения;


T. Формула преобразования данных.


## Описание


Метод AddDependant добавляет
 формулу преобразования данных в коллекцию альтернативных иерархий.


## Комментарии


Для удаления формулы преобразования данных из коллекции альтернативных
 иерархий используйте [IEaxDataAreaHierarchies.RemoveDependant](IEaxDataAreaHierarchies.RemoveDependant.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. Одно из измерений источника данных содержит
 альтернативную иерархию.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Ms, Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    pivot: IPivot;

	    slice: IEaxDataAreaSlice;

	    transformations: IEaxDataAreaTransformations;

	    dss: IDimSelectionSet;

	    ds: IDimSelection;

	    hierarchies: IEaxDataAreaHierarchies;

	    custDim: ICustomDimension;

	    da: IEaxDataArea;

	    transform: IEaxDataAreaTransformation;

	    dimElems: ICustomDimElements;

	    newIndex: Integer;

	    nameIndex, idIndex, orderIndex, keyIndex: Integer;

	    maxRow: Integer;

	    strId: String;

	    elements: IDimElements;

	    hierarchy: IEaxDataAreaHierarchy;

	    hKey: Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Eax := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим таблицу данных

	    pivot := Eax.Pivot;

	    // Получим срез данных

	    slice := Eax.DataArea.Slices.Item(0);


	    // Получим отметку измерения

	    dss := slice.Selection;

	    // Получим измерение

	    ds := dss.Item(0);

	    Debug.WriteLine("Наименование измерения - " + ds.Dimension.Name);

	    If ds = Null Then

	        Return;

	    End If;

	    // Получим аналитическую область данных

	    da := slice.Slices.DataArea;

	    If da = Null Then

	        Return;

	    End If;


	    // Получим коллекцию альтернативных иерархий

	    hierarchies := da.Hierarchies;

	    // Создадим уникальный ключ иерархии

	    hKey := hierarchies.CreateKey(slice.Key, ds.Dimension.Key);

	    // Получим альтернативную иерархию по ее ключу

	    hierarchy := hierarchies.FindByKey(hKey);

	    // Если иерархия не найдена по ключу, то создадим ее

	    If hierarchy = Null Then

	        hierarchy := hierarchies.Add(slice, ds, hKey);

	    End If;

	    // Получим измерение фактов

	    custDim := hierarchy.CustomDimension;

	    // Получим элементы и индексы атрибутов измерения фактов

	    dimElems := custDim.Elements;

	    GetCustomDimensionAttributesIndexes(custDim, nameIndex, idIndex, orderIndex, keyIndex);

	    // Получим максимальное значение

	    maxRow := GetMaxKey(custDim, keyIndex) + 1;


	    // Создадим новый индекс

	    newIndex := dimElems.Add;

	    // Зададим значение атрибута элемента измерения фактов

	    dimElems.AttributeValue(newIndex, nameIndex) := "New element + " + datetime.Now.ToString;

	    strId := "NEW_ELEMENT_" + maxRow.ToString;

	    dimElems.AttributeValue(newIndex, idIndex) := strId;

	    dimElems.AttributeValue(newIndex, orderIndex) := dimElems.RowCount + 1;


	    dimElems.AttributeValue(newIndex, keyIndex) := maxRow;

	    // Применим изменения к измерению с альтернативной иерархией

	    hierarchies.PushChangesToDimInstance(ds, CustDim);

	    elements := ds.Dimension.Elements;

	    newIndex := elements.FindById(strId);

	    // Получим коллекцию вычисляемых трансформаций

	    transformations := slice.CalcTransformations;

	    // Добавим трансформацию, включим ее и зададим формулу

	    transform := transformations.Add(dss, ds, newIndex);

	    transform.Enabled := True;

	    transform.Expression.AsString := "average({Значение}, setperiod(1989,1993))";

	    (transform.OutputPeriod As IMsDatePeriod).AutoPeriod := MsDateAutoPeriodOptions.None;

	    (transform.OutputPeriod As IMsDatePeriod).Start := DateTime.ComposeDay(1990, 1, 1);

	    (transform.OutputPeriod As IMsDatePeriod).End_ := DateTime.ComposeDay(1990, 12, 31);


	    // Добавим формулу в коллекцию альтернативных иерархий

	    hierarchies.AddDependant(ds, hKey, dss, strId, transform);

	    // Добавим элемент в отметку

	    ds.SelectElement(newIndex, False);

	    // Вычислим аналитическую область данных и обновим таблицу

	    pivot.Refresh;

	End Sub USerProc;


	{ Получение индексов атрибутов измерения фактов }

	Sub GetCustomDimensionAttributesIndexes(customDimension: ICustomDimension; Var nameIndex, idIndex, orderIndex, keyIndex: Integer);

	Var

	    dimElems: ICustomDimElements;

	    attributes: ICustomDimAttributes;

	    attribute: ICustomDimAttribute;

	    i, count: Integer;

	    name, id, order, pKey: ICustomDimAttribute;

	Begin

	    If customDimension = Null Then

	        Return;

	    End If;


	    dimElems := customDimension.Elements;

	    attributes := customDimension.Attributes;

	    name := attributes.Name;

	    id := attributes.Id;

	    order := attributes.Order;

	    pKey := attributes.Primary;

	    count := attributes.Count;

	    For i := 0 To count - 1 Do

	        attribute := attributes.Item(i);

	        If attribute = name Then

	            nameIndex := i;

	            Continue;


	        End If;

	        If attribute = id Then

	            idIndex := i;

	            Continue;

	        End If;

	        If attribute = order Then

	            orderIndex := i;

	            Continue;

	        End If;


	        If attribute = pKey Then

	            keyIndex := i;

	            Continue;

	        End If;

	    End For;

	End Sub GetCustomDimensionAttributesIndexes;


	{ Получение максимального ключа }

	Function GetMaxKey(customDimension: ICustomDimension; attributeId: Integer): Integer;

	Var

	    dimElems: ICustomDimElements;

	    max, item: Integer;

	    i, count: Integer;

	Begin

	    If customDimension = Null Then

	        Return - 1;

	    End If;


	    dimElems := customDimension.Elements;

	    count := dimElems.RowCount;

	    If count > 0 Then

	        max := dimElems.AttributeValue(i, attributeId);

	        For i := 1 To count - 1 Do

	            item := dimElems.AttributeValue(i, attributeId);

	            If item > max Then

	                max := item;

	            End If;


	        End For;

	        If count > max Then

	            max := count;

	        End If;

	        Return max;

	    End If;

	    Return - 1;

	End Function GetMaxKey;


После выполнения примера в коллекцию альтернативных иерархий будет добавлена
 формула преобразования данных.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
