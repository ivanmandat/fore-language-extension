# IMsTransformObjectList.Remove

IMsTransformObjectList.Remove
-


# IMsTransformObjectList.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс объекта в коллекции.


## Описание


Метод Remove
 осуществляет удаление объекта из коллекции по его индексу.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения свойства [IMsTransformObjectList.Count](IMsTransformObjectList.Count.htm).
 Индекс первого объекта в коллекции - «0», последнего - «[IMsTransformObjectList.Count](IMsTransformObjectList.Count.htm)
 - 1». Нумерация индексов - сквозная.


Если удаление объекта прошло успешно, то метод возвращает значение True, значение свойства [IMsTransformObjectList.Count](IMsTransformObjectList.Count.htm)
 уменьшается на единицу; в обратном случае - False.


См. также:


[IMsTransformObjectList](IMsTransformObjectList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
