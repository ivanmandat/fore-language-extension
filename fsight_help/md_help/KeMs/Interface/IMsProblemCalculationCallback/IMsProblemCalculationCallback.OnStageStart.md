# IMsProblemCalculationCallback.OnStageStart

IMsProblemCalculationCallback.OnStageStart
-


# IMsProblemCalculationCallback.OnStageStart


## Синтаксис


OnStageStart(Stage: [MsProblemCalculationStage](../../Enums/MsProblemCalculationStage.htm);
 Data: Variant);


## Параметры


Stage. Текущая стадия расчета
 задачи моделирования;


Data. Данные.


## Описание


Метод OnStageStart реализует
 событие, происходящее в начале выполнения какой-либо стадии задачи моделирования.


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
