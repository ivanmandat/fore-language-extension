# IMsValueAtRiskTransform.MethodType

IMsValueAtRiskTransform.MethodType
-


# IMsValueAtRiskTransform.MethodType


## Синтаксис


MethodType: [MsValueAtRiskMethodType](../../Enums/MsValueAtRiskMethodType.htm);


## Описание


Свойство MethodType определяет метод расчёта модели.


## Комментарии


В зависимости от значения MethodType необходимо задать дополнительные параметры:


-
MsValueAtRiskMethodType.DeltaNormal:


-


-
[IMsValueAtRiskTransform.DistinguishLongShortPositions](IMsValueAtRiskTransform.DistinguishLongShortPositions.htm);


-
[IMsValueAtRiskTransform.LambdaEMWA](IMsValueAtRiskTransform.LambdaEMWA.htm);


-
[IMsValueAtRiskTransform.RandomWalk](IMsValueAtRiskTransform.RandomWalk.htm);


-
MsValueAtRiskMethodType.Historic. Определение дополнительных параметров не требуется.


-
MsValueAtRiskMethodType.MonteCarlo:


-


-
[IMsValueAtRiskTransform.InstrumentDistribution](IMsValueAtRiskTransform.InstrumentDistribution.htm);


-
[IMsValueAtRiskTransform.UseCholeskyFactorization](IMsValueAtRiskTransform.UseCholeskyFactorization.htm).


## Пример


Использование свойства приведено в [IMsValueAtRiskTransform.Portfolio](IMsValueAtRiskTransform.Portfolio.htm).


См. также:


[IMsValueAtRiskTransform](IMsValueAtRiskTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
