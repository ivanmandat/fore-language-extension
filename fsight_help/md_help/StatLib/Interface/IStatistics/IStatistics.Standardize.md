# IStatistics.Standardize

IStatistics.Standardize
-


# IStatistics.Standardize


## Синтаксис


Standardizedouble(Value: Double; Mean: Double; StandartDeviation:
 Double): Double;


## Параметры


Value. Нормализуемое значение;


Mean. Среднее арифметическое
 распределения;


StandartDeviation. Стандартное
 отклонение распределения. Значение должно удовлетворять ограничению: StandartDeviation > 0.


## Описание


Метод Standardize возвращает
 нормализованное значение для распределения, характеризуемого средним и
 стандартным отклонением.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.Standardize(34,21,1.5);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Нормализованное значение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено нормализованное
 значение для распределения:


Выполнение модуля начато


Нормализованное значение: 8.66666666666667


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
