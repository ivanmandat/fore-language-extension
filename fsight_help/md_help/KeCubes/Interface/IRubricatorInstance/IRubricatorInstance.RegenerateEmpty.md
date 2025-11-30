# IRubricatorInstance.RegenerateEmpty

IRubricatorInstance.RegenerateEmpty
-


# IRubricatorInstance.RegenerateEmpty


## Синтаксис


RegenerateEmpty(FactorKeys: Array);


## Параметры


FactorKeys. Массив ключей показателей.


## Описание


Метод RegenerateEmpty обновляет признак пустоты для указанных показателей.


## Комментарии


Метод актуален, если в базе присутствует признак пустоты показателей, т.е. [IRubricator.HasEmptyAttribute](../IRubricator/IRubricator.HasEmptyAttribute.htm) = True.


Если FactorKeys содержит пустой массив, то признак пустоты будет обновлен для всех показателей.


## Пример


Использование метода приведено в примере для [IRubricator.HasEmptyAttribute](../IRubricator/IRubricator.HasEmptyAttribute.htm).


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
