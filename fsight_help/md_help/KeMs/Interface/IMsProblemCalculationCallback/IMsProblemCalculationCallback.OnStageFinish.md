# IMsProblemCalculationCallback.OnStageFinish

IMsProblemCalculationCallback.OnStageFinish
-


# IMsProblemCalculationCallback.OnStageFinish


## Синтаксис


OnStageFinish(Stage: [MsProblemCalculationStage](../../Enums/MsProblemCalculationStage.htm); Duration: Integer;
 Data: Variant);


## Параметры


Stage. Текущая стадия расчета
 задачи моделирования;


Duration. Длительность стадии
 в миллисекундах;


Data. Данные.


## Описание


Метод OnStageFinish реализует
 событие, происходящее в конце выполнения какой-либо стадии задачи моделирования.


## Комментарии


Параметр Data доступен для
 стадий загрузки и сохранения данных, то есть когда параметр Stage
 принимает значение [MsProblemCalculationStage.Load](../../Enums/MsProblemCalculationStage.htm)
 или [MsProblemCalculationStage.Save](../../Enums/MsProblemCalculationStage.htm).
 Для получения данных приведите значение, передаваемое параметром Data, к интерфейсу
 [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm).


## Пример


Использование метода приведено в примере для [IMsProblemCalculationCallback.OnWarning](IMsProblemCalculationCallback.OnWarning.htm).


См. также:


[IMsProblemCalculationCallback](IMsProblemCalculationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
