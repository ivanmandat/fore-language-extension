# IRdsDictionaryFilterConditions.Remove

IRdsDictionaryFilterConditions.Remove
-


# IRdsDictionaryFilterConditions.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс фильтра.


## Описание


Метод Remove удаляет фильтр
 из коллекции по его индексу.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm).
 Индекс первого фильтра в коллекции - «0», последнего- «[IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm)
 - 1». Нумерация индексов - сплошная.


Remove возвращает результат
 удаления. Допустимые значения:


	- True. Удаление прошло
	 успешно, значение [IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm)
	 уменьшено на единицу;


	- False. Удаления фильтра
	 не произошло.


## Пример


Использование метода приведено в примере для [IRdsDictionaryFilterConditions.LoadFrom](IRdsDictionaryFilterConditions.LoadFrom.htm).


См. также:


[IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
