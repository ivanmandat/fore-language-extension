# GaugeScale

GaugeScale
-


# GaugeScale


Пространство имен: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[GaugeObject](../GaugeObject/GaugeObject.htm)


   GaugeScale


## Описание


Класс GaugeScale реализует определение
 шкалы спидометра.


## Синтаксис


PP.initClass(PP.Ui.GaugeScale, PP.Ui.[GaugeObject](../GaugeObject/GaugeObject.htm),
 "GaugeScale");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [GaugeScale](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/Constructor_GaugeScale.htm)
		 Конструктор GaugeScale
		 создает экземпляр класса GaugeScale.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Arrows](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Arrows.htm)
		 Свойство Arrows устанавливает
		 массив указателей шкалы.


		 ![](../../../Property_Image.gif)
		 [Center](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Center.htm)
		 Свойство Center определяет
		 маркер для отрисовки центра шкалы.


		 ![](../../../Property_Image.gif)
		 [CenterPosition](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.CenterPosition.htm)
		 Свойство CenterPosition
		 определяет координаты центра шкалы, если не задан то используются
		 координаты центра спидометра.


		 ![](../../../Property_Image.gif)
		 [Direction](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Direction.htm)
		 Свойство Direction
		 определяет направление отрисовки шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [EnablePassedStyles](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.EnablePassedStyles.htm)
		 Свойство EnablePassedStyles
		 определяет признак использования стилей для пройденных маркеров
		 и текстовых меток шкалы спидометра главным указателем этой шкалы.


		 ![](../../../Property_Image.gif)
		 [IsAbsoluteLabelOffset](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.IsAbsoluteLabelOffset.htm)
		 Свойство IsAbsoluteLabelOffset
		 определяет, в каких единицах указывается смещение текстовых меток
		 шкалы.


		 ![](../../../Property_Image.gif)
		 [IsAbsoluteSectorOffset](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.IsAbsoluteSectorOffset.htm)
		 Свойство IsAbsoluteSectorOffset
		 определяет, в каких единицах указывается смещение секторов шкалы.


		 ![](../../../Property_Image.gif)
		 [IsAbsoluteTickOffset](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.IsAbsoluteTickOffset.htm)
		 Свойство IsAbsoluteTickOffset
		 определяет, в каких единицах указывается смещение отметок шкалы.


		 ![](../../../Property_Image.gif)
		 [LabelFont](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.LabelFont.htm)
		 Свойство LabelFont
		 определяет шрифт для вывода подписей.


		 ![](../../../Property_Image.gif)
		 [LabelOffset](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.LabelOffset.htm)
		 Свойство LabelOffset
		 определяет смещение текстовых меток шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [Labels](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Labels.htm)
		 Свойство Labels определяет
		 подписи для основных маркеров.


		 ![](../../../Property_Image.gif)
		 [Length](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Length.htm)
		 Свойство Length определяет
		 угловую длину шкалы.


		 ![](../../../Property_Image.gif)
		 [MajorTick](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MajorTick.htm)
		 Свойство MajorTick
		 определяет дескриптор типа основного маркера.


		 ![](../../../Property_Image.gif)
		 [MaskLabel](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MaskLabel.htm)
		 Свойство MaskLabel
		 определяет формат вывода значения в подписи для значений для которых
		 она не задана.


		 ![](../../../Property_Image.gif)
		 [MaxValue](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MaxValue.htm)
		 Свойство MaxValue определяет
		 максимальное значение на шкале.


		 ![](../../../Property_Image.gif)
		 [MinorTick](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MinorTick.htm)
		 Свойство MinorTick
		 определяет дескриптор типа дополнительного маркера.


		 ![](../../../Property_Image.gif)
		 [MinStepSize](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MinStepSize.htm)
		 Свойство MinStepSize
		 определяет минимальное допустимое расстояние между [дополнительными
		 маркерами](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MinorTick.htm) в пикселях.


		 ![](../../../Property_Image.gif)
		 [MinValue](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.MinValue.htm)
		 Свойство MinValue определяет
		 минимальное значение на шкале.


		 ![](../../../Property_Image.gif)
		 [OuterRadius](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.OuterRadius.htm)
		 Свойство OuterRadius определяет
		 радиус шкалы, если не установлен в качестве радиуса шкалы берется
		 радиус спидометра.


		 ![](../../../Property_Image.gif)
		 [PassedLabelFont](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.PassedLabelFont.htm)
		 Свойство PassedLabelFont
		 определяет шрифт пройденных главным указателем текстовых меток
		 шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [PassedMajorTick](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.PassedMajorTick.htm)
		 Свойство PassedMajorTick
		 определяет настройки пройденных главным указателем основных маркеров
		 шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [PassedMinorTick](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.PassedMinorTick.htm)
		 Свойство PassedMinorTick
		 определяет настройки пройденных главным указателем дополнительных
		 маркеров шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [Rotate](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Rotate.htm)
		 Свойство Rotate определяет
		 угол вращения шкалы.


		 ![](../../../Property_Image.gif)
		 [RotateLabels](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.RotateLabels.htm)
		 Свойство RotateLabels
		 определяет статус вращения подписей.


		 ![](../../../Property_Image.gif)
		 [StartAngle](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.StartAngle.htm)
		 Свойство StartAngle
		 определяет угол расположения минимального значения на шкале.


		 ![](../../../Property_Image.gif)
		 [Sectors](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Sectors.htm)
		 Свойство Sectors определяет
		 массив секторов шкалы.


		 ![](../../../Property_Image.gif)
		 [Size](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Size.htm)
		 Свойство Size определяет
		 ширину шкалы.


		 ![](../../../Property_Image.gif)
		 [Step](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Step.htm)
		 Свойство Step определяет
		 шаг размещения дополнительных маркеров.


		 ![](../../../Property_Image.gif)
		 [Trends](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Trends.htm)
		 Свойство Trends определяет
		 массив указателей шкалы.


		 ![](../../../Property_Image.gif)
		 [Values](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.Values.htm)
		 Свойство Values возвращает
		 значения для основных маркеров.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addArrow](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.addArrow.htm)
		 Метод addArrow
		 добавляет новый указатель или массив указателей в шкалу спидометра.


		 ![](../../../Sub_Image.gif)
		 [addSector](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.addSector.htm)
		 Метод addSector добавляет
		 новые секторы в массив секторов шкалы.


		 ![](../../../Sub_Image.gif)
		 [calcCenterPosition](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.calcCenterPosition.htm)
		 Метод calcCenterPosition
		 вычисляет координаты точки в центре шкалы.


		 ![](../../../Sub_Image.gif)
		 [calcOuterRadius](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.calcOuterRadius.htm)
		 Метод calcOuterRadius
		 вычисляет радиус спидометра, если он задан относительно размеров
		 контейнер.


		 ![](../../../Sub_Image.gif)
		 [getArrowByName](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getArrowByName.htm)
		 Метод getArrowByName
		 возвращает массив указателей шкалы спидометра с указанным именем.


		 ![](../../../Sub_Image.gif)
		 [getArrowValue](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getArrowValue.htm)
		 Метод getArrowValue возвращает
		 значение указателя.


		 ![](../../../Sub_Image.gif)
		 [getLabelset](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getLabelset.htm)
		 Метод getLabelset
		 возвращает массив текстовых узлов шкалы.


		 ![](../../../Sub_Image.gif)
		 [getMajorTicks](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getMajorTicks.htm)
		 Метод getMajorTicks возвращает
		 массив основных маркеров шкалы.


		 ![](../../../Sub_Image.gif)
		 [getMinorTicks](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getMinorTicks.htm)
		 Метод getMinorTicks
		 возвращает массив дополнительных маркеров шкалы.


		 ![](../../../Sub_Image.gif)
		 [getRenderInfo](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getRenderInfo.htm)
		 Метод getRenderInfo
		 возвращает данные о размере и позиции шкалы.


		 ![](../../../Sub_Image.gif)
		 [getSectorByName](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getSectorByName.htm)
		 Метод getSectorByName
		 возвращает массив секторов с указанным именем.


		 ![](../../../Sub_Image.gif)
		 [getValueAngle](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.getValueAngle.htm)
		 Метод getValueAngle
		 вычисляет угловое расположение на шкале для передаваемого значения.


		 ![](../../../Sub_Image.gif)
		 [redrawLabels](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.redrawLabels.htm)
		 Метод redrawLabels
		 перерисовывает текстовые метки шкалы спидометра.


		 ![](../../../Sub_Image.gif)
		 [refreshTicks](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.refreshTicks.htm)
		 Метод refreshTicks
		 обновляет маркеры шкалы спидометра.


		 ![](../../../Sub_Image.gif)
		 [setArrow](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.setArrow.htm)
		 Метод setArrow
		 заменяет один из существующих указателей шкалы спидометра.


		 ![](../../../Sub_Image.gif)
		 [setLabelsColor](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.setLabelsColor.htm)
		 Метод setLabelsColor
		 устанавливает цвет текстовых меток шкалы спидометра.


		 ![](../../../Sub_Image.gif)
		 [setSector](dhtmlGauge.chm::/Classes/Speedometer/GaugeScale/GaugeScale.setSector.htm)
		 Метод setSector устанавливает
		 один из секторов шкалы.


## Свойства, унаследованные от класса [GaugeObject](../GaugeObject/GaugeObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Background](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Background.htm)
		 Свойство Background
		 определяет
		 кисть для заливки фона элемента.


		 ![](../../../Property_Image.gif)
		 [Border](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Border.htm)
		 Свойство Border
		 определяет кисть для отрисовки границ элемента.


		 ![](../../../Property_Image.gif)
		 [BorderEnabled](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.BorderEnabled.htm)
		 Свойство BorderEnabled
		 определяет наличие границы элемента спидометра.


		 ![](../../../Property_Image.gif)
		 [BorderStyle](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль отрисовки границ элемента.


		 ![](../../../Property_Image.gif)
		 [BorderWidth](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.BorderWidth.htm)
		 Свойство BorderWidth
		 определяет толщину границ элемента.


		 ![](../../../Property_Image.gif)
		 [MajorArrow](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.MajorArrow.htm)
		 Свойство MajorArrow
		 определяет основной указатель для шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [Name](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Name.htm)
		 Свойство Name определяет
		 наименование указателя для шкалы спидометра.


		 ![](../../../Property_Image.gif)
		 [OpacityEnabled](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.OpacityEnabled.htm)
		 Свойство OpacityEnabled
		 определяет признак использования настроек прозрачности элемента.


		 ![](../../../Property_Image.gif)
		 [Shadow](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Shadow.htm)
		 Свойство Shadow
		 определяет тень для элемента.


## Методы, унаследованные от класса [GaugeObject](../GaugeObject/GaugeObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getChildren](dhtmlGauge.chm::/Classes\Speedometer\GaugeObject\GaugeObject.getChildren.htm)
		 Метод getChildren
		 возвращает массив дочерних элементов
		 GaugeObject.


		 ![](../../../Sub_Image.gif)
		 [paint](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.paint.htm)
		 Метод paint раскрашивает
		 фон и границу svg элемента соответственно установкам в [Background](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Background.htm)
		 и [Border](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.Border.htm).


		 ![](../../../Sub_Image.gif)
		 [redraw](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.redraw.htm)
		 Метод redraw
		 устанавливает аттрибуты svg элементам соответственно
		 свойствам.


		 ![](../../../Sub_Image.gif)
		 [render](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.render.htm)
		 Метод render
		 создает svg элементы и размещает их в родительском
		 объекте.


		 ![](../../../Sub_Image.gif)
		 [rerender](dhtmlGauge.chm::/Classes/Speedometer/GaugeObject/GaugeObject.rerender.htm)
		 Метод rerender удаляет
		 объект и отрисовывает его заново.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


Примечание.
 По умолчанию для свойства Offset
 класса GaugeScale установлено
 значение 10.


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


[Speedometer](../Speedometer/Speedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
