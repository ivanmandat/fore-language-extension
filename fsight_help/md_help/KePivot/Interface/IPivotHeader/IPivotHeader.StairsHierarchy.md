# IPivotHeader.StairsHierarchy

IPivotHeader.StairsHierarchy
-


# IPivotHeader.StairsHierarchy


## Синтаксис


StairsHierarchy: Boolean;


## Описание


Свойство StairsHierarchy определяет,
 будет ли использоваться [ступенчатая
 иерархия](UiAnalyticalArea.chm::/TableView/Layout/Layout_Dim.htm#stairs_hierarchy).


## Комментарии


Допустимые значения:


	- True. Ступенчатая иерархия
	 используется;


	- False. По умолчанию.
	 Ступенчатая иерархия не используется.


Целесообразно использовать данное свойство, если по строкам/столбцам
 расположено несколько измерений или несколько уровней одного измерения.


Если свойство принимает значение True,
 то свойство [IPivotDimensionLevelPropertiesCommon.ChildrenBeforeParents](../IPivotDimensionLevelPropertiesCommon/IPivotDimensionLevelPropertiesCommon.ChildrenBeforeParents.htm)
 не учитывается.


Для получения признака того, является ли элемент заголовка таблицы ступенькой
 иерархии, используйте свойство [IPivotTableHeader.IsStairElement](../IPivotTableHeader/IPivotTableHeader.IsStairElement.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. В боковике таблицы по строкам должно быть расположено
 не менее двух измерений.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    LeftHeader: IPivotHeader;

    TableHeader: IPivotTableHeader;

    Dim: IPivotDimension;

    i, Count: Integer;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы

    Pivot := Express.Pivot;

    // Получим коллекцию измерений, расположенных по строкам

    LeftHeader := Pivot.LeftHeader;

    // Выведем наименования полученных измерений

    Count := LeftHeader.DimCount;

    For i := 0 To Count-1 Do

        Dim := LeftHeader.PivotDim(i);

        Debug.WriteLine("Измерение: " + Dim.DimInstance.Name);

    End For;

    // Включим использование ступенчатой иерархии

    LeftHeader.StairsHierarchy := True;

    // Получим свойства заголовка строк таблицы

    TableHeader := Pivot.ObtainTable.LeftHeader;

    // Проверим, является ли элемент с координатой (1,0) ступенькой иерархии

    If Not TableHeader.IsStairElement(1, 0) Then

        Debug.WriteLine

        ("Элемент «" + TableHeader.ElementName(1, 0) + "» заголовка строк таблицы не является ступенькой иерархии") Else

        Debug.WriteLine

        ("Элемент заголовка строк таблицы является ступенькой иерархии");

    End If;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в боковике таблицы будет использоваться ступенчатая
 иерархия. В консоль будут выведены наименования измерений, расположенных
 по строкам, и признак того, является ли элемент с координатой (1,0) ступенькой
 иерархии. Например:


Измерение: Территориальные образования


Измерение: Типы данных


Элемент заголовка строк таблицы является ступенькой
 иерархии


См. также:


[IPivotHeader](IPivotHeader.htm)
 | [Ступенчатая
 иерархия](../../../UiAnalyticalArea/TableView/Layout/Layout_Dim.htm#stairs_hierarchy)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
