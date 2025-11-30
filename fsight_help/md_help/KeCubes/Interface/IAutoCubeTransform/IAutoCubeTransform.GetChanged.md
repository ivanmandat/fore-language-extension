# IAutoCubeTransform.GetChanged

IAutoCubeTransform.GetChanged
-


# IAutoCubeTransform.GetChanged


## Синтаксис


GetChanged(Var OnlyPositions: Boolean): Boolean;


## Параметры


OnlyPositions. Параметр
 определяет, изменены ли позиции измерений автоматического куба.


## Описание


Метод GetChanged возвращает
 признак наличия изменений в позициях измерений автоматического куба.


## Комментарии


Метод вернёт значение True,
 если измерения автоматического куба [перемещались](../IAutoCubeDimensions/IAutoCubeDimensions.Move.htm)
 и False, если изменений в позициях
 измерений нет.


Примечание.
 Позиция календарного измерения в списке не влияет на общую структуру.
 При перемещении календарного измерения - метод вернёт значение False.


## Пример


Использование свойства приведено в примере для [IAutoCube.Transform](../IAutoCube/IAutoCube.Transform.htm).


См. также:


[IAutoCubeTransform](IAutoCubeTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
