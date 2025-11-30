# IValidationCustomMappings

IValidationCustomMappings
-


# IValidationCustomMappings


Сборка: Ms;


## Описание


Интерфейс IValidationCustomMappings
 предназначен для работы с коллекцией сопоставлений источников данных,
 используемых в правиле валидации типа «Сравнение
 по выражению».


## Иерархия наследования


           IValidationCustomMappings


## Комментарии


Сопоставления источников данных используются, если выражение сравнения
 использует элементы из различных источников данных. В качестве источников
 могут выступать базы данных временных рядов и стандартные кубы, содержащие
 календарное измерение.


Для получения коллекции сопоставлений используйте свойство [IValidationCustom.Mappings](../IValidationCustom/IValidationCustom.Mappings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IValidationCustomMappings.Count.htm)
		 Свойство Count
		 возвращает количество сопоставлений в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IValidationCustomMappings.Item.htm)
		 Свойство Item
		 возвращает указанное сопоставление из коллекции.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddStub](IValidationCustomMappings.AddStub.htm)
		 Метод AddStub добавляет в
		 коллекцию сопоставление для указанного источника данных.


		 ![](../../Sub_Image.gif)
		 [Clear](IValidationCustomMappings.Clear.htm)
		 Метод Clear очищает
		 коллекцию сопоставлений.


		 ![](../../Sub_Image.gif)
		 [FillByAttributes](IValidationCustomMappings.FillByAttributes.htm)
		 Метод FillByAttributes
		 автоматически заполняет коллекцию соответствий.


		 ![](../../Sub_Image.gif)
		 [FindByExternalStubId](IValidationCustomMappings.FindByExternalStubId.htm)
		 Метод FindByExternalStubId
		 выполняет поиск сопоставления для внешнего источника данных с
		 указанным идентификатором.


		 ![](../../Sub_Image.gif)
		 [FindByExternalStubKey](IValidationCustomMappings.FindByExternalStubKey.htm)
		 Метод FindByExternalStubKey
		 выполняет поиск сопоставления для внешнего источника данных с
		 указанным ключом.


		 ![](../../Sub_Image.gif)
		 [FindById](IValidationCustomMappings.FindById.htm)
		 Метод FindById
		 выполняет поиск сопоставления для базы данных временных рядов
		 с указанным идентификатором.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IValidationCustomMappings.FindByKey.htm)
		 Метод FindByKey выполняет
		 поиск сопоставления для базы данных временных рядов с указанным
		 ключом.


		 ![](../../Sub_Image.gif)
		 [Remove](IValidationCustomMappings.Remove.htm)
		 Метод Remove
		 удаляет указанное сопоставление из коллекции.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
