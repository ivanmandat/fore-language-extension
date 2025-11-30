# MapBar

MapBar
-


# MapBar


Пространство имен: PP;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[MapVisualItem](../MapVisualItem/MapVisualItem.htm)


MapBar


## Описание


Класс MapBar предназначен для
 работы со столбиковым показателем на карте.


## Синтаксис


PP.initClass(PP.MapBar, [PP.MapVisualItem](../MapVisualItem/MapVisualItem.htm),
 "PP.MapBar");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [MapBar](Constructor_MapBar.htm)
		 Конструктор MapBar создаёт
		 экземпляр класса MapBar.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AllPeriod](MapBar.AllPeriod.htm)
		 Свойство AllPeriod
		 определяет, отображаются ли в столбиковом показателе данные за
		 весь период времени.


		 ![](../../../Property_Image.gif)
		 [Axis](MapBar.Axis.htm)
		 Свойство Axis определяет
		 ось данных для столбикового представления.


		 ![](../../../Property_Image.gif)
		 [BarDistance](MapBar.BarDistance.htm)
		 Свойство BarDistance
		 определяет расстояние между столбцами в столбиковом показателе.


		 ![](../../../Property_Image.gif)
		 [BorderThickness](MapBar.BorderThickness.htm)
		 Свойство BorderThickness
		 устанавливает толщину границы столбцов в пикселях.


		 ![](../../../Property_Image.gif)
		 [HideZeroHeight](MapBar.HideZeroHeight.htm)
		 Свойство HideZeroHeight
		 определяет, требуется ли скрывать столбцы с нулевым значением.


		 ![](../../../Property_Image.gif)
		 [IsPercentage](MapBar.IsPercentage.htm)
		 Свойство IsPercentage
		 определяет, является ли значение столбца процентным показателем.


		 ![](../../../Property_Image.gif)
		 [LeastHeightPart](MapBar.LeastHeightPart.htm)
		 Свойство LeastHeightPart
		 устанавливает высоту столбца с минимальным значением.


		 ![](../../../Property_Image.gif)
		 [LeastWidthPart](MapBar.LeastWidthPart.htm)
		 Свойство LeastWidthPart
		 устанавливает ширину столбца с минимальным значением.


		 ![](../../../Property_Image.gif)
		 [MaxBarsCount](MapBar.MaxBarsCount.htm)
		 Свойство MaxBarsCount
		 определяет максимальное количество столбцов в столбиковом показателе.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getAnimationType](MapBar.getAnimationType.htm)
		 Метод getAnimationType
		 возвращает режим воспроизведения анимации столбикового показателя
		 карты.


		 ![](../../../Sub_Image.gif)
		 [getToolTipColor](MapBar.getToolTipColor.htm)
		 Метод getToolTipColor
		 возвращает цвет границы всплывающей подсказки.


## Свойства, унаследованные от класса [MapVisualItem](../MapVisualItem/MapVisualItem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Chart](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.Chart.htm)
		 Свойство Chart определяет
		 карту, на которую добавлен данный показатель.


		 ![](../../../Property_Image.gif)
		 [IsVisible](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.IsVisible.htm)
		 Свойство IsVisible
		 определяет, отображается ли показатель на карте.


		 ![](../../../Property_Image.gif)
		 [Layer](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.Layer.htm)
		 Свойство Layer определяет
		 слой карты с [областями](dhtmlMapChart.chm::/Classes/Map/MapShape/MapShape.htm),
		 к одной из которых привязан данный визуализатор.


		 ![](../../../Property_Image.gif)
		 [SelectedIndex](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.SelectedIndex.htm)
		 Свойство SelectedIndex
		 определяет индекс деления временной оси, данные для которого отображает
		 показатель области слоя карты.


		 ![](../../../Property_Image.gif)
		 [Shape](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.Shape.htm)
		 Свойство Shape определяет
		 область слоя карты, к которой привязан данный показатель.


		 ![](../../../Property_Image.gif)
		 [ToolTip](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.ToolTip.htm)
		 Свойство ToolTip определяет
		 всплывающую подсказку для показателя области слоя карты.


		 ![](../../../Property_Image.gif)
		 [Visual](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.Visual.htm)
		 Свойство Visual определяет
		 объект для сопоставления данных показателя слоя карты его измерениям.


## Методы, унаследованные от класса [MapVisualItem](../MapVisualItem/MapVisualItem.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [animate](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.animate.htm)
		 Метод animate воспроизводит
		 анимацию показателя области слоя карты указанной длительности
		 и в заданных режимах.


		 ![](../../../Sub_Image.gif)
		 [checkEnclosure](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.checkEnclosure.htm)
		 Метод checkEnclosure
		 проверяет, соответствует ли точка с указанными координатами какому-либо
		 из столбцов столбикового показателя.


		 ![](../../../Sub_Image.gif)
		 [checkIntersection](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.checkIntersection.htm)
		 Метод checkIntersection
		 проверяет, пересекает ли указанная область столбцы столбикового
		 показателя.


		 ![](../../../Sub_Image.gif)
		 [clear](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.clear.htm)
		 Метод clear удаляет
		 заданный показатель со слоя карты.


		 ![](../../../Sub_Image.gif)
		 [draw](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.draw.htm)
		 Метод draw отрисовывает
		 заданный показатель области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getBoundsRect](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getBoundsRect.htm)
		 Метод getBoundsRect
		 возвращает прямоугольную область, ограничивающую показатель области
		 слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getHeight](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getHeight.htm)
		 Метод getHeight возвращает
		 высоту показателя области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getLeft](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getLeft.htm)
		 Метод getLeft возвращает
		 левый отступ показателя области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getMainMappingId](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getMainMappingId.htm)
		 Метод getMainMappingId
		 возвращает идентификатор главного сопоставления данных показателя
		 для указанного деления временной оси карты.


		 ![](../../../Sub_Image.gif)
		 [getShapeId](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getShapeId.htm)
		 Метод getShapeId возвращает
		 идентификатор области слоя карты, к которой привязан показатель.


		 ![](../../../Sub_Image.gif)
		 [getToolTipValues](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getToolTipValues.htm)
		 Метод getToolTipValues
		 возвращает значения данных, предназначенных для отображения в
		 всплывающей подсказке у показателя области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getTop](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getTop.htm)
		 Метод getTop возвращает
		 верхний отступ показателя области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getWidth](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.getWidth.htm)
		 Метод getWidth возвращает
		 ширину показателя области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [hide](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.hide.htm)
		 Метод hide скрывает
		 показатель области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [renderFrame](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.renderFrame.htm)
		 Метод renderFrame отрисовывает
		 показатель области слоя карты на указанной канве.


		 ![](../../../Sub_Image.gif)
		 [show](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.show.htm)
		 Метод show отображает
		 показатель области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [toggleToolTip](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.toggleToolTip.htm)
		 Метод toggleToolTip
		 по-переменно отображает и скрывает всплывающую подсказку для показателя
		 области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [updatePosition](dhtmlMapChart.chm::/Classes/Map/MapVisualItem/MapVisualItem.updatePosition.htm)
		 Метод updatePosition
		 обновляет позицию показателя области слоя карты.


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


[DHTML-карта](../Map_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
