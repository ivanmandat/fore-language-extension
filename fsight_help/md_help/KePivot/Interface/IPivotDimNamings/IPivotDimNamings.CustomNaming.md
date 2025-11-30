# IPivotDimNamings.CustomNaming

IPivotDimNamings.CustomNaming
-


# IPivotDimNamings.CustomNaming


## Синтаксис


CustomNaming: [IPivotCustomDimNaming](../IPivotCustomDimNaming/IPivotCustomDimNaming.htm);


## Описание


Свойство CustomNaming возвращает
 пользовательское наименование элемента измерения.


## Комментарии


Для получения количества наименований в коллекции используйте свойство
 [IPivotDimNamings.Count](IPivotDimNamings.Count.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 «EXPRESS».


Добавьте ссылки на системные сборки Metabase, Express, Pivot, Dimensions.


			Sub UserProc;

Var

    Metabase: IMetabase;

    Analyzer: IEaxAnalyzer;

    Pivot: IPivot;

    PivotDim: IPivotDimension;

    Namings: IPivotDimNamings;

    CustomNaming: IPivotCustomDimNaming;

Begin

    Metabase := MetabaseClass.Active;

    Analyzer := Metabase.ItemById("EXPRESS").Bind As IEaxAnalyzer;

    // Получим таблицу экспресс-отчета:

    Pivot := Analyzer.Pivot;

    // Рассмотрим измерение:

    PivotDim := Pivot.Dimensions.Item(3);

    // Коллекция наименований измерения:

    Namings := PivotDim.Namings;

    // Настройка пользовательских наименований и вывод результатов:

    CustomNaming := Namings.CustomNaming;

    CustomNaming.Enabled := True;

    CustomNaming.Expression := "%ID% - %NAME%";

    Debug.WriteLine("Наименование выбранного измерения: " + CustomNaming.Dimension.Name);

    Debug.WriteLine("Назначенное пользовательское наименование 1-го элемента: " + CustomNaming.ElementName(0));

End Sub UserProc;


После выполнения примера в окно консоли будет выведено:


	- наименование выбранного измерения, для элементов которого устанавливается
	 пользовательское наименование;


	- пользовательское наименование первого элемента измерения в формате
	 «Идентификатор - Наименование».


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
