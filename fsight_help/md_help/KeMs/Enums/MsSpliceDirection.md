# MsSpliceDirection

MsSpliceDirection
-


# MsSpliceDirection


## Описание


Перечисление MsSpliceDirection одержит направления совмещения рядов.


Используется следующими свойствами и методами:


-
[IModelling.Splice](../Interface/IModelling/IModelling.Splice.htm);


-
[IModelling.SpliceP](../Interface/IModelling/IModelling.SpliceP.htm);


-
[IMsSpliceTransform.SpliceDirection](../Interface/IMsSpliceTransform/IMsSpliceTransform.SpliceDirection.htm).


Пусть есть ряд Y=[Yt1,Yt2,Yt3,Yt4,Yt5] и ряд X=[Xt2,Xt3,Xt4]. После их совмещения получаем ряд Z.


## Описание


 Значение
 Краткое описание


 0
 Both. В обе стороны. Прибавление идет с обеих сторон для ряда X. Результирующий ряд Z=[Yt1,Xt2,Xt3,Xt4,Yt5].


 1
 Backward. Назад. Прибавление идет в начале ряда X. Результирующий ряд Z=[Yt1,Xt2,Xt3,Xt4].


 2
 Forward. Вперед. Прибавление идет в конец ряда X. Результирующий ряд Z=[Xt2,Xt3,Xt4,Yt5].


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
