# IPivotTable.IsStairCell

IPivotTable.IsStairCell
-


# IPivotTable.IsStairCell


## Синтаксис


IsStairCell(Row: Integer; Column: Integer): Boolean;


## Описание


Свойство IsStairCell возвращает
 признак использования в ячейке [ступенчатой
 иерархии](UiAnalyticalArea.chm::/TableView/Layout/Layout_Dim.htm#stairs_hierarchy).


## Параметры


Row. Индекс строки ячейки;


Column. Индекс столбца ячейки.


## Комментарии


Свойство возвращает значение True,
 если ячейка является ступенькой иерархии.


## Пример


Для выполнения примера необходимо наличие экспресс-отчета с идентификатором
 «EXPRESS». В отчете в боковике на вкладке «[Размещение](UiAnalyticalArea.chm::/TableView/Layout/Layout_Dim.htm)»
 должно быть включено использование ступенчатой иерархии для заголовков
 (см. «[Включение
 ступенчатой иерархии](../../../UiAnalyticalArea/TableView/Layout/Layout_Dim.htm#stairs_hierarchy)» или «[StairsHierarchy](../IPivotHeader/IPivotHeader.StairsHierarchy.htm)»).
 В боковике должно быть минимум 2 измерения.


Добавьте ссылки на системные сборки Pivot, Express и Metabase;


			Sub UserProc;

Var

   MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Table: IPivotTable;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчета

    Pivot := Express.Pivot;

    // Получим свойства
 таблицы

    Table := Pivot.ObtainTable;

    // Проверим является ли ячейка
 ступенькой иерархии

    If Table.IsStairCell(0, 0) Then

        Debug.WriteLine("Ячейка
 таблицы является ступенькой иерархии");

     Else

        Debug.WriteLine("Ячейка
 таблицы не является ступенькой иерархии");

    End If;

End Sub UserProc;


После выполнения примера будет проведена проверка является ли ячейка
 ступенькой иерархии, а в консоли будет выведено соответствующее сообщение.


См. также:


[IPivotTable](IPivotTable.htm)
 | [Ступенчатая
 иерархия](../../../UiAnalyticalArea/TableView/Layout/Layout_Dim.htm#stairs_hierarchy) | [StairsHierarchy](../IPivotHeader/IPivotHeader.StairsHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
