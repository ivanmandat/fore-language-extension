# IStatistics.FTest

IStatistics.FTest
-


# IStatistics.FTest


## Синтаксис


FTest(A1: Array; A2: Array): Double;


## Параметры


A1. Первый ряд данных;


A2. Второй ряд данных.


## Описание


Метод FTest возвращает результат
 F-теста.


## Комментарии


 F-тест возвращает одностороннюю вероятность того, что дисперсии
 рядов A1 и A2
 различаются несущественно. Эта функция используется для того, чтобы определить
 имеют ли две выборки различные дисперсии.


Для корректного расчета ряды A1
 и A2:


	- должны содержать две или более точки;


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

    y[03] := 15; y[07] := 17;

    x := New Double[8];

    x[00] := 20; x[04] := 40;

    x[01] := 28; x[05] := 43;

    x[02] := 31; x[06] := 51;

    x[03] := 38; x[07] := 31;

    st := New Statistics.Create;

    d0 := st.FTest(y, x);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("F-тест: " + d0.ToString);

    End If;

End Sub UserProc


В результате выполнения примера в окно консоли будет выведен результат
 F-теста.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
