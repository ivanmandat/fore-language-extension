# RdsMoveType

RdsMoveType
-


# RdsMoveType


## Описание


Перечисление RdsMoveType содержит
 позиции, в которые перемещается элемент справочника НСИ.


Используется следующими свойствами и методами:


	- [IRdsDictionaryElement.MoveElement](../Interface/IRdsDictionaryElement/IRdsDictionaryElement.MoveElement.htm);


	- [IRdsDictionaryElement.MoveTo](../Interface/IRdsDictionaryElement/IRdsDictionaryElement.MoveTo.htm);


	- [IRdsDictionaryElements.MoveTo](../Interface/IRdsDictionaryElements/IRdsDictionaryElements.MoveTo.htm);


	- [IRdsElementsSorter.Move](../Interface/IRdsElementsSorter/IRdsElementsSorter.Move.htm);


	- [IRdsElementsSorter.MoveElement](../Interface/IRdsElementsSorter/IRdsElementsSorter.MoveElement.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Before. До указанного
		 элемента.


		 1
		 After. После указанного
		 элемента.


		 2
		 FirstChild. Перемещение
		 в позицию первого дочернего элемента.


		 3
		 LastChild. Перемещение
		 в позицию последнего дочернего элемента.


## Комментарии


Все значения перечисления RdsMoveType
 могут быть использованы для перемещения элементов справочника между различными
 уровнями иерархии.


Использование значений FirstChild
 и LastChild позволяют создавать
 иерархию справочника.


См. также:


[Перечисления сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
