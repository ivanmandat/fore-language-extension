# PP.TS.Ui.ChartCategory

PP.TS.Ui.ChartCategory
-


**


# ChartCategory


Пространство имен**: PP.TS.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[TabItem](dhtmlUi.chm::/Classes/tabitem/tabitem.htm)


[RibbonCategory](dhtmlRibbon.chm::/Classes/ribboncategory/ribboncategory.htm)


[PP.Exp.Ui.EaxCategoryView](dhtmlExpress.chm::/Classes/Express/eaxcategoryview/eaxcategoryview.htm)


[PP.Exp.Ui.ChartCatView](dhtmlExpress.chm::/Classes/Express/chartcatview/chartcatview.htm)


[PP.Exp.Ui.ChartCategory](dhtmlExpress.chm::/Classes/Express/ChartCategory/ChartCategory.htm)


PP.TS.Ui.ChartCategory


## Описание


Класс **ChartCategory** реализует
 вкладку «Диаграмма» на [ленте инструментов](../WbkRibbon/WbkRibbon.htm)
 рабочей книги.


## Синтаксис


PP.initClass(PP.TS.Ui.ChartCategory, PP.Exp.Ui.[ChartCatView](dhtmlExpress.chm::/Classes/Express/chartcatview/chartcatview.htm),
 "PP.TS.Ui.ChartCategory");


## Комментарии


Вкладка ленты инструментов «Диаграмма» доступна, если активна диаграмма.


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [ChartCategory](Constructor_ChartCategory.htm)
		 Конструктор **ChartCategory**
		 создает экземпляр класса **ChartCategory**.


## Методы


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [refreshCorridor](ChartCategory.refreshCorridor.htm)
		 Метод refreshCorridor
		 обновляет коридоры диаграммы.


## Свойства, унаследованные от класса [PP.Exp.Ui.ChartCategory](dhtmlExpress.chm::/Classes/Express/ChartCategory/ChartCategory.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Service](dhtmlExpress.chm::/classes\express\chartcategory\chartcategory.service.htm)
		 Свойство Service
		 задает сервис для вкладки «Диаграмма» на ленте инструментов экспресс-отчета.


## Методы, унаследованные от класса [ChartCatView](dhtmlExpress.chm::/Classes/Express/chartcatview/chartcatview.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getChartDataSourceState](dhtmlExpress.chm::/classes/express/chartcatview/chartcatview.getchartdatasourcestate.htm)
		 Метод getChartDataSourceState
		 возвращает свойства источника данных для панели ленты инструментов
		 «Диаграмма».


		 ![](../../../Sub_Image.gif)
		 [getChartLegendMenu](dhtmlExpress.chm::/classes/express/chartcatview/chartcatview.getchartlegendmenu.htm)
		 Метод getChartLegendMenu
		 возвращает меню, которое вызывается при нажатии на кнопку «Легенда»
		 на вкладке ленты инструментов «Диаграмма».


		 ![](../../../Sub_Image.gif)
		 [getChartLegendPositionListBox](dhtmlExpress.chm::/classes/express/chartcatview/chartcatview.getchartlegendpositionlistbox.htm)
		 Метод getChartLegendPositionListBox
		 возвращает список возможных позиций для выбора положения легенды
		 диаграммы в рабочей области экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getMarkersMenu](dhtmlExpress.chm::/Classes/Express/ChartCatView/ChartCatView.getMarkersMenu.htm)
		 Метод getMarkersMenu
		 возвращает меню, которое вызывается при нажатии на кнопку «Маркеры»
		 на вкладке ленты инструментов «Диаграмма».


		 ![](../../../Sub_Image.gif)
		 [refresh](dhtmlExpress.chm::/classes/express/chartcatview/chartcatview.refresh.htm)
		 Метод refresh
		 обновляет данные вкладки «Диаграмма» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [update](dhtmlExpress.chm::/classes/express/chartcatview/chartcatview.update.htm)
		 Метод update
		 обновляет представление вкладки «Диаграмма» на ленте инструментов
		 экспресс-отчета.


## События, унаследованные от класса [ChartCatView](dhtmlExpress.chm::/Classes/Express/chartcatview/chartcatview.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ControlChanged](dhtmlExpress.chm::/classes/express/chartcatview/chartcatview.controlchanged.htm)
		 Событие ControlChanged
		 наступает при изменении элемента управления.


## Свойства, унаследованные от класса [EaxCategoryView](dhtmlExpress.chm::/Classes/Express/eaxcategoryview/eaxcategoryview.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [DataView](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.DataView.htm)
		 Свойство DataView определяет
		 представление данных в рабочей области экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlExpress.chm::/classes/express/eaxcategoryview/eaxcategoryview.source.htm)
		 Свойство Source
		 определяет источник данных для вкладки ленты инструментов экспресс-отчета.


## Методы, унаследованные от класса [EaxCategoryView](dhtmlExpress.chm::/Classes/Express/eaxcategoryview/eaxcategoryview.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getChartDataSourceState](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getChartDataSourceState.htm)
		 Метод getChartDataSourceState
		 определяет диапазон данных, представленных на визуализаторах.


		 ![](../../../Sub_Image.gif)
		 [getChartEditingMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getChartEditingMenu.htm)
		 Метод getChartEditingMenu
		 возвращает меню редактирования графика панели инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getChartTypeMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getChartTypeMenu.htm)
		 Метод getChartTypeMenu
		 возвращает меню «Тип», с помощью которого задается тип отображения
		 диаграммы.


		 ![](../../../Sub_Image.gif)
		 [getColTotalsButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getColTotalsButton.htm)
		 Метод getColTotalsButton
		 возвращает кнопку «Итоги по столбцам» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getCondFormatButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getCondFormatButton.htm)
		 Метод getCondFormatButton
		 возвращает кнопку «Условное форматирование» на ленте инструментов
		 экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDataTypeMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getDataTypeMenu.htm)
		 Метод getDataTypeMenu
		 возвращает меню «Преобразовать данные» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDataTypeState](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getDataTypeState.htm)
		 Метод getDataTypeState
		 возвращает свойства меню ленты инструментов «Преобразовать данные».


		 ![](../../../Sub_Image.gif)
		 [getDimViewModeButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getDimViewModeButton.htm)
		 Метод getDimViewModeButton
		 возвращает кнопку «Боковая панель» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getFilterButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getFilterButton.htm)
		 Метод getFilterButton
		 возвращает кнопку «Фильтр» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getFilterMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getFilterMenu.htm)
		 Метод getFilterMenu
		 возвращает меню «Фильтр» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getFilterState](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getFilterState.htm)
		 Метод getFilterState
		 возвращает свойства меню ленты инструментов «Фильтр».


		 ![](../../../Sub_Image.gif)
		 [getGrowthIndicatorMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getGrowthIndicatorMenu.htm)
		 Метод getGrowthIndicatorMenu
		 возвращает меню «Индикатор роста» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getIndButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getIndButton.htm)
		 Метод getIndButton
		 возвращает кнопку «Индикатор роста» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getOptions](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getOptions.htm)
		 Метод getOptions возвращает
		 объект с настройками вкладки ленты инструментов.


		 ![](../../../Sub_Image.gif)
		 [getRankingButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getRankingButton.htm)
		 Метод getRankingButton
		 возвращает кнопку «Отобразить как ранги» на ленте инструментов
		 экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getRankingMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getRankingMenu.htm)
		 Метод getRankingMenu
		 возвращает меню «Отобразить как ранги» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getRankingState](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getRankingState.htm)
		 Метод getRankingState
		 возвращает свойства меню ленты инструментов «Отобразить как ранги».


		 ![](../../../Sub_Image.gif)
		 [getRowsTotalsButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getRowsTotalsButton.htm)
		 Метод getRowsTotalsButton
		 возвращает кнопку «Итоги по строкам» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTableAreaChartMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTableAreaChartMenu.htm)
		 Метод getTableAreaChartMenu
		 возвращает меню «Выбрать данные» на вкладке «Диаграмма» ленты
		 инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTableCFormatButtonMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTableCFormatButtonMenu.htm)
		 Метод getTableCFormatButtonMenu
		 возвращает меню «Условное форматирование» на ленте инструментов
		 экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTableCFormatState](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTableCFormatState.htm)
		 Метод getTableCFormatState
		 возвращает свойства меню ленты инструментов «Условное форматирование».


		 ![](../../../Sub_Image.gif)
		 [getTitleButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTitleButton.htm)
		 Метод getTitleButton
		 возвращает кнопку «Заголовок» на ленте инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTitleMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTitleMenu.htm)
		 Метод getTitleMenu
		 возвращает меню «Выбрать данные» на вкладке «Главная» ленты инструментов
		 экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTotalsInColumnsMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTotalsInColumnsMenu.htm)
		 Метод getTotalsInColumnsMenu
		 возвращает меню «Итоги по столбцам» ленты инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTotalsInRowsMenu](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTotalsInRowsMenu.htm)
		 Метод getTotalsInRowsMenu
		 возвращает меню «Итоги по строкам» ленты инструментов экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTotalsState](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTotalsState.htm)
		 Метод getTotalsState
		 возвращает свойства меню ленты инструментов «Итоги по строкам»
		 и «Итоги по столбцам».


		 ![](../../../Sub_Image.gif)
		 [getTypeDataButton](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.getTypeDataButton.htm)
		 Метод getTypeDataButton
		 возвращает кнопку «Преобразовать данные» на ленте инструментов
		 экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [loadFile](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.loadFile.htm)
		 Метод loadFile загружает
		 файл сценария JavaScript.


		 ![](../../../Sub_Image.gif)
		 [refreshAll](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.refreshAll.htm)
		 Метод refreshAll
		 обновляет все содержимое вкладки ленты инструментов.


## События, унаследованные от класса [EaxCategoryView](dhtmlExpress.chm::/Classes/Express/eaxcategoryview/eaxcategoryview.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ControlsCreated](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.ControlsCreated.htm)
		 Событие ControlsCreated
		 наступает после создания элементов управления вкладки ленты инструментов
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [MetadataChanged](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.MetadataChanged.htm)
		 Событие MetadataChanged
		 наступает после изменения метаданных вкладки ленты инструментов
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [PropertyChanged](dhtmlExpress.chm::/classes/express/eaxcategoryview/eaxcategoryview.propertychanged.htm)
		 Событие PropertyChanged
		 наступает после изменения свойства вкладки на ленте инструментов
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [Refreshed](dhtmlExpress.chm::/Classes/Express/EaxCategoryView/EaxCategoryView.Refreshed.htm)
		 Событие Refreshed наступает
		 после обновления вкладки ленты инструментов экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [RequestMetadata](dhtmlExpress.chm::/classes/express/eaxcategoryview/eaxcategoryview.requestmetadata.htm)
		 Событие RequestMetadata
		 генерируется при отсутствии метаданных в источнике вкладке ленты
		 инструментов экспресс-отчета.


## Свойства, унаследованные от класса [RibbonCategory](dhtmlRibbon.chm::/Classes/ribboncategory/ribboncategory.htm)


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


## Методы, унаследованные от класса [RibbonCategory](dhtmlRibbon.chm::/Classes/ribboncategory/ribboncategory.htm)


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


## Свойства, унаследованные от класса [TabItem](dhtmlUi.chm::/Classes/tabitem/tabitem.htm)


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


## Методы, унаследованные от класса [TabItem](dhtmlUi.chm::/Classes/tabitem/tabitem.htm)


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


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


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


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


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


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


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
