# Metabase

Metabase
-


# Metabase


Пространство имен: PP.Mb;


## Иерархия наследования


           [Object](dhtmlCommon.chm::/Classes/object/object.htm)


           [PPService](../PPService/PPService.htm)


           Metabase


## Описание


Класс Metabase используется
 для создания подключения к репозиторию.


## Синтаксис


PP.initClass(PP.Mb.Metabase,
 PP.Mb.[PPService](../PPService/PPService.htm), "Metabase");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [Metabase](Constructor_Metabase.htm)
		 Конструктор Metabase
		 создает соединение с репозиторием.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [EnableCaching](Metabase.EnableCaching.htm)
		 Свойство EnableCaching
		 определяет, будет ли использоваться кеширование объектов репозитория.


		 ![](../../../Property_Image.gif)
		 [UserCreds](Metabase.UserCreds.htm)
		 Свойство UserCreds
		 устанавливает данные пользователя для подключения к репозиторию.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [changePassword](Metabase.changePassword.htm)
		 Метод changePassword
		 устанавливает новый пароль пользователю репозитория.


		 ![](../../../Sub_Image.gif)
		 [clearCache](Metabase.clearCache.htm)
		 Метод clearCache очищает
		 кеш запросов к сервису репозитория.


		 ![](../../../Sub_Image.gif)
		 [close](Metabase.close.htm)
		 Метод close закрывает
		 соединение с репозиторием.


		 ![](../../../Sub_Image.gif)
		 [closeObject](Metabase.closeObject.htm)
		 Метод closeObject закрывает
		 объект репозитория.


		 ![](../../../Sub_Image.gif)
		 [createObject](Metabase.createObject.htm)
		 Метод createObject
		 создает новый объект репозитория.


		 ![](../../../Sub_Image.gif)
		 [createShortcut](Metabase.createShortcut.htm)
		 Метод createShortcut
		 создает ярлык для объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [deleteObjects](Metabase.deleteObjects.htm)
		 Метод deleteObjects
		 удаляет объекты репозитория по их ключам.


		 ![](../../../Sub_Image.gif)
		 [findObjects](Metabase.findObjects.htm)
		 Метод findObjects находит
		 объекты репозитория по заданным параметрам.


		 ![](../../../Sub_Image.gif)
		 [flushCache](Metabase.flushCache.htm)


		 Метод flushCache
		 сбрасывает весь кеш репозитория.


		 ![](../../../Sub_Image.gif)
		 [getConnectionId](Metabase.getConnectionId.htm)


		 Метод getConnectionId
		 возвращает идентификатор соединения с базой.


		 ![](../../../Sub_Image.gif)
		 [getCustomClasses](Metabase.getCustomClasses.htm)


		 Метод getCustomClasses
		 отправляет запрос на получение пользовательских классов репозитория.


		 ![](../../../Sub_Image.gif)
		 [getExportUrl](Metabase.getExportUrl.htm)


		 Метод getExportUrl
		 возвращает url экспорта данных.


		 ![](../../../Sub_Image.gif)
		 [getFullPath](Metabase.getFullPath.htm)


		 Метод getFullPath
		 отправляет запрос на получение данных о родительских каталогах
		 для указанного объекта.


		 ![](../../../Sub_Image.gif)
		 [getImportUrl](Metabase.getImportUrl.htm)


		 Метод getExportUrl
		 возвращает url импорта данных.


		 ![](../../../Sub_Image.gif)
		 [getMbSec](Metabase.getMbSec.htm)


		 Метод getMbSec запрашивает
		 дополнительные настройки репозитория.


		 ![](../../../Sub_Image.gif)
		 [getObjects](Metabase.getObjects.htm)


		 Метод getObjects
		 возвращает объекты репозитория.


		 ![](../../../Sub_Image.gif)
		 [getPathToRoot](Metabase.getPathToRoot.htm)


		 Метод getPathToRoot
		 возвращает иерархию до корня указанного объекта.


		 ![](../../../Sub_Image.gif)
		 [getRecentObjects](Metabase.getRecentObjects.htm)


		 Метод getRecentObjects
		 возвращает последние открытые объекты.


		 ![](../../../Sub_Image.gif)
		 [getSearch](Metabase.getSearch.htm)


		 Метод getSearch отправляет
		 запрос к серверу на поиск объекта.


		 ![](../../../Sub_Image.gif)
		 [getSessionCookie](Metabase.getSessionCookie.htm)


		 Метод getSessionCookie
		 возвращает идентификационный номер cookie.


		 ![](../../../Sub_Image.gif)
		 [getStatus](Metabase.getStatus.htm)


		 Метод getStatus
		 проверяет состояние сессии репозитория.


		 ![](../../../Sub_Image.gif)
		 [moveObject](Metabase.moveObject.htm)


		 Метод moveObject
		 используется для перемещения объекта.


		 ![](../../../Sub_Image.gif)
		 [open](Metabase.open.htm)


		 Метод open открывает
		 репозиторий.


		 ![](../../../Sub_Image.gif)
		 [refresh](Metabase.refresh.htm)


		 Метод refresh обновляет
		 соединение с репозиторием.


		 ![](../../../Sub_Image.gif)
		 [saveObject](Metabase.saveObject.htm)


		 Метод saveObject
		 используется для сохранения открытого объекта.


		 ![](../../../Sub_Image.gif)
		 [saveObjectAs](Metabase.saveObjectAs.htm)


		 Метод saveObjectAs
		 используется для сохранения объекта в новый объект.


		 ![](../../../Sub_Image.gif)
		 [sharePointShare](Metabase.sharePointShare.htm)


		 Метод sharePointShare
		 используется для публикации объекта в SharePoint.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Closed](Metabase.Closed.htm)
		 Событие Closed наступает
		 при закрытии соединения с репозиторием.


		 ![](../../../Event_Image.gif)
		 [Opened](Metabase.Opened.htm)
		 Событие Opened наступает
		 при открытии репозитория.


		 ![](../../../Event_Image.gif)
		 [Refreshed](Metabase.Refreshed.htm)
		 Событие Refreshed наступает
		 при обновлении соединения с репозиторием.


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


[PP.Mb](../../PP.Mb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
