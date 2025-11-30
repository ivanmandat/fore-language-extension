# IMsPointwiseCollapseTransform

IMsPointwiseCollapseTransform
-


# IMsPointwiseCollapseTransform


Сборка: Ms;


## Описание


Интерфейс IMsPointwiseCollapseTransform
 содержит свойства и методы, определяющие параметры модели «Коллапс
 (поточечный расчет)».


## Иерархия наследования


           [IMsMethod](../IMsMethod/IMsMethod.htm)


           IMsPointwiseCollapseTransform


## Комментарии


Данная модель осуществляет агрегацию данных с нижнего уровня на верхний
 и необходима при расчете задачи, требующей агрегации данных. Например,
 данные, рассчитанные по месяцам, необходимо просуммировать для квартальной
 динамики.


При поточечном расчете данные с нижнего уровня на верхний агрегируются
 последовательно в каждой точке сценария. Сначала будут рассчитываться
 точки модели, дающей входные значения для n первых значений нижнего уровня
 модели коллапса. После этого происходит агрегация данных для первой точки
 верхнего уровня по n значениям нижнего уровня. Затем происходит расчет
 модели, получающей входные данные первой точки верхнего уровня от модели
 коллапс и т.д.


Например, есть модели:


	- модель 1: Y1 = a1*X1[t]+c1 – месячная модель;


	- модель 2: Y2 = Collpase(Y1) – агрегация с месяцев на кварталы;


	- модель 3: Y3 = a1* Y2[t]+c2 – квартальная модель.


Расчет моделей с 2000 по 2005 год будет идти следующим образом:


	- Рассчитывается модель Y1 на 01.01.2000, 01.02.2000, 01.03.2000.


	- Модель Y2 агрегирует данные первых трех месяцев, получаем значение
	 на первый квартал 2000 года.


	- Модель Y3 рассчитывается на первый квартал 2000 года.


	- Рассчитывается модель Y1 на 01.04.2000, 01.05.2000, 01.06.2000.


	- Модель Y2 агрегирует данные следующих трех месяцев, получаем
	 значение на второй квартал 2000 года.


	- Модель Y3 рассчитывается на второй квартал 2000 года и т.д.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Input](IMsPointwiseCollapseTransform.Input.htm)


		 Свойство Input определяет
		 терм, соответствующий исходной переменной.


		 ![](../../Property_Image.gif)
		 [InputLevel](IMsPointwiseCollapseTransform.InputLevel.htm)


		 Свойство InputLevel
		 определяет исходную динамику.


		 ![](../../Property_Image.gif)
		 [MethodType](IMsPointwiseCollapseTransform.MethodType.htm)


		 Свойство MethodType
		 определяет метод агрегации, который необходимо применить к моделируемой
		 переменной.


		 ![](../../Property_Image.gif)
		 [MissingData](IMsPointwiseCollapseTransform.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков в исходных данных.


		 ![](../../Property_Image.gif)
		 [Result](IMsPointwiseCollapseTransform.Result.htm)


		 Свойство Result возвращает
		 терм, соответствующий моделируемой переменной.


		 ![](../../Property_Image.gif)
		 [Tolerance](IMsPointwiseCollapseTransform.Tolerance.htm)


		 Свойство Tolerance
		 определяет количество пропущенных значений в моделируемом ряде,
		 которое можно считать приемлемыми для выполнения агрегации.


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
