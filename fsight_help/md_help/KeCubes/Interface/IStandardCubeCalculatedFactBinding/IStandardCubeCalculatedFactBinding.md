# IStandardCubeCalculatedFactBinding

IStandardCubeCalculatedFactBinding
-


# IStandardCubeCalculatedFactBinding


## Описание


Интерфейс IStandardCubeFactBindings
 содержит свойства для настройки вычисляемого факта куба.


## Комментарии


Привязку факта куба возвращает свойство [IStandardCubeFactBindings.Binding](../IStandardCubeFactBindings/IStandardCubeFactBindings.Binding.htm).
 Исходная коллекция [IStandardCubeFactBindings](../IStandardCubeFactBindings/IStandardCubeFactBindings.htm)
 должна быть получена с помощью свойства IStandardCube.CalcBindings.
 Для работы с вычисляемым фактом приведите результат свойства [IStandardCubeFactBindings.Binding](../IStandardCubeFactBindings/IStandardCubeFactBindings.Binding.htm)
 к интерфейсу IStandardCubeCalculatedFactBinding.


Настройка вычисляемого факта заключается в определении формулы, по которой
 будет осуществляться вычисление значений. Формула указывается в свойстве
 [IStandardCubeFactBinding.Formula](../IStandardCubeFactBinding/IStandardCubeFactBinding.Formula.htm).


Если в структуре куба имеется календарное измерение, то с помощью свойств
 [TimeBackwardLag](IStandardCubeCalculatedFactBinding.TimeBackwardLag.htm),
 [TimeForwardLag](IStandardCubeCalculatedFactBinding.TimeForwardLag.htm),
 [TimeLagLevel](IStandardCubeCalculatedFactBinding.TimeLagLevel.htm)
 можно задать параметры расширения отметки (лаги) при извлечении данных.
 Расширение отметки может потребоваться, если для вычисления формул необходимы
 значения по элементам, которые не включены в отметку.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcMethod](IStandardCubeCalculatedFactBinding.CalcMethod.htm)
		 Свойство CalcMethod
		 определяет режим расчёта значений вычисляемого факта при построении
		 куба.


		 ![](../../Property_Image.gif)
		 [IncludeInSelection](IStandardCubeCalculatedFactBinding.IncludeInSelection.htm)
		 Свойство IncludeInSelection
		 определяет, будет ли вычисляемый факт включаться в отметку при
		 вычислении куба.


		 ![](../../Property_Image.gif)
		 [TimeBackwardLag](IStandardCubeCalculatedFactBinding.TimeBackwardLag.htm)
		 Свойство TimeBackwardLag
		 определяет значение, на которое происходит увеличение отметки
		 назад (лаг назад), по заданному уровню календаря.


		 ![](../../Property_Image.gif)
		 [TimeForwardLag](IStandardCubeCalculatedFactBinding.TimeForwardLag.htm)
		 Свойство TimeForwardLag
		 определяет значение, на которое происходит увеличение отметки
		 вперед (лаг вперед), по заданному уровню календаря.


		 ![](../../Property_Image.gif)
		 [TimeLagLevel](IStandardCubeCalculatedFactBinding.TimeLagLevel.htm)
		 Свойство TimeLagLevel
		 определяет уровень календаря, по которому необходимо сместить
		 отметку, для расчета вычисляемого показателя.


## Свойства, унаследованные от [IStandardCubeFactBinding](../IStandardCubeFactBinding/IStandardCubeFactBinding.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregatedDataType](../IStandardCubeFactBinding/IStandardCubeFactBinding.AggregatedDataType.htm)
		 Свойство AggregatedDataType
		 определяет тип данных после агрегации.


		 ![](../../Property_Image.gif)
		 [AggregatedDataTypePrecision](../IStandardCubeFactBinding/IStandardCubeFactBinding.AggregatedDataTypePrecision.htm)
		 Свойство AggregatedDataTypePrecision
		 определяет точность значения (количество знаков после запятой)
		 после агрегации.


		 ![](../../Property_Image.gif)
		 [AggregationType](../IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm)
		 Свойство AggregationType
		 определяет тип агрегации на источнике данных.


		 ![](../../Property_Image.gif)
		 [BindingRole](../IStandardCubeFactBinding/IStandardCubeFactBinding.BindingRole.htm)
		 Свойство BindingRole
		 возвращает роль привязки.


		 ![](../../Property_Image.gif)
		 [CustomAggregateFunction](../IStandardCubeFactBinding/IStandardCubeFactBinding.CustomAggregateFunction.htm)
		 Свойство CustomAggregateFunction
		 определяет пользовательский метод расчета агрегации.


		 ![](../../Property_Image.gif)
		 [DistinctAggregate](../IStandardCubeFactBinding/IStandardCubeFactBinding.DistinctAggregate.htm)
		 Свойство DistinctAggregate
		 определяет, агрегировать ли идентичные данные.


		 ![](../../Property_Image.gif)
		 [FactKey](../IStandardCubeFactBinding/IStandardCubeFactBinding.FactKey.htm)
		 Свойство FactKey возвращает
		 ключ факта, по которому определяется привязка.


		 ![](../../Property_Image.gif)
		 [Formula](../IStandardCubeFactBinding/IStandardCubeFactBinding.Formula.htm)
		 Свойство Formula возвращает
		 выражение, определяющее привязку факта куба к полям источника
		 данных, либо выражение, по которому будет определяться значение
		 вычисляемого факта.


		 ![](../../Property_Image.gif)
		 [ReadOnly](../IStandardCubeFactBinding/IStandardCubeFactBinding.ReadOnly.htm)
		 Свойство ReadOnly
		 возвращает признак доступности данных факта куба только для чтения.


		 ![](../../Property_Image.gif)
		 [ReverseFactKey](../IStandardCubeFactBinding/IStandardCubeFactBinding.ReverseFactKey.htm)
		 Свойство ReverseFactKey
		 определяет ключ факта куба, значения которого будут вычисляться
		 по формуле [ReverseFormula](../IStandardCubeFactBinding/IStandardCubeFactBinding.ReverseFormula.htm).


		 ![](../../Property_Image.gif)
		 [ReverseFormula](../IStandardCubeFactBinding/IStandardCubeFactBinding.ReverseFormula.htm)
		 Свойство ReverseFormula
		 возвращает выражение, по которому будет определяться значение
		 факта с ключом [ReverseFactKey](../IStandardCubeFactBinding/IStandardCubeFactBinding.ReverseFactKey.htm).


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
