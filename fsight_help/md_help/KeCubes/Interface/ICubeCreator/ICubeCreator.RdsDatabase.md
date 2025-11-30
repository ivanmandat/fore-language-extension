# ICubeCreator.RdsDatabase

ICubeCreator.RdsDatabase
-


# ICubeCreator.RdsDatabase


## Синтаксис


RdsDatabase: [IRdsDatabaseInstance](kerds.chm::/interface/irdsdatabaseinstance/irdsdatabaseinstance.htm);


## Описание


Свойство RdsDatabase определяет
 репозиторий НСИ, в котором будут создаваться справочники, соответствующие
 измерениям куба.


## Комментарии


Если при настройке создателя куба в коллекцию [Dimensions](ICubeCreator.Dimensions.htm)
 были добавлены новые измерения с помощью метода [AddNew](../ICubeCreatorDimensions/ICubeCreatorDimensions.AddNew.htm),
 то при создании куба в репозитории также будут созданы справочники НСИ,
 соответствующие данным измерениям. Если задать свойство RdsDatabase,
 то справочники будут созданы в указанном репозитории НСИ, иначе справочники
 будут сохранены в той же папке, в которой будет сохранен создаваемый стандартный
 куб.


## Пример


Пример использования приведен в описании метода [CreateCube](ICubeCreator.CreateCube.htm).


См. также:


[ICubeCreator](ICubeCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
