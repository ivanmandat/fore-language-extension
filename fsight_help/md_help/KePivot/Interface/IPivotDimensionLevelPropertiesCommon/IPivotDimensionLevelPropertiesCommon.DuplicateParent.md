# IPivotDimensionLevelPropertiesCommon.DuplicateParent

IPivotDimensionLevelPropertiesCommon.DuplicateParent
-


# IPivotDimensionLevelPropertiesCommon.DuplicateParent


## Синтаксис


DuplicateParent: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство DuplicateParent определяет,
 будут ли повторяться [элементы
 уровня для дочерних](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm#parent_after).


## Комментарии


Для получения признака того, повторяются ли элементы уровня для дочерних,
 используйте [IPivotDimensionLevelPropertiesCommon.IsDuplicateParent](IPivotDimensionLevelPropertiesCommon.IsDuplicateParent.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS». Источником данных отчета является куб, содержащий
 многоуровневые измерения.


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

    If Not LHeader.IsDuplicateParent Then

        LHeader.DuplicateParent := TriState.OnOption;

    End If;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера родительские элементы иерархии будут отображаться
 в боковике таблицы до и после дочерних элементов.


См. также:


[IPivotDimensionLevelPropertiesCommon](IPivotDimensionLevelPropertiesCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
