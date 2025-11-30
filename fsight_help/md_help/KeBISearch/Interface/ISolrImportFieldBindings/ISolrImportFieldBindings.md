# ISolrImportFieldBindings

ISolrImportFieldBindings
-


# ISolrImportFieldBindings


Сборка: BISearch;


## Описание


Интерфейс ISolrImportFieldBindings
 содержит свойства и методы для работы с параметрами заполнения пользовательских
 полей.


## Иерархия наследования


ISolrImportFieldBindings


## Комментарии


При индексации заполнение пользовательских полей осуществляется путем
 их привязки к какому-либо элементу: атрибуту измерения источника данных,
 другому полю или к внешнему источнику. Получить параметры заполнения можно,
 используя свойство [ISolrSourceDataImportDestinationInfo.FieldBindings](../ISolrSourceDataImportDestinationInfo/ISolrSourceDataImportDestinationInfo.FieldBindings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ISolrImportFieldBindings.Count.htm)
		 Свойство Count возвращает
		 количество привязок, созданных для пользовательских полей.


		 ![](../../Property_Image.gif)
		 [Item](ISolrImportFieldBindings.Item.htm)
		 Свойство Item возвращает
		 параметры привязки пользовательского поля.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddBinding](ISolrImportFieldBindings.AddBinding.htm)
		 Метод AddBinding создает
		 привязку для автоматического заполнения значений пользовательского
		 поля.


		 ![](../../Sub_Image.gif)
		 [FindByField](ISolrImportFieldBindings.FindByField.htm)
		 Метод FindByField осуществляет
		 поиск параметров привязки по пользовательскому полю.


		 ![](../../Sub_Image.gif)
		 [FindByKey](ISolrImportFieldBindings.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск параметров привязки по ключу.


		 ![](../../Sub_Image.gif)
		 [Remove](ISolrImportFieldBindings.Remove.htm)
		 Метод Remove удаляет
		 параметры привязки по индексу и возвращает признак удачного удаления.


		 ![](../../Sub_Image.gif)
		 [RemoveByField](ISolrImportFieldBindings.RemoveByField.htm)
		 Метод RemoveByField
		 удаляет параметры привязки по полю и возвращает признак удачного
		 удаления.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](ISolrImportFieldBindings.RemoveByKey.htm)
		 Метод RemoveByKey удаляет
		 параметры привязки по ключу и возвращает признак удачного удаления.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm) | [ISolrSearchEngineSchema.Fields](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.Fields.htm)
 | [Системные
 и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
