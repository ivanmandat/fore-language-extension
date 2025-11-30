# IPivotDimension.Levels

IPivotDimension.Levels
-


# IPivotDimension.Levels


## Синтаксис


Levels: [IPivotDimensionLevels](../IPivotDimensionLevels/IPivotDimensionLevels.htm);


## Описание


Свойство возвращает коллекцию уровней измерения.


## Комментарии


Для получения необходимого уровня измерения, используйте [IPivotDimensionLevels.Item](../IPivotDimensionLevels/IPivotDimensionLevels.Item.htm).


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

    Levels: IPivotDimensionLevels;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим измерение из коллекции

    Dim := Pivot.Dimensions.Item(0);

    // Получим коллекцию уровней измерения и выведем количество в окно консоли

    Levels := Dim.Levels;

    Debug.WriteLine("Количество уровней измерения = " + Levels.Count.ToString);

End Sub UserProc;


См. также:


[IPivotDimension](IPivotDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
