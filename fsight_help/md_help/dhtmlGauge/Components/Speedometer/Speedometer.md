# Speedometer

Speedometer
-


# Speedometer: компонент


## Описание


Компонент Speedometer - это
 визуальный компонент, предназначенный для наглядного отображения набора
 данных с помощью маркированной шкалы. Значение показателей указывает вращающаяся
 вокруг оси стрелка.


## Комментарии


Компонент Speedometer реализован
 с помощью класса [Speedometer](../../Classes/Speedometer/Speedometer/Speedometer.htm).


Для отображения конкретного набора данных компонент использует:


	- радиальную шкалу;


	- индикатор, который движется по кругу, в заданном пределе.


 Для каждого диапазона данных могут быть выбраны различные цвета,
 чтобы показать положения сектора, например, зеленый цвет сектора для удовлетворительного,
 красный цвет сектора для критического значения.


 На всех диаграммах определяется минимальное и максимальное значения
 (нижняя граница, верхняя граница).


 Можно задать цвета диапазонов, чтобы классифицировать данные. Например,
 можно задать диапазон с названием «Best» , который состоит из значений
 между 60 и 100 и определить свой цвет, что поможет визуально отличить
 его от других.


## Пример


 Варианты представления спидометров показаны на рисунке:


![](../../Classes/Speedometer/GaugeMaster/ex_speed.png)


Компонент может быть представлен в виде датчика топлива:


![](gauge.png)


Пример создания спидометра показан на странице «[Пример
 создания датчика топлива](Fuel_gauge_Example.htm)».


Вариант представления спидометра в виде стрелочных часов:


![](clock.png)


Пример создания показан на странице «[Пример
 создания стрелочных часов](Clock_Example.htm)».


[Пример создания спидометра с мастером](speedometer_wirh_master.htm)


## Конструктор


			 Имя конструктора
			 Краткое описание


			 ![](../../Sub_Image.gif)
			 [Speedometer](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Constructor_Speedometer.htm)
			 Конструктор Speedometer
			 создает экземпляр компонента Speedometer.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Background](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Background.htm)
		 Свойство Background
		 определяет кисть для заливки фона спидометра.


		 ![](../../Property_Image.gif)
		 [BaseHeight](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.BaseHeight.htm)
		 Свойство BaseHeight
		 определяет базовую высоту спидометра.


		 ![](../../Property_Image.gif)
		 [BaseWidth](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.BaseWidth.htm)
		 Свойство BaseWidth
		 определяет базовую ширину спидометра.


		 ![](../../Property_Image.gif)
		 [Borders](dhtmlGauge.chm::/Classes\Speedometer\Speedometer\Speedometer.Borders.htm)
		 Свойство Borders определяет
		 массив из элементов, задающих параметры отрисовки спидометра.


		 ![](../../Property_Image.gif)
		 [BorderStyle](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль границ спидометра.


		 ![](../../Property_Image.gif)
		 [Center](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Center.htm)
		 Свойство Center определяет
		 маркер для отрисовки центра спидометра.


		 ![](../../Property_Image.gif)
		 [CenterLabel](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.CenterLabel.htm)
		 Свойство CenterLabel
		 определяет центральную текстовую метку спидометра.


		 ![](../../Property_Image.gif)
		 [CenterPosition](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.CenterPosition.htm)
		 Свойство CenterPosition
		 определяет координаты центра спидометра.


		 ![](../../Property_Image.gif)
		 [Markers](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Markers.htm)
		 Свойство Markers определяет
		 массив из элементов, задающих параметры отрисовки маркеров спидометра.


		 ![](../../Property_Image.gif)
		 [NumberFormat](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.NumberFormat.htm)
		 Свойство NumberFormat
		 определяет формат данных спидометра.


		 ![](../../Property_Image.gif)
		 [OuterRadius](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.OuterRadius.htm)
		 Свойство OuterRadius
		 определяет радиус спидометра.


		 ![](../../Property_Image.gif)
		 [Padding](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Padding.htm)
		 Свойство Padding
		 определяет отступы компонента.


		 ![](../../Property_Image.gif)
		 [Scales](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Scales.htm)
		 Свойство Scales определяет
		 массив элементов, задающих параметры отрисовки шкалы спидометра.


		 ![](../../Property_Image.gif)
		 [TimeLineStep](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.TimeLineStep.htm)
		 Свойство TimeLineStep
		 определяет текущий шаг временной шкалы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [calcCenterPosition](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.calcCenterPosition.htm)
		 Метод calcCenterPosition вычисляет координаты центра спидометра.


		 ![](../../Sub_Image.gif)
		 [calcOuterRadius](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.calcOuterRadius.htm)
		 Метод calcOuterRadius
		 вычисляет радиус спидометра, если он не задан относительно размеров
		 контейнера.


		 ![](../../Sub_Image.gif)
		 [getArrowById](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.getArrowById.htm)
		 Метод getArrowById
		 возвращает указатель по его идентификатору.


		 ![](../../Sub_Image.gif)
		 [getChildren](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.getChildren.htm)
		 Метод getChildren
		 возвращает массив дочерних элементов спидометра.


		 ![](../../Sub_Image.gif)
		 [getInstance](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.getInstance.htm)
		 Метод getInstance
		 возвращает экземпляр текущего спидометра.


		 ![](../../Sub_Image.gif)
		 [getOpacityEnabled](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.getOpacityEnabled.htm)
		 Метод getOpacityEnabled
		 возвращает признак использования прозрачности спидометром.


		 ![](../../Sub_Image.gif)
		 [getState](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.getState.htm)
		 Метод getState возвращает
		 настройки шкалы спидометра.


		 ![](../../Sub_Image.gif)
		 [getSVGNode](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.getSVGNode.htm)
		 Метод getSVGNode возвращает SVG-элемент, предназначенный для отрисовки спидометра.


		 ![](../../Sub_Image.gif)
		 [paint](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.paint.htm)
		 Метод paint раскрашивает
		 фон и границу SVG-элемента соответственно установкам.


		 ![](../../Sub_Image.gif)
		 [redraw](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.redraw.htm)
		 Метод redraw
		 перерисовывает спидометр.


		 ![](../../Sub_Image.gif)
		 [redrawScales](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.redrawScales.htm)
		 Метод redrawScales
		 перерисовывает все шкалы спидометра.


		 ![](../../Sub_Image.gif)
		 [refreshView](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.refreshView.htm)
		 Метод refreshView
		 обновляет представление спидометра, основываясь на указанных настройках.


		 ![](../../Sub_Image.gif)
		 [setMasterSettings](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.setMasterSettings.htm)
		 Метод setMasterSettings
		 применяет указанные настройки спидометра.


## События


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [Loaded](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Loaded.htm)
		 Событие Loaded наступает
		 после загрузки спидометра.


		 ![](../../Event_Image.gif)
		 [Refreshed](dhtmlGauge.chm::/Classes/Speedometer/Speedometer/Speedometer.Refreshed.htm)
		 Событие Refreshed наступает
		 после обновления представления спидометра.


## Свойства, унаследованные от класса [GaugeObject](../../Classes/Speedometer/GaugeObject/GaugeObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Background](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Background.htm)
		 Свойство Background
		 определяет
		 кисть для заливки фона элемента.


		 ![](../../Property_Image.gif)
		 [Border](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Border.htm)
		 Свойство Border
		 определяет кисть для отрисовки границ элемента.


		 ![](../../Property_Image.gif)
		 [BorderEnabled](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.BorderEnabled.htm)
		 Свойство BorderEnabled
		 определяет наличие границы элемента спидометра.


		 ![](../../Property_Image.gif)
		 [BorderStyle](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль отрисовки границ элемента.


		 ![](../../Property_Image.gif)
		 [BorderWidth](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.BorderWidth.htm)
		 Свойство BorderWidth
		 определяет толщину границ элемента.


		 ![](../../Property_Image.gif)
		 [MajorArrow](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.MajorArrow.htm)
		 Свойство MajorArrow
		 определяет основной указатель для шкалы спидометра.


		 ![](../../Property_Image.gif)
		 [Name](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Name.htm)
		 Свойство Name определяет
		 наименование указателя для шкалы спидометра.


		 ![](../../Property_Image.gif)
		 [OpacityEnabled](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.OpacityEnabled.htm)
		 Свойство OpacityEnabled
		 определяет признак использования настроек прозрачности элемента.


		 ![](../../Property_Image.gif)
		 [Shadow](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Shadow.htm)
		 Свойство Shadow
		 определяет тень для элемента.


## Методы, унаследованные от класса [GaugeObject](../../Classes/Speedometer/GaugeObject/GaugeObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [calcOffset](dhtmlGauge.chm::/Classes/Speedometer/GaugeMarkerBase/GaugeMarkerBase.calcOffset.htm)
		 Метод calcOffset вычисляет
		 смещение по радиусу от центра шкалы.


		 ![](../../Sub_Image.gif)
		 [calcSize](dhtmlGauge.chm::/Classes/Speedometer/GaugeMarkerBase/GaugeMarkerBase.calcSize.htm)
		 Метод calcSize вычисляет
		 размер маркера.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../Property_Image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../Property_Image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../Property_Image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../Property_Image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../Property_Image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../Property_Image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../Property_Image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../Property_Image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../Property_Image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../Property_Image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../Property_Image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../Property_Image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../Property_Image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../Property_Image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../Property_Image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../Property_Image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../Property_Image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../Property_Image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../Property_Image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../Property_Image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../Property_Image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../Property_Image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../Property_Image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../Sub_Image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../Sub_Image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../Sub_Image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../Sub_Image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../Sub_Image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../Sub_Image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../Sub_Image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../Sub_Image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../Sub_Image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../Sub_Image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../Sub_Image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../Sub_Image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../Sub_Image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../Sub_Image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../Sub_Image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../Sub_Image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../Sub_Image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../Sub_Image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../Sub_Image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../Sub_Image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../Sub_Image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../Sub_Image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../Sub_Image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../Sub_Image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../Sub_Image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../Event_Image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../Event_Image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../Event_Image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../Event_Image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../Event_Image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
