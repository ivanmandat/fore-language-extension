# IDtFieldDefinitions

IDtFieldDefinitions
-


# IDtFieldDefinitions


Сборка: Dt;


## Описание


Интерфейс IDtFieldDefinitions
 содержит свойства и методы для работы с коллекцией описаний полей источника/приёмника
 данных.


## Иерархия наследования


           IDtFieldDefinitions


## Комментарии


Коллекцию полей можно получить, используя свойство [IDtObject.Fields](../IDtObject/IDtObject.Fields.htm).


Если предполагается изменение состава коллекции, например, при настройке
 списка полей приёмника или при добавлении вычисляемых полей, то все изменения
 должны производиться до того, как будет вызван метод [IDtObject.Open](../IDtObject/IDtObject.Open.htm).
 Изменения, внесённые в коллекцию после открытия источника/приёмника, не
 будут учтены.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IDtFieldDefinitions.Count.htm)


		 Свойство Count возвращает
		 количество полей источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Item](IDtFieldDefinitions.Item.htm)


		 Свойство Item возвращает
		 описание поля.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IDtFieldDefinitions.Add.htm)


		 Метод Add добавляет
		 новое поле источника/приёмника данных и возвращает его описание.


		 ![](../../Sub_Image.gif)
		 [Clear](IDtFieldDefinitions.Clear.htm)


		 Метод Clear осуществляет
		 очистку списка полей источника/приёмника данных.


		 ![](../../Sub_Image.gif)
		 [Delete](IDtFieldDefinitions.Delete.htm)


		 Метод Delete осуществляет
		 удаление поля.


См. также:


[Интерфейсы сборки Dt](../KeDt_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
