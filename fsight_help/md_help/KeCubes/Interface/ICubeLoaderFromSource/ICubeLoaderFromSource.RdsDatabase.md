# ICubeLoaderFromSource.RdsDatabase

ICubeLoaderFromSource.RdsDatabase
-


# ICubeLoaderFromSource.RdsDatabase


## Синтаксис


RdsDatabase: [IRdsDatabaseInstance](kerds.chm::/interface/irdsdatabaseinstance/irdsdatabaseinstance.htm);


## Описание


Свойство RdsDatabase определяет репозиторий НСИ, в котором будут создаваться справочники, соответствующие измерениям куба.


## Комментарии


Если при настройке загрузчика данных в куб в коллекции [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm) были созданы привязки не соответствующие измерениям куба или существующим справочникам репозитория, то при загрузке данных для измерений будут созданы соответствующие табличные справочники НСИ. Если задать свойство RdsDatabase, то справочники будут созданы в указанном репозитории НСИ, иначе справочники будут сохранены в той же папке, в которой будет сохранен создаваемый стандартный куб.


## Пример


Пример использования приведен в описании метода [Load](ICubeLoaderFromSource.Load.htm).


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
