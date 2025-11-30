# DataMapping.getDataSourceItem

DataMapping.getDataSourceItem
-


# DataMapping.getDataSourceItem


## Синтаксис


getDataSourceItem(id: String, includeFormat: Boolean);


## Параметры


id. Идентификатор ряда.


includeFormat. Признак включения в возвращаемое значение формата отображения числовых данных в визуализаторе.


## Описание


Метод getDataSourceItem возвращает данные из источника по идентификатору ряда.


## Комментарии


Если параметр includeFormat указан и равен значению true, то метод возвращает JSON-объект со следующими свойствами: value - искомое значение, defaultFormat - формат отображения числовых данных. Иначе (по умолчанию) возвращается значение типа Number.


## Пример


Пример использования приведён на странице описания метода [DataMapping.getData](DataMapping.getData.htm).


См. также:


[DataMapping](DataMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
