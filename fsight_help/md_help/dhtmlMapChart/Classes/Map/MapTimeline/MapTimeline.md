# MapTimeline

MapTimeline
-


# MapTimeline


Пространство имен: PP;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


MapTimeline


## Описание


Класс MapTimeline реализует временную линию для карты.


## Комментарии


В [JSON-настройках](../../../Components/MapChart/xml_specification/xml-specification.htm) данный класс представлен элементом [MapTimeline](../../../Components/MapChart/xml_specification/MapChart/MapTimeline/MapTimeline_element.htm).


## Синтаксис


PP.initClass(PP.MapTimeline, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm), "MapTimeline");


## Свойства


 Имя свойства
 Краткое описание


 ![](../../../Property_Image.gif)
 [CurrentStep](MapTimeline.CurrentStep.htm)
 Свойство CurrentStep определяет текущий шаг временной линии.


## Методы


 Имя метода
 Краткое описание


 ![](../../../Sub_Image.gif)
 [applyAlignment](MapTimeline.applyAlignment.htm)

Метод applyAlignment применяет настройки расположения временной линии по вертикали и горизонтали.


 ![](../../../Sub_Image.gif)
 [getDomNode](MapTimeline.getDomNode.htm)
 Метод getDomNode возвращает DOM-вершину, в которой расположена временная линия.


 ![](../../../Sub_Image.gif)

[getIsOverlap](MapTimeline.getIsOverlap.htm)


Метод getIsOverlap определяет, пересекает ли временная линия карту или нет.


 ![](../../../Sub_Image.gif)

[getIsStarted](MapTimeline.getIsStarted.htm)


Метод getIsStarted определяет, началась ли анимация временной шкалы.


 ![](../../../Sub_Image.gif)
 [getMapSlider](MapTimeline.getMapSlider.htm)

Метод getMapSlider возвращает компонент MapSlider, который является базовым для временной линии.


 ![](../../../Sub_Image.gif)
 [getVerticalAlignment](MapTimeline.getVerticalAlignment.htm)
 Метод getVerticalAlignment возвращает текущее расположение временной линии по вертикали.


 ![](../../../Sub_Image.gif)
 [isRendered](MapTimeline.isRendered.htm)
 Метод isRendered определяет, отрисована ли временная линия.


 ![](../../../Sub_Image.gif)
 [play](MapTimeline.play.htm)
 Метод play включает анимацию временной линии.


 ![](../../../Sub_Image.gif)
 [updateSize](MapTimeline.updateSize.htm)

Метод updateSize устанавливает размеры временной линии в соответствии с размером [карты](../MapChart/MapChart.htm).


## События


  Имя события
 Краткое описание


 ![](../../../Event_Image.gif)
 [Step](MapTimeLine.Step.htm)
 Событие Step наступает при переходе к следующему шагу временной шкалы.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


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
