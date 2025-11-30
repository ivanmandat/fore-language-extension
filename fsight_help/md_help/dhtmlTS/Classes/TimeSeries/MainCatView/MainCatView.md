# MainCatView

MainCatView
-


# MainCatView


Пространство имен: PP.TS.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[TabItem](dhtmlUi.chm::/Classes/TabItem/TabItem.htm)


[RibbonCategory](dhtmlRibbon.chm::/Classes/RibbonCategory/RibbonCategory.htm)


[WbkCategoryView](../WbkCategoryView/WbkCategoryView.htm)


[SeriesAbstractCatView](../SeriesAbstractCatView/SeriesAbstractCatView.htm)


MainCatView


## Описание


Класс MainCatView реализует
 вкладку «Главная» [ленты
 инструментов](../../../Components/TimeSeries/WbkRibbon/WbkRibbon.htm) рабочей книги.


## Синтаксис


PP.initClass(PP.TS.Ui.MainCatView, PP.TS.Ui.[WbkCategoryView](../WbkCategoryView/WbkCategoryView.htm),
 "MainCatView");


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [changeSource](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.changeSource.htm)
		 Метод changeSource изменяет
		 источник.


		 ![](../../../Sub_Image.gif)
		 [getChartTypeButton](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getChartTypeButton.htm)

		 Метод getChartTypeButton
		 возвращает кнопку «Тип» в группе «Диаграмма».


		 ![](../../../Sub_Image.gif)
		 [getDataSourceButton](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getDataSourceButton.htm)

		 Метод getDataSourceButton
		 возвращает кнопку «Дерево рядов».


		 ![](../../../Sub_Image.gif)
		 [getGroupSeriesButton](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getGroupSeriesButton.htm)

		 Метод getGroupSeriesButton
		 возвращает кнопку «Группировать».


		 ![](../../../Sub_Image.gif)
		 [getInsertButton](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getInsertButton.htm)

		 Метод getInsertButton возвращает
		 кнопку «Добавить ряд».


		 ![](../../../Sub_Image.gif)
		 [getRemoveButton](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getRemoveButton.htm)
		 Метод getRemoveButton возвращает
		 кнопку «Удалить».


		 ![](../../../Sub_Image.gif)
		 [getSeriesTreeList](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getSeriesTreeList.htm)
		 Метод getSeriesTreeList возвращает
		 дерево источников.


		 ![](../../../Sub_Image.gif)
		 [getUngroupSeriesButton](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.getUngroupSeriesButton.htm)
		 Метод getUngroupSeriesButton
		 возвращает кнопку «Разгруппировать».


		 ![](../../../Sub_Image.gif)
		 [refresh](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.refresh.htm)
		 Метод refresh обновляет
		 компонент.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [DisplayTreeChanged](dhtmlTS.chm::/Classes/TimeSeries/MainCatView/MainCatView.DisplayTreeChanged.htm)
		 Событие DisplayTreeChanged
		 генерируется при нажатии на кнопку «Дерево рядов».


## Методы, унаследованные от класса [SeriesAbstractCatView](../SeriesAbstractCatView/SeriesAbstractCatView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getGroupSeriesButton](dhtmlTS.chm::/Classes/TimeSeries/SeriesAbstractCatView/SeriesAbstractCatView.getGroupSeriesButton.htm)
		 Метод getGroupSeriesButton
		 возвращает кнопку «Группировать» ленты инструментов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getInsertButton](dhtmlTS.chm::/Classes/TimeSeries/SeriesAbstractCatView/SeriesAbstractCatView.getInsertButton.htm)
		 Метод getInsertButton
		 возвращает кнопку «Добавить ряд» ленты инструментов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getRemoveButton](dhtmlTS.chm::/Classes/TimeSeries/SeriesAbstractCatView/SeriesAbstractCatView.getRemoveButton.htm)
		 Метод getRemoveButton
		 возвращает кнопку «Удалить» ленты инструментов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getUngroupSeriesButton](dhtmlTS.chm::/Classes/TimeSeries/SeriesAbstractCatView/SeriesAbstractCatView.getUngroupSeriesButton.htm)
		 Метод getUngroupSeriesButton
		 возвращает кнопку «Разгруппировать» ленты инструментов рабочей
		 книги.


## Свойства, унаследованные от класса [WbkCategoryView](../WbkCategoryView/WbkCategoryView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.Source.htm)
		 Свойство Source
		 возвращает рабочую книгу данные которой отображаются в
		 компоненте.


## Методы, унаследованные от класса [WbkCategoryView](../WbkCategoryView/WbkCategoryView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getFilterButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getFilterButton.htm)
		 Метод getFilterButton
		 возвращает кнопку «Фильтр».


		 ![](../../../Sub_Image.gif)
		 [getFilterButtonState](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getFilterButtonState.htm)
		 Метод getFilterButtonState
		 получает состояние для кнопки «Фильтр».


		 ![](../../../Sub_Image.gif)
		 [getPeriodEndDataPicker](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getPeriodEndDataPicker.htm)
		 Метод getPeriodEndDataPicker
		 возвращает компонент ввода даты окончания в панели «Период
		 отображения».


		 ![](../../../Sub_Image.gif)
		 [getPeriodEndLabel](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getPeriodEndLabel.htm)
		 Метод getPeriodEndLabel
		  возвращает надпись «Окончание» в панели «Период отображения».


		 ![](../../../Sub_Image.gif)
		 [getPeriodStartDataPicker](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getPeriodStartDataPicker.htm)
		 Метод getPeriodStartDataPicker
		 возвращает компонент ввода даты начала в панели «Период
		 отображения».


		 ![](../../../Sub_Image.gif)
		 [getPeriodStartLabel](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getPeriodStartLabel.htm)
		 Метод getPeriodStartLabel
		 возвращает надпись «Начало» в панели «Период отображения».


		 ![](../../../Sub_Image.gif)
		 [getPropPanelButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getPropPanelButton.htm)
		 Метод getPropPanelButton
		 возвращает кнопку «Боковая панель».


		 ![](../../../Sub_Image.gif)
		 [getRefreshButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getRefreshButton.htm)
		 Метод getRefreshButton
		 возвращает кнопку «Обновить».


		 ![](../../../Sub_Image.gif)
		 [getReverseCalendarButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getReverseCalendarButton.htm)
		 Метод getReverseCalendarButton
		 возвращает кнопку «Обратный календарь».


		 ![](../../../Sub_Image.gif)
		 [getTitleButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getTitleButton.htm)
		 Метод getTitleButton
		 возвращает кнопку «Заголовок».


		 ![](../../../Sub_Image.gif)
		 [getViewAsButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.getViewAsButton.htm)
		 Метод getViewAsButton
		 возвращает кнопку «Отобразить как».


		 ![](../../../Sub_Image.gif)
		 [refreshAll](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.refreshAll.htm)
		 Метод refreshAll
		 обновляет весь компонент.


		 ![](../../../Sub_Image.gif)
		 [refreshFilterButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.refreshFilterButton.htm)
		 Метод refreshFilterButton
		 обновляет состояние кнопки «Фильтр».


		 ![](../../../Sub_Image.gif)
		 [refreshPeriodPanel](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.refreshPeriodPanel.htm)
		 Метод refreshPeriodPanel
		 обновляет панель «Период отображения».


		 ![](../../../Sub_Image.gif)
		 [refreshTitleButton](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.refreshTitleButton.htm)
		 Метод refreshTitleButton
		 обновляет состояние кнопки «Заголовок».


		 ![](../../../Sub_Image.gif)
		 [setEnabledEditingButtons](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.setEnabledEditingButtons.htm)
		 Метод setEnabledEditingButtons
		 устанавливает доступность кнопок редактирования.


		 ![](../../../Sub_Image.gif)
		 [setPropertyValue](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.setPropertyValue.htm)
		 Метод setPropertyValue
		 устанавливает значения во View.


		 ![](../../../Sub_Image.gif)
		 [updateViewAsMenu](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.updateViewAsMenu.htm)
		 Метод updateViewAsMenu
		 обновляет состояние меню кнопки «Отобразить как».


## События, унаследованные от класса [WbkCategoryView](../WbkCategoryView/WbkCategoryView.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [PropertyChanged](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.PropertyChanged.htm)
		 Событие PropertyChanged
		 наступает после изменения параметра в ленте инструментов.


		 ![](../../../Event_Image.gif)
		 [RequestMetadata](dhtmlTS.chm::/Classes/TimeSeries/WbkCategoryView/WbkCategoryView.RequestMetadata.htm)
		 Событие RequestMetadata
		 наступает при запросе метаданных.


## Свойства, унаследованные от класса [RibbonCategory](dhtmlRibbon.chm::/Classes/RibbonCategory/RibbonCategory.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Caption](dhtmlRibbon.chm::/classes/ribboncategory/ribboncategory.caption.htm)
		 Свойство Caption устанавливает
		 заголовок вкладки.


		 ![](../../../Property_Image.gif)
		 [GroupName](dhtmlRibbon.chm::/classes/ribboncategory/ribboncategory.groupname.htm)
		 Свойство GroupName
		 устанавливает наименование для группы контекстных вкладок.


## Методы, унаследованные от класса [RibbonCategory](dhtmlRibbon.chm::/Classes/RibbonCategory/RibbonCategory.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addPanel](dhtmlRibbon.chm::/classes/ribboncategory/ribboncategory.addpanel.htm)
		 Метод addPanel добавляет
		 панель на вкладку.


		 ![](../../../Sub_Image.gif)
		 [getGroupName](dhtmlRibbon.chm::/classes/ribboncategory/ribboncategory.getgroupname.htm)
		 Метод getGroupName
		 возвращает имя группы вкладок.


		 ![](../../../Sub_Image.gif)
		 [getPanels](dhtmlRibbon.chm::/classes/ribboncategory/ribboncategory.getpanels.htm)
		 Метод getPanels возвращает
		 массив панелей вкладки.


## Свойства, унаследованные от класса [TabItem](dhtmlUi.chm::/Classes/TabItem/TabItem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Caption](dhtmlUi.chm::/classes/tabitem/tabitem.caption.htm)
		 Свойство Caption устанавливает
		 заголовок вкладки.


		 ![](../../../Property_Image.gif)
		 [ImageUrl](dhtmlUi.chm::/classes/tabitem/tabitem.imageurl.htm)
		 Свойство ImageUrl устанавливает
		 путь к изображению для вкладки.


		 ![](../../../Property_Image.gif)
		 [Position](dhtmlUi.chm::/classes/tabitem/tabitem.position.htm)
		 Свойство Position определяет
		 положение вкладки.


## Методы, унаследованные от класса [TabItem](dhtmlUi.chm::/Classes/TabItem/TabItem.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getContentNodes](dhtmlUi.chm::/classes/tabitem/tabitem.getcontentnodes.htm)
		 Метод getContentNodes
		 возвращает коллекцию DOM-узлов из содержимого вкладки.


		 ![](../../../Sub_Image.gif)
		 [getOrderNumber](dhtmlUi.chm::/classes/tabitem/tabitem.getordernumber.htm)
		 Метод getOrderNumber
		 возвращает порядковый номер вкладки.


		 ![](../../../Sub_Image.gif)
		 [getParent](dhtmlUi.chm::/classes/tabitem/tabitem.getparent.htm)
		 Метод getParent возвращает
		 компонент [TabControl](dhtmlUi.chm::/classes/tabcontrol/tabcontrol.htm),
		 который является родительским по отношению к вкладке.


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
