# IStatistics.FInv

IStatistics.FInv
-


# IStatistics.FInv


## Синтаксис


FInv(Probability: Double; DegreesOfFreedom1: Integer; DegreesOfFreedom2: Integer): Double;


## Параметры


Probability. Значение вероятности, для которого вычисляется обратная функция распределения. Допустимые значения берутся из диапазона [0, 1];


DegreesOfFreedom1. Первое число степеней свободы. Область допустимых значений: [1, 10^10);


DegreesOfFreedom2. Второе число степеней свободы. Область допустимых значений: [1, 1010).


## Описание


Метод FInv возвращает обратное значение для F-распределения вероятностей.


Если Probability = [FDist](IStatistics.FDist.htm)(Value ;…), то FInv(Probability ;…) = Value.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.FInv(0.00936, 6, 4);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Обратное: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено обратное значение для F-распределения вероятностей:


Module execution started


Обратное: 15.756332252513578


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Обратная функция F-распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_FDist.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
