# IVZMapChartArrowStyle.IsRelativeWidth

IVZMapChartArrowStyle.IsRelativeWidth
-


# IVZMapChartArrowStyle.IsRelativeWidth


## Синтаксис


IsRelativeWidth: Boolean;


## Описание


Свойство IsRelativeWidth определяет,
 будут ли зависеть ширина и длина наконечника от длины стрелки на карте.


## Комментарии


Допустимые значения:


	- True. Указанные значения
	 будут зависеть от длины стрелки на карте. Значения свойств [IVZMapChartArrowStyle.PointerLength](IVZMapChartArrowStyle.PointerLength.htm)
	 и [IVZMapChartArrowStyle.PointerWidth](IVZMapChartArrowStyle.PointerWidth.htm)
	 задаются в относительных координатах. Допустимые значения [0, 1];


	- False. По умолчанию.
	 Указанные значения не будут зависеть от длины стрелки на карте. Значения
	 свойств [IVZMapChartArrowStyle.PointerLength](IVZMapChartArrowStyle.PointerLength.htm)
	 и [IVZMapChartArrowStyle.PointerWidth](IVZMapChartArrowStyle.PointerWidth.htm)
	 задаются в пикселях [0, 100].


## Пример


Использование свойства приведено в примере для [IVZMapChartArrows.Add](../IVZMapChartArrows/IVZMapChartArrows.Add.htm).


См. также:


[IVZMapChartArrowStyle](IVZMapChartArrowStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
