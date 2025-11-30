# EaxMdService

EaxMdService
-


**


# EaxMdService


Пространство имен**: PP.Exp;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


[BiService](dhtmlMetabase.chm::/Classes/Metabase/BiService/BiService.htm)


EaxMdService


## Описание


Класс **EaxMdService** реализует
 сервис для работы с экспресс-отчетом.


## Синтаксис


PP.initClass(PP.Exp.EaxMdService, [PP.Mb.BiService](dhtmlMetabase.chm::/Classes/Metabase/BiService/BiService.htm),
 "EaxMdService");


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../sub_image.gif)
				 [EaxMdService](dhtmlExpress.chm::/classes/express/eaxmdservice/constructor_eaxmdservice.htm)
				 Конструктор **EaxMdService**
				 создает экземпляр класса **EaxMdService**.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [BubbleChart](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.bubblechart.htm)
		 Свойство BubbleChart
		 устанавливает и возвращает метаданные пузырьковой диаграммы экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Chart](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.chart.htm)
		 Свойство Chart
		 устанавливает и возвращает метаданные диаграммы экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Map](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.map.htm)
		 Свойство Map
		 устанавливает и возвращает метаданные карты отчета.


		 ![](../../../Property_Image.gif)
		 [MetaGet](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.MetaGet.htm)
		 Свойство MetaGet определяет
		 метаданные сервиса для работы с экспресс-отчетом.


		 ![](../../../Property_Image.gif)
		 [Transformation](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.Transformation.htm)
		 Свойство Transformation
		 определяет трансформации сервиса для работы с экспресс-отчетом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addSheet](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.addsheet.htm)
		 Метод **addSheet**
		 добавляет новый лист в документ экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [createCopy](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.createcopy.htm)
		 Метод **createCopy**
		 создает копию экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [createDocument](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.createdocument.htm)
		 Метод **createDocument**
		 создает документ экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [deleteFromDimSelection](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.deletefromdimselection.htm)
		 Метод **deleteFromDimSelection**
		 удаляет элементы из отметки через координаты таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [doFetchData](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.dofetchdata.htm)
		 Метод **doFetchData**
		 обновляет данные в экспресс-отчёте, при этом изменённые и несохранённые
		 данные в таблице потеряются.


		 ![](../../../sub_image.gif)
		 [doUndoAction](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.doUndoAction.htm)
		 Метод **doUndoAction**
		 предназначен для работы со стеком отмены/повтора действий в экспресс-отчёте.


		 ![](../../../sub_image.gif)
		 [edit](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.edit.htm)
		 Метод **edit** открывает
		 экспресс-отчёт в режиме редактирования.


		 ![](../../../sub_image.gif)
		 [editDocument](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.editdocument.htm)
		 Метод **editDocument**
		 открывает документ экспресс-отчёт в режиме редактирования.


		 ![](../../../sub_image.gif)
		 [Export](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.Export.htm)
		 Метод **Export**
		 экспортирует данные экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [fetchData](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.fetchdata.htm)
		 Метод **fetchData**
		 обновляет данные в экспресс-отчёте из базы данных с отображением
		 диалога подтверждения, если в таблице были изменены данные.


		 ![](../../../sub_image.gif)
		 [generateModeling](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.generateModeling.htm)
		 Метод generateModeling
		 отправляет запрос на генерацию задачи моделирования.


		 ![](../../../sub_image.gif)
		 [generateWbk](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.generateWbk.htm)
		 Метод generateWbk отправляет
		 запрос на генерацию рабочей книги.


		 ![](../../../sub_image.gif)
		 [getEaxImportUrl](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.getEaxImportUrl.htm)
		 Метод getEaxImportUrl
		 возвращает URL-адрес обработчика запросов для импорта данных в
		 отчёт.


		 ![](../../../sub_image.gif)
		 [getMetabase](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.getmetabase.htm)
		 Метод **getMetabase**
		 возвращает репозиторий.


		 ![](../../../sub_image.gif)
		 [getStatData](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.getstatdata.htm)
		 Метод **getStatData**
		 получает статистические характеристики данных экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [getTopobase](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.gettopobase.htm)
		 Метод **getTopobase**
		 возвращает топооснову карты экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [loadDocMd](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.loaddocmd.htm)
		 Метод **loadDocMd**
		 загружает документ в сервис для работы с экспресс-отчётом.


		 ![](../../../sub_image.gif)
		 [loadEaxMd](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.loadeaxmd.htm)
		 Метод **loadEaxMd**
		 загружает экспресс-отчёт в сервис для работы с ним.


		 ![](../../../sub_image.gif)
		 [movePrivateDim](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.movePrivateDim.htm)
		 Метод movePrivateDim
		 перемещает частное измерение вверх/вниз.


		 ![](../../../sub_image.gif)
		 [open](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.open.htm)
		 Метод **open** открывает
		 экспресс-отчёт в режиме чтения.


		 ![](../../../sub_image.gif)
		 [openDocument](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.opendocument.htm)
		 Метод **openDocument**
		 открывает документ экспресс-отчёта в режиме просмотра.


		 ![](../../../sub_image.gif)
		 [removeSheet](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.removesheet.htm)
		 Метод **removeSheet**
		 удаляет указанный лист экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [renameSheet](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.renamesheet.htm)
		 Метод **renameSheet**
		 переименовывает лист документа экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [saveObject](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.saveobject.htm)
		 Метод **saveObject**
		 сохраняет экспресс-отчёт и все его листы.


		 ![](../../../sub_image.gif)
		 [saveTableData](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.savetabledata.htm)
		 Метод **saveTableData**
		 сохраняет данные таблицы в экспресс-отчёте.


		 ![](../../../sub_image.gif)
		 [setActiveSheet](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setactivesheet.htm)
		 Метод **setActiveSheet**
		 делает активным указанный лист документа экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setAgrMethod](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setAgrMethod.htm)
		 Метод setAgrMethod
		 устанавливает функцию агрегации данных в фиксированных измерениях
		 таблицы.


		 ![](../../../sub_image.gif)
		 [setAutoUpdate](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setAutoUpdate.htm)
		 Метод setAutoUpdate
		 настраивает автоообновление экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setCellsAutoFit](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setcellsautofit.htm)
		 Метод **setCellsAutoFit**
		 устанавливает автоподгонку для ячеек таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setChartDataSource](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setchartdatasource.htm)
		 Метод **setChartDataSource**
		 устанавливает источник данных для диаграммы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setChartDrillDown](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setchartdrilldown.htm)
		 Метод **setChartDrillDown**
		 опускает отметки на уровень вниз по иерархии для диаграммы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setChartSelection](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setChartSelection.htm)
		 Метод **setChartSelection**
		 устанавливает выделение рядов диаграммы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setChartSelectionAction](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setchartselectionaction.htm)
		 Метод **setChartSelectionAction**
		 определяет действие над выделенными рядами диаграммы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setCustomDimension](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setCustomDimension.htm)
		 Метод setCustomDimension
		 выполняет операции с элементами пользовательской иерархии.


		 ![](../../../sub_image.gif)
		 [setDataSourceDestination](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setdatasourcedestination.htm)
		 Метод **setDataSourceDestination**
		 устанавливает вариант отображения источника данных.


		 ![](../../../sub_image.gif)
		 [setDataSourceFactor](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setDataSourceFactor.htm)
		 Метод setDataSourceFactor
		 устанавливает источник отчёта по показателю внутри
		 источника.


		 ![](../../../sub_image.gif)
		 [setDataSources](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setdatasources.htm)
		 Метод **setDataSources**
		 устанавливает источник данных для куба.


		 ![](../../../sub_image.gif)
		 [setDimDataFilter](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setDimDataFilter.htm)
		 Метод **setDimDataFilter**
		 устанавливает фильтр для элементов подсветки экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setDimensionSettings](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setDimensionSettings.htm)
		 Метод setDimensionSettings
		 предназначен для установки значений на панели свойств «Расшифровка
		 измерений».


		 ![](../../../sub_image.gif)
		 [setEaxMd](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.seteaxmd.htm)
		 Метод **setEaxMd**
		 устанавливает метаданные в объект экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setEaxObjectMeta](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setEaxObjectMeta.htm)
		 Метод setEaxObjectMeta
		 устанавливает метаданные указанного визуализатора.


		 ![](../../../sub_image.gif)
		 [setEnabled3D](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setEnabled3D.htm)
		 Метод setEnabled3D
		 устанавливает возможность отображать 3D-карт в экспресс-отчёте.


		 ![](../../../sub_image.gif)
		 [setFilter](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setfilter.htm)
		 Метод **setFilter**
		 устанавливает фильтр по значениям данных экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setFixInfo](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setFixInfo.htm)
		 Метод **setFixInfo**
		 изменяет информацию о фиксации измерений экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setGridCMenuCellInHeader](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgridcmenucellinheader.htm)
		 Устарело. Метод **setGridCMenuCellInHeader**
		 реализует пункты контекстного меню заголовков таблицы для детализации,
		 обобщения или фиксирования элементов.


		 ![](../../../sub_image.gif)
		 [setGridCMenuCellInHeaderCalcBasedOn](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgridcmenucellinheadercalcbasedon.htm)
		 Устарело. Метод **setGridCMenuCellInHeaderCalcBasedOn**
		 реализует пункт контекстного меню заголовков таблицы для вычисления
		 элемента на базе другого элемента.


		 ![](../../../sub_image.gif)
		 [setGridCMenuCellInHeaderFixElementWRep](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgridcmenucellinheaderfixelementwrep.htm)
		 Устарело. Метод **setGridCMenuCellInHeaderFixElementWRep**
		 реализует пункт контекстного меню заголовков таблицы для фиксирования
		 элемента с заменой на другой элемент.


		 ![](../../../sub_image.gif)
		 [setGridCMenuCornerCell](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgridcmenucornercell.htm)
		 Метод **setGridCMenuCornerCell**
		 реализует пункты контекстного меню угловой ячейки заголовка таблицы.


		 ![](../../../sub_image.gif)
		 [setGridDrillDown](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgriddrilldown.htm)
		 Метод **setGridDrillDown**
		 осуществляет переход на уровень вниз или вверх по иерархии отметки
		 в таблице.


		 ![](../../../sub_image.gif)
		 [setGridHdrPlacement](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setGridHdrPlacement.htm)
		 Метод setGridHdrPlacement
		 устанавливает настройки размещения измерений в шапке и боковике
		 таблицы.


		 ![](../../../sub_image.gif)
		 [setGridParam](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setGridParam.htm)
		 Метод setGridParam
		 задает параметры таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setGridSorting](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgridsorting.htm)
		 Метод **setGridSorting**
		 эмулирует нажатие на значок сортировки в ячейке в таблице экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setGridTransposed](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setgridtransposed.htm)
		 Метод **setGridTransposed**
		 осуществляет поворот таблицы.


		 ![](../../../sub_image.gif)
		 [setHierarchy](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setHierarchy.htm)
		 Метод setHierarchy
		 выполняет операции с пользовательской иерархией.


		 ![](../../../sub_image.gif)
		 [setIndAgg](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setIndAgg.htm)
		 Метод setIndAgg устанавливает
		 тип агрегации для метрик.


		 ![](../../../sub_image.gif)
		 [setInternalGridStyles](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setInternalGridStyles.htm)
		 Метод setInternalGridStyles
		 устанавливает стиль ячеек всей таблицы.


		 ![](../../../sub_image.gif)
		 [setMainControlElements](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setmaincontrolelements.htm)
		 Метод **setMainControlElements**
		 устанавливает функцию агрегации данных в фиксированных измерениях
		 таблицы и управляет разрешением на кеширование данных в экспресс-отчёте.


		 ![](../../../sub_image.gif)
		 [setMainTableStyle](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setmaintablestyle.htm)
		 Метод **setMainTableStyle**
		 устанавливает главный стиль для таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setMapDrillDown](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setmapdrilldown.htm)
		 Метод **setMapDrillDown**
		 изменяет уровень карты экспресс-отчёта в указанном
		 направлении.


		 ![](../../../sub_image.gif)
		 [setMapSelection](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setMapSelection.htm)
		 Метод **setMapSelection**
		 устанавливает выделение объектов карты экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setMd](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setmd.htm)
		 Метод **setMd**
		 устанавливает метаданные в объект экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setNormalization](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setnormalization.htm)
		 Метод **setNormalization**
		 нормализует данные диаграммы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setNumberFormat](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setnumberformat.htm)
		 Метод **setNumberFormat**
		 устанавливает формат данных в таблице экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setParams](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setParams.htm)
		 Метод setParams устанавливает
		 метаданные параметров источника данных экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setPareto](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setpareto.htm)
		 Метод **setPareto**
		 устанавливает распределение по Парето в экспресс-отчёте.


		 ![](../../../sub_image.gif)
		 [setPivotDims](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setpivotdims.htm)
		 Метод **setPivotDims**
		 устанавливает новое положение измерений в таблице экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setPivotDimsConfirm](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setpivotdimsconfirm.htm)
		 Метод **setPivotDimsConfirm**
		 устанавливает положение измерений с отображением диалога подтверждения
		 в случае, если в таблице были изменены данные.


		 ![](../../../sub_image.gif)
		 [setPivotSortItems](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setPivotSortItems.htm)
		 Метод **setPivotSortItems**
		 задает параметры для [области
		 действия правила](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm) сортировки таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setPrivateDimDisplayMode](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setPrivateDimDisplayMode.htm)
		 Метод setPinnedPrivateDims
		 переводит частные измерения в фиксированные и обратно.


		 ![](../../../sub_image.gif)
		 [setRanking](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setranking.htm)
		 Метод **setRanking**
		 **выполняет ранжирование данных
		 в экспресс-отчёте**.


		 ![](../../../sub_image.gif)
		 [setRowColumn](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setrowcolumn.htm)
		 Метод **setRowColumn**
		 осуществляет взаимную замену осей диаграммы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setSelectPart](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setSelectPart.htm)
		 Метод setSelectPart
		 задает выделенную область таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setSourceFromFile](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setsourcefromfile.htm)
		 Метод **setSourceFromFile**
		 отображает окно для открытия экспресс-отчёта из файла.


		 ![](../../../sub_image.gif)
		 [setSpeedometer](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setSpeedometer.htm)
		 Метод setSpeedometer
		 устанавливает спидометр для аналитической панели.


		 ![](../../../sub_image.gif)
		 [setTabSheetHeaders](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settabsheetheaders.htm)
		 Метод **setTabSheetHeaders**
		 управляет отображением заголовков таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setTabSheetSearch](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settabsheetsearch.htm)
		 Устарело. Метод **setTabSheetSearch** устанавливает
		 настройки поиска данных в таблице.


		 ![](../../../sub_image.gif)
		 [setTabSheetSelection](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settabsheetselection.htm)
		 Метод **setTabSheetSelection**
		 устанавливает выделение ячеек таблицы в экспресс-отчёте.


		 ![](../../../sub_image.gif)
		 [setTableCFormat](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settablecformat.htm)
		 Метод **setTableCFormat**
		 устанавливает условное форматирование таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setTableGrowth](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settablegrowth.htm)
		 Метод **setTableGrowth**
		 устанавливает индикатор роста в таблице экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setTables](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settables.htm)
		 Метод **setTables** устанавливает
		 настройки для таблиц экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setTitle](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settitle.htm)
		 Метод **setTitle**
		 устанавливает свойства для заголовка экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setTotals](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.settotals.htm)
		 Метод **setTotals**
		 устанавливает настройки сортировки и отображения иерархий для
		 таблицы экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setTransformationPos](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setTransformationPos.htm)
		 Метод setTransformationPos
		 устанавливает трансформацию в новую позицию в коллекции.


		 ![](../../../sub_image.gif)
		 [setTransformationState](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setTransformationState.htm)
		 Метод setTransformationState
		 устанавливает состояния коллекции трансформаций, заданной для
		 элемента измерения.


		 ![](../../../sub_image.gif)
		 [setUnitSelection](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setUnitSelection.htm)
		 Метод setUnitSelection
		 масштабирует единицы измерения экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setVisibility](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setvisibility.htm)
		 Метод **setVisibility**
		 управляет видимостью представлений экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [setWindowsPosition](dhtmlExpress.chm::/classes/express/eaxmdservice/eaxmdservice.setwindowsposition.htm)
		 Метод **setWindowsPosition**
		 устанавливает раскладку представлений экспресс-отчёта.


		 ![](../../../sub_image.gif)
		 [updateFilterTransformation](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.updateFilterTransformation.htm)
		 Метод updateFilterTransformation
		 обновляет трансформацию-фильтр экспресс-отчёта.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [BubbleChartLoaded](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.BubbleChartLoaded.htm)
		 Событие BubbleChartLoaded
		 наступает после загрузки пузырьковой диаграммы экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [ChartDataLoaded](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.ChartDataLoaded.htm)
		 Событие ChartDataLoaded
		 наступает после загрузки диаграммы экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [EaxDocumentOpened](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.EaxDocumentOpened.htm)
		 Событие EaxDocumentOpened
		 генерируется при открытии документа экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [EaxOpened](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.EaxOpened.htm)
		 Событие EaxOpened
		 генерируется при открытии экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [MapDataLoaded](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.MapDataLoaded.htm)
		 Событие MapDataLoaded
		 наступает после загрузки карты экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [MdLoaded](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.MdLoaded.htm)
		 Событие MdLoaded генерируется
		 при загрузке метаданных в экспресс-отчёт.


		 ![](../../../Event_Image.gif)
		 [Saved](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.Saved.htm)
		 Событие Saved
		 наступает при сохранении экспресс-отчета.


## Методы, унаследованные от класса [BiService](dhtmlMetabase.chm::/Classes/Metabase/BiService/BiService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [beginBatch](dhtmlMetabase.chm::/Classes/Metabase/BIService/BiService.beginBatch.htm)
		 Метод beginBatch включает
		 пакетный режим отправки запросов.


		 ![](../../../sub_image.gif)
		 [endBatch](dhtmlMetabase.chm::/Classes/Metabase/BIService/BiService.endBatch.htm)
		 Метод endBatch отключает
		 пакетный режим отправки запросов и выполняет отправку сформированного
		 пакета.


## Методы, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addCallbackToLastRqt](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.addcallbacktolastrqt.htm)
		 Метод addCallbackToLastRqt
		 добавляет обработчик к последнему в очереди запросу.


		 ![](../../../sub_image.gif)
		 [beginSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.beginSyncXHR.htm)
		 Метод beginSyncXHR
		 включает режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../sub_image.gif)
		 [clearRequests](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.clearrequests.htm)
		 Метод clearRequests очищает
		 список запросов из очереди а также удаляет текущий запрос.


		 ![](../../../sub_image.gif)
		 [endSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.endSyncXHR.htm)
		 Метод endSyncXHR отключает
		 режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../sub_image.gif)
		 [getCurrentRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.getCurrentRequest.htm)
		 Метод getCurrentRequest
		 возвращает текущий запрос сервисов.


		 ![](../../../sub_image.gif)
		 [sendRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.sendRequest.htm)
		 Метод **sendRequest** отправляет запрос веб-сервису.


## События, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [EndRequest](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.endrequest.htm)
		 Событие EndRequest
		 наступает при окончании соединения с репозиторием.


		 ![](../../../Event_Image.gif)
		 [Error](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.error.htm)
		 Событие Error наступает,
		 если во время соединения с репозиторием произошла ошибка.


		 ![](../../../Event_Image.gif)
		 [Executed](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.executed.htm)
		 Событие Executed наступает
		 после выполнения запроса к серверу.


		 ![](../../../Event_Image.gif)
		 [StartRequest](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.startrequest.htm)
		 Событие StartRequest
		 наступает в начале выполнения запроса к репозиторию.


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


[PP.Exp](../../PP.Exp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
