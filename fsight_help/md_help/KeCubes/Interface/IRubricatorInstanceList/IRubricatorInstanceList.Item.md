# IRubricatorInstanceList.Item

IRubricatorInstanceList.Item
-


# IRubricatorInstanceList.Item


## Синтаксис


Item(Index: Integer): [IRubricatorInstance](../IRubricatorInstance/IRubricatorInstance.htm);


## Параметры


Index. Индекс базы данных временных рядов в коллекции.


## Описание


Свойство Item возвращает базу данных временных рядов из коллекции по его индексу.


## Комментарии


Данное свойство обеспечивает возможность доступа к определенной базы из коллекции. Значение параметра Index должно быть неотрицательным числом, но меньше значения свойства [IRubricatorInstanceList.Count](IRubricatorInstanceList.Count.htm). Индекс первой базы в коллекции - «0», последней - «[IRubricatorInstanceList.Count](IRubricatorInstanceList.Count.htm) - 1». Нумерация индексов - сквозная.


## Пример


Использование свойства приведено в примере для [IRubricatorInstanceList.Count](IRubricatorInstanceList.Count.htm).


См. также:


[IRubricatorInstanceList](IRubricatorInstanceList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
