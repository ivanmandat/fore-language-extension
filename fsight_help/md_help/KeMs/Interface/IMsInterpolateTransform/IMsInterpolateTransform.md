# IMsInterpolateTransform

IMsInterpolateTransform
-


# IMsInterpolateTransform


Сборка: Ms;


## Описание


Интерфейс IMsInterpolateTransform
 содержит свойства и методы, определяющие параметры модели «Интерполяция».


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           IMsInterpolateTransform


## Комментарии


Данная модель осуществляет дезагрегацию данных с верхнего уровня на
 нижний и необходима при расчете задачи, требующей дезагрегации данных.
 Например, данные квартальной динамики необходимо распределить по месяцам.


При дезагрегации данных модель учитывает настройки календарной динамики:
 смещение начала периода относительно его начала/конца.


[![](../../opened.gif)![](../../closed.gif)Пример дезагрегации
 данных с недельной на дневную динамику](javascript:TextPopup(this))


	Рассматриваемый период: первые две недели мая 2012 г.


	Метод интерполяции: рвномерная.


	Настройки календарной динамики: исходная переменная содержит недельную
	 и дневную динамки; смещение начала недели не применяется; дневная
	 динамика содержит дни с понедельника по пятницу. Результат дезагрегации:


			 Неделя
			 Дата начала периода
			 День недели


			 Исходное значение


			 Рассчитанное значение


			 1-я неделя
			 7 мая 2012
			 Понедельник
			 1


			 7 мая 2012
			 Понедельник

			 0,20


			 8 мая 2012
			 Вторник

			 0,20


			 9 мая 2012
			 Среда

			 0,20


			 10 мая 2012
			 Четверг

			 0,20


			 11 мая 2012
			 Пятница

			 0,20


			 2-я неделя
			 14 мая 2012
			 Понедельник
			 2


			 14 мая 2012
			 Понедельник

			 0,40


			 15 мая 2012
			 Вторник

			 0,40


			 16 мая 2012
			 Среда

			 0,40


			 17 мая 2012
			 Четверг

			 0,40


			 18 мая 2012
			 Пятница

			 0,40


	Настройки календарной динамики: исходная переменная содержит недельную
	 и дневную динамки; начало недели смещено на три дня вперед; дневная
	 динамика содержит дни с понедельника по пятницу. Результат дезагрегации:


			 Неделя
			 Дата начала периода
			 День недели


			 Исходное значение


			 Рассчитанное значение


			 1-я неделя
			 2 мая 2012
			 Среда
			 1


			 2 мая 2012
			 Среда

			 0,20


			 3 мая 2012
			 Четверг

			 0,20


			 4 мая 2012
			 Пятница

			 0,20


			 7 мая 2012
			 Понедельник

			 0,20


			 8 мая 2012
			 Вторник

			 0,20


			 2-я неделя
			 9 мая 2012
			 Среда
			 2


			 9 мая 2012
			 Среда

			 0,40


			 10 мая 2012
			 Четверг

			 0,40


			 11 мая 2012
			 Пятница

			 0,40


			 14 мая 2012
			 Понедельник

			 0,40


			 15 мая 2012
			 Вторник

			 0,40


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Input](IMsInterpolateTransform.Input.htm)


		 Свойство Input определяет
		 терм, соответствующий исходной переменной.


		 ![](../../Property_Image.gif)
		 [InputLevel](IMsInterpolateTransform.InputLevel.htm)


		 Свойство InputLevel
		 определяет исходную динамику.


		 ![](../../Property_Image.gif)
		 [MethodParameter](IMsInterpolateTransform.MethodParameter.htm)


		 Свойство MethodParameter
		 определяет степень полинома для полиноминальной интерполяции.


		 ![](../../Property_Image.gif)
		 [MethodType](IMsInterpolateTransform.MethodType.htm)


		 Свойство MethodType
		 определяет метод интерполяции, который необходимо применить к
		 моделируемой переменной.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsInterpolateTransform.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков в исходных данных.


		 ![](../../Property_Image.gif)
		 [PatternType](IMsInterpolateTransform.PatternType.htm)


		 Свойство PatternType
		 определяет вид шаблона для интерполяции по шаблону.


		 ![](../../Property_Image.gif)
		 [Result](IMsInterpolateTransform.Result.htm)


		 Свойство Result возвращает
		 терм, соответствующий моделируемой переменной.


		 ![](../../Property_Image.gif)
		 [Specified](IMsInterpolateTransform.Specified.htm)


		 Свойство Specified
		 определяет образцовый ряд для интерполяции по шаблону.


## Свойства, унаследованные от [IMsMethod](../IMsMethod/IMsMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculateSeries](../IMsMethod/IMsMethod.CalculateSeries.htm)
		 Свойство CalculateSeries
		 возвращает данные, полученные в результате расчета модели.


		 ![](../../Property_Image.gif)
		 [InversionInfo](../IMsMethod/IMsMethod.InversionInfo.htm)
		 Свойство InversionInfo
		 возвращает параметры начального преобразования, применяемого к
		 переменной.


		 ![](../../Property_Image.gif)
		 [ObservationsCount](../IMsMethod/IMsMethod.ObservationsCount.htm)
		 Свойство ObservationsCount
		 возвращает число наблюдений модели.


		 ![](../../Property_Image.gif)
		 [PeriodAlignment](../IMsMethod/IMsMethod.PeriodAlignment.htm)
		 Свойство PeriodAlignment
		 возвращает тип расчета метода относительно периода.


		 ![](../../Property_Image.gif)
		 [Series](../IMsMethod/IMsMethod.Series.htm)
		 Свойство Series возвращает
		 набор возможных рядов, используемых методом при расчете.


		 ![](../../Property_Image.gif)
		 [StatMethod](../IMsMethod/IMsMethod.StatMethod.htm)
		 Свойство StatMethod
		 возвращает информацию о статистическом методе, используемом для
		 расчета модели.


		 ![](../../Property_Image.gif)
		 [Summary](../IMsMethod/IMsMethod.Summary.htm)
		 Свойство Summary возвращает
		 статистические характеристики, рассчитанные для модели.


		 ![](../../Property_Image.gif)
		 [SupportsR](../IMsMethod/IMsMethod.SupportsR.htm)
		 Свойство SupportsR
		 определяет, возможен ли расчет метода с помощью R.


		 ![](../../Property_Image.gif)
		 [Type](../IMsMethod/IMsMethod.Type.htm)
		 Свойство Type возвращает
		 тип метода, используемого для расчета модели.


		 ![](../../Property_Image.gif)
		 [UseR](../IMsMethod/IMsMethod.UseR.htm)
		 Свойство UseR
		 определяет, используется ли при расчете метода подключение к R.


## Методы, унаследованные от [IMsMethod](../IMsMethod/IMsMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../IMsMethod/IMsMethod.Execute.htm)
		 Метод Execute осуществляет
		 расчет модели и возвращает результаты расчета.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
