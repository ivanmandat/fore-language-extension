# LogInv: Регламентный отчёт, настольное приложение

LogInv: Регламентный отчёт, настольное приложение
-


# LogInv


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 для функции LogInv выглядит следующим
 образом:


![](LogInv.gif)


## Синтаксис


LogInv(Probability, Mean, StandartDeviation)


## Параметры


Probability. Вероятность, связанная
 с нормальным логарифмическим распределением. Допустимые значения берутся
 из диапазона [0, 1];


Mean. Среднее ln(x);


StandartDeviation. Стандартное
 отклонение ln(x).
 Значение должно удовлетворять ограничению: StandartDeviation
 > 0.


## Описание


Метод возвращает обратную функцию логарифмического нормального распределения.


## Комментарии


Если Probability = [LogNormDist](UiReport_Func_Statistic_LogNormDist.htm)(x; …), то LogInv(Probability; …) = x.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 | [Статистические функции](UiReport_Func_Statistic.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
