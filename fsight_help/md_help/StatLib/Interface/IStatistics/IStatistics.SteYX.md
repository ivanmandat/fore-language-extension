# IStatistics.SteYX

IStatistics.SteYX
-


# IStatistics.SteYX


## Синтаксис


SteYX(KnownYs: Array; KnownXs: Array): Double;


## Параметры


KnownYs. Независимый ряд;


KnownXs. Зависимый ряд.


## Описание


Метод SteYX возвращает стандартную
 ошибку предсказанных значений Y
 для каждого значения X в регрессии.


## Комментарии


Стандартная ошибка - это мера ошибки предсказанного значения Y
 для отдельного значения X.


Для корректного расчета ряды KnownYs
 и KnownXs:


	- должны иметь равное количество точек;


	- должны быть неконстантными.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y, x: Array Of Double;

Begin

    y := New Double[8];

    y[00] := 6; y[04] := 21;

    y[01] := 7; y[05] := 24;

    y[02] := 9; y[06] := 25;

    y[03] := 15; y[07] := 18;

    x := New Double[8];

    x[00] := 20; x[04] := 40;

    x[01] := 28; x[05] := 43;

    x[02] := 31; x[06] := 51;

    x[03] := 38; x[07] := 47;

    st := New Statistics.Create;

    d0 := st.SteYX(y, x);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Стандартная ошибка: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено значение
 стандартной ошибки.


См. также:


[IStatistics](IStatistics.htm)
 | [Стандартная
 ошибка](Lib.chm::/05_Statistics/UiModelling_StdError.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
