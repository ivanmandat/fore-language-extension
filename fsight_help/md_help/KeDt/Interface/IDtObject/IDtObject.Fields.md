# IDtObject.Fields

IDtObject.Fields
-


# IDtObject.Fields


## Синтаксис


Fields: [IDtFieldDefinitions](../IDtFieldDefinitions/IDtFieldDefinitions.htm);


## Описание


Свойство Fields возвращает описание
 полей источника/приёмника данных.


## Комментарии


Если предполагается изменение состава коллекции, например, при настройке
 списка полей приёмника или при добавлении вычисляемых полей, то все изменения
 должны производиться до того, как будет вызван метод [IDtObject.Open](IDtObject.Open.htm).
 Изменения, внесённые в коллекцию после открытия источника/приёмника, не
 будут учтены.


## Пример


Использование свойства приведено в примере для [IDtObject.FieldsFromFile](IDtObject.FieldsFromFile.htm).


См. также:


[IDtObject](IDtObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
