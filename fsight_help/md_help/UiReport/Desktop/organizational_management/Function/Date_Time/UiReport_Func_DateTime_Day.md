# Day: Регламентный отчёт, настольное приложение

Day: Регламентный отчёт, настольное приложение
-


# Day


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 для функции Day выглядит следующим
 образом:


![](Day.gif)


## Синтаксис


Day(Date)


## Параметры


Date. Дата, день которой необходимо
 найти.


Примечание.
 В качестве параметра можно указывать как непосредственно значение параметра,
 так и адрес ячейки, в которой оно располагается.


## Описание


Возвращает номер дня в месяце.


## Комментарии


День возвращается как целое число в диапазоне от 1 до 31.


## Пример


		 Формула
		 Результат
		 Описание


		 =Day("31.10.2008")
		 31
		 День в указанной дате: 31.10.2008.


		 =Day(B6)
		 26
		 День даты, указанной в ячейке B6. Ячейка B6 содержит значение
		 26 янв 07.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Дата
 и время](UiReport_Func_DateTime.htm) │ [Hour](UiReport_Func_DateTime_Hour.htm)
 │ [Minute](UiReport_Func_DateTime_Minute.htm)
 │ [Month](UiReport_Func_DateTime_Month.htm)
 │ [Now](UiReport_Func_DateTime_Now.htm)
 │ [Second](UiReport_Func_DateTime_Second.htm)
 │ [Today](UiReport_Func_DateTime_Today.htm)
 │ [Weekday](UiReport_Func_DateTime_Weekday.htm)
 │ [Year](UiReport_Func_DateTime_Year.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
