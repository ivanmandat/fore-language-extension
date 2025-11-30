# ISolrFieldValues.FindById

ISolrFieldValues.FindById
-


# ISolrFieldValues.FindById


## Синтаксис


FindById(Id: String; Type: [SearchEngineTargetType](../../Enums/SearchEngineTargetType.htm)):
 [ISolrFieldValue](../ISolrFieldValue/ISolrFieldValue.htm);


## Параметры


Id. Идентификатор поля.


Type. Назначение поискового
 сервиса.


## Описание


Метод FindById осуществляет
 поиск по идентификатору поля.


## Комментарии


Идентификатор поля регистрозависимый. Метод возвращает элемент, используемый
 для задания значения поля, если поиск прошел удачно и Null,
 если указанное поле отсутствует в настройках экземпляра Solr.


## Пример


Пример работы с коллекцией ISolrFieldValues приведён в описании метода
 [ISolrImportCustomValues.FillValues](../ISolrImportCustomValues/ISolrImportCustomValues.FillValues.htm).


См. также:


[ISolrFieldValues](ISolrFieldValues.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
