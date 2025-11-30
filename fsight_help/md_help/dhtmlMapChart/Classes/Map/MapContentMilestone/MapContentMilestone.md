# MapContentMilestone

MapContentMilestone
-


# MapContentMilestone


Пространство имен: PP


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[MapObject](../MapObject/MapObject.htm)


MapContentMilestone


## Описание


Класс MapContentMilestone реализует
 значок, для которого возможна установка содержимого.


## Синтаксис


PP.initClass(PP.MapContentMilestone, PP.[MapObject](../MapObject/MapObject.htm),
 "MapContentMilestone", PP.IMapMilestone);


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [MapContentMilestone](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/Constructor_MapContentMilestone.htm)
		 Конструктор MapContentMilestone
		 создает экземпляр класса MapContentMilestone.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Interval](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.Interval.htm)
		 Свойство Interval определяет
		 интервал для значка карты.


		 ![](../../../Property_Image.gif)
		 [OffsetType](dhtmlMapChart.chm::/classes/map/mapcontentmilestone/mapcontentmilestone.offsettype.htm)
		 Свойство OffsetType
		 определяет тип смещения значка карты.


		 ![](../../../Property_Image.gif)
		 [Shape](dhtmlMapChart.chm::/classes/map/mapcontentmilestone/mapcontentmilestone.shape.htm)
		 Свойство Shape устанавливает область карты, на которой будет размещаться
		 значок.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [clear](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.clear.htm)
		 Метод clear удаляет
		 события DOM-элемента, соответствующего значку слоя карты.


		 ![](../../../Property_Image.gif)
		 [draw3d](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.draw3d.htm)
		 Метод draw3d отрисовывает
		 значок слоя трёхмерной карты.


		 ![](../../../Property_Image.gif)
		 [getMilestonePosition](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.getMilestonePosition.htm)
		 Метод getMilestonePosition
		 определяет расположение значка в координатах топоосновы карты.


		 ![](../../../Property_Image.gif)
		 [getMilestonePosition3d](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.getMilestonePosition3d.htm)
		 Метод getMilestonePosition3d
		 определяет расположение значка в координатах топоосновы трёхмерной
		 карты.


		 ![](../../../Property_Image.gif)
		 [getScreen2DCoord](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.getScreen2DCoord.htm)
		 Метод getScreen2DCoord
		 вовзращает экранные координаты точки по её координатам относительно
		 топоосновы двумерной карты.


		 ![](../../../Property_Image.gif)
		 [move](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.move.htm)
		 Метод move перемещает
		 значок слоя карты в указанную позицию.


		 ![](../../../Property_Image.gif)
		 [startAnimation](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.startAnimation.htm)
		 Метод startAnimation
		 запускает воспроизведение анимации значка слоя карты.


		 ![](../../../Property_Image.gif)
		 [stopAnimation](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.stopAnimation.htm)
		 Метод stopAnimation
		 останавливает воспроизведение анимации значка слоя карты.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [AnimationCompleted](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.AnimationCompleted.htm)
		 Событие AnimationCompleted
		 генерируется после окончания воспроизведения анимации.


		 ![](../../../Event_Image.gif)
		 [AnimationCycleCompleted](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.AnimationCycleCompleted.htm)
		 Событие AnimationCycleCompleted
		 генерируется после окончания прямого цикла воспроизведения анимации.


		 ![](../../../Event_Image.gif)
		 [AnimationStarted](dhtmlMapChart.chm::/Classes/Map/MapContentMilestone/MapContentMilestone.AnimationStarted.htm)
		 Событие AnimationStarted
		 генерируется при запуске воспроизведения анимации.


## Свойства, унаследованные от класса [MapObject](../MapObject/MapObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Chart](dhtmlMapChart.chm::/classes/map/mapobject/mapobject.chart.htm)
		 Свойство Chart устанавливает
		 карту, которой принадлежит объект.


		 ![](../../../Property_Image.gif)
		 [DomNode](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.DomNode.htm)
		 Свойство DomNode определяет
		 DOM-вершину, соответствующую объекту на карте.


		 ![](../../../Property_Image.gif)
		 [IsVisible](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.IsVisible.htm)
		 Свойство IsVisible
		 определяет, отображается ли объект на карте.


		 ![](../../../Property_Image.gif)
		 [PluginData](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.PluginData.htm)
		 Свойство PluginData
		 определяет данные внешнего компонента на карте.


## Методы, унаследованные от класса [MapObject](../MapObject/MapObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [draw](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.draw.htm)
		 Метод draw отрисовывает
		 объект на карте.


		 ![](../../../Sub_Image.gif)
		 [getIsSettingsCreated](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.getIsSettingsCreated.htm)
		 Метод getIsSettingsCreated
		 возвращает признак того, создан ли объект карты на основе настроек
		 пользователя.


		 ![](../../../Sub_Image.gif)
		 [hide](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.hide.htm)
		 Метод hide скрывает
		 объект на карте.


		 ![](../../../Sub_Image.gif)
		 [scale](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.scale.htm)
		 Метод scale масштабирует
		 объект на карте.


		 ![](../../../Sub_Image.gif)
		 [show](dhtmlMapChart.chm::/Classes/Map/MapObject/MapObject.show.htm)
		 Метод show отображает
		 объект на карте.


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


[Классы
 для работы с DHTML-картой](../Map_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
