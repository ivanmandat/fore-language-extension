# IStandardCubeFactBinding

IStandardCubeFactBinding
-


# IStandardCubeFactBinding


## Описание


Интерфейс IStandardCubeFactBinding
 содержит свойства для настройки и привязки факта куба.


## Комментарии


Привязку факта куба возвращает свойство [IStandardCubeFactBindings.Binding](../IStandardCubeFactBindings/IStandardCubeFactBindings.Binding.htm).
 Исходная коллекция [IStandardCubeFactBindings](../IStandardCubeFactBindings/IStandardCubeFactBindings.htm)
 должна быть получена с помощью свойства IStandardCube.FactBindings
 или [IStandardCubeDimension.FactBindings](../IStandardCubeDimension/IStandardCubeDimension.FactBindings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregatedDataType](IStandardCubeFactBinding.AggregatedDataType.htm)
		 Свойство AggregatedDataType
		 определяет тип данных после агрегации.


		 ![](../../Property_Image.gif)
		 [AggregatedDataTypePrecision](IStandardCubeFactBinding.AggregatedDataTypePrecision.htm)
		 Свойство AggregatedDataTypePrecision
		 определяет точность значения (количество знаков после запятой)
		 после агрегации.


		 ![](../../Property_Image.gif)
		 [AggregationType](IStandardCubeFactBinding.AggregationType.htm)
		 Свойство AggregationType
		 определяет тип агрегации на источнике данных.


		 ![](../../Property_Image.gif)
		 [BindingRole](IStandardCubeFactBinding.BindingRole.htm)
		 Свойство BindingRole
		 возвращает роль привязки.


		 ![](../../Property_Image.gif)
		 [CustomAggregateFunction](IStandardCubeFactBinding.CustomAggregateFunction.htm)
		 Свойство CustomAggregateFunction
		 определяет пользовательский метод расчета агрегации.


		 ![](../../Property_Image.gif)
		 [DistinctAggregate](IStandardCubeFactBinding.DistinctAggregate.htm)
		 Свойство DistinctAggregate
		 определяет, агрегировать ли идентичные данные.


		 ![](../../Property_Image.gif)
		 [FactKey](IStandardCubeFactBinding.FactKey.htm)
		 Свойство FactKey возвращает
		 ключ факта, по которому определяется привязка.


		 ![](../../Property_Image.gif)
		 [Formula](IStandardCubeFactBinding.Formula.htm)
		 Свойство Formula возвращает
		 выражение, определяющее привязку факта куба к полям источника
		 данных, либо выражение, по которому будет определяться значение
		 вычисляемого факта.


		 ![](../../Property_Image.gif)
		 [ReadOnly](IStandardCubeFactBinding.ReadOnly.htm)
		 Свойство ReadOnly
		 возвращает признак доступности данных факта куба только для чтения.


		 ![](../../Property_Image.gif)
		 [ReverseFactKey](IStandardCubeFactBinding.ReverseFactKey.htm)
		 Свойство ReverseFactKey
		 определяет ключ факта куба, значения которого будут вычисляться
		 по формуле [ReverseFormula](IStandardCubeFactBinding.ReverseFormula.htm).


		 ![](../../Property_Image.gif)
		 [ReverseFormula](IStandardCubeFactBinding.ReverseFormula.htm)
		 Свойство ReverseFormula
		 возвращает выражение, по которому будет определяться значение
		 факта с ключом [ReverseFactKey](IStandardCubeFactBinding.ReverseFactKey.htm).


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
