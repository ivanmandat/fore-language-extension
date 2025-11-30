# MapChart: класс DHTML-компонента

MapChart: класс DHTML-компонента
-


**


# MapChart


Пространство имен: PP;


## Иерархия наследования


           [Object](dhtmlCommon.chm::/Classes/object/object.htm)


           [Control](dhtmlUi.chm::/Classes/control/control.htm)


           DataVisualizer


           MapChart


## Описание


Класс MapChart реализует компонент
 [MapChart](../../../Components/MapChart/MapChart.htm), предназначенный
 для отображения карты.


## Синтаксис


PP.initClass(PP.MapChart, [PP.Ui.DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm),
 "PP.MapChart", [PP.Ui.IDataView, PP.Ui.IVisualizerItemActivatable,
 PP.Ui.IMiniMappable]);


## Конструктор


			 Имя конструктора
			 Краткое описание


			 ![](../../../Sub_Image.gif)
			 [MapChart](dhtmlMapChart.chm::/classes/map/mapchart/constructor_mapchart.htm)
			 Конструктор MapChart
			 создает экземпляр компонента [MapChart](dhtmlMapChart.chm::/components/mapchart/mapchart.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ActiveItems](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ActiveItems.htm)
		 Свойство ActiveItems
		 определяет активные области слоя карты.


		 ![](../../../Property_Image.gif)
		 [AmbientLightValue](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.AmbientLightValue.htm)
		 Свойство AmbientLightValue
		 определяет уровень внешнего освещения карты.


		 ![](../../../Property_Image.gif)
		 [AnimationEnabled](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.AnimationEnabled.htm)
		 Свойство AnimationEnabled
		 управляет разрешением на воспроизведение анимации в карте.


		 ![](../../../Property_Image.gif)
		 [ArrowEffectsMode](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ArrowEffectsMode.htm)
		 Свойство ArrowEffectsMode
		 определяет вариант подсветки стрелок карты.


		 ![](../../../Property_Image.gif)
		 [Background](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.background.htm)
		 Свойство Background
		 устанавливает цвет фона карты.


		 ![](../../../Property_Image.gif)
		 [DirectLightDirection](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.DirectLightDirection.htm)
		 Свойство DirectLightDirection
		 определяет направление внешнего освещения.


		 ![](../../../Property_Image.gif)
		 [DisableVisuals](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.DisableVisuals.htm)
		 Свойство DisableVisuals
		 отключает отображение всех показателей карты.


		 ![](../../../Property_Image.gif)
		 [Has3DVisualInSettings](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.Has3DVisualInSettings.htm)
		 Свойство Has3DVisualInSettings
		 определяет, прочитаны ли настройки трёхмерной карты из файла или
		 же они заданы программно.


		 ![](../../../Property_Image.gif)
		 [HoveredArrows](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.HoveredArrows.htm)
		 Свойство HoveredArrows
		 определяет массив стрелок, для которых установлено наведение.


		 ![](../../../Property_Image.gif)
		 [HoveredBars](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.HoveredBars.htm)
		 Свойство HoveredBars
		 определяет массив столбиковых показателей, для которых установлено
		 наведение.


		 ![](../../../Property_Image.gif)
		 [HoveredBubbles](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.HoveredBubbles.htm)
		 Свойство HoveredBubbles
		 определяет массив пузырьковых показателей, для которых установлено
		 наведение.


		 ![](../../../Property_Image.gif)
		 [HoveredMarkers](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.HoveredMarkers.htm)
		 Свойство HoveredMarkers
		 определяет массив маркеров, для которых установлено наведение.


		 ![](../../../Property_Image.gif)
		 [HoveredPies](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.HoveredPies.htm)
		 Свойство HoveredPies
		 определяет массив круговых показателей, для которых установлено
		 наведение.


		 ![](../../../Property_Image.gif)
		 [InactiveItemsOpacity](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.InactiveItemsOpacity.htm)
		 Свойство InactiveItemsOpacity
		 определяет прозрачность неактивных областей слоя карты.


		 ![](../../../Property_Image.gif)
		 [IsHandCursor](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.IsHandCursor.htm)
		 Свойство IsHandCursor
		 определяет, отображается ли указатель мыши в режиме «Выбор ссылки»
		 при наведении на область слоя карты.


		 ![](../../../Property_Image.gif)
		 [LastHoveredItem](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.LastHoveredItem.htm)
		 Свойство LastHoveredItem
		 определяет стрелку, область слоя карты или показатель под указателем
		 мыши.


		 ![](../../../Property_Image.gif)
		 [MapGrid](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MapGrid.htm)
		 Свойство MapGrid устанавливает
		 сетку для карты.


		 ![](../../../Property_Image.gif)
		 [MapMarkers](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MapMarkers.htm)
		 Свойство MapMarkers
		 определяет массив маркеров карты.


		 ![](../../../Property_Image.gif)
		 [MaxScale](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MaxScale.htm)
		 Свойство MaxScale определяет
		 максимально допустимый масштаб карты.


		 ![](../../../Property_Image.gif)
		 [MiniMap](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MiniMap.htm)
		 Свойство MiniMap определяет
		 мини-карту.


		 ![](../../../Property_Image.gif)
		 [MiniMapEnabled](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MiniMapEnabled.htm)
		 Свойство MiniMapEnabled
		 определяет признак наличия мини-карты.


		 ![](../../../Property_Image.gif)
		 [MiniMapScale](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MiniMapScale.htm)
		 Свойство MiniMapScale
		 определяет масштаб мини-карты.


		 ![](../../../Property_Image.gif)
		 [MinScale](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.MinScale.htm)
		 Свойство MinScale определяет
		 минимально допустимый масштаб карты.


		 ![](../../../Property_Image.gif)
		 [PixelsPerRadian](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.PixelsPerRadian.htm)
		 Свойство PixelsPerRadian
		 определяет количество радиан, соответствующих одному пикселю карты
		 по горизонтали и вертикали.


		 ![](../../../Property_Image.gif)
		 [RenderToCanvas](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.RenderToCanvas.htm)
		 Свойство RenderToCanvas
		 определяет признак того, отрисовываются ли элементы карты на канве
		 в случае, если она доступна.


		 ![](../../../Property_Image.gif)
		 [Scale](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.scale.htm)
		 Свойство Scale устанавливает
		 масштаб для карты.


		 ![](../../../Property_Image.gif)
		 [SelectedArrows](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.SelectedArrows.htm)
		 Свойство SelectedArrows
		 определяет массив выделенных стрелок.


		 ![](../../../Property_Image.gif)
		 [SelectedBars](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.SelectedBars.htm)
		 Свойство SelectedBars
		 определяет массив выделенных столбиковых показателей.


		 ![](../../../Property_Image.gif)
		 [SelectedBubbles](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.SelectedBubbles.htm)
		 Свойство SelectedBubbles
		 определяет массив выделенных пузырьковых показателей.


		 ![](../../../Property_Image.gif)
		 [SelectedMarkers](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.SelectedMarkers.htm)
		 Свойство SelectedMarkers
		 определяет массив выделенных маркеров.


		 ![](../../../Property_Image.gif)
		 [SelectedPies](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.SelectedPies.htm)
		 Свойство SelectedPies
		 определяет массив выделенных круговых показателей.


		 ![](../../../Property_Image.gif)
		 [Shape3DOpacity](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.Shape3DOpacity.htm)
		 Свойство Shape3DOpacity
		 определяет прозрачность областей слоя трёхмерной карты.


		 ![](../../../Property_Image.gif)
		 [ShapesBorderColor](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ShapesBorderColor.htm)
		 Свойство ShapesBorderColor
		 определяет цвет границ областей слоя карты.


		 ![](../../../Property_Image.gif)
		 [SphereTexture](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.SphereTexture.htm)
		 Свойство SphereTexture
		 определяет адрес изображения, используемого в качестве текстуры
		 для топоосновы Sphere.


		 ![](../../../Property_Image.gif)
		 [ToolTipDelay](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ToolTipDelay.htm)
		 Свойство ToolTipDelay
		 определяет задержку перед отображением всплывающей подсказки.


		 ![](../../../Property_Image.gif)
		 [TopobaseHorizontalAlignment](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.topobasehorizontalalignment.htm)
		 Свойство TopobaseHorizontalAlignment
		 устанавливает тип выравнивания по горизонтали.


		 ![](../../../Property_Image.gif)
		 [TopobaseSize](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.TopobaseSize.htm)
		 Свойство TopobaseSize
		 определяет размер топоосновы карты.


		 ![](../../../Property_Image.gif)
		 [TopobaseVerticalAlignment](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.topobaseverticalalignment.htm)
		 Свойство TopobaseVerticalAlignment
		 устанавливает тип выравнивания по вертикали.


		 ![](../../../Property_Image.gif)
		 [TopoBoundingAngles](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.TopoBoundingAngles.htm)
		 Свойство TopoBoundingAngles
		 определяет прямоугольную область, ограничивающую топооснову карты.


		 ![](../../../Property_Image.gif)
		 [TopoBoundingBox](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.TopoBoundingAngles.htm)
		 Свойство TopoBoundingBox
		 определяет ограничительный куб топоосновы карты.


		 ![](../../../Property_Image.gif)
		 [TopoNormalization](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.TopoNormalization.htm)
		 Свойство TopoNormalization
		 определяет настройки геометрический нормализации топоосновы карты.


		 ![](../../../Property_Image.gif)
		 [Type](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.type.htm)
		 Свойство Type устанавливает
		 технологию отрисовки карты.


		 ![](../../../Property_Image.gif)
		 [UnhoverTimeout](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.UnhoverTimeout.htm)
		 Свойство UnhoverTimeout
		 определяет временной период подсвечивания элементов после отмены
		 наведения.


		 ![](../../../Property_Image.gif)
		 [UseItemColorForToolTipBorder](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.UseItemColorForToolTipBorder.htm)
		 Свойство UseItemColorForToolTipBorder
		 определяет, используется ли для задания цвета границы всплывающей
		 подсказки цвет заливки соответствующей области слоя карты.


		 ![](../../../Property_Image.gif)
		 [UseMorphFill](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.UseMorphFill.htm)
		 Свойство UseMorphFill
		 определяет, будет ли использована градиентная заливка для области
		 слоя карты.


		 ![](../../../Property_Image.gif)
		 [UseSelectOnClick](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.UseSelectOnClick.htm)
		 Свойство UseSelectOnClick
		 определяет, разрешено ли выделение области слоя карты при её выборе
		 с помощью указателя мыши.


		 ![](../../../Property_Image.gif)
		 [UseZoomOnWheel](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.UseZoomOnWheel.htm)
		 Свойство UseZoomOnWheel
		 определяет, будет ли масштабироваться карта с помощью колесика
		 мыши.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [activateSpectrumLegend](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.activateSpectrumLegend.htm)
		 Метод activateSpectrumLegend
		 управляет отображением спектральной легенды на карте.


		 ![](../../../Sub_Image.gif)
		 [afterGoogleLoad](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.afterGoogleLoad.htm)
		 Метод afterGoogleLoad
		 вызывает действия, требующие выполнения после загрузки карты с
		 топоосновой Google.


		 ![](../../../Sub_Image.gif)
		 [changeTopobase](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.changeTopobase.htm)
		 Метод resumeTimeline
		 меняет топооснову.


		 ![](../../../Sub_Image.gif)
		 [clearLastHoveredItem](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.clearLastHoveredItem.htm)
		 Метод clearLastHoveredItem
		 удаляет информацию о стрелке, области слоя карты или показателе
		 под указателем мыши.


		 ![](../../../Sub_Image.gif)
		 [clearLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.clearLayer.htm)
		 Метод clearLayer очищает
		 указанный слой.


		 ![](../../../Sub_Image.gif)
		 [clearLayers](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.clearLayers.htm)
		 Метод clearLayers очищает
		 все слои в карте.


		 ![](../../../Sub_Image.gif)
		 [clearPaper](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.clearPaper.htm)
		 Метод clearPaper очищает
		 карту.


		 ![](../../../Sub_Image.gif)
		 [findValueFormat](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.findValueFormat.htm)
		 Метод findValueFormat
		 преобразует формат подписи к интервалам легенды карты в массив
		 форматов значений.


		 ![](../../../Sub_Image.gif)
		 [formatValue](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.formatValue.htm)
		 Метод formatValue форматирует
		 значение в соответствии с указанным форматом.


		 ![](../../../Sub_Image.gif)
		 [geoToTopobase](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.geoToTopobase.htm)
		 Метод geoToTopobase
		 преобразует географические координаты в координаты топоосновы.


		 ![](../../../Sub_Image.gif)
		 [getArrowLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getArrowLayer.htm)
		 Метод getArrowLayer
		 возвращает слой для стрелок карты.


		 ![](../../../Sub_Image.gif)
		 [getBarLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getBarLayer.htm)
		 Метод getBarLayer возвращает
		 слой столбиковых показателей карты.


		 ![](../../../Sub_Image.gif)
		 [getBubbleLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getBubbleLayer.htm)
		 Метод getBubbleLayer
		 возвращает слой пузырьковых показателей карты.


		 ![](../../../Sub_Image.gif)
		 [getContentMilestoneLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getContentMilestoneLayer.htm)
		 Метод getContentMilestoneLayer
		 возвращает содержимое слоя значков для карты.


		 ![](../../../Sub_Image.gif)
		 [getDataSource](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getDataSource.htm)
		 Метод getDataSource
		 возвращает источник данных по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getFirstVisual](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.getfirstvisual.htm)
		 Метод getFirstVisual
		 возвращает первый показатель карты.


		 ![](../../../Sub_Image.gif)
		 [getGMapDomNode](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getGMapDomNode.htm)


		 Метод getGMapDomNode
		 возвращает DOM-элемент топоосновы карты Google.


		 ![](../../../Sub_Image.gif)
		 [getGoogleMap](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getGoogleMap.htm)


		 Метод getGoogleMap
		 возвращает топооснову карты Google.


		 ![](../../../Sub_Image.gif)
		 [getInstance](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getInstance.htm)


		 Метод getInstance возвращает
		 экземпляр карты.


		 ![](../../../Sub_Image.gif)
		 [getLabelColor](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getLabelColor.htm)


		 Метод getLabelColor
		 возвращает цвет границы подписи данных.


		 ![](../../../Sub_Image.gif)
		 [getLabelLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getLabelLayer.htm)


		 Метод getLabelLayer
		 возвращает слой меток карты.


		 ![](../../../Sub_Image.gif)
		 [getLayer](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.getlayer.htm)


		 Метод getLayer возвращает
		 [слой](dhtmlMapChart.chm::/classes/map/maplayer/maplayer.htm)
		 карты по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getMapGridLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getMapGridLayer.htm)


		 Метод getMapGridLayer
		 возвращает слой сетки карты.


		 ![](../../../Sub_Image.gif)
		 [getMarkerLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getMarkerLayer.htm)


		 Метод getMarkerLayer
		 возвращает слой маркеров карты.


		 ![](../../../Sub_Image.gif)
		 [getMilestoneLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getMilestoneLayer.htm)


		 Метод getMilestoneLayer
		 возвращает слой значков карты.


		 ![](../../../Sub_Image.gif)
		 [getPaper](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getPaper.htm)


		 Метод getPaper возвращает
		 область карты.


		 ![](../../../Sub_Image.gif)
		 [getPaperArea](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getPaperArea.htm)


		 Метод getPaperArea
		 возвращает прямоугольник, ограничивающий область карты.


		 ![](../../../Sub_Image.gif)
		 [getPieLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getPieLayer.htm)


		 Метод getPieLayer возвращает
		 слой круговых показателей карты.


		 ![](../../../Sub_Image.gif)
		 [getRegionName](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.getregionname.htm)


		 Метод getRegionName
		 возвращает [имя
		 региона](dhtmlMapChart.chm::/classes/map/regionname/regionname.htm) по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getScaleSettings](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getScaleSettings.htm)


		 Метод getScaleSettings
		 возвращает настройки масштаба карты.


		 ![](../../../Sub_Image.gif)
		 [getSelectedShape](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getSelectedShape.htm)


		 Метод getSelectedShape
		 вовзращает область слоя карты по координатам принадлежащей ей
		 точки.


		 ![](../../../Sub_Image.gif)
		 [getShape](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.getshape.htm)


		 Метод getShape
		 возвращает [область
		 карты](dhtmlMapChart.chm::/classes/map/mapshape/mapshape.htm) по ее идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getState](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getState.htm)


		 Метод getState возвращает
		 настройки карты.


		 ![](../../../Sub_Image.gif)
		 [getToolTipArea](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getToolTipArea.htm)


		 Метод getToolTipArea
		 возвращает область, доступную для отображения всплывающих подсказок.


		 ![](../../../Sub_Image.gif)
		 [getToolTipColor](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getToolTipColor.htm)


		 Метод getToolTipColor
		 возвращает цвет границы всплывающей подсказки.


		 ![](../../../Sub_Image.gif)
		 [getToolTipLayer](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getToolTipLayer.htm)


		 Метод getToolTipLayer
		 возвращает слой всплывающих подсказок для областей слоя карты.


		 ![](../../../Sub_Image.gif)
		 [getTopobase](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.gettopobase.htm)


		 Метод getTopobase возвращает
		 [топооснову](dhtmlMapChart.chm::/classes/map/maptopobase/maptopobase.htm)
		 карты.


		 ![](../../../Sub_Image.gif)
		 [getTopobaseLeft](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getTopobaseLeft.htm)


		 Метод getTopobaseLeft
		 возвращает отступ топоосновы от левой границы карты в пикселях.


		 ![](../../../Sub_Image.gif)
		 [getTopobaseTop](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.getTopobaseTop.htm)


		 Метод getTopobaseTop
		 возвращает отступ топоосновы от верхней границы карты в пикселях.


		 ![](../../../Sub_Image.gif)
		 [isLoaded](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.isLoaded.htm)


		 Метод isLoaded определяет,
		 загружена и отрисована ли карта.


		 ![](../../../Sub_Image.gif)
		 [isSomethingSelected](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.isSomethingSelected.htm)


		 Метод isSomethingSelected
		 определяет, содержатся ли на карте выделенные элементы.


		 ![](../../../Sub_Image.gif)
		 [refreshView](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.refreshView.htm)


		 Метод refreshView обновляет
		 карту в соответствии с указанными настройками.


		 ![](../../../Sub_Image.gif)
		 [requestContentChanged](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.requestContentChanged.htm)


		 Метод requestContentChanged
		 вызывает событие [ContentChanged](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ContentChanged.htm).


		 ![](../../../Sub_Image.gif)
		 [resumeTimeline](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.resumeTimeline.htm)


		 Метод resumeTimeline
		 возобновляет анимацию временной шкалы.


		 ![](../../../Sub_Image.gif)
		 [pauseTimeline](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.pauseTimeline.htm)


		 Метод pauseTimeline
		 приостанавливает анимацию временной шкалы.


		 ![](../../../Sub_Image.gif)
		 [scale](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ScaleM.htm)


		 Метод scale увеличивает
		 текущий масштаб.


		 ![](../../../Sub_Image.gif)
		 [sceneToScreen](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.sceneToScreen.htm)


		 Метод sceneToScreen
		 возвращает оконные координаты точки, соответствующие мировым.


		 ![](../../../Sub_Image.gif)
		 [sceneToScreenIfVisible](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.sceneToScreenIfVisible.htm)


		 Метод sceneToScreenIfVisible
		 возвращает оконные координаты точки, соответствующие мировым,
		 при условии, если она является видимой.


		 ![](../../../Sub_Image.gif)
		 [setMasterSettings](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.setMasterSettings.htm)


		 Метод setMasterSettings
		 применяет указанные настройки карты.


		 ![](../../../Sub_Image.gif)
		 [setViewArea](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.setViewArea.htm)


		 Метод setViewArea устанавливает
		 область просмотра карты.


		 ![](../../../Sub_Image.gif)
		 [topobaseToScreen](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.topobaseToScreen.htm)


		 Метод topobaseToScreen
		 преобразует координаты указанной области топоосновы в экранные
		 координаты.


## Событие


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ContentChanged](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ContentChanged.htm)
		 Событие ContentChanged
		 наступает после изменения содержимого карты.


		 ![](../../../Event_Image.gif)
		 [Loaded](dhtmlMapChart.chm::/classes/map/mapchart/mapchart.loaded.htm)
		 Событие Loaded наступает
		 после загрузки карты.


		 ![](../../../Event_Image.gif)
		 [Refreshed](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.Refreshed.htm)
		 Событие Refreshed наступает
		 после обновления карты.


		 ![](../../../Event_Image.gif)
		 [TimelineStepChanged](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.TimelineStepChanged.htm)
		 Событие TimelineStepChanged
		 наступает после изменения шага временной шкалы.


		 ![](../../../Event_Image.gif)
		 [TimelineStepChanging](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.TimelineStepChanging.htm)
		 Событие TimelineStepChanging
		 наступает перед изменением шага временной шкалы.


		 ![](../../../Event_Image.gif)
		 [ViewAreaChanged](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.ViewAreaChanged.htm)
		 Событие ViewAreaChanged
		 наступает после изменения области просмотра карты.


## Свойства, унаследованные от класса [DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ActiveMappingItems](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ActiveMappingItems.htm)
		 Свойство ActiveMappingItems
		 определяет массив активных значений пузырьковой диаграммы.


		 ![](../../../Property_Image.gif)
		 [AreaSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelection.htm)
		 Свойство AreaSelection**
		 устанавливает область выделения для диаграмм.


		 ![](../../../Property_Image.gif)
		 [AreaSelectionAction](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelectionAction.htm)
		 Свойство AreaSelectionAction
		 определяет действие при выделении области в визуализаторе.


		 ![](../../../Property_Image.gif)
		 [CustomData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.CustomData.htm)
		 Свойство CustomData
		 предназначено для хранения пользовательских данных.


		 ![](../../../Property_Image.gif)
		 [DataSources](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.DataSources.htm)
		 Свойство **DataSources**
		 устанавливает и возвращает объект с источниками данных для диаграмм.


		 ![](../../../Property_Image.gif)
		 [EnableBatchData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.EnableBatchData.htm)
		 Свойство **EnableBatchData**
		 управляет доступностью пакетных данных у источника диаграмм.


		 ![](../../../Property_Image.gif)
		 [EnableSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.EnableSelection.htm)
		 Свойство **EnableSelection**
		 управляет доступностью выделения элементов в визуализаторе.


		 ![](../../../Property_Image.gif)
		 [GlobalItemsIds](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.GlobalItemsIds.htm)
		 Свойство GlobalItemsIds
		 определяет словарь глобальных идентификаторов элементов.


		 ![](../../../Property_Image.gif)
		 [HoverActiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoverActiveEffects.htm)
		 Свойство HoverActiveEffects
		 определяет эффекты, применяющиеся к объектам при наведении на
		 них курсора.


		 ![](../../../Property_Image.gif)
		 [HoveredItems](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoveredItems.htm)
		 Свойство HoveredItems
		 определяет массив элементов, для которых установлено наведение.


		 ![](../../../Property_Image.gif)
		 [HoverInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoverInactiveEffects.htm)
		 Свойство HoverInactiveEffects
		 определяет эффекты, применяющиеся к объектам, на которые не наведен
		 курсор.


		 ![](../../../Property_Image.gif)
		 [ItemHoverness](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemHoverness.htm)
		 Свойство ItemHoverness
		 определяет, установлено ли наведение на элемент диаграммы.


		 ![](../../../Property_Image.gif)
		 [ItemSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemSelection.htm)
		 Свойство Item**Selection**
		 определяет выделение элемента.


		 ![](../../../Property_Image.gif)
		 [LegendMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendMapping.htm)
		 Свойство LegendMapping
		 определяет словарь связи легенд с привязками данных.


		 ![](../../../Property_Image.gif)
		 [Legends](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Legends.htm)
		 Свойство **Legends**
		 устанавливает и возвращает массив легенд диаграммы.


		 ![](../../../Property_Image.gif)
		 [LegendsPackingMaxPart](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendsPackingMaxPart.htm)
		 Свойство **LegendsPackingMaxPart**
		 устанавливает и возвращает максимальную часть легенд диаграммы
		 из их компоновки.


		 ![](../../../Property_Image.gif)
		 [MappingActiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.MappingActiveEffects.htm)
		 Свойство MappingActiveEffects
		 определяет сопоставление эффектов для активных элементов.


		 ![](../../../Property_Image.gif)
		 [MappingInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.MappingInactiveEffects.htm)
		 Свойство MappingInactiveEffects
		 определяет сопоставление эффектов для неактивных элементов.


		 ![](../../../Property_Image.gif)
		 [MappingItemActiveness](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.MappingItemActiveness.htm)
		 Свойство MappingItemActiveness
		 определяет, активно ли сопоставление эффекта у элемента визуализатора.


		 ![](../../../Property_Image.gif)
		 [Scales](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Scales.htm)
		 Свойство **Scales**
		 устанавливает и возвращает шкалы диаграммы.


		 ![](../../../Property_Image.gif)
		 [SelectActiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectActiveEffects.htm)
		 Свойство SelectActiveEffects
		 определяет массив эффектов, которые применяются к выделенным элементам
		 пузырьковой диаграммы.


		 ![](../../../Property_Image.gif)
		 [SelectedItems](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectedItems.htm)
		 Свойство SelectedItems
		 определяет массив выделенных элементов пузырьковой диаграммы.


		 ![](../../../Property_Image.gif)
		 [SelectInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectInactiveEffects.htm)
		 Свойство SelectInactiveEffects
		 определяет массив эффектов, которые применяются к невыделенным
		 элементам пузырьковой диаграммы.


		 ![](../../../Property_Image.gif)
		 [SettingsProvider](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SettingsProvider.htm)
		 Свойство SettingsProvider
		 определяет базовый класс для предоставления настроек.


		 ![](../../../Property_Image.gif)
		 [Timeline](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Timeline.htm)
		 Свойство **Timeline**
		 устанавливает и возвращает временную шкалу диаграммы.


		 ![](../../../Property_Image.gif)
		 [UseLegendsPacking](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseLegendsPacking.htm)
		 Свойство **UseLegendsPacking**
		 разрешает и запрещает использование упаковки легенд диаграммы.


		 ![](../../../Property_Image.gif)
		 [UseSelectOnClick](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseSelectOnClick.htm)
		 Свойство UseSelectOnClick
		 определяет, разрешено ли выделение элемента с помощью указателя
		 мыши.


		 ![](../../../Property_Image.gif)
		 [UseSelectOnRightClick](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseSelectOnRightClick.htm)
		 Свойство UseSelectOnRightClick
		 определяет, разрешено ли выделение элемента с помощью правой кнопки
		 мыши.


		 ![](../../../Property_Image.gif)
		 [Visuals](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Visuals.htm)
		 Свойство **Visuals**
		 устанавливает и возвращает настройки сопоставления значений рядов
		 данных осям диаграммы, цвету и размеру её элементов.


## Методы, унаследованные от класса [DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addVisual](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.addVisual.htm)
		 Метод addVisual устанавливает
		 сопоставление данных визуализатора с указанным идентификатором.


		 ![](../../../Sub_Image.gif)
		 [animate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.animate.htm)
		 Метод **animate**
		 воспроизводит анимацию диаграммы.


		 ![](../../../Sub_Image.gif)
		 [beginUpdate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.beginUpdate.htm)
		 Метод **beginUpdate**
		 включает режим обновления данных, запрещающий перерисовку компонента
		 до выхода из этого режима.


		 ![](../../../Sub_Image.gif)
		 [clearAreaSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.clearAreaSelection.htm)
		 Метод **clearAreaSelection**
		 очищает выделение в диаграмме.


		 ![](../../../Sub_Image.gif)
		 [disposeData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.disposeData.htm)
		 Метод dispose**Data**
		 удаляет сложные свойства визуализатора.


		 ![](../../../Sub_Image.gif)
		 [draw](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.draw.htm)
		 Метод **draw** полностью
		 перерисовывает диаграмму.


		 ![](../../../Sub_Image.gif)
		 [endUpdate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.endUpdate.htm)
		 Метод **endUpdate**
		 выключает режим обновления данных, запрещающий перерисовку компонента
		 до выхода из этого режима.


		 ![](../../../Sub_Image.gif)
		 [getBackwardGlobalItemsIds](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getBackwardGlobalItemsIds.htm)
		 Метод getBackwardGlobalItemsIds
		 возвращает обратный словарь глобальных идентификаторов элементов.


		 ![](../../../Sub_Image.gif)
		 [getBackwardLegendMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getBackwardLegendMapping.htm)
		 Метод getBackwardLegendMapping
		 возвращает обратный словарь связи легенд с привязками данных.


		 ![](../../../Sub_Image.gif)
		 [getEnableHover](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getEnableHover.htm)
		 Метод getEnableHover
		 возвращает признак использования эффектов при наведении курсора
		 на пузырьки пузырьковой диаграммы.


		 ![](../../../Sub_Image.gif)
		 [getFirstDataSource](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstDataSource.htm)
		 Метод **getFirstDataSource**
		 возвращает первый источник у визуализатора данных для диаграмм.


		 ![](../../../Sub_Image.gif)
		 [getFirstLegend](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstLegend.htm)
		 Метод **getFirstLegend**
		 возвращает первую из всех легенд для диаграммы.


		 ![](../../../Sub_Image.gif)
		 [getFirstScale](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstScale.htm)
		 Метод **getFirstScale**
		 возвращает первую шкалу диаграммы.


		 ![](../../../Sub_Image.gif)
		 [getGlobalItemId](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getGlobalItemId.htm)
		 Метод getGlobalItemId
		 возвращает глобальный идентификатор элемента.


		 ![](../../../Sub_Image.gif)
		 [getItemsByAreaRect](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getItemsByAreaRect.htm)
		 Метод **getItemsByAreaRect**
		 возвращает элементы, входящие в указанную область диаграммы.


		 ![](../../../Sub_Image.gif)
		 [getLegendByDataMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLegendByDataMapping.htm)
		 Метод getLegendByDataMapping
		 возвращает легенду визуализатора по идентификатору сопоставления
		 данных.


		 ![](../../../Sub_Image.gif)
		 [getLegendById](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLegendById.htm)
		 Метод getLegendById
		 возвращает легенду пузырьковой диаграммы по её идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getLocalItemId](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLocalItemId.htm)
		 Метод getLocalItemId
		 возвращает внутренний идентификатор элемента.


		 ![](../../../Sub_Image.gif)
		 [getTimelineStepName](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getTimelineStepName.htm)
		 Метод getTimelineStepName
		 возвращает текущий шаг временной шкалы.


		 ![](../../../Sub_Image.gif)
		 [getVisualById](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getVisualById.htm)
		 Метод getVisualById
		 возвращает сопоставление данных визуализатора по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [loadData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.loadData.htm)
		 Метод **loadData**
		 дозагружает в диаграмму указанные данные.


		 ![](../../../Sub_Image.gif)
		 [refresh](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.refresh.htm)
		 Метод **refresh**
		 обновляет диаграмму.


		 ![](../../../Sub_Image.gif)
		 [setTimelineStep](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.setTimelineStep.htm)
		 Метод setTimelineStep
		 устанавливает шаг временной шкалы.


		 ![](../../../Sub_Image.gif)
		 [updateData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.updateData.htm)
		 Метод **updateData**
		 присваивает параметрам сопоставления значений рядов данных диаграммы
		 новое значение индекса.


## События, унаследованные от класса [DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [AreaSelected](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelected.htm)
		 Событие **AreaSelected**
		 генерируется после выделения области диаграммы.


		 ![](../../../Event_Image.gif)
		 [AreaSelecting](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelecting.htm)
		 Событие **AreaSelecting**
		 генерируется в процессе выделения области диаграммы.


		 ![](../../../Event_Image.gif)
		 [ItemsSelected](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemsSelected.htm)
		 Событие ItemSelected
		 генерируется после выделения элементов визуализатора.


		 ![](../../../Event_Image.gif)
		 [ItemsSelecting](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemsSelecting.htm)
		 Событие ItemSelecting
		 генерируется перед выделением элементов визуализатора.


		 ![](../../../Event_Image.gif)
		 [LegendHeaderClicked](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendHeaderClicked.htm)
		 Событие **LegendHeaderClicked**
		 генерируется при нажатии на заголовок легенды диаграммы.


		 ![](../../../Event_Image.gif)
		 [LegendItemSelected](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendItemSelected.htm)
		 Событие LegendItemSelected
		 генерируется после выделения элемента легенды.


		 ![](../../../Event_Image.gif)
		 [LegendItemSelecting](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendItemSelecting.htm)
		 Событие LegendItemSelecting
		 генерируется в процессе выделения элемента легенды.


		 ![](../../../Event_Image.gif)
		 [RequestData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.RequestData.htm)
		 Событие **RequestData**
		 генерируется при необходимости дозагрузки данных в источник диаграммы.


		 ![](../../../Event_Image.gif)
		 [TimelineStep](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.TimelineStep.htm)
		 Событие **TimelineStep**
		 генерируется при изменении текущего шага временной шкалы диаграммы.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../../Property_Image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../../Property_Image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../../Property_Image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../../Property_Image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../../Property_Image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../../Property_Image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../../Property_Image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../../Property_Image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../../Property_Image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../../Property_Image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../../Property_Image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../../Property_Image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../../Property_Image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../../Property_Image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../../Property_Image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../../Property_Image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../../Property_Image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../../Property_Image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../../Property_Image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../../Property_Image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../../Property_Image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../../Property_Image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../../Property_Image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../../Property_Image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../../Sub_Image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../../Sub_Image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../../Sub_Image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../../Sub_Image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../../Sub_Image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../../Sub_Image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../../Sub_Image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../../Sub_Image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../../Sub_Image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../../Sub_Image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../../Sub_Image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../../Sub_Image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../../Sub_Image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../../Sub_Image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../../Sub_Image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../../Sub_Image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../../Sub_Image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../../Sub_Image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../../Sub_Image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../../Sub_Image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../../Sub_Image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../../Sub_Image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../../Sub_Image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../../Sub_Image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../../Sub_Image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../../Event_Image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../../Event_Image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../../Event_Image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../../Event_Image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../../Event_Image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


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
