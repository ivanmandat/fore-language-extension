# EaxGrid: DHTML-компонент

EaxGrid: DHTML-компонент
-


**


# EaxGrid


## Описание


Компонент EaxGrid реализует
 контейнер для электронной таблицы в рабочей области экспресс-отчета.


## Комментарии


Компонент EaxGrid реализован
 классом [EaxGrid](../../../Classes/Express/EaxGrid/EaxGrid.htm).


## Пример


Компонент EaxGrid может
 иметь следующий вид:


![](EaxGrid.png)


[Пример совместного размещения EaxPropertyBar
 и EaxGrid](EaxGrid_Example.htm)


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../sub_image.gif)
				 [EaxGrid](dhtmlExpress.chm::/classes/express/eaxgrid/constructor_eaxgrid.htm)
				 Конструктор EaxGrid
				 создает экземпляр класса EaxGrid.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AutoSendSelection](dhtmlExpress.chm::/classes/express/eaxgrid/eaxgrid.autosendselection.htm)
		 Свойство AutoSendSelection
		 определяет, нужно ли после выделения в таблице отправлять изменения
		 сразу на сервер.


		 ![](../../../Property_Image.gif)
		 [Service](dhtmlExpress.chm::/Classes/Express/EaxGrid/EaxGrid.Service.htm)
		 Свойство Service определяет
		 сервис для работы с контейнером таблицы.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [MetadataChanged](dhtmlExpress.chm::/classes/express/eaxgrid/eaxgrid.metadatachanged.htm)
		 Событие MetadataChanged
		 возникает при изменении метаданных для таблицы в рабочей области
		 экспресс-отчета.


## Свойства, унаследованные от класса [EaxGridView](../../../Classes/Express/EaxGridView/EaxGridView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ContextMenu](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.ContextMenu.htm)
		 Свойство ContextMenu
		 устанавливает контекстное меню для таблицы.


		 ![](../../../Property_Image.gif)
		 [DeferSelectionChangedDelay](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.DeferSelectionChangedDelay.htm)
		 Свойство DeferSelectionChangedDelay
		 определяет задержку перед изменением выделения таблицы.


		 ![](../../../Property_Image.gif)
		 [DisplayLegend](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.DisplayLegend.htm)
		 Свойство DisplayLegend
		 определяет видимость легенды таблицы в рабочей области
		 экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [EditMode](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.EditMode.htm)
		 Свойство EditMode**
		 задает значение флага «Режим
		 редактирования» для таблицы рабочей области экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Selection](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.Selection.htm)
		 Свойство **Selection**
		 выделяет указанные ячейки таблицы в рабочей области экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [ShowContextButton](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.ShowContextButton.htm)
		 Свойство ShowContextButton
		 управляет видимостью кнопки контекстного меню таблицы в рабочей
		 области экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [ShowSettingsMenuItem](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.ShowSettingsMenuItem.htm)
		 Свойство **ShowSettingsMenuItem**
		 управляет видимостью пункта «Настройка»
		 в контекстном меню таблицы в рабочей области экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.Source.htm)
		 Свойство **Source**
		 задает источник данных для таблицы в рабочей области экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [UseShiftDrillUp](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.UseShiftDrillUp.htm)
		 Свойство **UseShiftDrillUp**
		 разрешает поднятие отметки на уровень вверх по иерархии
		 при нажатии на кнопку SHIFT.


		 ![](../../../Property_Image.gif)
		 [VisibleHeaders](dhtmlExpress.chm::/Classes/Express/EaxGridView/EaxGridView.VisibleHeaders.htm)
		 Свойство **VisibleHeaders**
		 задает признак видимости заголовков строк и столбцов таблицы в
		 рабочей области экспресс-отчета.


## Методы, унаследованные от класса [EaxGridView](../../../Classes/Express/EaxGridView/EaxGridView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [clearSelection](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.clearselection.htm)
		 Метод **clearSelection**
		 убирает выделение в таблице рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [fireCMenuChanged](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.firecmenuchanged.htm)
		 Метод **fireCMenuChanged**
		 обрабатывает события, возникаемые при выполнении определённых
		 действий с контекстным меню для таблицы рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [firePropertyChanged](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.firepropertychanged.htm)
		 Метод **firePropertyChanged**
		 обрабатывает события, возникаемые при изменении свойств OLAP-куба
		 для таблицы рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getCellCoords](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getcellcoords.htm)
		 Метод **getCellCoords**
		 возвращает координаты левой верхней угловой ячейки таблицы в выбранном
		 диапазоне.


		 ![](../../../sub_image.gif)
		 [getCellType](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getcelltype.htm)
		 Метод **getCellType**
		 возвращает тип ячейки таблицы по координате.


		 ![](../../../sub_image.gif)
		 [getChangedData](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getchangeddata.htm)
		 Метод **getChangedData**
		 возвращает измененные данные в ячейках таблицы рабочей области
		 экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getControl](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getcontrol.htm)
		 Метод **getControl**
		 возвращает родительский элемент управления.


		 ![](../../../sub_image.gif)
		 [getFocusedCell](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getfocusedcell.htm)
		 Метод **getFocusedCell**
		 возвращает ячейку таблицы, находящуюся в фокусе.


		 ![](../../../sub_image.gif)
		 [getInstance](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getinstance.htm)
		 Метод **getInstance**
		 возвращает экземпляр класса PP.Ui.TabSheet.


		 ![](../../../sub_image.gif)
		 [getLegend](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getLegend.htm)
		 Метод getLegend возвращает
		 объект интервальной легенды, тип которой соответствует типу метрики,
		 переданному в качестве параметра.


		 ![](../../../sub_image.gif)
		 [getRowsCount](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getrowscount.htm)
		 Метод **getRowsCount**
		 возвращает количество строк в таблице рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getSelectionType](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getselectiontype.htm)
		 Метод **getSelectionType**
		 возвращает тип выделенного объекта.


		 ![](../../../sub_image.gif)
		 [getTableSource](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.gettablesource.htm)
		 Метод **getTableSource**
		 возвращает источник данных таблицы в рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getTabSheet](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.gettabsheet.htm)
		 Метод **getTabSheet**
		 возвращает лист с таблицей в рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getTabSheetViewMode](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.gettabsheetviewstate.htm)
		 Метод **getTabSheetViewState**
		 возвращает свойства представления таблицы в JSON-формате.


		 ![](../../../sub_image.gif)
		 [getViewMode](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.getviewmode.htm)
		 Метод **getViewMode **возвращает
		 значение флага «Режим просмотра»
		 для таблицы рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [isLoaded](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.isloaded.htm)
		 Метод **isLoaded**
		 возвращает признак того, что таблица рабочей области экспресс-отчета
		 загружена.


		 ![](../../../sub_image.gif)
		 [refresh](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.refresh.htm)
		 Метод **refresh**
		 обновляет указанные элементы таблицы в рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [refreshAll](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.refreshall.htm)
		 Метод **refreshAll**
		 обновляет всё содержимое таблицы рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [setCellValue](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.setcellvalue.htm)
		 Метод **setCellValue** устанавливает
		 значение ячейки таблицы в рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [setScroll](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.setscroll.htm)
		 Метод **setScroll**
		 устанавливает полосы прокрутки для таблицы в рабочей области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [undo](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.undo.htm)
		 Метод **undo** осуществляет
		 отмену последней операции, произведённой с таблицей в рабочей
		 области экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [updateLegendColumn](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.updatelegendcolumn.htm)
		 Метод **updateLegendColumn**
		 обновляет столбец с легендой для диаграммы.


## События, унаследованные от класса [EaxGridView](../../../Classes/Express/EaxGridView/EaxGridView.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [DataChanged](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.datachanged.htm)
		 Событие **DataChanged**
		 наступает после изменения данных в ячейках таблицы рабочей области
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [ExpanderAction](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.expanderaction.htm)
		 Событие **ExpanderAction**
		 генерируется при разворачивании экспандера в таблице рабочей области
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [HyperlinkMouseDown](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.hyperlinkmousedown.htm)
		 Событие **HyperlinkMouseDown**
		 наступает при нажатии на гиперссылку в таблице рабочей области
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [PictureMouseDown](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.picturemousedown.htm)
		 Событие **PictureMouseDown**
		 наступает при нажатии на пиктограмму внутри ячейки таблицы в рабочей
		 области экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [PropertyChanged](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.propertychanged.htm)
		 Событие **PropertyChanged**
		 наступает после выбора пункта контекстного меню панели свойств
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [Rendered](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.rendered.htm)
		 Событие **Rendered**
		 генерируется после первой отрисовки таблицы в рабочей области
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [RequestMetadata](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.requestmetadata.htm)
		 Событие **RequestMetadata**
		 генерируется при отсутствии метаданных в источнике таблицы.


		 ![](../../../Event_Image.gif)
		 [SelectionChanged](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.selectionchanged.htm)
		 Событие **SelectionChanged**
		 наступает после изменения выделения в таблице рабочей области
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [SelectionChanging](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.selectionchanging.htm)
		 Событие **SelectionChanging**
		 наступает в процессе изменения выделения в таблице рабочей области
		 экспресс-отчета до тех пор, пока кнопка мыши не будет отпущена.


		 ![](../../../Event_Image.gif)
		 [StructureChanged](dhtmlExpress.chm::/classes/express/eaxgridview/eaxgridview.structurechanged.htm)
		 Событие **StructureChanged**
		 генерируется при изменении структуры таблицы: при изменении размеров
		 строк и столбцов.


## Свойства, унаследованные от [PP.Mb.Ui.GridView](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [EditMode](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.EditMode.htm)
		 Свойство EditMode
		 определяет признак возможности редактирования таблицы.


		 ![](../../../Property_Image.gif)
		 [Selection](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.Selection.htm)
		 Свойство Selection
		 определяет текущее выделение в таблице.


		 ![](../../../Property_Image.gif)
		 [IsAsync](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.IsAsync.htm)
		 Свойство IsAsync определяет,
		 используется ли асинхронная загрузка данных таблицы.


		 ![](../../../Property_Image.gif)
		 [Service](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.Service.htm)
		 Свойство Service
		 определяет сервис для работы с экспресс-отчетом.


		 ![](../../../Property_Image.gif)
		 [SyncLoadClipboardData](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.SyncLoadClipboardData.htm)
		 Свойство SyncLoadClipboardData
		 определяет признак синхронной подгрузки данных, если при копировании
		 есть неподгруженные ячейки.


		 ![](../../../Property_Image.gif)
		 [TableSource](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.TableSource.htm)
		 Свойство TableSource
		 определяет источник данных таблицы.


## Методы, унаследованные от [PP.Mb.Ui.GridView](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [clearSelection](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.clearSelection.htm)
		 Метод clearSelection
		 очищает выделения в таблице.


		 ![](../../../sub_image.gif)
		 [getChangedData](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getChangedData.htm)
		 Метод getChangedData
		 возвращает измененные данные.


		 ![](../../../sub_image.gif)
		 [getFocusedCell](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getFocusedCell.htm)
		 Метод getFocusedCell
		 возвращает координаты ячейки таблицы с фокусом.


		 ![](../../../sub_image.gif)
		 [getInstance](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getInstance.htm)
		 Метод getInstance
		 возвращает экземпляр таблицы.


		 ![](../../../sub_image.gif)
		 [getRowsCount](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getRowsCount.htm)
		 Метод getRowsCount
		 возвращает количество строк в таблице экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getSelectionType](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getSelectionType.htm)
		 Метод getSelectionType
		 возвращает тип текущего выделения в таблице.


		 ![](../../../sub_image.gif)
		 [getTabSheet](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getTabSheet.htm)
		 Метод getTabSheet
		 возвращает таблицу данных.


		 ![](../../../sub_image.gif)
		 [setScroll](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.setScroll.htm)
		 Метод setScroll определяет
		 признак видимости горизонтально и вертикальной полос прокрутки
		 таблицы.


		 ![](../../../sub_image.gif)
		 [undo](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.undo.htm)
		 Метод **undo** отменяет
		 все изменения в таблице.


## События, унаследованные от [PP.Mb.Ui.GridView](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Edited](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.Edited.htm)
		 Событие Edited наступает
		 после редактирования данных таблицы.


		 ![](../../../Event_Image.gif)
		 [ExpanderAction](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.ExpanderAction.htm)
		 Событие **ExpanderAction**
		 наступает при разворачивании экспандера в таблице.


		 ![](../../../Event_Image.gif)
		 [HyperlinkMouseDown](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.HyperlinkMouseDown.htm)
		 Событие **HyperlinkMouseDown**
		 наступает при нажатии на гиперссылку в таблице.


		 ![](../../../Event_Image.gif)
		 [PictureMouseDown](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.PictureMouseDown.htm)
		 Событие **PictureMouseDown**
		 наступает при нажатии на картинку внутри ячейки таблицы.


		 ![](../../../Event_Image.gif)
		 [Rendered](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.Rendered.htm)
		 Событие **Rendered**
		 наступает после первой отрисовки таблицы.


		 ![](../../../Event_Image.gif)
		 [SelectionChanged](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.SelectionChanged.htm)
		 Событие SelectionChanged
		 наступает после изменения выделения в таблице.


		 ![](../../../Event_Image.gif)
		 [SelectionChanging](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.SelectionChanging.htm)
		 Событие SelectionChanging
		 наступает при изменении выделения в таблице.


		 ![](../../../Event_Image.gif)
		 [StructureChanged](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.StructureChanged.htm)
		 Событие StructureChanged
		 наступает после изменения структуры таблицы.


## Методы, унаследованные от класса [SourceView](dhtmlUi.chm::/Classes/SourceView/SourceView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getSource](dhtmlUi.chm::/Classes/SourceView/SourceView.getSource.htm)
		 Метод getSource
		 возвращает текущий документ экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [getSrv](dhtmlUi.chm::/Classes/SourceView/SourceView.getSrv.htm)
		 Метод getSrv
		 возвращает сервис, предназначенный для работы с экспресс-отчетом.


		 ![](../../../sub_image.gif)
		 [loadFile](dhtmlUi.chm::/Classes/SourceView/SourceView.loadFile.htm)
		 Метод loadFile
		 загружает файл с указанным именем.


		 ![](../../../sub_image.gif)
		 [loadFiles](dhtmlUi.chm::/Classes/SourceView/SourceView.loadFiles.htm)
		 Метод loadFiles
		 загружает файлы скриптов и стилей, основываясь на внутренних параметрах
		 таблицы.


		 ![](../../../sub_image.gif)
		 [refresh](dhtmlUi.chm::/Classes/SourceView/SourceView.refresh.htm)
		 Метод refresh
		 обновляет указанные элементы таблицы экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [refreshAll](dhtmlUi.chm::/Classes/SourceView/SourceView.refreshAll.htm)
		 Метод refreshAll
		 обновляет все элементы таблицы экспресс-отчета.


## События, унаследованные от класса [SourceView](dhtmlUi.chm::/Classes/SourceView/SourceView.htm)


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [MetadataChanged](dhtmlUi.chm::/Classes/SourceView/SourceView.MetadataChanged.htm)
		 Событие MetadataChanged
		 наступает при изменении настроек экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [PropertyChanged](dhtmlUi.chm::/Classes/SourceView/SourceView.PropertyChanged.htm)
		 Событие PropertyChanged наступает
		 после изменения значения свойства.


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


См. также:


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
