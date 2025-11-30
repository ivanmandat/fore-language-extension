# ISlPDLTermCollection.Remove

ISlPDLTermCollection.Remove
-


# ISlPDLTermCollection.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс переменной в
 коллекции.


## Описание


Метод Remove удаляет переменную
 из коллекции по ее индексу.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [ISlPDLTermCollection.Count](ISlPDLTermCollection.Count.htm).
 Индекс первой переменной в коллекции - «0», последней - «[ISlPDLTermCollection.Count](ISlPDLTermCollection.Count.htm)
 - 1». Нумерация индексов - сквозная.


Метод возвращает результат удаления. Допустимые значения:


	- True. Удаление переменной
	 прошло успешно, значение свойства [ISlPDLTermCollection.Count](ISlPDLTermCollection.Count.htm)
	 уменьшилось на единицу;


	- False. Удаление переменной
	 не произошло.


## Пример


Использование свойства приведено в примере для [ISmLinearRegress.PDLTermCollection](../ISmLinearRegress/ISmLinearRegress.PDLTermCollection.htm).


См. также:


[ISlPDLTermCollection](ISlPDLTermCollection.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
