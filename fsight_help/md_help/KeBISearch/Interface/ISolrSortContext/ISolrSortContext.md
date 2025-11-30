# ISolrSortContext

ISolrSortContext
-


# ISolrSortContext


Сборка: BISearch;


## Описание


Интерфейс ISolrSortContext содержит
 свойства и методы коллекции, содержащей параметры сортировки результатов
 поиска.


## Иерархия наследования


ISolrSortContext


## Комментарии


Параметры сортировки возвращает свойство [ISolrSearchContext.SortContext](../ISolrSearchContext/ISolrSearchContext.SortContext.htm).
 Результаты поиска будут сортироваться в том порядке, в каком поля добавлены
 в коллекцию: сначала по первому полю, затем по второму и так далее.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ISolrSortContext.Count.htm)
		 Свойство Count возвращает
		 количество параметров сортировки в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](ISolrSortContext.Item.htm)
		 Свойство Item возвращает
		 указанные параметры сортировки.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddField](ISolrSortContext.AddField.htm)


		 ![](../../Sub_Image.gif)
		 [Clear](ISolrSortContext.Clear.htm)
		 Метод Clear удаляет
		 все параметры сортировки.


		 ![](../../Sub_Image.gif)
		 [FindBySolrField](ISolrSortContext.FindBySolrField.htm)
		 Метод FindBySolrField
		 осуществляет поиск параметров сортировки по указанному полю.


		 ![](../../Sub_Image.gif)
		 [RemoveBySolrField](ISolrSortContext.RemoveBySolrField.htm)
		 Метод RemoveBySolrField
		 удаляет параметры сортировки по указанному полю и возвращает признак
		 удачного удаления.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
