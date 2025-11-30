# IValidationCrossDatabaseMappings

IValidationCrossDatabaseMappings
-


# IValidationCrossDatabaseMappings


Сборка: Ms;


## Описание


Интерфейс IValidationCrossDatabaseMappings
 предназначен для работы с коллекцией привязок измерений сравниваемых источников
 данных.


## Иерархия наследования


           IValidationCrossDatabaseMappings


## Комментарии


Привязка измерений сравниваемых источников данных используется в валидации
 «Сравнение с базой данных временных
 рядов». Коллекцию привязок валидации возвращает свойство [IValidationCrossDatabase.Mappings](../IValidationCrossDatabase/IValidationCrossDatabase.Mappings.htm).
 Для работы с элементом коллекции используйте интерфейс [IValidationCrossDatabaseMapping](../IValidationCrossDatabaseMapping/IValidationCrossDatabaseMapping.htm).


В качестве источников данных могут выступать базы данных временных рядов
 и стандартные кубы, имеющие календарное измерение.


По умолчанию связываются те измерения источников данных, которые имеют
 одинаковые идентификаторы. Если идентификатор измерения эталонного источника
 данных не найден в исходном источнике данных, то связь с ним не создается.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IValidationCrossDatabaseMappings.Count.htm)
		 Свойство Count возвращает
		 количество элементов в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IValidationCrossDatabaseMappings.Item.htm)
		 Свойство Item возвращает
		 элемент коллекции по его индексу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IValidationCrossDatabaseMappings.Add.htm)
		 Метод Add добавляет
		 элемент в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Clear](IValidationCrossDatabaseMappings.Clear.htm)
		 Метод Clear удаляет
		 все элементы из коллекции.


		 ![](../../Sub_Image.gif)
		 [FindByComparatorId](IValidationCrossDatabaseMappings.FindByComparatorId.htm)
		 Метод FindByComparatorId
		 выполняет поиск привязки по идентификатору измерения источника
		 данных, с которым выполняется сравнение.


		 ![](../../Sub_Image.gif)
		 [FindByComparatorKey](IValidationCrossDatabaseMappings.FindByComparatorKey.htm)
		 Метод FindByComparatorKey
		 выполняет поиск привязки по ключу измерения источника
		 данных, с которым выполняется сравнение.


		 ![](../../Sub_Image.gif)
		 [FindByTargetId](IValidationCrossDatabaseMappings.FindByTargetId.htm)
		 Метод FindByTargetId
		 выполняет поиск привязки по идентификатору измерения сравниваемого
		 источника данных.


		 ![](../../Sub_Image.gif)
		 [FindByTargetKey](IValidationCrossDatabaseMappings.FindByTargetKey.htm)
		 Метод FindByTargetKey
		 выполняет поиск привязки по ключу измерения сравниваемого
		 источника данных.


		 ![](../../Sub_Image.gif)
		 [Remove](IValidationCrossDatabaseMappings.Remove.htm)
		 Метод Remove выполняет
		 удаление элемента из коллекции по его индексу.


		 ![](../../Sub_Image.gif)
		 [SetDefault](IValidationCrossDatabaseMappings.SetDefault.htm)
		 Метод SetDefault
		 устанавливает привязки измерений по умолчанию.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
