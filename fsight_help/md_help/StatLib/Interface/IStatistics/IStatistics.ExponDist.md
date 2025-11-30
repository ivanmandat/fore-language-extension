# IStatistics.ExponDist

IStatistics.ExponDist
-


# IStatistics.ExponDist


## Синтаксис


ExponDist(Value: Double; Lambda: Double; Cumulative: Boolean): Double;


## Параметры


Value. Значение функции. Значение должно удовлетворять ограничению: Value >= 0;


Lambda. Значение параметра. Значение должно удовлетворять ограничению: Lambda > 0;


Cumulative. Логическое значение, которое указывает, какую форму экспоненциальной функции использовать. Если атрибут имеет значение True, то функция ExponDist возвращает интегральную функцию распределения; если этот параметр имеет значение False, то возвращается функция плотности распределения.


## Описание


Метод ExponDist возвращает экспоненциальное распределение.


## Комментарии


Функция используется для моделирования временных задержек между событиями.


## Пример


			Sub UserProc;

Var

st: Statistics;

d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.ExponDist(0.2, 10, True);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Экспоненциальное распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена интегральная функция распределения:


Module execution started


Экспоненциальное распределение: 0.8646647167633873


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Экспоненциальное распределение](Lib.chm::/05_Statistics/Distribution/Lib_ExponentialDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
