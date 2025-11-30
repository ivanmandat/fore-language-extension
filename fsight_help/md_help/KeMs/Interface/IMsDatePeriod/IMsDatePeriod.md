# IMsDatePeriod

IMsDatePeriod
-


# IMsDatePeriod


Сборка: Ms;


## Описание


Интерфейс IMsDatePeriod
 предназначен для настройки периода, состоящего из двух дат: начала и окончания
 периода.


## Иерархия наследования


           [IMsPeriod](../IMsPeriod/IMsPeriod.htm)


           IMsDatePeriod


## Комментарии


Даты периода могут быть заданы:


	- конкретными датами.
	 Используйте свойства [IMsDatePeriod.Start](IMsDatePeriod.Start.htm)
	 и [IMsDatePeriod.End_](IMsDatePeriod.End_.htm);


	- условиями, которые используются
	 для расчета дат начала и окончания периода. Используйте свойства
	 [IMsDatePeriod.AutoPeriod](IMsDatePeriod.AutoPeriod.htm),
	 [IMsDatePeriod.StartOffset](IMsDatePeriod.StartOffset.htm),
	 [IMsDatePeriod.EndOffset](IMsDatePeriod.EndOffset.htm);


	- параметрами. Используйте
	 свойства [IMsDatePeriod.StartParam](IMsDatePeriod.StartParam.htm) и [IMsDatePeriod.EndParam](IMsDatePeriod.EndParam.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoPeriod](IMsDatePeriod.AutoPeriod.htm)
		 Свойство AutoPeriod
		 определяет условия, которые используются для вычисления дат начала
		 и окончания периода.


		 ![](../../Property_Image.gif)
		 [Enabled](IMsDatePeriod.Enabled.htm)
		 Свойство Enabled определяет
		 признак задания периода.


		 ![](../../Property_Image.gif)
		 [End_](IMsDatePeriod.End_.htm)
		 Свойство End_
		 определяет дату окончания периода.


		 ![](../../Property_Image.gif)
		 [EndCoord](IMsDatePeriod.EndCoord.htm)
		 Свойство EndCoord определяет
		 настройки координаты, задающей дату окончания периода.


		 ![](../../Property_Image.gif)
		 [EndOffset](IMsDatePeriod.EndOffset.htm)
		 Свойство EndOffset
		 определяет количество периодов, на которое сдвигается дата окончания
		 периода.


		 ![](../../Property_Image.gif)
		 [EndParam](IMsDatePeriod.EndParam.htm)
		 Свойство EndParam определяет
		 параметр, задающий дату окончания периода.


		 ![](../../Property_Image.gif)
		 [Start](IMsDatePeriod.Start.htm)
		 Свойство Start
		 определяет дату начала периода.


		 ![](../../Property_Image.gif)
		 [StartCoord](IMsDatePeriod.StartCoord.htm)
		 Свойство StartCoord
		 определяет настройки координаты, задающей дату начала периода.


		 ![](../../Property_Image.gif)
		 [StartOffset](IMsDatePeriod.StartOffset.htm)
		 Свойство StartOffset
		 определяет количество периодов, на которое сдвигается дата начала
		 периода.


		 ![](../../Property_Image.gif)
		 [StartParam](IMsDatePeriod.StartParam.htm)


		 Свойство StartParam
		 определяет параметр, задающий дату начала периода.


## Свойства, унаследованные от [IMsPeriod](../IMsPeriod/IMsPeriod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsPeriodEmpty](../IMsPeriod/IMsPeriod.IsPeriodEmpty.htm)


		 Свойство IsPeriodEmpty
		 возвращает признак наличия изменений в периоде, внесённых пользователем.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assign](IMsDatePeriod.Assign.htm)


		 Метод Assign
		 копирует параметры указанного периода в текущий период.


		 ![](../../Sub_Image.gif)
		 [AutoPeriodDates](IMsDatePeriod.AutoPeriodDates.htm)


		 Метод AutoPeriodDates
		 возвращает границы периода, если используются условия для вычисления
		 дат начала и окончания периода.


		 ![](../../Sub_Image.gif)
		 [ClearPeriod](IMsDatePeriod.ClearPeriod.htm)


		 Метод ClearPeriod
		 сбрасывает параметры периода.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
