# IStatistics.NormInv

IStatistics.NormInv
-


# IStatistics.NormInv


## Синтаксис


NormInv(Probability: Double; Mean: Double; StandartDeviation:
 Double): Double;


## Параметры


Probability. Вероятность, соответствующая
 нормальному распределению. Допустимые значения берутся из диапазона [0, 1];


Mean. Среднее арифметическое
 распределения;


StandartDeviation. Стандартное
 отклонение распределения. Значение должно удовлетворять ограничению: StandartDeviation > 0.


## Описание


Метод NormInv возвращает обратное
 нормальное распределение.


## Комментарии


Если Mean = 0 и StandartDeviation
 = 1, то метод использует стандартное нормальное распределение ([NormDist](IStatistics.NormDist.htm)).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.NormInv(0.99984,3,2.5);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Обратное нормальное распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено обратное нормальное
 распределение:


Выполнение модуля начато


Обратное нормальное распределение: 11.9963675517908


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
