# IStatistics.TInv

IStatistics.TInv
-


# IStatistics.TInv


## Синтаксис


TInv(Probability: Double; DegreesOfFreedom: Integer):
 Double;


## Параметры


Probability. Вероятность, соответствующая
 двустороннему распределению. Область допустимых значений: [0, 1];


DegreesOfFreedom. Число степеней
 свободы, характеризующее распределение. Значение должно удовлетворять
 ограничению: DegreesOfFreedom >= 1.


## Описание


Метод TInv возвращает t-значение
 распределения Стьюдента как функцию вероятности и числа степеней свободы.


## Комментарии


Одностороннее t-значение может быть получено при замене аргумента Probability на 2*Probability.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.TInv(0.004,56);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("t-значение: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено t-значение распределения
 Стьюдента:


Выполнение модуля начато


t-значение: 3.00216157211437


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
