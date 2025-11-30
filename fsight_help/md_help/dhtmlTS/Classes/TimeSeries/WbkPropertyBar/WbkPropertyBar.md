# WbkPropertyBar

WbkPropertyBar
-


# WbkPropertyBar


Пространство имен: PP.TS.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[ProxyControl](dhtmlUi.chm::/Classes/ProxyControl/ProxyControl.htm)


[Master](dhtmlUi.chm::/Classes/Master/Master.htm)


[WbkPropertyBarView](../WbkPropertyBarView/WbkPropertyBarView.htm)


WbkPropertyBar


## Описание


Класс WbkPropertyBar реализует представление и управления свойствами рабочей книги через навигационную панель.


## Комментарии


Класс для конечного использования прикладными программистами.


## Синтаксис


PP.initClass(PP.TS.Ui.WbkPropertyBar, PP.TS.Ui.[WbkPropertyBarView](../WbkPropertyBarView/WbkPropertyBarView.htm), "WbkPropertyBar");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [WbkPropertyBar](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBar/Constructor_WbkPropertyBar.htm)
		 Конструктор WbkPropertyBar
		 создает экземпляр класса WbkPropertyBar.


## Свойства, унаследованные от класса [WbkPropertyBarView](../WbkPropertyBarView/WbkPropertyBarView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [GridView](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.GridView.htm)
		 Свойство GridView определяет
		 компонент для отображения таблицы.


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.Source.htm)
		 Свойство Source возвращает
		 рабочую книгу, данные которой отображаются в компоненте.


		 ![](../../../Property_Image.gif)
		 [Type](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.Type.htm)
		 Свойство Type определяет
		 вид панели свойств.


## Методы, унаследованные от класса [WbkPropertyBarView](../WbkPropertyBarView/WbkPropertyBarView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [deleteExtraRevisionPanels](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.deleteExtraRevisionPanels.htm)
		 Метод deleteExtraRevisionPanels
		 удаляет из панели свойств вкладки, соответствующие источникам
		 (базам данных временных рядов), не содержащимся в рабочей книге.


		 ![](../../../Sub_Image.gif)
		 [getChartMaster](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.getChartMaster.htm)
		 Метод getChartMaster
		 возвращает мастер диаграмм.


		 ![](../../../Sub_Image.gif)
		 [getEquationAutoFitPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getEquationAutoFitPanel.htm)
		 Метод getEquationAutoFitPanel
		 возвращает панель автоподбора параметров экспоненциального сглаживания.


		 ![](../../../Sub_Image.gif)
		 [getEquationPeriodPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getEquationPeriodPanel.htm)
		 Метод getEquationPeriodPanel
		 возвращает панель «Периоды расчета».


		 ![](../../../Sub_Image.gif)
		 [getEquationProcessPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getEquationProcessPanel.htm)
		 Метод getEquationProcessPanel
		 возвращает панель «Обработка пропусков».


		 ![](../../../Sub_Image.gif)
		 [getEquationSmoothingSlidingPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getEquationSmoothingSlidingPanel.htm)
		 Метод getEquationSmoothingSlidingPanel
		 возвращает панель «Скользящее среднее».


		 ![](../../../Sub_Image.gif)
		 [getEquationWeightCoefficientsPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getEquationWeightCoefficientsPanel.htm)
		 Метод getEquationWeightCoefficientsPanel
		 возвращает панель «Весовые коэффициенты».


		 ![](../../../Sub_Image.gif)
		 [getGaugeMaster](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.getGaugeMaster.htm)
		 Метод getGaugeMaster
		 возвращает мастер для настройки спидометра.


		 ![](../../../Sub_Image.gif)
		 [getMainSeriesPanel](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.getMainSeriesPanel.htm)
		 Метод getMainSeriesPanel
		 возвращает панель «Основные».


		 ![](../../../Sub_Image.gif)
		 [getMapMaster](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getMapMaster.htm)
		 Метод getMapMaster
		 возвращает мастер карты.


		 ![](../../../Sub_Image.gif)
		 [getNavBreadcrumb](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.getNavBreadcrumb.htm)
		 Метод getNavBreadcrumb
		 возвращает компонент для управления атрибутами рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getObserveAttributesPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getObserveAttributesPanel.htm)
		 Метод getObserveAttributesPanel
		 возвращает панель «Атрибуты наблюдения».


		 ![](../../../Sub_Image.gif)
		 [getParametersPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getParametersPanel.htm)
		 Метод getParametersPanel
		 возвращает панель параметров.


		 ![](../../../Sub_Image.gif)
		 [getPeriodSeriesViewPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getPeriodSeriesViewPanel.htm)
		 Метод getPeriodSeriesViewPanel
		 возвращает панель управления атрибутами рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getSerieAttributesPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getSerieAttributesPanel.htm)
		 Метод getSerieAttributesPanel
		 возвращает панель «Атрибуты ряда» вкладки «Ряд».


		 ![](../../../Sub_Image.gif)
		 [getSerieRevisionsPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getSerieRevisionsPanel.htm)
		 Метод getSerieRevisionsPanel
		 возвращает панель «Ревизии» вкладки «Ряд».


		 ![](../../../Sub_Image.gif)
		 [getSeriesAttributesPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getSeriesAttributesPanel.htm)
		 Метод getSeriesAttributesPanel
		 возвращает панель «Данные» вкладки «Формат».


		 ![](../../../Sub_Image.gif)
		 [getSerieValidationErrorsPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getSerieValidationErrorsPanel.htm)
		 Метод getSerieValidationErrorsPanel
		 возвращает панель «Ошибки валидации» вкладки «Ряд».


		 ![](../../../Sub_Image.gif)
		 [getTablePanel](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.getTablePanel.htm)
		 Метод getTablePanel
		 возвращает панель «Данные» вкладки «Данные».


		 ![](../../../Sub_Image.gif)
		 [getTableViewPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getTableViewPanel.htm)
		 Метод getTableViewPanel
		 возвращает панель «Вид» вкладки «Формат».


		 ![](../../../Sub_Image.gif)
		 [getTitlePanel](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.getTitlePanel.htm)
		 Метод getTitlePanel
		 возвращает панель «Заголовок» вкладки «Формат».


		 ![](../../../Sub_Image.gif)
		 [getValidationErrorsPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getValidationErrorsPanel.htm)
		 Метод getValidationErrorsPanel
		 возвращает панель «Ошибки валидации» вкладки «Наблюдение».


		 ![](../../../Sub_Image.gif)
		 [getValidationPanel](dhtmlTS.chm::/Classes\TimeSeries\WbkPropertyBarView\WbkPropertyBarView.getValidationPanel.htm)
		 Метод getValidationPanel
		 возвращает панель «Правила валидации».


		 ![](../../../Sub_Image.gif)
		 [hideAllMasters](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.hideAllMasters.htm)
		 Метод hideAllMasters
		 скрывает все мастера, принадлежащие группам.


		 ![](../../../Sub_Image.gif)
		 [loadFile](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.loadFile.htm)
		 Метод loadFile загружает
		 файл с указанным именем.


		 ![](../../../Sub_Image.gif)
		 [refreshAll](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.refreshAll.htm)
		 Метод refreshAll обновляет
		 весь компонент.


		 ![](../../../Sub_Image.gif)
		 [showChartMaster](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.showChartMaster.htm)
		 Метод showChartMaster
		 отображает мастер для настройки диаграммы.


		 ![](../../../Sub_Image.gif)
		 [showGaugeMaster](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.showGaugeMaster.htm)
		 Метод showGaugeMaster
		 отображает мастер для настройки спидометра.


		 ![](../../../Sub_Image.gif)
		 [showGroup](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.showGroup.htm)
		 Метод showGroup отображает
		 группу панели свойств по идентификатору.


		 ![](../../../Sub_Image.gif)
		 [showMapMaster](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.showMapMaster.htm)
		 Метод showMapMaster
		 отображает мастер для настройки карты.


		 ![](../../../Sub_Image.gif)
		 [showOnlyGroup](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.showOnlyGroup.htm)
		 Метод showOnlyGroup
		 отображает группу панели свойств по идентификатору и скрывает
		 все остальные.


		 ![](../../../Sub_Image.gif)
		 [updateRevisionPanel](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.updateRevisionPanel.htm)
		 Метод updateRevisionPanel
		 пересоздаёт [панель
		 ревизий](dhtmlTS.chm::/Classes/TimeSeries/RevisionsPanel/RevisionsPanel.htm).


		 ![](../../../Sub_Image.gif)
		 [updateViewAsMenu](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.updateViewAsMenu.htm)
		 Метод updateViewAsMenu
		 обновляет раскрывающийся список «Применить преобразование» в панели
		 «Основные».


## События, унаследованные от класса [WbkPropertyBarView](../WbkPropertyBarView/WbkPropertyBarView.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [PropertyChanged](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.PropertyChanged.htm)
		 Событие PropertyChanged
		 наступает после окончания изменения свойств рабочей книги.


		 ![](../../../Event_Image.gif)
		 [PropertyChanging](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.PropertyChanging.htm)
		 Событие PropertyChanging
		 наступает в начале изменения свойств рабочей книги.


		 ![](../../../Event_Image.gif)
		 [RequestMetadata](dhtmlTS.chm::/Classes/TimeSeries/WbkPropertyBarView/WbkPropertyBarView.RequestMetadata.htm)
		 Событие RequestMetadata
		 наступает при запросе метаданных.


## Методы, унаследованные от класса [ProxyControl](dhtmlUi.chm::/Classes/ProxyControl/ProxyControl.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getControl](dhtmlUi.chm::/classes/proxycontrol/proxycontrol.getcontrol.htm)
		 Метод getControl возвращает
		 базовый элемент управления - наследник PP.Ui.Control.


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


[PP.TS.Ui](../../PP.TS.Ui.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
