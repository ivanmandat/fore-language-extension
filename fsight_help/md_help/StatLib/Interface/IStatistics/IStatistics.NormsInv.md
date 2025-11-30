# IStatistics.NormsInv

IStatistics.NormsInv
-


# IStatistics.NormsInv


## Синтаксис


NormsInv(Probability: Double): Double;


## Параметры


Probability. Вероятность, соответствующая нормальному распределению. Область допустимых значений: [0, 1].


## Описание


Метод NormsInv возвращает обратное значение стандартного нормального распределения.


## Комментарии


Это распределение имеет среднее равное нулю и стандартное отклонение равное единице.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.NormsInv(0.945);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Обратное нормальное распределение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено обратное значение стандартного нормального распределения:


Module execution started


Обратное нормальное распределение: 1.5981931399231093


Module execution finished


См. также:


[IStatistics](IStatistics.htm) | [Функция стандартного нормального распределения вероятности](Lib.chm::/05_Statistics/Distrib_func/Lib_Norms.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
