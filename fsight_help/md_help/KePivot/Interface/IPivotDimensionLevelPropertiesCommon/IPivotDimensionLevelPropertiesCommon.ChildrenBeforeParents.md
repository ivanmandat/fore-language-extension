# IPivotDimensionLevelPropertiesCommon.ChildrenBeforeParents

IPivotDimensionLevelPropertiesCommon.ChildrenBeforeParents
-


# IPivotDimensionLevelPropertiesCommon.ChildrenBeforeParents


## Синтаксис


ChildrenBeforeParents: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство ChildrenBeforeParents
 определяет, размещать ли [дочерние
 элементы иерархии перед родительскими](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#locating_child_elements).


## Комментарии


Для получения признака того, размещаются ли дочерние элементы иерархии
 перед родительскими, используйте [IPivotDimensionLevelPropertiesCommon.IsChildrenBeforeParents](IPivotDimensionLevelPropertiesCommon.IsChildrenBeforeParents.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS». Источником данных отчета является куб, который
 содержит в себе измерение, состоящее из нескольких уровней.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    LHeader: IPivotHeader;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим коллекцию измерений, расположенных по строкам

    LHeader := Pivot.LeftHeader;

    // Произведем проверку

    If Not LHeader.IsChildrenBeforeParents Then

        LHeader.ChildrenBeforeParents := TriState.OnOption;

    End If;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера дочерние элементы иерархии в боковике таблицы
 окажутся перед родительскими.


См. также:


[IPivotDimensionLevelPropertiesCommon](IPivotDimensionLevelPropertiesCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
