# IModelling.SetPeriod

IModelling.SetPeriod
-


# IModelling.SetPeriod


## Синтаксис


		SetPeriod(StartDate: Variant; EndDate: Variant):
		 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


## Параметры


StartDate. Дата начала периода;


EndDate. Дата окончания периода.


## Описание


Метод SetPeriod формирует
 период по указанным датам.


## Комментарии


Для корректной работы метода дата начала периода должна быть меньше
 даты окончания периода.


Метод можно использовать для задания периода расчёта в арифметических
 методах, в которых входным параметром является массив данных. Для задания
 периода расчёта укажите SetPeriod
 в любом месте массива, например:


Average({Albania|BCA[t]}, SetPeriod("2000","2010"))


Будет найдено среднее значение ряда «{Albania|BCA[t]}»
 за период с 2000 по 2010 год.


Дата может быть указана в одном из следующих форматов:


		 Формат
		 Описание


		 "01.01.2000"
		 Указание конкретной даты в году.


		 2000 или "2000A"
		 В качестве даты используется начало года.


		 "2000S1"
		 В качестве даты используется начало указанного полугодия.


		 "2000-H1"
		 В качестве даты используется дата, соответствующая 9 месяцам
		 года.


		 "2000Q1"
		 В качестве даты используется начало указанного квартала.


		 "2000M1"
		 В качестве даты используется начало указанного месяца.


		 "2000-W1"
		 В качестве даты используется начало указанной недели.


[![](../../opened.gif)![](../../closed.gif)Методы, в которых
 доступно использование SetPeriod](javascript:TextPopup(this))


		- [IModelling.Average](IModelling.Average.htm);


		- [IModelling.AverageI](IModelling.Averagei.htm);


		- [IModelling.Coalesce](IModelling.Coalesce.htm);


		- [IModelling.Max](IModelling.Max.htm);


		- [IModelling.MaxI](IModelling.MaxI.htm);


		- [IModelling.Mean](IModelling.Mean.htm);


		- [IModelling.Median](IModelling.Median.htm);


		- [IModelling.Min](IModelling.Min.htm);


		- [IModelling.MinI](IModelling.MinI.htm);


		- [IModelling.Mode](IModelling.Mode.htm);


		- [IModelling.Mult](IModelling.Mult.htm);


		- [IModelling.StDv](IModelling.StDv.htm);


		- [IModelling.Subtract](IModelling.Subtract.htm);


		- [IModelling.Sum](IModelling.Sum.htm);


		- [IModelling.SumI](IModelling.SumI.htm);


		- [IModelling.SumSq](IModelling.SumSq.htm);


		- [IModelling.Variance](IModelling.Variance.htm).


## Пример


Использование свойства приведено в примере для [IModelling.MovAvg](IModelling.MovAvg.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
