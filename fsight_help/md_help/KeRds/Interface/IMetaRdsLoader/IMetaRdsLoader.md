# IMetaRdsLoader

IMetaRdsLoader
-


# IMetaRdsLoader


Сборка: Rds;


## Описание


Интерфейс IMetaRdsLoader содержит
 свойства и методы объекта, используемого для автоматического создания
 справочников НСИ и загрузки в них данных.


## Иерархия наследования


IMetaRdsLoader


## Комментарии


Для работы объекта необходимо в одном из следующих свойств указать источник
 данных: [Source](IMetaRdsLoader.Source.htm), [SqlSource](IMetaRdsLoader.SqlSource.htm)
 или [TableSource](IMetaRdsLoader.TableSource.htm). В зависимости
 от выполняемых действий доступны следующие этапы работы:


	- для обновления данных существующего справочника НСИ:


		- В свойстве [Dictionary](IMetaRdsLoader.Dictionary.htm)
		 необходимо указать справочник НСИ.


		- В свойстве [Bindings](IMetaRdsLoader.Bindings.htm)
		 сформировать привязки атрибутов справочника к полям источника
		 данных.


		- Вызвать метод [Load](IMetaRdsLoader.Load.htm)
		 для загрузки данных.


	- для создания нового справочника НСИ и загрузки в него данных:


		- В свойстве [Bindings](IMetaRdsLoader.Bindings.htm)
		 сформировать привязки атрибутов справочника к полям источника
		 данных. В параметрах привязок атрибуты могут быть не указаны,
		 они будут созданы в дальнейшем; В зависимости от используемого
		 источника данных привязки могут быть сформированы методом [GenerateBindingsBySource](IMetaRdsLoader.GenerateBindingsBySource.htm).


		- Сформировать информацию о создаваемом справочнике, в информации
		 указать родительский объект. Если справочник создается не в репозитории
		 НСИ, то также необходимо задать свойство [Database](IMetaRdsLoader.Database.htm).


		- Вызвать метод [CreateObject](IMetaRdsLoader.CreateObject.htm)
		 передав в качестве его параметра сформированную информацию о создаваемом
		 справочнике.


		- Сохранить справочник, который вернёт метод [CreateObject](IMetaRdsLoader.CreateObject.htm).


		- Вызвать метод [Load](IMetaRdsLoader.Load.htm)
		 для загрузки данных.


Примечание.
 Автоматическое создание и обновление справочников НСИ доступно для репозиториев,
 созданных на базе СУБД Oracle 9.x и выше, Microsoft SQL Server 2012 и
 выше.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddCrossVersions](IMetaRdsLoader.AddCrossVersions.htm)
		 Свойство AddCrossVersions
		 определяет признак добавления новых версий элемента, у которого
		 период действия пересекается с периодами других версий этого элемента.


		 ![](../../Property_Image.gif)
		 [Bindings](IMetaRdsLoader.Bindings.htm)
		 Свойство Bindings возвращает
		 коллекцию привязок атрибутов справочника к полям источника данных.


		 ![](../../Property_Image.gif)
		 [Database](IMetaRdsLoader.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой будет храниться таблица справочника.


		 ![](../../Property_Image.gif)
		 [Dictionary](IMetaRdsLoader.Dictionary.htm)
		 Свойство Dictionary
		 определяет справочник НСИ, в который необходимо загрузить данные.


		 ![](../../Property_Image.gif)
		 [Source](IMetaRdsLoader.Source.htm)
		 Свойство Source определяет
		 источник данных для справочника НСИ.


		 ![](../../Property_Image.gif)
		 [SqlSource](IMetaRdsLoader.SqlSource.htm)
		 Свойство SqlSource
		 определяет SQL-запрос, в результате выполнения которого будет
		 сформирован источник данных для справочника НСИ.


		 ![](../../Property_Image.gif)
		 [TableSource](IMetaRdsLoader.TableSource.htm)
		 Свойство TableSource
		 определяет таблицу репозитория, которая будет являться источником
		 данных для справочника НСИ.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateObject](IMetaRdsLoader.CreateObject.htm)
		 Метод CreateObject
		 создает новый справочник на основании указанной информации и [привязок
		 атрибутов](IMetaRdsLoader.Bindings.htm).


		 ![](../../Sub_Image.gif)
		 [GenerateBindingsBySource](IMetaRdsLoader.GenerateBindingsBySource.htm)
		 Метод GenerateBindingsBySource
		 генерирует привязки параметры привязки атрибутов справочника на
		 основании структуры источника.


		 ![](../../Sub_Image.gif)
		 [Load](IMetaRdsLoader.Load.htm)
		 Метод Load загружает
		 данные из источника в справочник НСИ.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
