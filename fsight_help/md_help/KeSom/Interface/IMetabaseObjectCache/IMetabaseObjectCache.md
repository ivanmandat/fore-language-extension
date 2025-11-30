# IMetabaseObjectCache

IMetabaseObjectCache
-


# IMetabaseObjectCache


## Описание


Интерфейс IMetabaseObjectCache
 содержит свойства и методы для работы с кешем объекта репозитория.


## Комментарии


Кеш объекта содержит экземпляры объекта, открытого с определенными значениями
 параметров. Если объект не имеет параметров, то в кеше может храниться
 только одна версия объекта.


В текущей версии кеширование экземпляров объектов реализовано для следующих
 объектов:


	- Регламентные отчёты.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMetabaseObjectCache.Count.htm)
		 Свойство Count возвращает
		 количество элементов, имеющихся в кеше объекта.


		 ![](../../Property_Image.gif)
		 [Item](IMetabaseObjectCache.Item.htm)
		 Свойство Item возвращает
		 параметры элемента кеша объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Flush](IMetabaseObjectCache.Flush.htm)
		 Метод Flush осуществляет
		 очистку кеша объекта.


		 ![](../../Sub_Image.gif)
		 [Open](IMetabaseObjectCache.Open.htm)
		 Метод Open осуществляет
		 открытие экземпляра объекта из кеша.


		 ![](../../Sub_Image.gif)
		 [Put](IMetabaseObjectCache.Put.htm)
		 Метод Put создает новую
		 запись в кеше и помещает туда указанный экземпляр объекта.


		 ![](../../Sub_Image.gif)
		 [Refresh](IMetabaseObjectCache.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление списка записей в кеше объекта.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
