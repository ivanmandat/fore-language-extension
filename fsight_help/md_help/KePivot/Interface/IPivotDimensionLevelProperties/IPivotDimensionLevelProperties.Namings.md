# IPivotDimensionLevelProperties.Namings

IPivotDimensionLevelProperties.Namings
-


# IPivotDimensionLevelProperties.Namings


## Синтаксис


Namings: [IPivotDimNamings](../IPivotDimNamings/IPivotDimNamings.htm);


## Описание


Свойство Namings возвращает
 коллекцию наименований элементов.


## Комментарии


Для работы с наименованием элементов измерения используйте свойство
 [IPivotDimNaming.Expression](../IPivotDimNaming/IPivotDimNaming.Expression.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS». Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Dim: IPivotDimension;

    Namings: IPivotDimNamings;

    Naming: IPivotCustomDimNaming;

    Expression: String;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим указанное измерение

    Dim := Pivot.Dimensions.Item(0);

    // Получим коллекцию наименований измерения

    Namings := Dim.Namings;

    // Получим пользовательское наименование измерения

    Naming := Namings.CustomNaming;

    // Получим выражение наименования и выведем в окно консоли

    Expression := Naming.Expression;

    If Expression.Length = 0 Then

        Debug.WriteLine("Выражение не задано") Else

        Debug.WriteLine("Выражение - " + Expression);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли выведется выражение наименования
 первого элемента измерения.


См. также:


[IPivotDimensionLevelProperties](IPivotDimensionLevelProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
