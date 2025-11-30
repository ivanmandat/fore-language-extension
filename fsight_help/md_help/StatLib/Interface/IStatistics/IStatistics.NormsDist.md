# IStatistics.NormsDist

IStatistics.NormsDist
-


# IStatistics.NormsDist


## Синтаксис


NormsDist(Value: Double): Double;


## Параметры


Value. Значение, для которого строится распределение.


## Описание


Метод NormsDist возвращает стандартное нормальное распределение.


## Комментарии


Это распределение имеет среднее, равное нулю, и стандартное отклонение, равное единице. Эта функция используется вместо таблицы для стандартной нормальной кривой.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.NormsDist(1.6);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Нормальное распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение стандартного нормального распределения:


Module execution started


Нормальное распределение: 0.94520070830044212


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Функция стандартного нормального распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_Norms.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
