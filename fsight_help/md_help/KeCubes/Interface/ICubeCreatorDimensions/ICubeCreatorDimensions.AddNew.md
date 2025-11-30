# ICubeCreatorDimensions.AddNew

ICubeCreatorDimensions.AddNew
-


# ICubeCreatorDimensions.AddNew


## Синтаксис


AddNew(Name: String): [ICubeCreatorDimension](../ICubeCreatorDimension/ICubeCreatorDimension.htm);


## Параметры


Name. Наименование измерения куба.


## Описание


Метод AddNew создает новое измерение в коллекции.


## Комментарии


При создании куба для данного измерения будет создан отдельный справочник НСИ. Если в параметрах создателя куба указано свойство [ICubeCreator.RdsDatabase](../ICubeCreator/ICubeCreator.RdsDatabase.htm), то справочник будет создан в нем, иначе справочник будет сохранен в той папке, в которой будет сохранен куб.


## Пример


Пример использования приведен в описании метода [ICubeCreator.CreateCube](../ICubeCreator/ICubeCreator.CreateCube.htm).


См. также:


[ICubeCreatorDimensions](ICubeCreatorDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
