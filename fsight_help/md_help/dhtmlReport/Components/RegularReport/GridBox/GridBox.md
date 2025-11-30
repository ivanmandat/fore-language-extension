# GridBox

GridBox
-


**


# GridBox


## Описание


Компонент GridBox представляет
 собой таблицу регламентного отчета.


Компонент входит в состав компонента [DataArea](../DataArea/DataArea.htm).


Основные события компонента:


	- щелчок по гиперссылке;


	- [редактирование](../../../Classes/RegularReport/GridView/GridView.Edited.htm)
	 значений в ячейках таблицы;


	- [отрисовка](../../../Classes/RegularReport/GridView/GridView.Rendered.htm)
	 таблицы;


	- [изменение
	 выделенного диапазона](../../../Classes/RegularReport/GridView/GridView.SelectionChanged.htm).


Чтобы отключить/включить возможность редактирования значений в ячейках
 таблицы используйте метод [GridView.setIsEditable](../../../Classes/RegularReport/GridView/GridView.setIsEditable.htm).


Базовым компонентом для GridBox
 является компонент TabSheet. Чтобы
 изменять настройки компонента TabSheet,
 используйте свойство [ProxyControl.getControl](dhtmlUi.chm::/Classes/ProxyControl/ProxyControl.getControl.htm).


## Комментарии


Компонент реализован классом [GridBox](../../../Classes/RegularReport/GridBox/GridBox.htm).


## Пример


Компонент GridBox может иметь
 следующий вид:


![](GridBox.png)


[Пример размещения компонента GridBox](GridBox_example.htm)


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [GridBox](dhtmlReport.chm::/Classes/RegularReport/GridBox/Constructor_GridBox.htm)
		 Конструктор GridBox создает
		 экземпляр класса GridBox.


## Свойства, унаследованные от класса [PP.Prx.Ui.GridView](../../../Classes/RegularReport/GridView/GridView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AutoSendSelection](dhtmlReport.chm::/Classes/RegularReport/GridView/GridView.AutoSendSelection.htm)
		 Свойство AutoSendSelection
		 определяет, будет ли отправляться на сервер состояние выделения
		 ячеек в таблице регламентного отчета.


		 ![](../../../Property_Image.gif)
		 [AutoUpdateByHandler](dhtmlReport.chm::/Classes/RegularReport/GridView/GridView.AutoUpdateByHandler.htm)
		 Свойство AutoUpdateByHandler
		 определяет признак частичного или полного обновления ячеек таблицы
		 после [обработки
		 события](UIReport.chm::/Desktop/Reports/Event/UiReport_Reports_Event.htm), подключенного к регламентному отчёту.


		 ![](../../../Property_Image.gif)
		 [AutoUpdateObjects](dhtmlReport.chm::/Classes/RegularReport/GridView/GridView.AutoUpdateObjects.htm)
		 Свойство AutoUpdateObjects
		 определяет, будут ли автоматически обновляться визуальные объекты
		 при смене отметки.


		 ![](../../../Property_Image.gif)
		 [ObjectsAsImage](dhtmlReport.chm::/Classes/RegularReport/GridView/GridView.ObjectsAsImage.htm)
		 Свойство ObjectAsImages
		 определяет, являются ли диаграмма или карта, расположенные на
		 листе регламентного отчета, картинкой или экземпляром компонента
		 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm).


		 ![](../../../Property_Image.gif)
		 [Selection](dhtmlReport.chm::/classes/regularreport/gridview/gridview.selection.htm)
		 Свойство Selection
		 определяет диапазон выделенных ячеек таблицы.


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlReport.chm::/classes/regularreport/gridview/gridview.source.htm)
		 Свойство Source определяет
		 отчет-источник.


		 ![](../../../Property_Image.gif)
		 [TableSource](dhtmlReport.chm::/classes/regularreport/gridview/gridview.tablesource.htm)
		 Свойство TableSource
		 определяет источник таблицы отчета.


## Методы, унаследованные от класса [PP.Prx.Ui.GridView](../../../Classes/RegularReport/GridView/GridView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [emulateHyperlinkClick](dhtmlReport.chm::/Classes/RegularReport/GridView/GridView.emulateHyperlinkClick.htm)
		 Метод emulateHyperlinkClick
		 осуществляет эмуляцию щелчка по гиперссылке.


		 ![](../../../Sub_Image.gif)
		 [getChangedCells](dhtmlReport.chm::/classes/regularreport/gridview/gridview.getchangedcells.htm)
		 Метод getChangedCells
		 возвращает ячейки с измененными данными.


		 ![](../../../Sub_Image.gif)
		 [refresh](dhtmlReport.chm::/classes/regularreport/gridview/gridview.refresh.htm)
		 Метод refresh обновляет
		 содержимое таблицы регламентного отчета.


		 ![](../../../Sub_Image.gif)
		 [refreshAll](dhtmlReport.chm::/classes/regularreport/gridview/gridview.refreshall.htm)
		 Метод refreshAll обновляет
		 содержимое таблицы регламентного отчета.


		 ![](../../../Sub_Image.gif)
		 [setIsEditable](dhtmlReport.chm::/classes/regularreport/gridview/gridview.setiseditable.htm)
		 Метод setIsEditable
		 определяет возможность редактирования данных в ячейках таблицы.


## События, унаследованные от класса [PP.Prx.Ui.GridView](../../../Classes/RegularReport/GridView/GridView.htm)


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Edited](dhtmlReport.chm::/classes/regularreport/gridview/gridview.edited.htm)
		 Событие Edited наступает
		 после редактирования данных в ячейках таблицы.


		 ![](../../../Event_Image.gif)
		 [SelectionChanged](dhtmlReport.chm::/classes/regularreport/gridview/gridview.selectionchanged.htm)
		 Событие SelectionChanged
		 наступает при изменении выделенного диапазона.


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


		 ![](../../../Sub_Image.gif)
		 [clearSelection](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.clearSelection.htm)
		 Метод clearSelection
		 очищает выделения в таблице.


		 ![](../../../Sub_Image.gif)
		 [getChangedData](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getChangedData.htm)
		 Метод getChangedData
		 возвращает измененные данные.


		 ![](../../../Sub_Image.gif)
		 [getFocusedCell](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getFocusedCell.htm)
		 Метод getFocusedCell
		 возвращает координаты ячейки таблицы с фокусом.


		 ![](../../../Sub_Image.gif)
		 [getInstance](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getInstance.htm)
		 Метод getInstance
		 возвращает экземпляр таблицы.


		 ![](../../../Sub_Image.gif)
		 [getRowsCount](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getRowsCount.htm)
		 Метод getRowsCount
		 возвращает количество строк в таблице экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getSelectionType](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getSelectionType.htm)
		 Метод getSelectionType
		 возвращает тип текущего выделения в таблице.


		 ![](../../../Sub_Image.gif)
		 [getTabSheet](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.getTabSheet.htm)
		 Метод getTabSheet
		 возвращает таблицу данных.


		 ![](../../../Sub_Image.gif)
		 [setScroll](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.setScroll.htm)
		 Метод setScroll определяет
		 признак видимости горизонтально и вертикальной полос прокрутки
		 таблицы.


		 ![](../../../Sub_Image.gif)
		 [undo](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.undo.htm)
		 Метод undo** отменяет
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


		 ![](../../../Sub_Image.gif)
		 [getSource](dhtmlUi.chm::/Classes/SourceView/SourceView.getSource.htm)
		 Метод getSource
		 возвращает текущий документ экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getSrv](dhtmlUi.chm::/Classes/SourceView/SourceView.getSrv.htm)
		 Метод getSrv
		 возвращает сервис, предназначенный для работы с экспресс-отчетом.


		 ![](../../../Sub_Image.gif)
		 [loadFile](dhtmlUi.chm::/Classes/SourceView/SourceView.loadFile.htm)
		 Метод loadFile
		 загружает файл с указанным именем.


		 ![](../../../Sub_Image.gif)
		 [loadFiles](dhtmlUi.chm::/Classes/SourceView/SourceView.loadFiles.htm)
		 Метод loadFiles
		 загружает файлы скриптов и стилей, основываясь на внутренних параметрах
		 таблицы.


		 ![](../../../Sub_Image.gif)
		 [refresh](dhtmlUi.chm::/Classes/SourceView/SourceView.refresh.htm)
		 Метод refresh
		 обновляет указанные элементы таблицы экспресс-отчета.


		 ![](../../../Sub_Image.gif)
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


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
