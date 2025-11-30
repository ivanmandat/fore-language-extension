# ElsFilter

ElsFilter
-


# ElsFilter


Пространство имен: PP.Mb;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


ElsTree


## Описание


Класс ElsFilter реализует фильтр
 элементов измерения.


## Синтаксис


PP.initClass(PP.Mb.ElsFilter, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.Mb.ElsFilter");


## Свойства


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getFilterJSON](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.getFilterJSON.htm)
		 Метод getFilterJSON
		 возвращает настройки фильтрации в формате tns_PP7_SOM:ElsFilter.


		 ![](../../../Sub_Image.gif)
		 [getHash](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.getHash.htm)
		 Метод getHash возвращает
		 хеш-строку с параметрами фильтрации.


		 ![](../../../Sub_Image.gif)
		 [IsCustomHash](dhtmlMetabase.chm::/Classes/Metabase/ElsFilter/ElsFilter.IsCustomHash.htm)
		 Метод isCustomHash
		 определяет, был ли хеш установлен пользователем.


		 ![](../../../Sub_Image.gif)
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
