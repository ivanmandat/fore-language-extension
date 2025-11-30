# IEaxGrid.DrillRange

IEaxGrid.DrillRange
-


# IEaxGrid.DrillRange


## Синтаксис


DrillRange(Range: [ITabRange](TabSheet.chm::/Intro/Hierarchy/ITabRange.htm);
 [DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm) =
 1]);


## Параметры


Range. Диапазон ячеек таблицы;


DrillType. Способ детализации,
 который необходимо применить для диапазона ячеек.


## Описание


Метод DrillRange осуществляет
 детализацию данных в указанном диапазоне ячеек таблицы.


## Комментарии


Метод доступен для использования, если свойство [IsRangeDrillable](IEaxGrid.IsRangeDrillable.htm)
 для указанного диапазона ячеек возвращает значение True.
 При выполнении метода DrillRange
 будет изменена отметка в измерениях шапки/боковика, по которым доступна
 детализация. В таблицу будут загружены данные в соответствии с новой отметкой.
 Одни и те же ячейки таблицы до и после детализации будут иметь различную
 привязку к источнику данных: при детализации может измениться источник,
 ячейкам будет соответствовать другая отметка в измерениях. Для получения
 информации о привязке диапазона ячеек к источнику данных используйте метод
 [DrillRangeResult](IEaxGrid.DrillRangeResult.htm).


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

	    DataRange, DrillRange: ITabRange;

	    DrillResult: IEaxDrillRangeResult;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие экспресс-отчёта

	    Expr := Mb.ItemById("EXPRESS_REPORT").Open(Null) As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    // Диапазон ячеек с данными

	    DataRange := Grid.SpecificRange(EaxRangeType.Internal);

	    // Получение диапазона, состоящего из трёх ячеек первой строки с данными

	    DrillRange := Grid.TabSheet.Cells(DataRange.Top, DataRange.Left, DataRange.Top, DataRange.Left + 2);

	    // Проверка на возможность детализации

	    If Grid.IsRangeDrillable(DrillRange) Then

	        // Информация о привязки ячейки к источнику данных до детализации данных

	        Debug.WriteLine("До детализации:");

	        DrillResult := Grid.DrillRangeResult(DrillRange);

	        Debug.WriteLine("Диапазону ячеек (" + DrillRange.Address + ") соответствует отметка:");

	        ShowRangeSelection(DrillResult.Selection);

	        // Детализация данных

	        Grid.DrillRange(DrillRange);

	        // Информация о привязки ячейки к источнику данных после детализации данных

	        Debug.WriteLine("После детализации:");

	        DrillResult := Grid.DrillRangeResult(DrillRange);

	        Debug.WriteLine("Диапазону ячеек (" + DrillRange.Address + ") соответствует отметка:");

	        ShowRangeSelection(DrillResult.Selection);

	    End If;

	End Sub UserProc;


	Sub ShowRangeSelection(DimSS: IDimSelectionSet);

	Var

	    DimS: IDimSelection;

	    i, c: Integer;

	    s: String;

	Begin

	    Debug.Indent;

	    For Each DimS In DimSS Do

	        c := DimS.SelectedCount;

	        Debug.Write(DimS.Dimension.Name + ". Отмечено: " + c.ToString);

	        If c = 1 Then

	            Debug.WriteLine(". Элемент: " + DimS.Element(0).ToString);

	        Else

	            s := "";

	            For i := 0 To c - 1 Do

	                s := s + DimS.Element(i).ToString + ' ';

	            End For;

	            Debug.WriteLine(". Элементы: " + String.Trim(s));

	        End If;

	    End For;

	    Debug.Unindent;

	End Sub ShowRangeSelection;


При выполнении примера будет открыт экспресс-отчёт, получен диапазон
 ячеек с данными. Из этого диапазона будет выделен диапазон, состоящий
 из трёх ячеек. Будет осуществлена проверка на возможность детализации
 в данном диапазоне ячеек. Если детализация возможна, то она будет осуществлена.
 В консоль среды разработки будет выведена информация о соответствии диапазона
 ячеек и отметки в матрице с данными источника до и после детализации.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
