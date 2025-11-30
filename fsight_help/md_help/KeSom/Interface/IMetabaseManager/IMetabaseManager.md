# IMetabaseManager

IMetabaseManager
-


# IMetabaseManager


Сборка: Metabase;


## Описание


Интерфейс IMetabaseManager предназначен
 для работы с менеджером репозиториев.


## Иерархия наследования


IMetabaseManager


## Комментарии


Менеджер репозиториев можно получить, используя свойство [IMetabaseManagerFactory.Active](../IMetabaseManagerFactory/IMetabaseManagerFactory.Active.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Classes](IMetabaseManager.Classes.htm)
		 Свойство Classes возвращает
		 коллекцию классов объектов, доступных в платформе.


		 ![](../../Property_Image.gif)
		 [Definitions](IMetabaseManager.Definitions.htm)
		 Свойство Definitions
		 возвращает коллекцию описаний репозиториев, зарегистрированных
		 в менеджере репозиториев.


		 ![](../../Property_Image.gif)
		 [Drivers](IMetabaseManager.Drivers.htm)
		 Свойство Drivers возвращает
		 коллекцию драйверов СУБД, поддерживаемых в платформе.


		 ![](../../Property_Image.gif)
		 [Packs](IMetabaseManager.Packs.htm)
		 Свойство Packs возвращает
		 все пакеты безопасности платформы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BuildMetadataCache](IMetabaseManager.BuildMetadataCache.htm)
		 Метод BuildMetadataCache
		 обновляет кеши метаданных всех репозиториев.


		 ![](../../Sub_Image.gif)
		 [BuildMetadataCacheForMb](IMetabaseManager.BuildMetadataCacheForMb.htm)
		 Метод BuildMetadataCacheForMb
		 обновляет кеш метаданных репозитория с указанным описанием.


		 ![](../../Sub_Image.gif)
		 [CleanMetadataCache](IMetabaseManager.CleanMetadataCache.htm)
		 Метод CleanMetadataCache
		 сбрасывает кеши метаданных всех репозиториев.


		 ![](../../Sub_Image.gif)
		 [CleanMetadataCacheForMb](IMetabaseManager.CleanMetadataCacheForMb.htm)
		 Метод CleanMetadataCacheForMb
		 сбрасывает кеш метаданных репозитория с указанным описанием.


		 ![](../../Sub_Image.gif)
		 [RevertToObject](IMetabaseManager.RevertToObject.htm)
		 Метод RevertToObject
		 осуществляет преобразование и возвращает параметры объекта, либо
		 экземпляр объекта.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
