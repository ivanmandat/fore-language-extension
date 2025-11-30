# Second: Регламентный отчёт, веб-приложение

Second: Регламентный отчёт, веб-приложение
-


# Second


## Синтаксис


Second(Date)


## Параметры


Date. Время, для которого нужно
 выделить секунды.


Примечание.
 В качестве параметра можно указывать как непосредственно значение параметра,
 так и адрес ячейки, в которой оно располагается.


## Описание


Возвращает секунды, соответствующие заданному времени.


## Комментарии


Секунды определяется как целое число в интервале от 0 до 59.


## Пример


		 Формула
		 Результат
		 Описание


		 =Second("23:01:01")
		 1
		 Секунды, соответствующие времени 23:01:01.


		 =Second(B6)
		 48
		 Секунды, соответствующие времени, указанному в ячейке B6. Ячейка
		 B6 содержит значение 3:00:48 PM.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Дата
 и время](UiReport_Func_DateTime.htm) │ [Day](UiReport_Func_DateTime_Day.htm)
 │ [Hour](UiReport_Func_DateTime_Hour.htm)
 │ [Minute](UiReport_Func_DateTime_Minute.htm)
 │ [Month](UiReport_Func_DateTime_Month.htm)
 │ [Now](UiReport_Func_DateTime_Now.htm)
 │ [Today](UiReport_Func_DateTime_Today.htm)
 │ [Weekday](UiReport_Func_DateTime_Weekday.htm)
 │ [Year](UiReport_Func_DateTime_Year.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
