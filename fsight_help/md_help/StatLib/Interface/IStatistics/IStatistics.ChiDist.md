# IStatistics.ChiDist

IStatistics.ChiDist
-


# IStatistics.ChiDist


## Синтаксис


ChiDist(X: Double; DegreesOfFreedom: Integer): Double;


## Параметры


X. Значение, для которого требуется вычислить распределение. Значение должно удовлетворять ограничению: X ;>= 0;


DegreesOfFreedom. Число степеней свободы. Допустимые значения берутся из диапазона (1, 10^10).


## Описание


Метод ChiDist возвращает одностороннюю вероятность распределения хи-квадрат.


## Комментарии


Распределение χ2 связано с критерием χ2. Критерий χ2 используется для сравнения предполагаемых и наблюдаемых значений.


Значение вычисляется как ChiDist = P(X>x), где x - это χ2 случайная величина.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

    Begin

    st := New Statistics.Create;

    d0 := st.ChiDist(18.307, 10);

    Debug.WriteLine("Вероятность распределения хи-квадрат: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение вероятности распределения хи-квадрат:


Module execution started


Вероятность распределения хи-квадрат: 0.050000589091398151


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Распределение хи-квадрат](Lib.chm::/05_Statistics/Distribution/Lib_Chi2Distribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
