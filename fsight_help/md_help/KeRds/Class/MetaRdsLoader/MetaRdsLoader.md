# MetaRdsLoader

MetaRdsLoader
-


# MetaRdsLoader


Сборка: Rds;


## Описание


Класс MetaRdsLoader реализует
 объект используемый для автоматического создания справочников НСИ и загрузки
 в них данных.


## Свойства объекта класса, унаследованные от [IMetaRdsLoader](../../Interface/IMetaRdsLoader/IMetaRdsLoader.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddCrossVersions](../../Interface/IMetaRdsLoader/IMetaRdsLoader.AddCrossVersions.htm)
		 Свойство AddCrossVersions
		 определяет признак добавления новых версий элемента, у которого
		 период действия пересекается с периодами других версий этого элемента.


		 ![](../../Property_Image.gif)
		 [Bindings](../../Interface/IMetaRdsLoader/IMetaRdsLoader.Bindings.htm)
		 Свойство Bindings возвращает
		 коллекцию привязок атрибутов справочника к полям источника данных.


		 ![](../../Property_Image.gif)
		 [Database](../../Interface/IMetaRdsLoader/IMetaRdsLoader.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой будет храниться таблица справочника.


		 ![](../../Property_Image.gif)
		 [Dictionary](../../Interface/IMetaRdsLoader/IMetaRdsLoader.Dictionary.htm)
		 Свойство Dictionary
		 определяет справочник НСИ, в который необходимо загрузить данные.


		 ![](../../Property_Image.gif)
		 [Source](../../Interface/IMetaRdsLoader/IMetaRdsLoader.Source.htm)
		 Свойство Source определяет
		 источник данных для справочника НСИ.


		 ![](../../Property_Image.gif)
		 [SqlSource](../../Interface/IMetaRdsLoader/IMetaRdsLoader.SqlSource.htm)
		 Свойство SqlSource
		 определяет SQL-запрос, в результате выполнения которого будет
		 сформирован источник данных для справочника НСИ.


		 ![](../../Property_Image.gif)
		 [TableSource](../../Interface/IMetaRdsLoader/IMetaRdsLoader.TableSource.htm)
		 Свойство TableSource
		 определяет таблицу репозитория, которая будет являться источником
		 данных для справочника НСИ.


## Методы объекта класса, унаследованные от [IMetaRdsLoader](../../Interface/IMetaRdsLoader/IMetaRdsLoader.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateObject](../../Interface/IMetaRdsLoader/IMetaRdsLoader.CreateObject.htm)
		 Метод CreateObject
		 создает новый справочник на основании указанной информации и [привязок
		 атрибутов](../../Interface/IMetaRdsLoader/IMetaRdsLoader.Bindings.htm).


		 ![](../../Sub_Image.gif)
		 [GenerateBindingsBySource](../../Interface/IMetaRdsLoader/IMetaRdsLoader.GenerateBindingsBySource.htm)
		 Метод GenerateBindingsBySource
		 генерирует привязки параметры привязки атрибутов справочника на
		 основании структуры источника.


		 ![](../../Sub_Image.gif)
		 [Load](../../Interface/IMetaRdsLoader/IMetaRdsLoader.Load.htm)
		 Метод Load загружает
		 данные из источника в справочник НСИ.


См. также:


[Классы
 сборки Rds](../KeRds_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
