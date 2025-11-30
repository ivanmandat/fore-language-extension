# ISolrFieldValues

ISolrFieldValues
-


# ISolrFieldValues


Сборка: BISearch;


## Описание


Интерфейс ISolrFieldValues содержит
 свойства и методы для работы с коллекцией значений пользовательских полей.


## Иерархия наследования


ISolrFieldValues


## Комментарии


Коллекция значений пользовательских полей используется в методе [ISolrImportCustomValues.FillValues](../ISolrImportCustomValues/ISolrImportCustomValues.FillValues.htm).
 Список полей соответствует тому списку пользовательских
 полей, который был сформирован при выполнении метода [ISolrSearchEngineSchema.FillSchemaOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.FillSchemaOptions.htm)
 или методов интерфейса [ISolrFields](../ISolrFields/ISolrFields.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ISolrFieldValues.Count.htm)
		 Свойство Count возвращает
		 количество пользовательских полей в коллекции, для которых можно
		 задать значение.


		 ![](../../Property_Image.gif)
		 [Item](ISolrFieldValues.Item.htm)
		 Свойство Item возвращает
		 указанный элемент, используемый для задания значения поля.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindByField](ISolrFieldValues.FindByField.htm)
		 Метод FindByField осуществляет
		 поиск по полю экземпляра Solr.


		 ![](../../Sub_Image.gif)
		 [FindById](ISolrFieldValues.FindById.htm)
		 Метод FindById осуществляет
		 поиск по идентификатору поля.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm) | [Системные и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
