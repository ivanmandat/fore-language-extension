# DimensionFilter

DimensionFilter
-


# DimensionFilter


Пространство имен: PP.Mb;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[ElsFilter](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.htm)


DimensionFilter


## Описание


Класс DimensionFilter реализует
 фильтр элементов измерения.


## Синтаксис


PP.initClass(PP.Mb.DimensionFilter, PP.Mb.[ElsFilter](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.htm),
 "PP.Mb.DimensionFilter");


## Конструктор


		  Имя
		 Краткое описание


		 ![](../../../sub_image.gif)
		 DimensionFilter
		 Конструктор DimensionFilter
		 создает экземпляр класса DimensionFilter.


## Свойства


		  Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [OnlySelected](DimensionFilter.OnlySelected.htm)
		 Свойство OnlySelected
		 определяет фильтрацию только отмеченных элементов измерения.


		 ![](../../../Property_Image.gif)
		 [OnlyWithData](DimensionFilter.OnlyWithData.htm)
		 Свойство OnlyWithData
		 определяет фильтрацию только элементов измерения содержащих данные.


		 ![](../../../Property_Image.gif)
		 [OrderBy](DimensionFilter.OrderBy.htm)
		 Свойство OrderBy определяет
		 настройки сортировки элементов измерения.


## Методы


		  Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getOrderByJSON](DimensionFilter.getOrderByJSON.htm)
		 Метод getOrderByJSON
		 возвращает настройки сортировки элементов измерения в формате
		 JSON.


## Свойства, унаследованные от класса [ElsFilter](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [IncludeParents](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.IncludeParents.htm)
		 Свойство IncludeParents
		 определяет включение родительских элементов в результат фильтрации.


		 ![](../../../Property_Image.gif)
		 [IncludeParentsWithSiblings](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.IncludeParentsWithSiblings.htm)
		 Свойство IncludeParentsWithSiblings
		 определяет включение родительских элементов и соседних элементов
		 в результат фильтрации.


		 ![](../../../Property_Image.gif)
		 [MbJSONDelegate](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.MbJSONDelegate.htm)
		 Свойство MbJSONDelegate
		 определяет обработчик генерации JSON'а методом ElsFilter.getFilterJSON.


		 ![](../../../Property_Image.gif)
		 [TextAttributes](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.TextAttributes.htm)
		 Свойство TextAttributes
		 определяет массив идентификаторов атрибутов, по которым производится
		 фильтрация.


		 ![](../../../Property_Image.gif)
		 [TextCaseSensitive](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.TextCaseSensitive.htm)
		 Свойство TextCaseSensitive
		 определяет, учитывать ли регистр при фильтрации по атрибутам.


		 ![](../../../Property_Image.gif)
		 [TextValue](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.TextValue.htm)
		 Свойство TextValue
		 определяет строку поиска при фильтрации по атрибутам.


		 ![](../../../Property_Image.gif)
		 [TextWholeWordsOnly](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.TextWholeWordsOnly.htm)
		 Свойство TextWholeWordsOnly
		 определяет поиск только по целым словам при фильтрации элементов.


## Методы, унаследованные от класса [ElsFilter](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getFilterJSON](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.getFilterJSON.htm)
		 Метод getFilterJSON
		 возвращает настройки фильтрации в формате tns_PP7_SOM:ElsFilter.


		 ![](../../../sub_image.gif)
		 [getHash](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.getHash.htm)
		 Метод getHash возвращает
		 хеш-строку с параметрами фильтрации.


		 ![](../../../sub_image.gif)
		 [IsCustomHash](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.IsCustomHash.htm)
		 Метод isCustomHash
		 определяет, был ли хеш установлен пользователем.


		 ![](../../../sub_image.gif)
		 [setCustomHash](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.setCustomHash.htm)
		 Метод setCustomHash
		 устанавливает хеш-строку фильтра.


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


[PP.Mb](dhtmlMetabase.chm::/Classes/PP.Mb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
