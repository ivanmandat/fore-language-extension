# IPivotDimensionSettings.KeepLeafParents

IPivotDimensionSettings.KeepLeafParents
-


# IPivotDimensionSettings.KeepLeafParents


## Синтаксис


KeepLeafParents: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство KeepLeafParents определяет,
 будут ли отображаться родительские элементы для листьевых элементов измерения.


## Комментарии


Листьевые элементы - это элементы, у которых нет отмеченных дочерних
 элементов.


Для определения, отображаются ли только родительские элементы, используйте
 [IPivotDimensionSettings.GetKeepLeafParents](IPivotDimensionSettings.GetKeepLeafParents.htm).


Свойство KeepLeafParents используется
 в паре со свойством [IPivotDimensionSettings.LeafElementsOnly](IPivotDimensionSettings.LeafElementsOnly.htm).
 Если [IPivotDimensionSettings.LeafElementsOnly](IPivotDimensionSettings.LeafElementsOnly.htm)
 имеет состояние TriState.OnOption,
 то можно использовать свойство KeepLeafParents.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «EAX_LEAF_SETT», содержащего таблицу с данными.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    mb: IMetabase;

    Eax: IEaxAnalyzer;

    Dim: IPivotDimension;

    Pivot: IPivot;

    PivotDimSett: IPivotDimensionSettingsEx;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем регламентный отчет

    Eax := mb.ItemById("EAX_LEAF_SETT").Edit As IEaxAnalyzer;

    // Получаем настройки отображения таблицы данных

    Pivot := Eax.Pivot;

    // Получаем первое измерение в боковике таблицы

    Dim := Pivot.LeftHeader.PivotDim(0);

    // Получаем настройки измерения

    PivotDimSett := Dim.Settings;

    // Отображаем только листьевые элементы

    If Not PivotDimSett.IsLeafElementsOnly Then

        PivotDimSett.LeafElementsOnly := TriState.OnOption;

    End If;

    // Отображаем родительские элементы для листьевых элементов

    If Not PivotDimSett.GetKeepLeafParents Then

        PivotDimSett.KeepLeafParents := TriState.OnOption;

    End If;

    // Сохраняем изменения

    (Eax As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для первого измерения в боковике таблицы
 было настроено отображение листьевых элементов и их родительских элементов.


См. также:


[IPivotDimensionSettings](IPivotDimensionSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
