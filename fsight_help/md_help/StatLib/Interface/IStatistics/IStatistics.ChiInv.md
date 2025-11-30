# IStatistics.ChiInv

IStatistics.ChiInv
-


# IStatistics.ChiInv


## Синтаксис


ChiInv(Probability: Double; DegreesOfFreedom: Integer):
 Double;


## Параметры


Probability. Вероятность, связанная
 с распределением χ2 (хи-квадрат). Значение должно удовлетворять ограничению:
 0 <= Probability <;= 1;


DegreesOfFreedom. Число степеней
 свободы. Допустимые значения берутся из диапазона (1, 10^10).


## Описание


Метод ChiInv возвращает значение,
 обратное к односторонней вероятности распределения хи-квадрат.


## Комментарии


Функция используется для сравнения наблюдаемых результатов с ожидаемыми.


Если вероятность = [ChiDist](IStatistics.ChiDist.htm)(x; …),
 то ChiInv(вероятность; …) = x.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.ChiInv(0.8, 10);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Обратное к односторонней вероятности распределения хи-квадрат: " + d0.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено значение,
 обратное к односторонней вероятности распределения хи-квадрат.


См. также:


[IStatistics](IStatistics.htm) |
 [Распределение
 хи-квадрат](Lib.chm::/05_Statistics/Distribution/Lib_Chi2Distribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
