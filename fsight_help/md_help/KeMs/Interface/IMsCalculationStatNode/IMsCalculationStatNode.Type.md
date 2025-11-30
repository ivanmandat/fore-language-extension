# IMsCalculationStatNode.Type

IMsCalculationStatNode.Type
-


# IMsCalculationStatNode.Type


## Синтаксис


Type: [MsCalculationStatType](../../Enums/MsCalculationStatType.htm);


## Описание


Свойство Type возвращает тип
 статистики расчета.


## Комментарии


Статистики расчета могут быть контрольные и информационные. Для сравнения
 статистик расчета используются только контрольные статистики, которые
 включают в себя статистические данные, многомерный цикл, многомерный итератор
 и другие. Информационные статистики включают в себя время расчета и не
 сравниваются с другими статистиками.


Для сравнения контрольных статистик расчета используйте метод [IMsCalculationStats.Compare](../IMsCalculationStats/IMsCalculationStats.Compare.htm).


## Пример


Использование свойства приведено в примере для [IMsCalculationStats.Root](../IMsCalculationStats/IMsCalculationStats.Root.htm).


См. также:


[IMsCalculationStatNode](IMsCalculationStatNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
