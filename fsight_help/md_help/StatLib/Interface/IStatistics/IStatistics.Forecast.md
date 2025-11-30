# IStatistics.Forecast

IStatistics.Forecast
-


# IStatistics.Forecast


## Синтаксис


Forecast(Value: Double; KnownYs: Array; KnownXs:
 Array): Double;


## Параметры


Value. Индекс точки, для которой
 предсказывается значение;


KnownYs. Зависимый массив данных;


KnownXs. Независимый массив
 данных.


Примечание.
 KnownYs и KnownXs
 должны быть непусты и содержать одинаковое количество точек данных.


## Описание


Метод Forecast вычисляет будущее
 значение по существующим значениям.


## Комментарии


Предсказываемое значение - это y
 значение, соответствующее заданному x-значению.
 Известные значения - это KnownYs
 и KnownXs значения, а новое значение
 предсказывается с использованием линейной регрессии.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y, x: Array Of Double;

Begin

    y := New Double[10];

    x := New Double[10];

    y[00] := 1.6; x[00] := 2;

    y[01] := 1.7; x[01] := 4;

    y[02] := 1.8; x[02] := 2;

    y[03] := 1.9; x[03] := 5;

    y[04] := 2; x[04] := 12;

    y[05] := 2.1; x[05] := 6;

    y[06] := 2.2; x[06] := 15;

    y[07] := 2.3; x[07] := 17;

    y[08] := 2.4; x[08] := 14;

    y[09] := 2.8; x[09] := 3;

    st := New Statistics.Create;

    d0 := st.Forecast(30,y,x);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Прогноз: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено прогнозное значение:


Выполнение модуля начато


Прогноз: 2.60857142857143


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)
 | [Линейная
 регрессия](Lib.chm::/01_Regression_models/Line_Regression.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
