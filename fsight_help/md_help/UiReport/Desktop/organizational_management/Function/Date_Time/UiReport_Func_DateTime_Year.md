# Year: Регламентный отчёт, настольное приложение

Year: Регламентный отчёт, настольное приложение
-


# Year


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 для функции Year выглядит следующим
 образом:


![](Year.gif)


## Синтаксис


Year(Date)


## Параметры


Year. Дата, год которой необходимо
 найти.


Примечание.
 В качестве параметра можно указывать как непосредственно значение параметра,
 так и адрес ячейки, в которой оно располагается.


## Описание


Возвращает год по заданной дате.


## Комментарии


Год возвращается как целое положительное число.


## Пример


		 Формула
		 Результат
		 Описание


		 =Year("31.10.2008")
		 2008
		 Год в указанной дате: 31.10.2008.


		 =Year(B6)
		 2007
		 Год даты, указанной в ячейке B6. Ячейка B6 содержит значение
		 26 янв 07.


См. также:


[Мастер функций](../../UiReport_Organizational_master_function.htm)
 │ [Дата
 и время](UiReport_Func_DateTime.htm) │ [Day](UiReport_Func_DateTime_Day.htm)
 │ [Hour](UiReport_Func_DateTime_Hour.htm)
 │ [Minute](UiReport_Func_DateTime_Minute.htm)
 │ │[Month](UiReport_Func_DateTime_Month.htm)
 │ [Now](UiReport_Func_DateTime_Now.htm)
 │ [Second](UiReport_Func_DateTime_Second.htm)
 │ [Today](UiReport_Func_DateTime_Today.htm)
 │ [Weekday](UiReport_Func_DateTime_Weekday.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
