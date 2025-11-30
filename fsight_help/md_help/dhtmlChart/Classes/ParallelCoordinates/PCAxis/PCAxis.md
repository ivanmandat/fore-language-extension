# PCAxis

PCAxis
-


# PCAxis


Пространство имен: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PCObject](../PCObject/PCObject.htm)


PCAxis


## Описание


Класс PCAxis представляет собой
 ось диаграммы с параллельными координатами.


## Синтаксис


PP.initClass(PP.Ui.PCAxis, PP.[PCObject](../PCObject/PCObject.htm),
 "PP.Ui.PCAxis");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [PCAxis](Constructor_PCAxis.htm)
		 Конструктор PCAxis
		 создает ось диаграммы.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [BaseStroke](PCAxis.BaseStroke.htm)
		 Свойство BaseStroke
		 определяет цвет основной линии оси диаграммы.


		 ![](../../../Property_Image.gif)
		 [BaseThickness](PCAxis.BaseThickness.htm)
		 Свойство BaseThickness
		 определяет толщину основной линии оси.


		 ![](../../../Property_Image.gif)
		 [Header](PCAxis.Header.htm)
		 Свойство Header определяет
		 заголовок оси диаграммы.


		 ![](../../../Property_Image.gif)
		 [Mapping](PCAxis.Mapping.htm)
		 Свойство Mapping определяет
		 объект для сопоставления данных из источника элементам диаграммы.


		 ![](../../../Property_Image.gif)
		 [RangeFill](PCAxis.RangeFill.htm)
		 Свойство RangeFill
		 определяет цвет диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeMaxLabel](PCAxis.RangeMaxLabel.htm)
		 Свойство RangeMaxLabel
		 определяет метку оси для максимального значения диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeMaxValue](PCAxis.RangeMaxValue.htm)
		 Свойство RangeMaxValue
		 определяет максимальное значение диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeMinLabel](PCAxis.RangeMinLabel.htm)
		 Свойство RangeMinLabel
		 определяет метку оси для минимального значения диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeMinValue](PCAxis.RangeMinValue.htm)
		 Свойство RangeMinValue
		 определяет минимальное значение диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeStroke](PCAxis.RangeStroke.htm)
		 Свойство RangeStroke
		 определяет цвет контура диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeStrokeThickness](PCAxis.RangeStrokeThickness.htm)
		 Свойство RangeStrokeThickness
		 определяет толщину контура диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [RangeThickness](PCAxis.RangeThickness.htm)
		 Свойство RangeThickness
		 определяет ширину диапазона фильтрации.


		 ![](../../../Property_Image.gif)
		 [X](PCAxis.X.htm)
		 Свойство X определяет
		 X-координату оси диаграммы.


## Метода


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [activateResizer](PCAxis.activateResizer.htm)
		 Метод activateResizer
		 активирует элемент изменения размера диапазона фильтрации оси.


		 ![](../../../Sub_Image.gif)
		 [getWidth](PCAxis.getWidth.htm)
		 Метод getWidth возвращает
		 ширину оси диаграммы.


		 ![](../../../Sub_Image.gif)
		 [isFiltered](PCAxis.isFiltered.htm)
		 Метод isFiltered проверяет
		 попадание линии в диапазон фильтрации оси.


		 ![](../../../Sub_Image.gif)
		 [isFiltrationActive](PCAxis.isFiltrationActive.htm)
		 Метод isFiltrationActive
		 проверяет, задан ли диапазон фильтрации.


		 ![](../../../Sub_Image.gif)
		 [moveRangeBy](PCAxis.moveRangeBy.htm)
		 Метод moveRangeBy сдвигает
		 диапазон фильтрации по вертикали.


		 ![](../../../Sub_Image.gif)
		 [moveResizerTo](PCAxis.moveResizerTo.htm)
		 Метод moveResizerTo
		 устанавливает новое значение Y-координаты верхней или нижней границы
		 диапазона фильтрации.


## Свойства, унаследованные от класса [PCObject](../PCObject/PCObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Chart](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.Chart.htm)
		 Свойство Chart определяет
		 область для рисования.


		 ![](../../../Property_Image.gif)
		 [IsVisible](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.IsVisible.htm)
		 Свойство IsVisible
		 определяет, отображён ли элемент.


## Методы, унаследованные от класса [PCObject](../PCObject/PCObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [animate](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.animate.htm)
		 Метод animate рассчитывает
		 положение объекта, согласно шагу анимации.


		 ![](../../../Sub_Image.gif)
		 [draw](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.draw.htm)
		 Метод draw готовит
		 новые данные для отображения элемента диаграммы.


		 ![](../../../Sub_Image.gif)
		 [getName](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.getName.htm)
		 Метод getName возвращает
		 заголовок первого источника данных диаграммы.


		 ![](../../../Sub_Image.gif)
		 [hide](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.hide.htm)
		 Метод hide удаляет
		 элемент с диаграммы.


		 ![](../../../Sub_Image.gif)
		 [isCoordsInside](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.isCoordsInside.htm)
		 Метод isCoordsInside
		 проверяет, находится ли мышь над элементом диаграммы.


		 ![](../../../Sub_Image.gif)
		 [renderFrame](dhtmlChart.chm::/Classes/ParallelCoordinates/PCObject/PCObject.renderFrame.htm)
		 Метод renderFrame выводит
		 элемент на экран.


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


[Chart](../../Chart/Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
