# IVZDataScale

IVZDataScale
-


# IVZDataScale


Сборка: Visualizators;


## Описание


Интерфейс IVZDataScale предназначен
 для работы со шкалой визуализатора.


## Иерархия наследования


IVZDataScale


## Комментарии


Шкала визуализатора может выглядеть следующим образом:


![](IVZDataScale.png)


Параметры шкалы визуализатора могут быть получены в свойствах [IVZColorLegendBase.Scale](../IVZColorLegendBase/IVZColorLegendBase.Scale.htm)
 и [IVZDataSourceMapping.Scale](../IVZDataSourceMapping/IVZDataSourceMapping.Scale.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoCalculable](IVZDataScale.AutoCalculable.htm)


		 Свойство AutoCalculable
		 определяет признак того, что шаги шкалы будут рассчитаны автоматически.


		 ![](../../Property_Image.gif)
		 [EnableEquality](IVZDataScale.EnableEquality.htm)


		 Свойство EnableEquality
		 определяет признак использования строгого равенства в элементах
		 шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [First](IVZDataScale.First.htm)


		 Свойство First определяет
		 настройки первого элемента шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [Greater](IVZDataScale.Greater.htm)


		 Свойство Greater возвращает
		 элемент шкалы визуализатора со значением, большим, чем значение
		 элемента с указанным индексом.


		 ![](../../Property_Image.gif)
		 [ID](IVZDataScale.ID.htm)


		 Свойство ID возвращает
		 идентификатор шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [InactiveItem](IVZDataScale.InactiveItem.htm)


		 Свойство InactiveItem
		 определяет настройки неактивного элемента визуализатора.


		 ![](../../Property_Image.gif)
		 [IntervalsCount](IVZDataScale.IntervalsCount.htm)


		 Свойство IntervalsCount
		 определяет количество интервалов шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [IsInactiveItem](IVZDataScale.IsInactiveItem.htm)


		 Свойство IsInactiveItem
		 определяет, является ли указанный элемент шкалы визуализатора
		 неактивным.


		 ![](../../Property_Image.gif)
		 [Item](IVZDataScale.Item.htm)


		 Свойство Item определяет
		 кисть или число, соответствующие элементу шкалы визуализатора
		 в зависимости от её [типа](IVZDataScale.Type.htm).


		 ![](../../Property_Image.gif)
		 [ItemsCount](IVZDataScale.ItemsCount.htm)


		 Свойство ItemsCount
		 определяет количество элементов шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [ItemValue](IVZDataScale.ItemValue.htm)


		 Свойство ItemValue
		 возвращает элемент шкалы, соответствующий указанному значению.


		 ![](../../Property_Image.gif)
		 [Last](IVZDataScale.Last.htm)


		 Свойство Last определяет
		 настройки последнего элемента шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [Less](IVZDataScale.Less.htm)


		 Свойство Less возвращает
		 элемент шкалы визуализатора со значением, меньшим, чем значение
		 элемента с указанным индексом.


		 ![](../../Property_Image.gif)
		 [LogarithmBase](IVZDataScale.LogarithmBase.htm)


		 Свойство LogarithmBase
		 определяет основание логарифма для логарифмической шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [MaxValue](IVZDataScale.MaxValue.htm)


		 Свойство MaxValue возвращает
		 максимальное значение шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [MinValue](IVZDataScale.MinValue.htm)


		 Свойство MinValue возвращает
		 минимальное значение шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [Mode](IVZDataScale.Mode.htm)


		 Свойство Mode определяет
		 режим расчета шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [NoData](IVZDataScale.NoData.htm)


		 Свойство NoData определяет
		 кисть или число, соответствующие элементу шкалы визуализатора
		 «нет данных» в зависимости от её [типа](IVZDataScale.Type.htm).


		 ![](../../Property_Image.gif)
		 [RoundBias](IVZDataScale.RoundBias.htm)


		 Свойство RoundBias определяет
		 значение, до которого необходимо округлить значения границ интервалов
		 шкалы.


		 ![](../../Property_Image.gif)
		 [Type](IVZDataScale.Type.htm)


		 Свойство Type определяет
		 тип шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [Value](IVZDataScale.Value.htm)


		 Свойство Value определяет
		 значение указанного элемента шкалы визуализатора.


		 ![](../../Property_Image.gif)
		 [ValuesCount](IVZDataScale.ValuesCount.htm)


		 Свойство ValuesCount
		 определяет количество значений шкалы визуализатора.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AutoSetupScaleItems](IVZDataScale.AutoSetupScaleItems.htm)


		 Метод AutoSetupScaleItems
		 перерассчитывает шкалу визуализатора.


		 ![](../../Sub_Image.gif)
		 [ConstructScaleElements](IVZDataScale.ConstructScaleElements.htm)


		 Метод ConstructScaleElements
		 перерассчитывает шкалу визуализатора, используя массив её значений.


		 ![](../../Sub_Image.gif)
		 [GetValuesPair](IVZDataScale.GetValuesPair.htm)


		 Метод GetValuesPair
		 возвращает начальное и конечное значение интервала шкалы визуализатора.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
