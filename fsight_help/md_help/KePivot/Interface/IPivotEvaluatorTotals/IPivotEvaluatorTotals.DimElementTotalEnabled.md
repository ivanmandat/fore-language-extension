# IPivotEvaluatorTotals.DimElementTotalEnabled

IPivotEvaluatorTotals.DimElementTotalEnabled
-


# IPivotEvaluatorTotals.DimElementTotalEnabled


## Синтаксис


DimElementTotalEnabled(DimKey: Integer; Element:
 Integer): Boolean;


## Параметры


DimKey. Ключ измерения, для
 элемента которого настраивается расчёт собственного итога.


Element. Индекс элемента измерения.


## Описание


Свойство DimElementTotalEnabled
 определяет, будет ли для указанного элемента измерения рассчитываться
 собственный вид итогов.


## Комментарии


Если свойству установить значение True,
 то для элемента с индексом Element
 будет рассчитываться собственный итог. Вид итога задаётся в свойстве [DimElementTotalType](IPivotEvaluatorTotals.DimElementTotalType.htm).


Для сброса расчёта собственного итога используйте метод [RemoveDimElementTotal](IPivotEvaluatorTotals.RemoveDimElementTotal.htm).


## Пример


Использование свойства приведено в примере для [IPivotEvaluatorTotals.DimElementTotalType](IPivotEvaluatorTotals.DimElementTotalType.htm).


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
