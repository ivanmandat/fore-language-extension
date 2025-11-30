# MapLayer

MapLayer
-


# MapLayer


Пространство имен: PP;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[MapObject](../MapObject/MapObject.htm)


MapLayer


## Описание


Класс MapLayer реализует слой
 карты.


## Синтаксис


PP.initClass(PP.MapLayer, PP.[MapObject](../MapObject/MapObject.htm),
 "MapLayer");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Bars](MapLayer.Bars.htm)
		 Свойство Bars определяет
		 столбиковые показатели для слоя карты.


		 ![](../../../Property_Image.gif)
		 [Bubbles](MapLayer.Bubbles.htm)
		 Свойство Bubbles определяет
		 пузырьковые показатели для слоя карты.


		 ![](../../../Property_Image.gif)
		 [Effect](MapLayer.Effect.htm)
		 Свойство Effect устанавливает
		 эффект для слоя.


		 ![](../../../Property_Image.gif)
		 [Label](MapLayer.Label.htm)
		 Свойство Label
		 устанавливает метку для слоя.


		 ![](../../../Property_Image.gif)
		 [Milestones](MapLayer.Milestones.htm)
		 Свойство Milestones
		 определяет значки с изображением на карте.


		 ![](../../../Property_Image.gif)
		 [ParentLayer](MapLayer.ParentLayer.htm)
		 Свойство ParentLayer
		 определяет родительский слой карты.


		 ![](../../../Property_Image.gif)
		 [Pies](MapLayer.Pies.htm)
		 Свойство Pies определяет
		 круговые показатели для слоя карты.


		 ![](../../../Property_Image.gif)
		 [PlaceVisualsOneByOne](MapLayer.PlaceVisualsOneByOne.htm)
		 Свойство PlaceVisualsOneByOne
		 определяет, расположены ли показатели карты в одну линию.


		 ![](../../../Property_Image.gif)
		 [Shapes](MapLayer.Shapes.htm)
		 Свойство Shapes определяет
		 области слоя карты.


		 ![](../../../Property_Image.gif)
		 [ToolTip](MapLayer.ToolTip.htm)
		 Свойство ToolTip определяет
		 всплывающую подсказку для слоя карты.


		 ![](../../../Property_Image.gif)
		 [Visual](MapLayer.Visual.htm)
		 Свойство Visual определяет
		 объект для сопоставления данных визуализатора его измерениям.


		 ![](../../../Property_Image.gif)
		 [VisualsOffset](MapLayer.VisualsOffset.htm)
		 Свойство VisualsOffset
		 определяет расстояние между показателями карты, расположенными
		 в одну линию.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addShape](MapLayer.addShape.htm)
		 Метод addShape добавляет
		 область карты на текущий слой.


		 ![](../../../Sub_Image.gif)
		 [addSubLayer](MapLayer.addSubLayer.htm)
		 Метод addSubLayer добавляет
		 дочерний слой.


		 ![](../../../Sub_Image.gif)
		 [animate](MapLayer.animate.htm)
		 Метод animate воспроизводит
		 анимацию для слоя карты.


		 ![](../../../Sub_Image.gif)
		 [clear](MapLayer.clear.htm)
		 Метод clear очищает
		 слой карты.


		 ![](../../../Sub_Image.gif)
		 [clearLayers](MapLayer.clearLayers.htm)
		 Метод clearLayers очищает
		 дочерние слои карты.


		 ![](../../../Sub_Image.gif)
		 [clearShapes](MapLayer.clearShapes.htm)
		 Метод clearShapes очищает
		 список областей карты в текущем слое.


		 ![](../../../Sub_Image.gif)
		 [clearVisualItems](MapLayer.clearVisualItems.htm)
		 Метод clearVisualItems
		 удаляет показатели со слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getIsLayersVisible](MapLayer.getIsLayersVisible.htm)
		 Метод getIsLayersVisible
		 возвращает признак того, отображается ли слой карты.


		 ![](../../../Sub_Image.gif)
		 [getMapBarCollection](MapLayer.getMapBarCollection.htm)
		 Метод getMapBarCollection
		 возвращает массив столбиковых показателей карты.


		 ![](../../../Sub_Image.gif)
		 [getMapBubbleCollection](MapLayer.getMapBubbleCollection.htm)
		 Метод getMapBubbleCollection
		 возвращает массив пузырьковых показателей карты.


		 ![](../../../Sub_Image.gif)
		 [getMapPieCollection](MapLayer.getMapPieCollection.htm)
		 Метод getMapPieCollection
		 возвращает массив круговых показателей карты.


		 ![](../../../Sub_Image.gif)
		 [getShape](MapLayer.getShape.htm)
		 Метод getShape возвращает
		 область слоя карты по её идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getSubLayer](MapLayer.getSubLayer.htm)
		 Метод getSubLayer возвращает
		 дочерний слой карты по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getSubLayers](MapLayer.getSubLayers.htm)
		 Метод getSubLayers
		 возвращает все дочерние слои первого уровня вложенности.


		 ![](../../../Sub_Image.gif)
		 [rebuildLabels](MapLayer.rebuildLabels.htm)
		 Метод rebuildLabels
		 перерисовывает метки для областей текущего и дочерних слоёв карты.


		 ![](../../../Sub_Image.gif)
		 [rebuildToolTips](MapLayer.rebuildToolTips.htm)
		 Метод rebuildToolTip
		 перерисовывает всплывающую подсказку для областей текущего и дочерних
		 слоёв карты.


		 ![](../../../Sub_Image.gif)
		 [removeShape](MapLayer.removeShape.htm)
		 Метод removeShape удаляет
		 область слоя карты.


		 ![](../../../Sub_Image.gif)
		 [removeSubLayer](MapLayer.removeSubLayer.htm)
		 Метод removeSubLayer
		 удаляет дочерний слой карты.


		 ![](../../../Sub_Image.gif)
		 [renderFrame](MapLayer.renderFrame.htm)
		 Метод renderFrame отрисовывает
		 слой карты.


		 ![](../../../Sub_Image.gif)
		 [setSize](MapLayer.setSize.htm)
		 Метод setSize устанавливает
		 размеры и масштаб отображения слоя карты.


		 ![](../../../Sub_Image.gif)
		 [updateLabelPositions](MapLayer.updateLabelPositions.htm)
		 Метод updateLabelPositions
		 обновляет расположение меток для областей текущего и дочерних
		 слоёв карты.


		 ![](../../../Sub_Image.gif)
		 [updateLabelPositions3d](MapLayer.updateLabelPositions3d.htm)
		 Метод updateLabelPosition3d
		 обновляет расположение меток для областей текущего и дочернего
		 слоёв трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [updateMilestones](MapLayer.updateMilestones.htm)
		 Метод updateMilestones
		 обновляет значки, расположенные на текущем и дочерних слоях карты.


		 ![](../../../Sub_Image.gif)
		 [updateMilestones3d](MapLayer.updateMilestones3d.htm)
		 Метод updateMilestones3d
		 обновляет значки, расположенные на текущем и дочерних слоях трёхмерной
		 карты.


		 ![](../../../Sub_Image.gif)
		 [updateTooltipPositions](MapLayer.updateTooltipPositions.htm)
		 Метод updateTooltipPositions
		 обновляет расположение всплывающей подсказки для области слоя
		 карты.


		 ![](../../../Sub_Image.gif)
		 [updateTooltipPositions3d](MapLayer.updateTooltipPositions3d.htm)
		 Метод updateTooltipPositions3d
		 обновляет расположение всплывающей подсказки для областей текущей
		 и дочерних слоёв трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [updateVisualItemsPositions](MapLayer.updateVisualItemsPositions.htm)
		 Метод updateVisualItemsPositions
		 обновляет расположение показателей на карте.


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


[Классы
 для работы с DHTML-картой](../Map_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
