# IPrxDataIslandDimensionLayout.Build

IPrxDataIslandDimensionLayout.Build
-


# IPrxDataIslandDimensionLayout.Build


## Синтаксис


Build(Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


Selection. Отметка в измерении.


## Описание


Метод Build добавляет в произвольное
 размещение элементы, соответствующие отмеченным элементам измерения.


## Комментарии


В зависимости от комбинаций значений свойств [PreserveDimensionElementsOrder](IPrxDataIslandDimensionLayout.PreserveDimensionElementsOrder.htm)
 и [MergeWithSelection](IPrxDataIslandDimensionLayout.MergeWithSelection.htm)
 метод Build работает следующим
 образом:


		 PreserveDimensionElementsOrder


		 MergeWithSelection


		 Действие метода Build


		 False


		 False


		 Отсутствует.


		 False


		 True


		 Добавляет элементы отметки, отсутствующие в произвольном размещении.


		 True


		 False


		 Восстанавливает порядок для уже существующих элементов произвольного
		 размещения.


		 True


		 True


		 Восстанавливает порядок для уже существующих элементов произвольного
		 размещения, попутно добавляя элементы отметки, отсутствующие в
		 произвольном размещении.


См. также:


[IPrxDataIslandDimensionLayout](IPrxDataIslandDimensionLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
