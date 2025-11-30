# IPivotDimension.Settings

IPivotDimension.Settings
-


# IPivotDimension.Settings


## Синтаксис


Settings: [IPivotDimensionSettingsEx](../IPivotDimensionSettingsEx/IPivotDimensionSettingsEx.htm);


## Описание


Свойство Settings возвращает
 настройки измерения источника данных.


## Комментарии


В настройках хранятся:


	- настройки фильтрации данных измерения;


	- настройки для работы с листьевыми элементами.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылку на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Dim: IPivotDimension;

    Settings: IPivotDimensionSettingsEx;

    Filter: IPivotDimensionFilterSettings;

    Cond: IExpression;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим измерение из коллекции

    Dim := Pivot.Dimensions.Item(0);

    // Получим настройки измерения

    Settings := Dim.Settings;

    // Получим настройки фильтрации измерения

    Filter := Settings.Filter;

    // Получим выражение

    Cond := Filter.Condition;

    If Not Cond.Empty Then

        Debug.WriteLine("Выражение не задано") Else

        Debug.WriteLine("Выражение - " + Cond.AsString);

    End If;

    // Отобразим только листьевые элементы измерения

    If Not Settings.IsLeafElementsOnly Then

        Settings.LeafElementsOnly := TriState.OnOption;

    End If;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в таблице будут отображаться только те элементы,
 которые не имеют отмеченных дочерних элементов.


См. также:


[IPivotDimension](IPivotDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
