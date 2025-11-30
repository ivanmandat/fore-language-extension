# IMissingData.Method

IMissingData.Method
-


# IMissingData.Method


## Синтаксис


Method: [MissingDataMethod](../../Enums/MissingDataMethod.htm);


## Описание


Свойство Method определяет метод
 обработки пропусков.


## Комментарии


Пропуск является пустым значением в массиве данных.


По умолчанию в большинстве методов используется MissingDataMethod.Casewise.
 В тех методах, в которых MissingDataMethod.Casewise
 неприменим, используется MissingDataMethod.None.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    LR: ISmLinearRegress;

	    serie: Array[10] Of Double;

	    status, i: Integer;

	    Intercept: IIntercept;

	Begin

	    LR := New SmLinearRegress.Create;

	    serie[0] := 0;

	    serie[1] := 0;

	    serie[2] := 0.878471616;

	    serie[3] := 0.85401205;

	    serie[4] := Double.Nan;

	    serie[5] := 1.28083579;

	    serie[6] := Double.Nan;

	    serie[7] := 4.237308214;

	    serie[8] := 4.864879297;

	    serie[9] := 7.765499027;

	    LR.Explained.Value := serie;

	    LR.Forecast.LastPoint := 40;

	    // Метод обработки пропусков

	    LR.MissingData.Method := MissingDataMethod.NPointsAverage;

	    // Дополнительный параметр для метода обработки пропусков

	    LR.MissingData.MethodParameter := 2;

	    Intercept := LR.ModelCoefficients.Intercept;

	    Intercept.Mode := InterceptMode.ManualEstimate;

	    Intercept.Estimate := 10;

	    status := LR.Execute;

	    Debug.WriteLine("Полученный ряд");

	    Debug.Indent;

	    For i := 0 To LR.Explained.Value.Length - 1 Do

	        Debug.WriteLine(LR.Explained.Value[i]);

	    End For;

	    Debug.Unindent;

	    Debug.WriteLine("Исходный ряд");

	    Debug.Indent;

	    For i := 0 To LR.Explained.OriginalValue.Length - 1 do

	        Debug.WriteLine(LR.Explained.OriginalValue[i]);

	    End For;

	    Debug.Unindent;

	End Sub UserProc;


В результате выполнения примера заданы настройки:


	- метод обработки пропусков;


	- дополнительный параметр для метода обработки пропусков.


В окно консоли будет выведены исходный и полученный ряды.


См. также:


[IMissingData](IMissingData.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
