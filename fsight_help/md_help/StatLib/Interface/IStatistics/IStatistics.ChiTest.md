# IStatistics.ChiTest

IStatistics.ChiTest
-


# IStatistics.ChiTest


## Синтаксис


ChiTest(ActualRange: Array; ExpectedRange: Array):
 Double;


## Параметры


ActualRange. Интервал данных,
 которые содержат наблюдения, подлежащие сравнению с ожидаемыми значениями;


ExpectedRange. Интервал данных,
 который содержит отношение произведений итогов по строкам и столбцам к
 общему итогу.


## Описание


Метод ChiTest возвращает критерий
 независимости: вероятность распределения χ2 (хи-квадрат) для соответствующего
 числа степеней свободы.


## Комментарии


Критерий χ2 используется для определения того, подтверждается ли гипотеза
 экспериментом.


Массивы ActualRange и ExpectedRange должны совпадать
 по размерам. Также массив ActualRange
 должен содержать только неотрицательные значения, а массив ExpectedRange
 - только положительные.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    y, x: Array Of Double;

Begin

    y := New Double[2, 3];

    x := New Double[2, 3];

    y[0, 0] := 58; y[1, 0] := 35;

    y[0, 1] := 11; y[1, 1] := 25;

    y[0, 2] := 10; y[1, 2] := 23;

    x[0, 0] := 45.35; x[1, 0] := 47.65;

    x[0, 1] := 17.56; x[1, 1] := 18.44;

    x[0, 2] := 16.09; x[1, 2] := 16.91;

    st := New Statistics.Create;

    d0 := st.ChiTest(y, x);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Значение критерия
 независимости: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено значение
 критерия независимости.


См. также:


[IStatistics](IStatistics.htm) |
 [Хи-тест](Lib.chm::/05_Statistics/ChiTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
