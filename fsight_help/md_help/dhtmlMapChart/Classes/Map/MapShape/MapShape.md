# MapShape

MapShape
-


# MapShape


Пространство имен: PP;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[MapObject](../MapObject/MapObject.htm)


MapShape


## Описание


Класс MapShape реализует область
 слоя карты.


## Синтаксис


PP.initClass(PP.MapShape, PP.[MapObject](../MapObject/MapObject.htm),
 "MapShape");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Background](MapShape.Background.htm)
		 Свойство Background
		 устанавливает фон для области карты.


		 ![](../../../Property_Image.gif)
		 [BorderColor](MapShape.BorderColor.htm)
		 Свойство BorderColor
		 определяет цвет границы для области слоя карты.


		 ![](../../../Property_Image.gif)
		 [BoundingAngles](MapShape.BoundingAngles.htm)
		 Свойство BoundingAngles
		 определяет прямоугольную область, ограничивающую область слоя
		 карты.


		 ![](../../../Property_Image.gif)
		 [Effect](MapShape.Effect.htm)
		 Свойство Effect устанавливает
		 эффект для области карты.


		 ![](../../../Property_Image.gif)
		 [Hover](MapShape.Hover.htm)
		 Событие Hover наступает
		 при наведении курсора на область карты.


		 ![](../../../Property_Image.gif)
		 [IsHandCursor](MapShape.IsHandCursor.htm)
		 Свойство IsHandCursor
		 определяет, отображается ли указатель мыши в режиме «Выбор ссылки»
		 при наведении на область слоя карты.


		 ![](../../../Property_Image.gif)
		 [IsRendered](MapShape.IsRendered.htm)
		 Свойство IsRendered
		 определяет, отрисована ли область слоя карты.


		 ![](../../../Property_Image.gif)
		 [IsStroked](MapShape.IsStroked.htm)
		 Свойство IsStroked
		 определяет, включён ли режим рисования области слоя карты с контуром
		 и без заливки.


		 ![](../../../Property_Image.gif)
		 [Label](MapShape.Label.htm)
		 Свойство Label устанавливает
		 метку для области карты.


		 ![](../../../Property_Image.gif)
		 [ParentLayer](MapShape.ParentLayer.htm)
		 Свойство ParentLayer
		 устанавливает родительский слой для области карты.


		 ![](../../../Property_Image.gif)
		 [StrokeWidth](MapShape.StrokeWidth.htm)
		 Свойство StrokeWidth
		 определяет толщину границы для области слоя карты.


		 ![](../../../Property_Image.gif)
		 [ToolTip](MapShape.ToolTip.htm)
		 Свойство ToolTip определяет
		 всплывающую подсказку для области слоя карты.


		 ![](../../../Property_Image.gif)
		 [Value](MapShape.Value.htm)
		 Свойство Value определяет
		 значение для области слоя карты.


		 ![](../../../Property_Image.gif)
		 [VerticesData](MapShape.VerticesData.htm)
		 Свойство VerticesData
		 определяет данные вершин области слоя карты.


		 ![](../../../Property_Image.gif)
		 [Visual](MapShape.Visual.htm)
		 Свойство Visual определяет
		 настройки сопоставления данных области слоя карты.


		 ![](../../../Property_Image.gif)
		 [ZValue](MapShape.ZValue.htm)
		 Свойство ZValue определяет
		 высоту области слоя карты.


## Метод


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addVerticesData](MapShape.addVerticesData.htm)
		 Метод addVerticesData
		 добавляет новые данные вершин для области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [animate](MapShape.animate.htm)
		 Метод animate
		 воспроизводит анимацию области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [applyEffect3d](MapShape.applyEffect3d.htm)
		 Метод applyEffect3d
		 применят эффект для области слоя трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [clear](MapShape.clear.htm)
		 Метод clear очищает
		 область слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getBoundingBox](MapShape.getBoundingBox.htm)
		 Метод getBoundingBox
		 возвращает куб, ограничивающий область слоя трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [getBoundsRec](MapShape.getBoundsRec.htm)
		 Метод getBoundsRec
		 возвращает прямоугольную область, ограничивающую область слоя
		 карты.


		 ![](../../../Sub_Image.gif)
		 [getCenter](MapShape.getCenter.htm)
		 Метод getCenter возвращает
		 центральную точку области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getCurrentBrush](MapShape.getCurrentBrush.htm)
		 Метод getCurrentBrush
		 возвращает текущий объект заливки области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getIntersectionWithRay](MapShape.getIntersectionWithRay.htm)
		 Метод getIntersectionWithRay
		 возвращает расстояние от начала луча до его пересечения с областью
		 слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getPoint](MapShape.getPoint.htm)
		 Метод getPoint возвращает
		 точку, принадлежащую области слоя карты, по отступам от её левой
		 и верхней границы.


		 ![](../../../Sub_Image.gif)
		 [getRGBColor](MapShape.getRGBColor.htm)
		 Метод getRGBColor возвращает
		 цвет области слоя карты в виде массива долей красного, зелёного
		 и синего цветов.


		 ![](../../../Sub_Image.gif)
		 [getToolTipColor](MapShape.getToolTipColor.htm)
		 Метод getToolTipColor
		 возвращает цвет границы всплывающей подсказки.


		 ![](../../../Sub_Image.gif)
		 [getToolTipValues](MapShape.getToolTipValues.htm)
		 Метод getToolTipValues
		 возвращает значения данных, предназначенных для отображения в
		 всплывающей подсказке для области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [isInsideFrustum](MapShape.isInsideFrustum.htm)
		 Метод isInsideFrustum
		 определяет, входит ли текущая область слоя трёхмерной карты в
		 указанную прямоугольную область.


		 ![](../../../Sub_Image.gif)
		 [isOpaque](MapShape.isOpaque.htm)
		 Метод isOpaque возвращает
		 признак того, является ли область слоя карты непрозрачной.


		 ![](../../../Sub_Image.gif)
		 [joinVerticesData](MapShape.joinVerticesData.htm)
		 Метод joinVerticesData
		 соединяет добавленные данные вершин, принадлежащих области слоя
		 карты.


		 ![](../../../Sub_Image.gif)
		 [normalize3d](MapShape.normalize3d.htm)
		 Метод normalize3d нормализует
		 область слоя трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [rebuildLabel](MapShape.rebuildLabel.htm)
		 Метод rebuildLabel
		 перерисовывает метку для области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [rebuildToolTip](MapShape.rebuildToolTip.htm)
		 Метод rebuildToolTip
		 перерисовывает всплывающую подсказку для области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [render3d](MapShape.render3d.htm)
		 Метод render3d отрисовывает
		 область слоя трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [renderBorder3d](MapShape.renderBorder3d.htm)
		 Метод renderBorder3d
		 отрисовывает границу области слоя трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [setBorder](MapShape.setBorder.htm)
		 Метод setBorder определяет
		 границу для области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [toggleLabel](MapShape.toggleLabel.htm)
		 Метод toggleLabel отображает
		 и скрывает подпись данных для области слоя карты попеременно после
		 каждого вызова.


		 ![](../../../Sub_Image.gif)
		 [toggleLabel3d](MapShape.toggleLabel3d.htm)
		 Метод toggleLabel3d
		 отображает и скрывает подпись данных для области слоя трёхмерной
		 карты попеременно после каждого вызова.


		 ![](../../../Sub_Image.gif)
		 [toggleTooltip](MapShape.toggleTooltip.htm)
		 Метод toggleTooltip
		 отображает и скрывает всплывающую подсказу для области слоя карты
		 попеременно после каждого вызова.


		 ![](../../../Sub_Image.gif)
		 [toggleToolTip3d](MapShape.toggleToolTip3d.htm)
		 Метод toggleToolTip3d
		 отображает и скрывает всплывающую подсказку для области слоя трёхмерной
		 карты попеременно после каждого вызова.


		 ![](../../../Sub_Image.gif)
		 [updateLabelPosition](MapShape.updateLabelPosition.htm)
		 Метод updateLabelPosition
		 обновляет расположение метки для области слоя карты.


		 ![](../../../Sub_Image.gif)
		 [updateLabelPosition3d](MapShape.updateLabelPosition3d.htm)
		 Метод updateLabelPosition3d
		 обновляет расположение метки для области слоя трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [updateTooltipPosition](MapShape.updateTooltipPosition.htm)
		 Метод updateTooltipPosition
		 обновляет расположение всплывающей подсказки для области слоя
		 карты.


		 ![](../../../Sub_Image.gif)
		 [updateTooltipPosition3d](MapShape.updateTooltipPosition3d.htm)
		 Метод updateTooltipPosition3d
		 обновляет расположение всплывающей подсказки для области слоя
		 трёхмерной карты.


		 ![](../../../Sub_Image.gif)
		 [updateTranscript](MapShape.updateTranscript.htm)
		 Метод updateTranscript
		 подсвечивает элемент расшифровки для заданной области слоя карты.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Disposing](MapShape.Disposing.htm)


		 Событие Disposing наступает
		 после удаления области слоя карты.


		 ![](../../../Event_Image.gif)
		 [Hover](MapShape.Hover.htm)


		 Событие Hover наступает
		 при наведении курсора на область карты.


		 ![](../../../Event_Image.gif)
		 [MouseMove](MapShape.MouseMove.htm)


		 Событие MouseMove генерируется
		 при перемещении указателя мыши над областью слоя карты.


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
