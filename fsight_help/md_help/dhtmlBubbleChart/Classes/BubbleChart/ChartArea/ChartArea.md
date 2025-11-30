# ChartArea

ChartArea
-


**


# ChartArea


Пространство имен**: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[PlacedControlBase](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.htm)


ChartArea


## Описание


Класс **ChartArea** представляет
 собой область [пузырьковой диаграммы](../../../Components/BubbleChart/BubbleChart.htm).


## Синтаксис


PP.initClass(PP.Ui.ChartArea, [PP.Ui.PlacedControlBase](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.htm),
 "PP.Ui.ChartArea");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [ChartArea](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/Constructor_ChartArea.htm)
		 Конструктор ChartArea
		 создает экземпляр класса ChartArea.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../property_image.gif)
		 [AngleLines](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.AngleLines.htm)
		 Свойство AngleLines
		 определяет коллекцию наклонных линий области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [Axes](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.Axes.htm)
		 Свойство Axes
		 определяет оси X и Y области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [AxisX](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.AxisX.htm)
		 Свойство AxisX
		 определяет ось X области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [AxisY](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.AxisY.htm)
		 Свойство AxisY
		 определяет ось Y области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [Chart](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.Chart.htm)
		 Свойство **Chart**
		 определяет пузырьковую диаграмму текущей области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [Footer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.Footer.htm)
		 Свойство Footer
		 определяет нижний колонтитул для области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [Grid](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.Grid.htm)
		 Свойство Grid
		 определяет сетку области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [Header](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.Header.htm)
		 Свойство Header
		 определяет заголовок для области построения пузырьковой диаграммы.


		 ![](../../../property_image.gif)
		 [IsGridBefore](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.IsGridBefore.htm)
		 Свойство IsGridBefore
		 определяет, отображается ли сетка области построения пузырьковой диаграммы поверх
		 пузырьков.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [drawWithoutResize](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.drawWithoutResize.htm)
		 Метод drawWithoutResize
		 перерисовывает область построения и оси пузырьковой диаграммы
		 без изменения размера компонентов.


		 ![](../../../sub_image.gif)
		 [getBackgroundLabel](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getBackgroundLabel.htm)
		 Метод getBackgroundLabel**
		 возвращает** фоновую
		 метку пузырьковой диаграммы, на которой отображается текущий шаг
		 временной шкалы.


		 ![](../../../sub_image.gif)
		 [getCrosshairLabelsLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getCrosshairLabelsLayer.htm)
		 Метод getCrosshairLabelsLayer
		 возвращает SVG-элемент, предназначенный для отрисовки слоя меток,
		 указывающих положение выделенных элементов.


		 ![](../../../sub_image.gif)
		 [getCrosshairLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getCrosshairLayer.htm)
		 Метод getCrosshairLayer
		 возвращает слой пунктирных линий выделенных элементов области
		 построения пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getGridLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getGridLayer.htm)
		 Метод getGridLayer
		 возвращает слой сетки и осей пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getHistoryLabelsLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getHistoryLabelsLayer.htm)
		 Метод getHistoryLabelsLayer**
		 возвращает** SVG-элемент,
		 содержащий слой меток истории значений пузырьков пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getHistoryLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getHistoryLayer.htm)
		 Метод getHistoryLayer возвращает SVG-элемент,
		 содержащий историю значений пузырьков пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getInnerPaperArea](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getInnerPaperArea.htm)
		 Метод getInnerPaperArea
		 возвращает прямоугольник с размерами области построения без учета
		 границ.


		 ![](../../../sub_image.gif)
		 [getLeftLabelLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getLeftLabelLayer.htm)
		 Метод getLeftLabelLayer
		 возвращает SVG-элемент, предназначенный для отрисовки слоя меток
		 оси Y пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getLeftLabelLayerWidth](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getLeftLabelLayerWidth.htm)
		 Метод getLeftLabelLayerWidth
		 возвращает ширину области меток оси Y пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getPaper](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getPaper.htm)
		 Метод getPaper
		 возвращает SVG-элемент, содержащий область построения пузырьковой
		 диаграммы.


		 ![](../../../sub_image.gif)
		 [getPaperArea](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getPaperArea.htm)
		 Метод getPaperArea
		 возвращает контейнер области построения пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [getSymbolLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getSymbolLayer.htm)
		 Метод getSymbolLayer
		 возвращает SVG-элемент, предназначенный для отрисовки слоя объектов
		 области построения.


		 ![](../../../sub_image.gif)
		 [getTooltipLayer](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.getTooltipLayer.htm)
		 Метод getTooltipLayer
		 возвращает SVG-элемент, предназначенный для отрисовки слоя подсказки.


		 ![](../../../sub_image.gif)
		 [renderFrame](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.renderFrame.htm)
		 Метод renderFrame отрисовывает
		 область построения пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [setAreaFill](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.setAreaFill.htm)
		 Метод setAreaFill добавляет
		 элементы заливки области построения пузырьковой диаграммы.


		 ![](../../../sub_image.gif)
		 [updateAxis](dhtmlBubbleChart.chm::/Classes/BubbleChart/ChartArea/ChartArea.updateAxis.htm)
		 Метод updateAxis
		 обновляет указанную ось пузырьковой диаграммы.


## Свойства, унаследованные от класса [PlacedControlBase](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../property_image.gif)
		 [Background](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.Background.htm)
		 Свойство Background
		 определяет кисть заливки фона визуального элемента управления.


		 ![](../../../property_image.gif)
		 [Border](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.Border.htm)
		 Свойство Border
		 определяет границы визуального элемента управления.


		 ![](../../../property_image.gif)
		 [Font](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.Font.htm)
		 Свойство Font
		 определяет шрифт визуального элемента управления.


		 ![](../../../property_image.gif)
		 [HorizontalAlignment](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.HorizontalAlignment.htm)
		 Свойство HorizontalAlignment
		 определяет горизонтальное выравнивание элемента управления.


		 ![](../../../property_image.gif)
		 [Margin](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.Margin.htm)
		 Свойство Margin
		 определяет отступы элемента управления.


		 ![](../../../property_image.gif)
		 [Padding](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.Padding.htm)
		 Свойство Padding
		 определяет поля элемента управления.


		 ![](../../../property_image.gif)
		 [VerticalAlignment](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.VerticalAlignment.htm)
		 Свойство VerticalAlignment
		 определяет вертикальное выравнивание элемента управления.


## Методы, унаследованные от класса [PlacedControlBase](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [contains](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.contains.htm)
		 Метод contains определяет,
		 принадлежит ли указанная точка области компонента.


		 ![](../../../sub_image.gif)
		 [draw](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.draw.htm)
		 Метод draw рисует
		 текущий визуальный элемент управления.


		 ![](../../../sub_image.gif)
		 [getRealHeight](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.getRealHeight.htm)
		 Метод getRealHeight
		 возвращает общую высоту визуального элемента управления, включая
		 поля и отступы.


		 ![](../../../sub_image.gif)
		 [getRealWidth](dhtmlGraphicBase.chm::/Classes/PlacedControlBase/PlacedControlBase.getRealWidth.htm)
		 Метод getRealWidth возвращает
		 общую ширину визуального элемента управления, включая поля и отступы.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../property_image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../../property_image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../../property_image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../../property_image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../../property_image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../../property_image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../../property_image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../../property_image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../../property_image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../../property_image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../../property_image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../../property_image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../../property_image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../../property_image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../../property_image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../../property_image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../../property_image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../../property_image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../../property_image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../../property_image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../../property_image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../../property_image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../../property_image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../../property_image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../../property_image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../../sub_image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../../sub_image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../../sub_image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../../sub_image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../../sub_image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../../sub_image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../../sub_image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../../sub_image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../../sub_image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../../sub_image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../../sub_image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../../sub_image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../../sub_image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../../sub_image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../../sub_image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../../sub_image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../../sub_image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../../sub_image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../../sub_image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../../sub_image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../../sub_image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../../sub_image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../../sub_image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../../sub_image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../../sub_image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../../event_image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../../event_image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../../event_image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../../event_image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../../event_image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../../event_image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


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
