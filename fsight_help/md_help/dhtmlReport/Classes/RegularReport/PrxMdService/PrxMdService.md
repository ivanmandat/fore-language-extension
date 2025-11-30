# PrxMdService

PrxMdService
-


**


# PrxMdService


Пространство имен: PP.Prx;


## Иерархия наследования


           [Object](dhtmlCommon.chm::/Classes/object/object.htm)


           [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


           [BiService](dhtmlMetabase.chm::/Classes/Metabase/BiService/BiService.htm)


           PrxMdService


## Описание


Класс PrxMdService реализует
 источник данных для компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm).


## Синтаксис


PP.initClass(PP.Prx.PrxMdService, PP.Mb.[BiService](dhtmlMetabase.chm::/Classes/Metabase/BiService/BiService.htm),
 "PrxMdService");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [PrxMdService](Constructor_PrxMdService.htm)
		 Конструктор PrxMdService
		 создает экземпляр класса PrxMdService.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [Export](PrxMdService.Export.htm)
		 Метод Export осуществляет
		 экспорт объекта в файл заданного формата.


		 ![](../../../Sub_Image.gif)
		 [generateProblem](PrxMdService.generateProblem.htm)
		 Метод generateProblem
		 отправляет запрос на генерацию задачи моделирования.


		 ![](../../../Sub_Image.gif)
		 [generateWbk](PrxMdService.generateWbk.htm)
		 Метод generateWbk отправляет
		 запрос на генерацию рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [getBinaryUrl](PrxMdService.getBinaryUrl.htm)
		 Метод getBinaryUrl
		 возвращает ссылку на объект в таблице.


		 ![](../../../Sub_Image.gif)
		 [getChart](PrxMdService.getChart.htm)
		 Метод getChart возвращает
		 метаданные диаграммы отчета.


		 ![](../../../Sub_Image.gif)
		 [getDocumentData](PrxMdService.getDocumentData.htm)
		 Метод getDocumentData
		 возвращает метаданные текстового листа регламентного отчета.


		 ![](../../../Sub_Image.gif)
		 [getMetabase](prxMdService.getMetabase.htm)
		 Метод getMetabase возвращает
		 экземпляр метабазы.


		 ![](../../../Sub_Image.gif)
		 [getMetadata](PrxMdService.getMetadata.htm)
		 Метод getMetadata возвращает
		 метаданные объекта.


		 ![](../../../Sub_Image.gif)
		 [loadPrxMd](PrxMdService.loadPrxMd.htm)
		 Метод loadPrxMd загружает
		 метаданные в объект класса [Report](../Report/Report.htm).


		 ![](../../../Sub_Image.gif)
		 [open](PrxMdService.open.htm)
		 Метод open открывает
		 регламентный отчет по ключу.


		 ![](../../../Sub_Image.gif)
		 [openReport](PrxMdService.openReport.htm)
		 Метод openReport открывает
		 регламентный отчет с параметрами.


		 ![](../../../Sub_Image.gif)
		 [saveData](PrxMdService.saveData.htm)
		 Метод saveData сохраняет
		 измененные данные в отчете.


		 ![](../../../Sub_Image.gif)
		 [setActiveSheet](PrxMdService.setActiveSheet.htm)
		 Метод setActiveSheet
		 устанавливает активный лист отчета.


		 ![](../../../Sub_Image.gif)
		 [setAutoUpdate](PrxMdService.setAutoUpdate.htm)
		 Метод setAutoUpdate
		 настраивает автоообновление отчета.


		 ![](../../../Sub_Image.gif)
		 [setControlsValue](PrxMdService.setControlsValue.htm)
		 Метод setControlsValue
		 устанавливает значение для элемента управления.


		 ![](../../../Sub_Image.gif)
		 [setHyperLink](PrxMdService.setHyperLink.htm)
		 Метод setHyperLink
		 эмулирует щелчок мыши по гиперссылке.


		 ![](../../../Sub_Image.gif)
		 [setTabSheetAction](PrxMdService.setTabSheetAction.htm)
		 Метод setTabSheetAction
		 выполняет действие в таблице.


		 ![](../../../Sub_Image.gif)
		 [setTabSheetData](PrxMdService.setTabSheetData.htm)
		 Метод setTabSheetData
		 устанавливает данные в электронную таблицу.


		 ![](../../../Sub_Image.gif)
		 [setTabSheetSelection](PrxMdService.setTabSheetSelection.htm)
		 Метод setTabSheetSelection
		 сохраняет состояние выделенной области в таблице.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [EndMetabaseRequest](PrxMdService.EndMetabaseRequest.htm)
		 Событие EndMetabaseRequest
		 наступает при окончании выполнения запроса к метабазе.


		 ![](../../../Event_Image.gif)
		 [Opened](PrxMdService.Opened.htm)
		 Событие Opened наступает
		 после открытия отчета из метабазы.


		 ![](../../../Event_Image.gif)
		 [StartMetabaseRequest](PrxMdService.StartMetabaseRequest.htm)
		 Событие StartMetabaseRequest
		 наступает в начале выполнения запроса к метабазе.


## Методы, унаследованные от класса [BiService](dhtmlMetabase.chm::/Classes/Metabase/BiService/BiService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [beginBatch](dhtmlMetabase.chm::/Classes/Metabase/BIService/BiService.beginBatch.htm)
		 Метод beginBatch включает
		 пакетный режим отправки запросов.


		 ![](../../../Sub_Image.gif)
		 [endBatch](dhtmlMetabase.chm::/Classes/Metabase/BIService/BiService.endBatch.htm)
		 Метод endBatch отключает
		 пакетный режим отправки запросов и выполняет отправку сформированного
		 пакета.


## Методы, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


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


## События, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


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


[PP.Prx](../../PP.Prx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
