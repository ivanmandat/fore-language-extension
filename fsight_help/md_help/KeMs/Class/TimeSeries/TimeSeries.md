# TimeSeries

TimeSeries
-


# TimeSeries


Сборка: Ms;


## Описание


Класс TimeSeries предназначен
 для передачи ряда данных в пользовательский метод расчета.


## Комментарии


Для работы с пользовательскими методами расчёта используйте интерфейс
 [IForeMethods](KeFore.Chm::/Interface/IForeMethods/IForeMethods.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](TimeSeries.Create.htm)
		 Конструктор Create
		 создаёт ряд данных.


		 ![](../../Sub_Image.gif)
		 [CreateEx](TimeSeries.CreateEx.htm)
		 Конструктор CreateEx
		 создает ряд с заданными параметрами календарного уровня.


		 ![](../../Sub_Image.gif)
		 [CreateLevel](TimeSeries.CreateLevel.htm)
		 Конструктор CreateLevel
		 создает ряд с заданной календарной динамикой.


## Свойства, унаследованные от [ITimeSeries](../../Interface/ITimeSeries/ITimeSeries.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AlignedDate](../../Interface/ITimeSeries/ITimeSeries.AlignedDate.htm)


		 Свойство AlignedDate
		 возвращает ближайшую корректную дату.


		 ![](../../Property_Image.gif)
		 [AsArray](../../Interface/ITimeSeries/ITimeSeries.AsArray.htm)


		 Свойство AsArray возвращает/принимает
		 ряд данных с исключенными выходными днями.


		 ![](../../Property_Image.gif)
		 [Attributes](../../Interface/ITimeSeries/ITimeSeries.Attributes.htm)


		 Свойство Attributes
		 определяет значение указанного атрибута ряда.


		 ![](../../Property_Image.gif)
		 [CalendarLevel](../../Interface/ITimeSeries/ITimeSeries.CalendarLevel.htm)


		 Свойство CalendarLevel
		 возвращает календарную динамику ряда.


		 ![](../../Property_Image.gif)
		 [CalendarSettings](../../Interface/ITimeSeries/ITimeSeries.CalendarSettings.htm)


		 Свойство CalendarSettings
		 возвращает параметры календарного уровня для пользовательского
		 метода расчёта.


		 ![](../../Property_Image.gif)
		 [Changed](../../Interface/ITimeSeries/ITimeSeries.Changed.htm)


		 Свойство Changed возвращает
		 признак наличия изменений в текущей точке ряда.


		 ![](../../Property_Image.gif)
		 [Coord](../../Interface/ITimeSeries/ITimeSeries.Coord.htm)


		 Свойство Coord возвращает
		 параметры координаты ряда.


		 ![](../../Property_Image.gif)
		 [CurrentDate](../../Interface/ITimeSeries/ITimeSeries.CurrentDate.htm)


		 Свойство CurrentDate
		 возвращает текущую календарную точку ряда.


		 ![](../../Property_Image.gif)
		 [CurrentIndex](../../Interface/ITimeSeries/ITimeSeries.CurrentIndex.htm)


		 Свойство CurrentIndex
		 возвращает индекс текущей точки ряда.


		 ![](../../Property_Image.gif)
		 [CurrentValue](../../Interface/ITimeSeries/ITimeSeries.CurrentValue.htm)


		 Свойство CurrentValue
		 возвращает значение текущей точки ряда.


		 ![](../../Property_Image.gif)
		 [EndDate](../../Interface/ITimeSeries/ITimeSeries.EndDate.htm)


		 Свойство EndDate возвращает
		 конечную календарную точку ряда.


		 ![](../../Property_Image.gif)
		 [EndIndex](../../Interface/ITimeSeries/ITimeSeries.EndIndex.htm)


		 Свойство EndIndex возвращает
		 конечный индекс ряда.


		 ![](../../Property_Image.gif)
		 [ForecastStartDate](../../Interface/ITimeSeries/ITimeSeries.ForecastStartDate.htm)


		 Свойство ForecastStartDate
		 возвращает для ряда дату начала периода прогноза.


		 ![](../../Property_Image.gif)
		 [IsEmpty](../../Interface/ITimeSeries/ITimeSeries.IsEmpty.htm)


		 Свойство IsEmpty
		 возвращает признак пустоты ряда.


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/ITimeSeries/ITimeSeries.Item.htm)


		 Свойство Item определяет
		 значение точки ряда по ее индексу.


		 ![](../../Property_Image.gif)
		 [PointCount](../../Interface/ITimeSeries/ITimeSeries.PointCount.htm)


		 Свойство PointCount
		 возвращает количество точек ряда.


		 ![](../../Property_Image.gif)
		 [StartDate](../../Interface/ITimeSeries/ITimeSeries.StartDate.htm)


		 Свойство StartDate
		 возвращает начальную календарную точку ряда.


		 ![](../../Property_Image.gif)
		 [StartIndex](../../Interface/ITimeSeries/ITimeSeries.StartIndex.htm)


		 Свойство StartIndex
		 возвращает начальный индекс ряда.


		 ![](../../Property_Image.gif)
		 [TermInfo](../../Interface/ITimeSeries/ITimeSeries.TermInfo.htm)


		 Свойство TermInfo возвращает
		 параметры терма.


## Методы, унаследованные от [ITimeSeries](../../Interface/ITimeSeries/ITimeSeries.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CheckCompatible](../../Interface/ITimeSeries/ITimeSeries.CheckCompatible.htm)


		 Метод CheckCompatible
		 проверяет текущий и указанный ряды на совместимость.


		 ![](../../Sub_Image.gif)
		 [DateToIndex](../../Interface/ITimeSeries/ITimeSeries.DateToIndex.htm)


		 Метод DateToIndex возвращает
		 индекс указанной календарной точки ряда.


		 ![](../../Sub_Image.gif)
		 [IndexToDate](../../Interface/ITimeSeries/ITimeSeries.IndexToDate.htm)


		 Метод IndexToDate возвращает
		 календарную точку ряда по ее индексу.


См. также:


[Классы сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
