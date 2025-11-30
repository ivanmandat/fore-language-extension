# Minute: Регламентный отчёт, настольное приложение

Minute: Регламентный отчёт, настольное приложение
-


# Minute


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 для функции Minute выглядит следующим
 образом:


![](Minute.gif)


## Синтаксис


Minute(Date)


## Параметры


Date. Время, для которого нужно
 выделить минуты.


Примечание.
 В качестве параметра можно указывать как непосредственно значение параметра,
 так и адрес ячейки, в которой оно располагается.


## Описание


Возвращает минуты, соответствующие заданному времени.


## Комментарии


Минуты определяются как целое число в интервале от 0 до 59.


## Пример


		 Формула
		 Результат
		 Описание


		 =Minute("23:18:01")
		 18
		 Минута, соответствующая времени 23:18:01.


		 =Minute(B6)
		 27
		 Минута, соответствующая времени, указанному в ячейке B6. Ячейка
		 B6 содержит значение 5:27:00 PM.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Дата
 и время](UiReport_Func_DateTime.htm) │ [Day](UiReport_Func_DateTime_Day.htm)
 │ [Hour](UiReport_Func_DateTime_Hour.htm)
 │ [Month](UiReport_Func_DateTime_Month.htm)
 │ [Now](UiReport_Func_DateTime_Now.htm)
 │ [Second](UiReport_Func_DateTime_Second.htm)
 [│
 Today](UiReport_Func_DateTime_Today.htm) │ [Weekday](UiReport_Func_DateTime_Weekday.htm)
 │ [Year](UiReport_Func_DateTime_Year.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
