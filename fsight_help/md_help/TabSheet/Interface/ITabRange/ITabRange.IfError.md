# ITabRange.IfError

ITabRange.IfError
-


# ITabRange.IfError


## Синтаксис


IfError(Var ValueIfError: Variant);


## Параметры


ValueIfError. Сообщение, которое
 отобразится в случае, если в ячейке есть ошибка.


## Описание


Метод IfError возвращает значение
 ячейки, если оно не содержит ошибки, иначе заданное значение.


## Пример


Для выполнения примера в репозитории предполагается наличие реглматентного
 отчета с идентификатором RO. Отчет содержит данные.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Regrep: IPrxReport;

	    Table: IPrxTable;

	    Tsheet: ITabSheet;

	    Range, DestRange: ITabRange;

	    value: Variant;

	    i, j: integer;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем регламентный отчёт

	    Regrep := mb.ItemById("RO").Bind As IPrxReport;

	    // Получаем таблицу листа регламентного отчёта

	    Table := Regrep.Activesheet As IPrxTable;

	    TSheet := Table.TabSheet;

	    // Определяем диапазон

	    Range := TSheet.Cells(1, 1, 2, 6);

	    // Определяем ячейку с ошибкой

	    For i := Range.Top To Range.Bottom Do

	        For j := Range.Left To Range.Right Do

	            value := "в ячейке содержится ошибка";

	            DestRange := TSheet.Cell(i, j);

	            DestRange.IfError(value);

	            Debug.WriteLine("Значение ячейки " + DestRange.Address + ": " + (value As String));

	        End For;

	    End For;

	    // Определяем максимальное и минимальное значение диапазона

	    Range.Recalc;

	    value1 := Range.MaxValue;

	    value2 := Range.MinValue;

	    Debug.WriteLine("Максимальное значение: " + value1 As String);

	    Debug.WriteLine("Минимальное значение: " + value2 As String);

	    Try

	    If value1.IsEmpty Then

	        Raise New TabNoDataException.CreateEx;

	    End If;

	    Except On ex: Exception Do

	        Debug.WriteLine(ex.Message);

	    End Try;

	    // Проверяем тип значения в ячейке

	    Range := TSheet.Cell(2, 1);

	    Debug.WriteLine("Значение логическое: " + TabCellValidate.IsBoolean(value1).ToString);

	    Debug.WriteLine("Значение числовое: " + TabCellValidate.IsNumber(value1).ToString);

	    Debug.WriteLine("Значение текстовое: " + TabCellValidate.IsText(value1).ToString);

	    Debug.WriteLine("Значение с ошибкой: " + TabCellValidate.IsError(value1).ToString);

	    Debug.WriteLine("Значение недоступно: " + TabCellValidate.IsNA(value1).ToString);

	End Sub UserProc;


В результате примера в окно консоли будет выведены значения ячеек, если
 данные без ошибок, или заданное сообщение, если в ячейке ошибка.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
