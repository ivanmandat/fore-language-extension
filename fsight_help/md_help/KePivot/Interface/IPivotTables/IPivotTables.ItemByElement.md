# IPivotTables.ItemByElement

IPivotTables.ItemByElement
-


# IPivotTables.ItemByElement


## Синтаксис


ItemByElement(Element: Integer): [IPivotTable](../IPivotTable/IPivotTable.htm);


## Параметры


Element. Индекс элемента измерения.


## Описание


Свойство ItemByElement возвращает
 вариант таблицы с данными по индексу элемента.


## Комментарии


Для получения варианта таблицы по ее индексу используйте свойство [IPivotTables.Item](IPivotTables.Item.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS». Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub USerProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    PivTable: IPivotTable;

    Elements: IDimElements;

    Element: integer;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим элемент таблицы

    Elements := Pivot.DimItem(0).Elements;

    Element := Elements.Elements.Element(0);

    // Получим таблицу по элементу и выведем количество ее строк и столбцов

    PivTable := Pivot.ObtainTables.ItemByElement(Element);

    Debug.WriteLine("Количество строк = " + PivTable.RowCount.ToString);

    Debug.WriteLine("Количество столбцов = " + PivTable.ColumnCount.ToString);

End Sub USerProc;


После выполнения примера в окно консоли выведется количество строк и
 столбцов полученного варианта таблицы.


См. также:


[IPivotTables](IPivotTables.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
