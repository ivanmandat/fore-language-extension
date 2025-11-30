# MsTimeMatrix

MsTimeMatrix
-


# MsTimeMatrix


Сборка: Ms;


## Описание


Класс MsTimeMatrix предназначен
 для работы с матрицей.


## Комментарии


Матрица представляет собой набор рядов типа [TimeSeries](../TimeSeries/TimeSeries.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](MsTimeMatrix.Create.htm)
		 Конструктор Create
		 создает матрицу.


		 ![](../../Sub_Image.gif)
		 [CreateEx](MsTimeMatrix.CreateEx.htm)
		 Конструктор CreateEx
		 создает матрицу с заданными параметрами календарного уровня.


		 ![](../../Sub_Image.gif)
		 [CreateLevel](MsTimeMatrix.CreateLevel.htm)
		 Конструктор CreateLevel
		 создает матрицу с заданной календарной динамикой.


## Свойства, унаследованные от [IMsTimeMatrix](../../Interface/IMsTimeMatrix/IMsTimeMatrix.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AlignedDate](../../Interface/IMsTimeMatrix/IMsTimeMatrix.AlignedDate.htm)
		 Свойство AlignedDate
		 возвращает ближайшую корректную дату.


		 ![](../../Property_Image.gif)
		 [CalcPointCount](../../Interface/IMsTimeMatrix/IMsTimeMatrix.CalcPointCount.htm)
		 Свойство CalcPointCount
		 возвращает количество точек между индексами начала и конца ряда.


		 ![](../../Property_Image.gif)
		 [CalendarLevel](../../Interface/IMsTimeMatrix/IMsTimeMatrix.CalendarLevel.htm)
		 Свойство CalendarLevel
		 возвращает частоту ряда.


		 ![](../../Property_Image.gif)
		 [CalendarSettings](../../Interface/IMsTimeMatrix/IMsTimeMatrix.CalendarSettings.htm)
		 Свойство CalendarSettings
		 возвращает параметры календарного уровня для пользовательского
		 метода расчёта.


		 ![](../../Property_Image.gif)
		 [Coord](../../Interface/IMsTimeMatrix/IMsTimeMatrix.Coord.htm)
		 Свойство Coord возвращает
		 параметры координаты ряда.


		 ![](../../Property_Image.gif)
		 [Count](../../Interface/IMsTimeMatrix/IMsTimeMatrix.Count.htm)
		 Свойство Count возвращает
		 количество рядов в матрице.


		 ![](../../Property_Image.gif)
		 [CurrentDate](../../Interface/IMsTimeMatrix/IMsTimeMatrix.CurrentDate.htm)
		 Свойство CurrentDate
		 возвращает текущую точку расчета.


		 ![](../../Property_Image.gif)
		 [CurrentIndex](../../Interface/IMsTimeMatrix/IMsTimeMatrix.CurrentIndex.htm)
		 Свойство CurrentIndex
		 возвращает текущий индекс расчета.


		 ![](../../Property_Image.gif)
		 [EndDate](../../Interface/IMsTimeMatrix/IMsTimeMatrix.EndDate.htm)
		 Свойство EndDate возвращает
		 дату конца ряда.


		 ![](../../Property_Image.gif)
		 [EndIndex](../../Interface/IMsTimeMatrix/IMsTimeMatrix.EndIndex.htm)
		 Свойство EndIndex возвращает
		 индекс конца ряда.


		 ![](../../Property_Image.gif)
		 [ForecastStartDate](../../Interface/IMsTimeMatrix/IMsTimeMatrix.ForecastStartDate.htm)
		 Свойство ForecastStartDate
		 возвращает для ряда дату начала периода прогноза.


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/IMsTimeMatrix/IMsTimeMatrix.Item.htm)
		 Свойство Item возвращает
		 значение точки ряда по ее индексу.


		 ![](../../Property_Image.gif)
		 [LagIndex](../../Interface/IMsTimeMatrix/IMsTimeMatrix.LagIndex.htm)
		 Свойство LagIndex возвращает
		 индекс лага.


		 ![](../../Property_Image.gif)
		 [PointCount](../../Interface/IMsTimeMatrix/IMsTimeMatrix.PointCount.htm)
		 Свойство PointCount
		 возвращает количество точек в ряде.


		 ![](../../Property_Image.gif)
		 [StartDate](../../Interface/IMsTimeMatrix/IMsTimeMatrix.StartDate.htm)
		 Свойство StartDate
		 возвращает дату начала ряда.


		 ![](../../Property_Image.gif)
		 [StartIndex](../../Interface/IMsTimeMatrix/IMsTimeMatrix.StartIndex.htm)
		 Свойство StartIndex
		 возвращает индекс начала ряда.


## Методы, унаследованные от [IMsTimeMatrix](../../Interface/IMsTimeMatrix/IMsTimeMatrix.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddArray](../../Interface/IMsTimeMatrix/IMsTimeMatrix.AddArray.htm)
		 Метод AddArray добавляет
		 массив в матрицу.


		 ![](../../Sub_Image.gif)
		 [AddConstant](../../Interface/IMsTimeMatrix/IMsTimeMatrix.AddConstant.htm)
		 Метод AddConstant добавляет
		 константу в матрицу.


		 ![](../../Sub_Image.gif)
		 [AddSerie](../../Interface/IMsTimeMatrix/IMsTimeMatrix.AddSerie.htm)
		 Метод AddSerie добавляет
		 ряд в матрицу.


		 ![](../../Sub_Image.gif)
		 [AddTerm](../../Interface/IMsTimeMatrix/IMsTimeMatrix.AddTerm.htm)
		 Метод AddTerm добавляет
		 терм в матрицу.


		 ![](../../Sub_Image.gif)
		 [BeginCached](../../Interface/IMsTimeMatrix/IMsTimeMatrix.BeginCached.htm)
		 Метод BeginCached запускает
		 кеширование данных матрицы.


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IMsTimeMatrix/IMsTimeMatrix.Clear.htm)
		 Метод Clear очищает
		 матрицу.


		 ![](../../Sub_Image.gif)
		 [Column](../../Interface/IMsTimeMatrix/IMsTimeMatrix.Column.htm)
		 Метод Column возвращает
		 столбец матрицы по его индексу.


		 ![](../../Sub_Image.gif)
		 [DateToIndex](../../Interface/IMsTimeMatrix/IMsTimeMatrix.DateToIndex.htm)
		 Метод DateToIndex переводит
		 дату в индекс.


		 ![](../../Sub_Image.gif)
		 [DeleteSerie](../../Interface/IMsTimeMatrix/IMsTimeMatrix.DeleteSerie.htm)
		 Метод DeleteSerie удаляет
		 ряд из матрицы по его индексу.


		 ![](../../Sub_Image.gif)
		 [EndCached](../../Interface/IMsTimeMatrix/IMsTimeMatrix.EndCached.htm)
		 Метод EndCached завершает
		 кеширование данных в матрице.


		 ![](../../Sub_Image.gif)
		 [IndexToDate](../../Interface/IMsTimeMatrix/IMsTimeMatrix.IndexToDate.htm)
		 Метод IndexToDate переводит
		 индекс в дату.


		 ![](../../Sub_Image.gif)
		 [MoveSerie](../../Interface/IMsTimeMatrix/IMsTimeMatrix.MoveSerie.htm)
		 Метод MoveSerie перемещает
		 ряд в указанную позицию.


См. также:


[Классы
 сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
