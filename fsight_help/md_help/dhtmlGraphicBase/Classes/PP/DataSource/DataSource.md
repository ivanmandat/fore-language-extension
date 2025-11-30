# DataSource

DataSource
-


# DataSource


Пространство имен: PP;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


DataSource


## Описание


Класс DataSource представляет
 собой базовый класс, предназначенный для работы с источником данных
 визуальных компонентов.


## Синтаксис


PP.initClass(PP.DataSource, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.DataSource");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataSource/Constructor_DataSource.htm)
		 Конструктор DataSource
		 создает экземпляр класса DataSource.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AttributeName](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.AttributeName.htm)
		 Свойство AttributeName
		 устанавливает и возвращает имя атрибута по идентификатору.


		 ![](../../../Property_Image.gif)
		 [AttributesNames](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.AttributesNames.htm)
		 Свойство AttributesNames
		 устанавливает объект, содержащий имена атрибутов источника данных.


		 ![](../../../Property_Image.gif)
		 [Data](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.Data.htm)
		 Свойство Data устанавливает
		 и возвращает данные для выбранного элемента указанного ряда.


		 ![](../../../Property_Image.gif)
		 [ItemName](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.ItemName.htm)
		 Свойство ItemName устанавливает
		 и возвращает наименование ряда по его идентификатору.


		 ![](../../../Property_Image.gif)
		 [ItemNames](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.ItemsNames.htm)
		 Свойство ItemNames
		 устанавливает объект, содержащий имена элементов ряда данных.


		 ![](../../../Property_Image.gif)
		 [Title](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.Title.htm)
		 Свойство Title устанавливает
		 заголовок для диаграммы/карты.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [add](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.add.htm)
		 Метод add добавляет
		 данные для указанного атрибута ряда.


		 ![](../../../sub_image.gif)
		 [clear](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.clear.htm)
		 Метод clear очищает
		 источник данных.


		 ![](../../../sub_image.gif)
		 [getAttributeData](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.getAttributeData.htm)
		 Метод getAttributeData
		 возвращает массив значений всех рядов по одному атрибуту.


		 ![](../../../sub_image.gif)
		 [getFirstNotNullData](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.getFirstNotNullData.htm)
		 Метод getFirstNotNullData
		 возвращает первое не равное нулю значение указанного атрибута.


		 ![](../../../sub_image.gif)
		 [getMaxIndexData](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.getMaxIndexData.htm)
		 Метод getMaxIndexData
		 возвращает максимальное количество элементов по всем атрибутам.


		 ![](../../../sub_image.gif)
		 [getSeries](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.getSeries.htm)
		 Метод getSeries возвращает
		 ряды данных.


		 ![](../../../sub_image.gif)
		 [getSeriesCount](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.getSeriesCount.htm)
		 Метод getSeriesCount
		 возвращает количество рядов в источнике данных.


		 ![](../../../sub_image.gif)
		 [getTimeAxis](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.getTimeAxis.htm)
		 Метод getTimeAxis возвращает
		 данные для указанного атрибута ряда.


		 ![](../../../sub_image.gif)
		 [hasItem](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.hasItem.htm)
		 Метод hasItem определяет,
		 загружены ли данные для ряда с указанным идентификатором.


		 ![](../../../sub_image.gif)
		 [isIndexLoaded](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.isIndexLoaded.htm)
		 Метод isIndexLoaded
		 определяет, загружены ли данные для элемента с указанным индексом.


		 ![](../../../sub_image.gif)
		 [loadData](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.loadData.htm)
		 Метод loadData осуществляет
		 дополнительную загрузку данных в источник.


		 ![](../../../sub_image.gif)
		 [remove](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.remove.htm)
		 Метод remove удаляет
		 данные для указанного атрибута ряда.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [DataChanged](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.DataChanged.htm)
		 Событие DataChanged
		 наступает при изменении данных в источнике.


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


См. также:


[PP](dhtmlCommon.chm::/Classes/PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
