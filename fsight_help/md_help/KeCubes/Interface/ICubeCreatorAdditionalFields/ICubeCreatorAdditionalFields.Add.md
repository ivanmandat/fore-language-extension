# ICubeCreatorAdditionalFields.Add

ICubeCreatorAdditionalFields.Add
-


# ICubeCreatorAdditionalFields.Add


## Синтаксис


Add(Name: String; DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm)):
 [ICubeCreatorAdditionalField](../ICubeCreatorAdditionalField/ICubeCreatorAdditionalField.htm);


## Параметры


Name. Наименование создаваемого
 поля.


DataType. Тип данных поля.


## Описание


Метод Add добавляет поле в коллекцию.


## Комментарии


При [создании](../ICubeCreator/ICubeCreator.CreateCube.htm)
 куба поля, добавленные в коллекцию, будут созданы в результирующей таблице
 куба, но к ним не будут настроены привязки в структуре куба. Также по
 добавленным полям будут загружены данные.


## Пример


Пример использования приведен в описании свойства [ICubeCreator.AdditionalFields](../ICubeCreator/ICubeCreator.AdditionalFields.htm).


См. также:


[ICubeCreatorAdditionalFields](ICubeCreatorAdditionalFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
