# IEaxGrid.DrillCell

IEaxGrid.DrillCell
-


# IEaxGrid.DrillCell


## Синтаксис


DrillCell(Row: Integer; Column: Integer; DrillType:
 [EaxDrillType](../../Enums/EaxDrillType.htm));


## Параметры


Row. Индекс строки, в которой
 расположена ячейка;


Column. Индекс столбца, в котором
 расположена ячейка;


DrillType. Способ детализации,
 который необходимо применить для ячейки.


## Описание


Метод DrillCell осуществляет
 детализацию данных в указанной ячейке таблицы.


## Комментарии


Метод доступен для использования, если свойство [IsCellDrillable](IEaxGrid.IsCellDrillable.htm)
 для указанной ячейки возвращает значение True.
 При выполнении метода DrillCell
 будет изменена отметка в измерениях шапки/боковика, по которым доступна
 детализация. В таблицу будут загружены данные в соответствии с новой отметкой.
 Одни и те же ячейки таблицы до и после детализации будут иметь различную
 привязку к источнику данных: при детализации может измениться источник,
 ячейкам будет соответствовать другая отметка в измерениях. Для получения
 информации о привязке ячейки таблицы к источнику данных используйте метод
 [DrillCellResult](IEaxGrid.DrillCellResult.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT. Экспресс-отчёт построен на источнике
 данных, у которого в шапке имеется календарное измерение с несколькими
 уровнями элементов.


Добавьте ссылки на системные сборки: Express, Metabase, Tab.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    DataRange: ITabRange;

	    DrillResult: IEaxDrillCellResult;

	    Row, Column: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие экспресс-отчёта

	    Expr := Mb.ItemById("EXPRESS_REPORT").Open(Null) As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    // Диапазон ячеек с данными

	    DataRange := Grid.SpecificRange(EaxRangeType.Internal);

	    // Координаты первой ячейки с данными

	    Row := DataRange.Top;

	    Column := DataRange.Left;

	    // Проверка на возможность детализации

	    If Grid.IsCellDrillable(Row, Column, EaxDrillType.Down) Then

	        // Информация о привязки ячейки к источнику данных до детализации данных

	        Debug.WriteLine("До детализации:");

	        DrillResult := Grid.DrillCellResult(Row, Column);

	        Debug.WriteLine("Ячейка (" + Row.ToString + ", " + Column.ToString + ") соответствует отметке:");

	        ShowCellSelection(DrillResult.Selection);

	        // Детализация данных

	        Grid.DrillCell(Row, Column, EaxDrillType.Down);

	        // Информация о привязки ячейки к источнику данных после детализации данных

	        Debug.WriteLine("После детализации:");

	        DrillResult := Grid.DrillCellResult(Row, Column);

	        Debug.WriteLine("Ячейка (" + Row.ToString + ", " + Column.ToString + ") соответствует отметке:");

	        ShowCellSelection(DrillResult.Selection);

	    End If;

	End Sub UserProc;


	Sub ShowCellSelection(DimSS: IDimSelectionSet);

	Var

	    DimS: IDimSelection;

	Begin

	    Debug.Indent;

	    For Each DimS In DimSS Do

	        Debug.WriteLine(DimS.Dimension.Name + ": " + DimS.Element(0).ToString);

	    End For;

	    Debug.Unindent;

	End Sub ShowCellSelection;


При выполнении примера будет открыт экспресс-отчёт и получены координаты
 первой ячейки с данными. Будет осуществлена проверка на возможность детализации
 в данной ячейке. Если детализация возможна, то она будет осуществлена.
 В консоль среды разработки будет выведена информация о соответствии ячейки
 и отметки в матрице с данными источника до и после детализации.


См. также:


[IEaxGrid](IEaxGrid.htm)
 | [IEaxGrid.DrillRange](IEaxGrid.DrillRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
