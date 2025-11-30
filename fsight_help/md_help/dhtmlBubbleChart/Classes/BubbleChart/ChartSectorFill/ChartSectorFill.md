# ChartSectorFill

ChartSectorFill
-


**


# ChartSectorFill


Пространство имен**: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[BubbleChartObject](../BubbleChartObject/BubbleChartObject.htm)


ChartSectorFill


## Описание


Класс ChartAreaFill представляет
 собой угловую область заливки.


## Комментарии


Область заливки устанавливается при помощи метода [ChartArea.setAreaFill](../ChartArea/ChartArea.setAreaFill.htm),
 на странице метода также приведен пример использования области заливки.


Пример угловой области заливки:


![](SectorFill.png)


## Синтаксис


PP.initClass(PP.Ui.ChartSectorFill, [PP.Ui.BubbleChartObject](../BubbleChartObject/BubbleChartObject.htm),
 "PP.Ui.ChartSectorFill");


## Свойства


Все свойства задаются только при создании класса через JSON.


		 Имя свойства
		 Краткое описание


		 ![](../../../property_image.gif)
		 Start
		 Number. Угол начала сектора. Принимает значения от 0 до 360.


		 ![](../../../property_image.gif)
		 Angle
		 Number. Угол сектора.


		 ![](../../../property_image.gif)
		 Fill
		 String | [PP.Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm).
		 Кисть заливки.


		 ![](../../../property_image.gif)
		 Stroke
		 String | [PP.Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm).
		 Кисть границы.


		 ![](../../../property_image.gif)
		 Label
		 [PP.Ui.ChartSVGLabel](../ChartSVGLabel/ChartSVGLabel.htm).
		 Подпись.


		 ![](../../../property_image.gif)
		 LabelOffsetX
		 Number. Смещение
		 подписи относительно угловой области в процентах её ширины по
		 горизонтали. Значение по умолчанию: 0.5.


		 ![](../../../property_image.gif)
		 LabelOffsetY
		 Number. Смещение
		 подписи относительно угловой области в процентах её ширины по
		 вертикали. Значение по умолчанию: 0.5.


## Свойства, унаследованные от класса [BubbleChartObject](../BubbleChartObject/BubbleChartObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../property_image.gif)
		 [Chart](dhtmlBubbleChart.chm::/Classes/BubbleChart/BubbleChartObject/BubbleChartObject.Chart.htm)
		 Свойство Chart
		 определяет пузырьковую диаграмму.


		 ![](../../../property_image.gif)
		 [IsVisible](dhtmlBubbleChart.chm::/Classes/BubbleChart/BubbleChartObject/BubbleChartObject.IsVisible.htm)
		 Свойство IsVisible
		 определяет видимость элемента пузырьковой диаграммы.


## Методы, унаследованные от класса [BubbleChartObject](../BubbleChartObject/BubbleChartObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [draw](dhtmlBubbleChart.chm::/Classes/BubbleChart/BubbleChartObject/BubbleChartObject.draw.htm)
		 Метод **draw** обновляет
		 цвета, координаты и прочие характеристики объекта без полной перерисовки.


		 ![](../../../sub_image.gif)
		 [hide](dhtmlBubbleChart.chm::/Classes/BubbleChart/BubbleChartObject/BubbleChartObject.hide.htm)
		 Метод hide скрывает
		 объект пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [renderFrame](dhtmlBubbleChart.chm::/Classes/BubbleChart/BubbleChartObject/BubbleChartObject.renderFrame.htm)
		 Метод renderFrame отрисовывает
		 объект пузырьковой диаграммы.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../property_image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


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


[BubbleChart](../../BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
