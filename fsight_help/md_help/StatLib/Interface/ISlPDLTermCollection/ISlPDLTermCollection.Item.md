# ISlPDLTermCollection.Item

ISlPDLTermCollection.Item
-


# ISlPDLTermCollection.Item


## Синтаксис


Item(Index: Integer): [ISlPDLTerm](../ISlPDLTerm/ISlPDLTerm.htm);


## Параметры


Index. Индекс переменной в
 коллекции.


## Описание


Свойство Item возвращает переменную
 из коллекции по ее индексу.


## Комментарии


Item обеспечивает возможность
 доступа к определенной переменной из коллекции. Значение параметра Index должно быть неотрицательным
 числом, но меньше значения свойства [ISlPDLTermCollection.Count](ISlPDLTermCollection.Count.htm).
 Индекс первой переменной в коллекции - «0», последней - «[ISlPDLTermCollection.Count](ISlPDLTermCollection.Count.htm)
 - 1». Нумерация индексов - сквозная.


## Пример


Использование свойства приведено в примере для [ISmLinearRegress.PDLTermCollection](../ISmLinearRegress/ISmLinearRegress.PDLTermCollection.htm).


См. также:


[ISlPDLTermCollection](ISlPDLTermCollection.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
