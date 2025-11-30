# TSService

TSService
-


**


# TSService


Пространство имен: PP.TS;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


PP.Exp.[EaxMdService](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.htm)


TSService


## Описание


Класс TSService реализует
 сервис для работы с анализом временных рядов.


## Синтаксис


PP.initClass(PP.TS.TSService, PP.Exp.[EaxMdService](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.htm),
 "WorkbookService");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [TSService](Constructor_TSService.htm)
		 Конструктор TSService
		 создает экземпляр класса TSService.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addCalculatedRow](TSService.addCalculatedRow.htm)
		 Метод addCalculatedRow
		 добавляет вычисляемые ряды.


		 ![](../../../Sub_Image.gif)
		 [addColumns](TSService.addColumns.htm)
		 Метод addColumns добавляет
		 столбцы в рабочую книгу.


		 ![](../../../Sub_Image.gif)
		 [addNewRevision](TSService.addNewRevision.htm)
		 Метод addNewRevision
		 добавляет новую ревизию.


		 ![](../../../Sub_Image.gif)
		 [addWbkSeries](TSService.addWbkSeries.htm)
		 Метод addWbkSeries
		 добавляет ряды в рабочую книгу.


		 ![](../../../Sub_Image.gif)
		 [addWbkSeriesByFactorKeys](TSService.addWbkSeriesByFactorKeys.htm)
		 Метод addWbkSeriesByFactorKeys
		 добавляет ряды в рабочую книгу по ключам факторов.


		 ![](../../../Sub_Image.gif)
		 [changeColumns](TSService.changeColumns.htm)
		 Метод changeColumns
		 изменяет столбцы рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [changeRubricator](TSService.changeRubricator.htm)
		 Метод changeRubricator
		 изменяет базу данных временных рядов.


		 ![](../../../Sub_Image.gif)
		 [checkCalcFormula](TSService.checkCalcFormula.htm)
		 Метод checkCalcFormula
		 отправляет запрос на сервер, для проверки корректности формулы,
		 заданной в калькуляторе.


		 ![](../../../Sub_Image.gif)
		 [close](TSService.close.htm)
		 Метод close закрывает
		 рабочую книгу.


		 ![](../../../Sub_Image.gif)
		 [closeHie](TSService.closeHie.htm)
		 Метод closeHie закрывает
		 заданную иерархию рядов.


		 ![](../../../Sub_Image.gif)
		 [compressRevision](TSService.compressRevision.htm)
		 Метод compressRevision
		 сжимает ревизии.


		 ![](../../../Sub_Image.gif)
		 [copySeries](TSSeries.copySeries.htm)
		 Метод copySeries копирует
		 ряды.


		 ![](../../../Sub_Image.gif)
		 [createWbkFromRub](TSService.createWbkFromRub.htm)
		 Метод createWbkFromRub
		 создаёт рабочую книгу из базы данных временных рядов и открывает
		 её.


		 ![](../../../Sub_Image.gif)
		 [editAllSeries](TSService.editAllSeries.htm)
		 Метод editAllSeries
		 изменяет все ряды.


		 ![](../../../Sub_Image.gif)
		 [editData](TSService.editData.htm)
		 Метод editData посылает
		 запрос на изменение данных в ячейках таблицы рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [editSeries](TSService.editSeries.htm)
		 Метод editSeries изменяет
		 ряды.


		 ![](../../../Sub_Image.gif)
		 [editSeriesView](TSService.editSeriesView.htm)
		 Метод editSeriesView
		 изменяет настройки отображения рядов.


		 ![](../../../Sub_Image.gif)
		 [getAddColumnsSettings](TSService.getAddColumnsSettings.htm)
		 Метод getAddColumnsSettings
		 возвращает тело запроса добавления столбцов в рабочую книгу.


		 ![](../../../Sub_Image.gif)
		 [getAddSeriesSettings](TSService.getAddSeriesSettings.htm)
		 Метод getAddSeriesSettings
		 возвращает тело запроса добавления рядов в рабочую книгу.


		 ![](../../../Sub_Image.gif)
		 [getAllSeriesView](TSService.getAllSeriesView.htm)
		 Метод getAllSeriesView
		 содержит список рядов, используемый мастером.


		 ![](../../../Sub_Image.gif)
		 [getCellHistory](TSService.getCellHistory.htm)
		 Метод getCellHistory
		 возвращает ревизии для точки (историю изменений точки).


		 ![](../../../Sub_Image.gif)
		 [getChangeColumnsSettings](TSService.getChangeColumnsSettings.htm)
		 Метод getChangeColumnsSettings
		 возвращает тело запроса изменения столбцов в рабочей книге.


		 ![](../../../Sub_Image.gif)
		 [getDataToStr](TSService.getDateToStr.htm)
		 Метод getDateToStr
		 преобразует дату в строку и возвращает ее.


		 ![](../../../Sub_Image.gif)
		 [getEditAllSeriesSettings](TSService.getEditAllSeriesSettings.htm)
		 Метод getEditAllSeriesSettings
		 возвращает тело запроса изменения всех рядов в рабочей книге.


		 ![](../../../Sub_Image.gif)
		 [getEditSeriesSettings](TSService.getEditSeriesSettings.htm)
		 Метод getEditSeriesSettings
		 возвращает тело запроса изменения рядов в рабочей книге.


		 ![](../../../Sub_Image.gif)
		 [getHieService](TSService.getHieService.htm)
		 Метод getHieService
		 возвращает сервис для работы с иерархией рядов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getMdOfSeries](TSService.getMdOfSeries.htm)
		 Метод getMdOfSeries
		 загружает метаданные рядов и колонок.


		 ![](../../../Sub_Image.gif)
		 [getMetaAttributesSource](TSService.getMetaAttributesSource.htm)
		 Метод getMetaAttributesSource
		 возвращает источник таблицы входящей в метаданные.


		 ![](../../../Sub_Image.gif)
		 [getPinSeriesSettings](TSService.getPinSeriesSettings.htm)
		 Метод getPinSeriesSettings
		 возвращает тело запроса блокировки рядов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getRemoveColumnsSettings](TSService.getRemoveColumnsSettings.htm)
		 Метод getRemoveColumnsSettings
		 возвращает тело запроса удаления столбцов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getRevisions](TSService.getRevisions.htm)
		 Метод getRevisions
		 возвращает все ревизии базы данных временных рядов
		 с ключом rubKey.


		 ![](../../../Sub_Image.gif)
		 [getRubFromCube](TSService.getRubFromCube.htm)
		 Метод getRubFromCube
		 получает базу данных временных рядов из куба с ключом cubeKey.


		 ![](../../../Sub_Image.gif)
		 [getRubMd](TSService.getRubMd.htm)
		 Метод getRubMd посылает
		 запрос на получение метаданных для источника с ключом rubKey.


		 ![](../../../Sub_Image.gif)
		 [getSerieRevisions](TSService.getSerieRevisions.htm)
		 Метод getSerieRevisions
		 возвращает ревизии ряда serie.


		 ![](../../../Sub_Image.gif)
		 [getSetMetadataSettings](TSService.getSetMetadataSettings.htm)
		 Метод getSetMetadataSettings
		 возвращает тело запроса сохранения метаданных рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getSetPeriodSettings](TSService.getSetPeriodSettings.htm)
		 Метод getSetPeriodSettings
		 возвращает тело запроса периода.


		 ![](../../../Sub_Image.gif)
		 [getSetSortSettings](TSService.getSetSortSettings.htm)
		 Метод getSetSortSettings
		 возвращает тело запроса сортировки.


		 ![](../../../Sub_Image.gif)
		 [GroupSeries](TSService.GroupSeries.htm)
		 Метод GroupSeries группирует
		 ряды рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [loadWbkMd](TSService.loadWbkMd.htm)
		 Метод loadWbkMd загружает
		 метаданные в объект report.


		 ![](../../../Sub_Image.gif)
		 [moveSeries](TSService.moveSeries.htm)
		 Метод moveSeries перемещает
		 положение рядов вверх или вниз.


		 ![](../../../Sub_Image.gif)
		 [openDLDim](TSService.openDLDim.htm)
		 Метод openDLDim открывает
		 измерение уровней календаря.


		 ![](../../../Sub_Image.gif)
		 [openRub](TSService.openRub.htm)
		 Метод openRub открывает
		 базу данных временных рядов по его ключу.


		 ![](../../../Sub_Image.gif)
		 [openUnitDim](TSService.openUnitDim.htm)
		 Метод openUnitDim открывает
		 справочник единиц измерения.


		 ![](../../../Sub_Image.gif)
		 [pinSeries](TSService.pinSeries.htm)
		 Метод pinSeries блокирует
		 ряды.


		 ![](../../../Sub_Image.gif)
		 [refreshWbk](TSService.refreshWbk.htm)
		 Метод refreshWbk обновляет
		 рабочую книгу.


		 ![](../../../Sub_Image.gif)
		 [removeColumns](TSService.removeColumns.htm)
		 Метод removeColumns
		 удаляет столбцы удаляет столбцы атрибутов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [removeSeries](TSService.removeSeries.htm)
		 Метод removeSeries
		 удаляет строку таблицы рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [rollbackRevision](TSService.rollbackRevision.htm)
		 Метод rollbackRevision
		 отменяет ревизии.


		 ![](../../../Sub_Image.gif)
		 [setAttrsTreeOptions](TSService.setAttrsTreeOptions.htm)
		 Метод setAttrsTreeOptions
		 используется для настройки атрибутов в иерархии рядов рабочей
		 книги.


		 ![](../../../Sub_Image.gif)
		 [setAutoUpdate](TSService.setAutoUpdate.htm)
		 Метод setAutoUpdate
		 устанавливает автообновление.


		 ![](../../../Sub_Image.gif)
		 [setChartMetadata](TSService.setChartMetadata.htm)
		 Метод setChartMetadata
		 задает метаданные диаграммы.


		 ![](../../../Sub_Image.gif)
		 [setMetadata](TSService.setMetadata.htm)
		 Метод setMetadata сохраняет
		 метаданные рабочей книги на сервере.


		 ![](../../../Sub_Image.gif)
		 [setObsAttr](TSService.setObsAttr.htm)
		 Метод setObsAttr
		 используется для установки атрибутов наблюдений.


		 ![](../../../Sub_Image.gif)
		 [setPeriod](TSService.setPeriod.htm)
		 Метод setPeriod устанавливает
		 период.


		 ![](../../../Sub_Image.gif)
		 [setSelectedSeries](TSService.setSelectedSeries.htm)
		 Метод setSelectedSeries
		 устанавливает отмеченные ряды рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [setSeriesAttr](TSService.setSeriesAttr.htm)
		 Метод setSeriesAttr
		 устанавливает атрибуты ряда.


		 ![](../../../Sub_Image.gif)
		 [setSort](TSService.setSort.htm)
		 Метод setSort устанавливает
		 сортировку рядов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [setTableFixHeaders](TSService.setTableFixHeaders.htm)
		 Метод setTableFixHeaders
		 используется для установки фиксированных областей таблицы.


		 ![](../../../Sub_Image.gif)
		 [setTableSelection](TSService.setTableSelection.htm)
		 Метод setTableSelection
		 устанавливает отметку в таблице.


		 ![](../../../Sub_Image.gif)
		 [setTableStyle](TSService.setTableStyle.htm)
		 Метод setTableStyle
		 используется для установки стиля таблицы.


		 ![](../../../Sub_Image.gif)
		 [setWbkMd](TSService.setWbkMd.htm)
		 Метод setWbkMd устанавливает
		 метаданные в объект report.


		 ![](../../../Sub_Image.gif)
		 [UnGroupSeries](TSService.UnGroupSeries.htm)
		 Метод UnGroupSeries
		 отменяет группировку рядов рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [updateCalculatedRow](TSService.updateCalculatedRow.htm)
		 Метод updateCalculatedRow
		 изменяет существующие вычисляемые ряды.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [MetadataChanged](TSService.MetadataChanged.htm)
		 Событие MetadataChanged
		 наступает по окончанию изменения метаданных.


		 ![](../../../Event_Image.gif)
		 [MetadataChangeStart](TSService.MetadataChangeStart.htm)
		 Событие MetadataChangeStart
		 наступает при начале изменения метаданных.


		 ![](../../../Event_Image.gif)
		 [WbkDocumentOpened](TSService.WbkDocumentOpened.htm)
		 Событие WbkDocumentOpened
		 наступает при открытии документа рабочей книги.


		 ![](../../../Event_Image.gif)
		 [WbkOpened](TSService.WbkOpened.htm)
		 Событие WbkOpened наступает
		 при открытии рабочей книги.


## Методы, унаследованные от класса PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addCallbackToLastRqt](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.addcallbacktolastrqt.htm)
		 Метод addCallbackToLastRqt
		 добавляет обработчик к последнему в очереди запросу.


		 ![](../../../Sub_Image.gif)
		 [beginSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.beginSyncXHR.htm)
		 Метод beginSyncXHR
		 включает режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../Sub_Image.gif)
		 [clearRequests](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.clearrequests.htm)
		 Метод clearRequests очищает
		 список запросов из очереди а также удаляет текущий запрос.


		 ![](../../../Sub_Image.gif)
		 [endSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.endSyncXHR.htm)
		 Метод endSyncXHR отключает
		 режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../Sub_Image.gif)
		 [getCurrentRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.getCurrentRequest.htm)
		 Метод getCurrentRequest
		 возвращает текущий запрос сервисов.


		 ![](../../../Sub_Image.gif)
		 [sendRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.sendRequest.htm)
		 Метод sendRequest** отправляет запрос веб-сервису.


## События, унаследованные от класса PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


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


[PP.TS](../../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
