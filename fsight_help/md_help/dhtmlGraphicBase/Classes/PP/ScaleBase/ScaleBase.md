# ScaleBase

ScaleBase
-


# ScaleBase


Пространство имен: PP;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


ScaleBase


## Описание


Класс ScaleBase представляет
 собой базовую реализацию цветовой и числовой шкалы.


## Синтаксис


PP.initClass(PP.ScaleBase, [PP.Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.ScaleBase");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ActiveItems](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.ActiveItems.htm)
		 Свойство ActiveItems
		 устанавливает коллекцию активных элементов шкалы.


		 ![](../../../Property_Image.gif)
		 [AutoCalculable](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.AutoCalculable.htm)
		 Свойство AutoCalculable
		 определяет, осуществляется ли расчет шкалы автоматически.


		 ![](../../../Property_Image.gif)
		 [EnableEquality](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.EnableEquality.htm)
		 Свойство EnableEquality
		 определяет, учитываются ли при построении шкалы равенства или
		 шкала строится исключительно по промежуткам.


		 ![](../../../Property_Image.gif)
		 [First](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.First.htm)
		 Свойство First устанавливает
		 первый элемент шкалы.


		 ![](../../../Property_Image.gif)
		 [InactiveItem](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.InactiveItem.htm)
		 Свойство InactiveItem
		 определяет цвет для элемента шкалы, который не входит в коллекцию
		 [ScaleBase.ActiveItems](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.ActiveItems.htm).


		 ![](../../../Property_Image.gif)
		 [IntervalsCount](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.IntervalsCount.htm)
		 Свойство IntervalsCount
		 устанавливает количество интервалов шкалы.


		 ![](../../../Property_Image.gif)
		 [Item](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.Item.htm)
		 Свойство Item устанавливает
		 значение для элемента шкалы по его индексу.


		 ![](../../../Property_Image.gif)
		 [Items](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.Items.htm)
		 Свойство Items устанавливает
		 коллекцию элементов шкалы.


		 ![](../../../Property_Image.gif)
		 [Last](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.Last.htm)
		 Свойство Last
		 устанавливает последний элемент шкалы.


		 ![](../../../Property_Image.gif)
		 [LogarithmBase](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.LogarithmBase.htm)
		 Свойство LogarithmBase
		 устанавливает основание логарифма для расчета интервалов шкалы.


		 ![](../../../Property_Image.gif)
		 [MaxValue](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.MaxValue.htm)
		 Свойство MaxValue устанавливает
		 максимальное допустимое значение шкалы.


		 ![](../../../Property_Image.gif)
		 [MinValue](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.MinValue.htm)
		 Свойство MinValue устанавливает
		 минимальное допустимое значение шкалы.


		 ![](../../../Property_Image.gif)
		 [Mode](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.Mode.htm)
		 Свойство Mode устанавливает
		 режим расчета шкалы.


		 ![](../../../Property_Image.gif)
		 [NoData](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.NoData.htm)
		 Свойство NoData
		 устанавливает элемент шкалы, соответствующий отсутствию данных.


		 ![](../../../Property_Image.gif)
		 [RecalcValues](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.RecalcValues.htm)
		 Свойство RecalcValues
		 определяет, нужно ли пересчитывать коллекцию значений шкалы.


		 ![](../../../Property_Image.gif)
		 [ResultMode](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.ResultMode.htm)
		 Свойство ResultMode
		 определяет типы возвращаемых значений шкалы визуализатора.


		 ![](../../../Property_Image.gif)
		 [RoundBias](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.RoundBias.htm)
		 Свойство RoundBias
		 определяет максимально допустимое значение разницы между исходным
		 значением шкалы и значением шкалы при округлении.


		 ![](../../../Property_Image.gif)
		 [Value](ScaleBase.Value.htm)
		 Свойство Value устанавливает
		 значение границы интервал шкалы.


		 ![](../../../Property_Image.gif)
		 [Values](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.Values.htm)
		 Свойство Values устанавливает
		 коллекцию значений границ интервалов шкалы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addItem](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.addItem.htm)
		 Метод addItem добавляет
		 элемент в шкалу.


		 ![](../../../sub_image.gif)
		 [addValue](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.addValue.htm)
		 Метод addValue добавляет
		 значение границы интервала шкалы.


		 ![](../../../sub_image.gif)
		 [between](dhtmlGraphicBase.chm::/Classes/PP/ScaleBase/ScaleBase.between.htm)
		 Метод between возвращает
		 промежуточное значение шкалы.


		 ![](../../../sub_image.gif)
		 [clearItems](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.clearItems.htm)
		 Метод clearItems очищает
		 [коллекцию
		 элементов](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Items.htm) шкалы.


		 ![](../../../sub_image.gif)
		 [clearValues](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.clearValues.htm)
		 Метод clearValues очищает
		 коллекцию [границ
		 интервалов шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Values.htm).


		 ![](../../../sub_image.gif)
		 [constructScaleElements](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.constructScaleElements.htm)
		 Метод constructScaleElements
		 конструирует коллекцию интервалов шкалы на основе переданных данных.


		 ![](../../../sub_image.gif)
		 [equal](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.equal.htm)
		 Метод equal возвращает
		 [элемент
		 шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Items.htm) для значения, равного значению, соответствующему
		 заданному индексу.


		 ![](../../../sub_image.gif)
		 [getCount](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.getCount.htm)
		 Метод getCount возвращает
		 количество интервалов шкалы.


		 ![](../../../sub_image.gif)
		 [getItemsCount](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.getItemsCount.htm)
		 Метод getItemsCount
		 возвращает количество элементов шкалы.


		 ![](../../../sub_image.gif)
		 [getItemValue](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.getItemValue.htm)
		 Метод getItemValue
		 возвращает элемент шкалы, которому соответствует указанное значение
		 из данных.


		 ![](../../../sub_image.gif)
		 [getValuesPair](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.getValuesPair.htm)
		 Метод getValuesPair
		 возвращает границы интервала по его индексу.


		 ![](../../../sub_image.gif)
		 [greater](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.greater.htm)
		 Метод greater возвращает
		 [элемент
		 шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Items.htm) для значения большего, чем значение,
		 соответствующее заданному индексу.


		 ![](../../../sub_image.gif)
		 [less](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.less.htm)
		 Метод less возвращает
		 [элемент
		 шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Items.htm) для значения меньшего, чем [значение
		 границ интервалов шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Values.htm) с указанным индексом.


		 ![](../../../sub_image.gif)
		 [removeItemAt](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.removeItemAt.htm)
		 Метод removeItemAt
		 удаляет [элемент
		 шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Items.htm) по указанному индексу.


		 ![](../../../sub_image.gif)
		 [removeValueAt](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.removeValueAt.htm)
		 Метод removeItemAt
		 удаляет [значение
		 границ интервалов шкалы](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Values.htm) по указанному индексу.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ItemsChanged](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.ItemsChanged.htm)
		 Событие ItemsChanged
		 наступает при изменении настроек шкалы из [мастера](dhtmlMapChart.chm::/Classes/MapMaster/MapMaster.htm).


		 ![](../../../Event_Image.gif)
		 [ItemsChanging](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.ItemsChanging.htm)
		 Событие ItemsChanging
		 наступает при установке [коллекции
		 элементов](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.Items.htm) шкалы или при установке [элемента
		 шкалы, соответствующего отсутствию данных](dhtmlGraphicBase.chm::/Classes\PP\ScaleBase\ScaleBase.NoData.htm).


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP](dhtmlCommon.chm::/Classes/PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
