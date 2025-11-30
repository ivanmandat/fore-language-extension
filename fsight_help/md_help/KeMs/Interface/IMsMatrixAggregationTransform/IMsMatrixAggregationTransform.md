# IMsMatrixAggregationTransform

IMsMatrixAggregationTransform
-


# IMsMatrixAggregationTransform


Сборка: Ms;


## Описание


Интерфейс IMsMatrixAggregationTransform
 предназначен для настройки параметров расчета модели, выполняющей матричную
 агрегацию.


## Иерархия наследования


           IMsMethod


           IMsVectorMethod


           IMsMatrixAggregationTransform


## Комментарии


Для получения параметров матричной агрегации приведите значение, возвращаемое
 свойством [IMsFormula.Method](../IMsFormula/IMsFormula.Method.htm),
 к интерфейсу IMsMatrixAggregationTransform.
 Данная операция возможна, если свойство [IMsFormula.Kind](../IMsFormula/IMsFormula.Kind.htm)
 имеет значение [MsFormulaKind.MatrixAggregation](../../Enums/MsFormulaKind.htm).


### Особенности расчёта агрегации


Если в отметке присутствуют разрывы, то агрегация рассчитывается с прыжком
 на уровень. Разрыв в отметке - это когда отмечены дочерние элементы, но
 не отмечен их родительский элемент В таком случае данные дочерних элементов
 неотмеченного родительского элемента используются для расчета следующего
 родительского элемента.


[![](../../opened.gif)![](../../closed.gif)Пример расчёта
 агрегации](javascript:TextPopup(this))


	Например, есть иерархия, в которой с разрывом отмечены элементы:


	![](MatrixAggregationExpl.png)


	Расчёт может выполняться по-разному:


	Агрегация с прыжком на уровень будет рассчитываться
	 следующим образом:


			 Шаг
			 Установлен флажок «Учитывать
			 значение во владельце»
			 Снят флажок «Учитывать
			 значение во владельце»


			 Выполняется расчёт на нижем уровне


			 Item 1.1 = Item 1.1 + item 1.1.1 + item 1.1.2
			 Item 1.1 = item 1.1.1 + item 1.1.2


			 Вычисляется значение верхнего
			 уровня


			 Item 2 = Item 2+ item 2.1.1 + 2.1.2
			 Item 2 = item 2.1.1 + 2.1.2


			 Item 3 = Item 3 + item 3.1.1
			 Item 3 = item 3.1.1


			 Вычисляется значение для корневого
			 элемента


			 Root = Root + item 1.1 + item 1.3 + item 2 + item 3
			 Root = item 1.1 + item 1.3 + item 2 + item 3


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Aggregator](IMsMatrixAggregationTransform.Aggregator.htm)
		 Свойство Aggregator
		 возвращает параметры агрегации для указанного измерения.


		 ![](../../Property_Image.gif)
		 [Filter](IMsMatrixAggregationTransform.Filter.htm)
		 Свойство Filter
		 возвращает коллекцию фильтров агрегации.


		 ![](../../Property_Image.gif)
		 [Result](IMsMatrixAggregationTransform.Result.htm)
		 Свойство Result возвращает
		 терм, соответствующий моделируемой переменной.


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


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
