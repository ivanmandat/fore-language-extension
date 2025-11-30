# IStatistics.TDist

IStatistics.TDist
-


# IStatistics.TDist


## Синтаксис


TDist(Value: Double; DegreesOfFreedom: Integer; Tails: Integer): Double;


## Параметры


Value. Значение, для которого требуется вычислить распределение;


DegreesOfFreedom. Целое, указывающее число степеней свободы. Значение должно удовлетворять ограничению: DegreesOfFreedom >= 1;


Tails. Число возвращаемых хвостов распределения. Допустимые значения:


-
1. функция TDist возвращает одностороннее распределение;


-
2. функция TDist возвращает двухстороннее распределение.


## Описание


Метод TDist возвращает процентные точки (вероятность) для t-распределения Стьюдента.


## Комментарии


t-распределение используется для проверки гипотез при малом объеме выборки. Данную функцию можно использовать вместо таблицы критических значений t-распределения.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.TDist(2.96, 56, 1);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Одностороннее распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен результат:


Module execution started


Одностороннее распределение: 0.0022517576411859035


Module execution finished


Полученный результат можно интерпретировать как 0.2251 процента.


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
