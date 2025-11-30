# IPivotEvaluatorDynamicsHeader.Slot

IPivotEvaluatorDynamicsHeader.Slot
-


# IPivotEvaluatorDynamicsHeader.Slot


## Синтаксис


Slot: Integer;


## Описание


Свойство Slot определяет измерение,
 по которому проводится построение динамики показателей.


## Комментарии


В текущей реализации по умолчанию свойству установлено значение "-1",
 при этом расчет динамики показателей не производится. При любом значении
 отличном от «-1» будет производиться расчет выбранных видов динамики ([Абсолютный прирост](IPivotEvaluatorDynamicsHeader.AbsGrowth.htm),
 [темп роста](IPivotEvaluatorDynamicsHeader.GrowthRate.htm)
 или [темп прироста](IPivotEvaluatorDynamicsHeader.IncreaseRate.htm))
 по выбранному элементу таблицы на всех уровнях измерений.


## Пример


Пример использования приведен в описании свойств [IPivotEvaluatorDynamicsHeader.AbsGrowth](IPivotEvaluatorDynamicsHeader.AbsGrowth.htm),
 [IPivotEvaluatorDynamicsHeader.GrowthRate](IPivotEvaluatorDynamicsHeader.GrowthRate.htm),
 [IPivotEvaluatorDynamicsHeader.IncreaseRate](IPivotEvaluatorDynamicsHeader.IncreaseRate.htm).


См. также:


[IPivotEvaluatorDynamicsHeader](IPivotEvaluatorDynamicsHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
