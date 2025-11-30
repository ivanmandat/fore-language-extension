# IDefTableArea.UpdateAfterSave

IDefTableArea.UpdateAfterSave
-


# IDefTableArea.UpdateAfterSave


## Синтаксис


UpdateAfterSave: Boolean;


## Описание


Свойство UpdateAfterSave определяет,
 будет ли обновлена табличная область после сохранения данных алгоритмом
 расчёта.


## Комментарии


Свойство актуально, если для табличной области добавлены алгоритмы расчёта,
 применяемые при [сохранении
 данных](../IDefCalculationAlgorithm/IDefCalculationAlgorithm.Type.htm).


Если свойству UpdateAfterSave
 установлено значение True, то
 после выполнения алгоритма расчёта будет обновлена табличная область.
 При значении False обновление
 табличной области не производится.


## Пример


Пример использования приведён в описании метода [IDefCalculationAlgorithmsCollection.Add](../IDefCalculationAlgorithmsCollection/IDefCalculationAlgorithmsCollection.Add.htm).


См. также:


[IDefTableArea](IDefTableArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
