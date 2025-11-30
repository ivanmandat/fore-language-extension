# IEaxDataAreaHierarchies.AddEx

IEaxDataAreaHierarchies.AddEx
-


# IEaxDataAreaHierarchies.AddEx


## Синтаксис


AddEx(Slice: [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm);


    DS: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


    Key: Integer;


    [ElementsToCopy: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm)
 = Null];


    [CloneAttributes: Boolean
 = True]): [IEaxDataAreaHierarchy](../IEaxDataAreaHierarchy/IEaxDataAreaHierarchy.htm);


## Параметры


Slice. Срез аналитической области
 данных;


DS. Отметка измерения;


Key. Ключ измерения;


ElementsToCopy. Отметка, в
 которую будут добавлены элементы текущей отметки. Необязательный параметр,
 для игнорирования используйте Null;


CloneAttributes. Признак создания
 связи между атрибутами исходного справочника и измерения в альтернативной
 иерархии. Не обязательный параметр, по умолчанию передаётся True,
 при этом автоматически создаются связи между атрибутами.


## Описание


Метод AddEx добавляет новую
 альтернативную иерархию в коллекции с возможность управления связями атрибутов
 исходного и альтернативного справочников.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего таблицу. Источник экспресс-отчёта
 в своей структуре имеет минимум три измерения.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    DimSS: IDimSelectionSet;

	    Dims: IDimSelection;

	    Hiers: IEaxDataAreaHierarchies;

	    HKey: Integer;

	    Hierarchy: IEaxDataAreaHierarchy;

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    Slice := Report.Grid.Slice;

	    Hiers := Report.DataArea.Hierarchies;

	    DimSS := Report.Pivot.Selection;

	    // ---Создание альтернативной иерархии без привязки атрибутов---

	    Dims := DimSS.Item(1);

	    HKey := Hiers.CreateKey(Slice.Key, Dims.Dimension.Key);

	    Debug.WriteLine(HKey);

	    Hierarchy := Hiers.FindByKey(HKey);

	    If Hierarchy = Null Then

	        Hierarchy := Hiers.AddEx(Slice, Dims, HKey, Null, False);

	    End If;

	    Hiers.PushChangesToDimInstance(Dims, Hierarchy.CustomDimension);

	    // Просмотр информации о привязке атрибутов

	    ShowAttributeInfo(Hierarchy, "---Без привязки атрибутов---");

	    // ---Создание альтернативной иерархии с привязкой атрибутов---

	    Dims := DimSS.Item(2);

	    HKey := Hiers.CreateKey(Slice.Key, Dims.Dimension.Key);

	    Debug.WriteLine(HKey);

	    Hierarchy := Hiers.FindByKey(HKey);

	    If Hierarchy = Null Then

	        Hierarchy := Hiers.AddEx(Slice, Dims, HKey, Null, True);

	    End If;

	    Hiers.PushChangesToDimInstance(Dims, Hierarchy.CustomDimension);

	    ShowAttributeInfo(Hierarchy, "---С привязкой
	 атрибутов---");

	End Sub UserProc;

	Sub ShowAttributeInfo(Hierarchy: IEaxDataAreaHierarchy; Info: String);

	Var

	    DimHierarhy: IDimHierarchy;

	    Attr: IDimAttribute;

	Begin

	    Debug.WriteLine(Info);

	    DimHierarhy := Hierarchy.Hierarchy.Hierarchy;

	    // Просмотр информации о привязке атрибутов

	    For Each Attr In DimHierarhy.Original.Attributes Do

	        If (DimHierarhy.SourceAttribute(Attr) <> Null) Then

	            Debug.WriteLine("Связь атрибутов: " + Attr.Id + " : " + DimHierarhy.SourceAttribute(Attr).Id);

	        End If;

	    End For;

	End Sub ShowAttributeInfo;


При выполнении примера в список альтернативных иерархий аналитической
 области данных будут добавлены две иерархии по двум разным измерениям.
 В первой иерархии не будет привязки атрибутов исходного и альтернативного
 справочника, которые лежат в основе измерения. Связаны будут только атрибуты
 с назначением Ключ и Наименование, которые необходимы для работы иерархии.
 У второй альтернативной иерархии будут настроены связи всех атрибутов.
 Информация о привязках атрибутов будет выведена в консоль среды разработки.


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
