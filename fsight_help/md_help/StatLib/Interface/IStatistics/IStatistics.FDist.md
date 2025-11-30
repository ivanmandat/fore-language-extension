# IStatistics.FDist

IStatistics.FDist
-


# IStatistics.FDist


## Синтаксис


FDist(Value: Double; DegreesOfFreedomNumerator: Integer; DegreesOfFreedomDenominator: Integer): Double;


## Параметры


Value. Значение, для которого вычисляется функция. Значение должно удовлетворять ограничению: Value >= 0;


DegreesOfFreedomNumerator. Первое число степеней свободы. Область допустимых значений: [1, 10^10);


DegreesOfFreedomDenominator. Второе число степеней свободы. Область допустимых значений: [1, 1010).


## Описание


Метод FDist возвращает F-распределение вероятности.


## Комментарии


Эту функцию можно использовать, чтобы определить, имеют ли два множества данных различные степени разброса результатов.


Значение вычисляется следующим образом: FDist = P( F<x ), где F — это случайная величина, которая имеет F-распределение.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.FDist(15.75, 6, 4);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("F-распределение вероятности: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено F-распределение вероятности:


Module execution started


F-распределение вероятности: 0.0093670218097295956


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Функция F-распределение вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_FDist.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
