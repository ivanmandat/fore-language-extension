# ChartScroller

ChartScroller
-


# ChartScroller


Пространство имен: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


ChartScroller


## Описание


Класс ChartScroller реализует
 элемент прокрутки оси X [диаграммы](../Chart/Chart.htm).


## Синтаксис


PP.initClass(PP.Ui.ChartScroller, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.Ui.ChartScroller");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [ChartScroller](Constructor_ChartScroller.htm)
		 Конструктор ChartScroller
		 создает экземпляр класса ChartScroller.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Enabled](ChartScroller.Enabled.htm)
		 Свойство Enabled определяет
		 отображение элемента прокрутки.


		 ![](../../../Property_Image.gif)
		 [IsActual](ChartScroller.IsActual.htm)
		 Свойство IsActual определяет
		 наличие элемента прокрутки на диаграмме.


		 ![](../../../Property_Image.gif)
		 [MaxPointsInSight](ChartScroller.MaxPointsInSight.htm)
		 Свойство MaxPointsInSight
		 определяет максимальное количество отображаемых элементов оси
		 X диаграммы.


		 ![](../../../Property_Image.gif)
		 [Position](ChartScroller.Position.htm)
		 Свойство Position определяет
		 индекс элемента оси X, с которого начинается расположение элемента
		 прокрутки.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getRealXLength](ChartScroller.getRealXLength.htm)
		 Метод getRealXLength
		 возвращает количество интервалов между делениями оси X.


		 ![](../../../Sub_Image.gif)
		 [getSize](ChartScroller.getSize.htm)
		 Метод getSize возвращает
		 высоту элемента прокрутки.


		 ![](../../../Sub_Image.gif)
		 [handleClick](ChartScroller.handleClick.htm)
		 Метод handleClick обрабатывает
		 событие щелчка мыши.


		 ![](../../../Sub_Image.gif)
		 [handleMouseDown](ChartScroller.handleMouseDown.htm)
		 Метод handleMouseDown
		 обрабатывает событие нажатия курсора по элементу прокрутки.


		 ![](../../../Sub_Image.gif)
		 [handleMouseMove](ChartScroller.handleMouseMove.htm)
		 Метод handleMouseMove
		 обрабатывает событие движения курсора по элементу прокрутки.


		 ![](../../../Sub_Image.gif)
		 [handleMouseUp](ChartScroller.handleMouseUp.htm)
		 Метод handleMouseUp
		 обрабатывает событие отпускания кнопки мыши.


		 ![](../../../Sub_Image.gif)
		 [redraw](ChartScroller.redraw.htm)
		 Метод redraw перерисовывает
		 элемент прокрутки.


## События


		 Имя свойства
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Resized](ChartScroller.Resized.htm)
		 Событие Resized наступает
		 после изменения ширины элемента прокрутки.


		 ![](../../../Event_Image.gif)
		 [Scrolled](ChartScroller.Scrolled.htm)
		 Событие Scrolled наступает
		 после окончания прокрутки.


		 ![](../../../Event_Image.gif)
		 [ScrollMove](ChartScroller.ScrollMove.htm)
		 Событие ScrollMove
		 наступает во время движения элемента прокрутки.


		 ![](../../../Event_Image.gif)
		 [ScrollStart](ChartScroller.ScrollStart.htm)
		 Событие ScrollStart
		 наступает в начале движения элемента прокрутки.


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


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[Chart](../Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
