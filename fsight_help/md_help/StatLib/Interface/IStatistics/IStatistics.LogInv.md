# IStatistics.LogInv

IStatistics.LogInv
-


# IStatistics.LogInv


## Синтаксис


LogInv(Probability: Double, Mean: Double; StandartDeviation:
 Double): Double;


## Параметры


Probability. Вероятность, связанная
 с нормальным логарифмическим распределением. Допустимые значения берутся
 из диапазона [0, 1];


Mean. Среднее ln(x);


StandartDeviation. Стандартное
 отклонение ln(x). Значение должно удовлетворять ограничению: StandartDeviation > 0.


## Описание


Метод LogInv возвращает обратную
 функцию логарифмического нормального распределения.


## Комментарии


Если Probability = [LogNormDist](IStatistics.LogNormDist.htm)(x; …),
 то LogInv(Probability ; …)
 = x.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


Sub UserProc;

Var

    st: Statistics;

    d0: Double;

Begin

    st := New Statistics.Create;

    d0 := st.LogInv(0.039084,3.5,1.2);

    If st.Status <> 0 Then

        Debug.WriteLine(st.Errors);

    Else

        Debug.WriteLine("Обратная функция: " + d0.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведено значение обратной
 функции логарифмического нормального распределения:


Выполнение модуля начато


Обратная функция: 4.00002521867993


Выполнение модуля завершено


См. также:


[IStatistics](IStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
