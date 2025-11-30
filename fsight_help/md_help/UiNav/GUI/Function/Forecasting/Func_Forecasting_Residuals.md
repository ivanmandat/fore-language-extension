# Residuals

Residuals
-


# Residuals


## Синтаксис


Residuals(Object: [IMsResultObject](kems.chm::/Interface/IMsResultObject/IMsResultObject.htm))


## Параметры


Object. Результаты расчёта
 метода.


## Описание


Возвращает ряд остатков.


## Комментарии


Для получения модельного ряда используйте функцию [Fitted](Func_Forecasting_Fitted.htm).


## Пример


		 Формула
		 Результат
		 Применение


		 = (MovAvg({ВВП|Анкоридж[t]}, Null) as ms.IMsResultObject).Residuals
		 Для метода «Скользящее среднее» будут
		 получены значения ряда остатков.
		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = (MovAvg(X1, Null) as ms.IMsResultObject).Residuals
		 Для метода «Скользящее среднее» будут
		 получены значения ряда остатков.
		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Прогнозирование](Func_Forecasting.htm)
 │ [IModelling.Residuals](kems.chm::/interface/imodelling/imodelling.Residuals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
