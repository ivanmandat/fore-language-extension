# IStatistics.Slope

IStatistics.Slope
-


# IStatistics.Slope


## Синтаксис


Slope(KnownYs: Array; KnownXs: Array): Double;


## Параметры


KnownYs. Независимый ряд;


KnownXs. Зависимый ряд.


## Описание


Метод Slope возвращает наклон
 линии линейной регрессии.


## Комментарии


Наклон определяется как частное от деления расстояния по вертикали на
 расстояние по горизонтали между двумя любыми точками прямой, то есть наклон
 - это скорость изменения значений вдоль прямой.


Уравнение наклона линии регрессии:


![](Intercept1.gif)


Для корректного расчета ряды KnownYs
 и KnownXs:


	- должны иметь равное количество точек;


	- должны быть неконстантными;


	- должны содержать больше трех точек.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y, x: Array Of Double;

Begin

    y := New Double[10];

    y[00] := 1.6; y[05] := 2.1;

    y[01] := 1.7; y[06] := 2.2;

    y[02] := 1.8; y[07] := 2.3;

    y[03] := 1.9; y[08] := 2.4;

    y[04] := 2; y[09] := 2.8;

    x := New Double[10];

    x[00] := 2; x[05] := 6;

    x[01] := 4; x[06] := 15;

    x[02] := 2; x[07] := 17;

    x[03] := 5; x[08] := 14;

    x[04] := 12; x[09] := 3;

    st := New Statistics.Create;

    d0 := st.Slope(y, x);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Наклон: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен наклон
 линии линейной регрессии.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
