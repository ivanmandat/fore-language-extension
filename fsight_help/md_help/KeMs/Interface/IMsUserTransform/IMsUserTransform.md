# IMsUserTransform

IMsUserTransform
-


# IMsUserTransform


## Описание


Интерфейс IMsUserTransform содержит
 свойства и методы, определяющие параметры расчета модели с помощью пользовательского
 метода.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Assembly](IMsUserTransform.Assembly.htm)
		 Свойство Assembly определяет
		 модуль/форму платформы, в котором реализован пользовательский
		 класс, реализующий метод расчета модели.


		 ![](../../Property_Image.gif)
		 [ClassName](IMsUserTransform.ClassName.htm)
		 Свойство ClassName
		 определяет наименование класса, в котором находится переопределенный
		 метод [Execute](../IMsUserTransformImplementation/IMsUserTransformImplementation.Execute.htm),
		 осуществляющий расчет модели по пользовательскому алгоритму.


		 ![](../../Property_Image.gif)
		 [Explained](IMsUserTransform.Explained.htm)
		 Свойство Explained
		 возвращает моделируемый ряд.


		 ![](../../Property_Image.gif)
		 [Explanatories](IMsUserTransform.Explanatories.htm)
		 Свойство Explanatories
		 возвращает объект, содержащий коллекцию термов, используемых при
		 расчете модели.


		 ![](../../Property_Image.gif)
		 [ForeMethod](IMsUserTransform.ForeMethod.htm)
		 Свойство ForeMethod
		 определяет глобальный пользовательский метод, используемый для
		 расчета модели.


		 ![](../../Property_Image.gif)
		 [Params](IMsUserTransform.Params.htm)
		 Свойство Params возвращает
		 значения параметров, определенных шаблоном пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Template](IMsUserTransform.Template.htm)
		 Свойство Template определяет
		 шаблон контейнера моделирования, используемый для расчета.


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
