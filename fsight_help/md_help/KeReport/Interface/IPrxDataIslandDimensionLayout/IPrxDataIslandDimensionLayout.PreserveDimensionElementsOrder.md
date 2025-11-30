# IPrxDataIslandDimensionLayout.PreserveDimensionElementsOrder

IPrxDataIslandDimensionLayout.PreserveDimensionElementsOrder
-


# IPrxDataIslandDimensionLayout.PreserveDimensionElementsOrder


## Синтаксис


PreserveDimensionElementsOrder: Boolean;


## Описание


Свойство PreserveDimensionElementsOrder
 определяет признак использования порядка элементов размещения как и в
 измерении.


## Комментарии


Допустимые значения:


	- True. Элементы размещения,
	 имеющие привязку к элементам среза, будут автоматически выстроены
	 в соответствии с их положением в измерении;


	- False. Элементы размещения
	 можно располагать в произвольном порядке Значение по умолчанию.


При автопостроении элементы, не имеющие привязки к элементу измерения,
 будут поставлены на исходном уровне после того элемента размещения, за
 которым они первоначально были добавлены в произвольное размещение.


См. также:


[IPrxDataIslandDimensionLayout](IPrxDataIslandDimensionLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
