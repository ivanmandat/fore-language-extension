# IEaxDataAreaHierarchies.GetDependants

IEaxDataAreaHierarchies.GetDependants
-


# IEaxDataAreaHierarchies.GetDependants


## Синтаксис


GetDependants(S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Key: Integer; de: Integer): Array;


## Параметры


S. Отметка измерения, в которой
 находится альтернативная иерархия;


Key. Уникальный ключ аналитической
 области данных;


de. Элемент отметки измерения.


## Описание


Метод GetDependants возвращает
 массив ключей формул преобразования данных из коллекции альтернативных
 иерархий аналитической области данных.


## Комментарии


Параметр Key = -1 используется,
 если в аналитической области используется один срез. Если используется
 больше одного среза данных, то для получения уникального ключа аналитической
 области данных используйте метод [IEaxDataAreaHierarchies.CreateKey](IEaxDataAreaHierarchies.CreateKey.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_GETDEPENDANTS. Отчет содержит:


	- измерение с идентификатором DIC_RF, которое имеет альтернативную
	 иерархию;


	- отредактированную формулу в редакторе выражений.


Добавьте ссылки на системные сборки: Dimension, Express, Metabase, Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    DAHierarchies: IEaxDataAreaHierarchies;

	    Hierarchy: IEaxDataAreaHierarchy;

	    HierarchyInst: IDimHierarchyInstance;

	    Elements: IDimElements;

	    DimElArray, ElArray: IDimElementArray;

	    Pivot: IPivot;

	    DimSel: IDimSelection;

	    Slice: IEaxDataAreaSlice;

	    Key, DimElement: Integer;

	    GetDepArray: Array Of Integer;

	    ElementName: String;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS_GETDEPENDANTS").Bind As IEaxAnalyzer;

	    // Получим срез источника данных

	    DArea := Express.DataArea;

	    // Получим коллекцию иерархий аналитической области

	    DAHierarchies := DArea.Hierarchies;

	    // Получим иерархию аналитической области

	    Hierarchy := DAHierarchies.Item(0);

	    // Получим данные альтернативной иерархии

	    HierarchyInst := Hierarchy.Hierarchy;

	    // Получим отметку

	    Pivot := Express.Pivot;

	    DimSel := Pivot.Selection.FindById("DIC_RF");

	    // Получим срез данных

	    Slice := DArea.Slices.Item(0);

	    // Получим ключ измерения

	    Key := DAHierarchies.CreateKey(Slice.Key, HierarchyInst.Key);

	    // Получим массив выделенных элементов

	    ElArray := Dimsel.SelectedElementArray(Null);

	    // Получим все элементы измерения

	    Elements := ElArray.Elements;

	    // Получим индекс элемента в измерении

	    DimElement := ElArray.Element(5);

	    // Получим наименование элемента и выведем в окно консоли

	    ElementName := Elements.Name(DimElement);

	    Debug.WriteLine("Наименование выделенного элемента - " + ElementName);

	    // Получим массивключей формул преобразования данных

	    GetDepArray := DAHierarchies.GetDependants(DimSel, Key, DimElement);

	    If GetDepArray <> Null Then

	        // Выведем консоль

	        Debug.WriteLine("Длина полученного массива = " + GetDepArray.Length.ToString);

	        Else

	        Debug.WriteLine("Не найдено элементов в массиве");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли выведутся наименование выделенного
 элемента и длина полученного массива.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
