# IMsAttributesFormulasList.Remove

IMsAttributesFormulasList.Remove
-


# IMsAttributesFormulasList.Remove


## Синтаксис


		Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс удаляемого метода
 расчёта.


## Описание


Метод Remove удаляет метод расчёта
 из коллекции по его индексу.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IMsAttributesFormulasList.Count](IMsAttributesFormulasList.Count.htm).
 Индекс первого элемента в коллекции - «0», последнего - «[IMsAttributesFormulasList.Count](IMsAttributesFormulasList.Count.htm)
 - 1». Нумерация индексов - сквозная.


При успешном удалении метод возвращает значение True,
 а значение свойства [IMsAttributesFormulasList.Count](IMsAttributesFormulasList.Count.htm)
 уменьшается на единицу; в противном случае - False.


## Пример


Использование метода приведено в примере для [IMsAttributesFormulasList.FindByAttributeId](IMsAttributesFormulasList.FindByAttributeId.htm).


См. также:


[IMsAttributesFormulasList](IMsAttributesFormulasList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
