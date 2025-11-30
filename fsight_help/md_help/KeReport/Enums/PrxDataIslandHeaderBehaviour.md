# PrxDataIslandHeaderBehaviour

PrxDataIslandHeaderBehaviour
-


# PrxDataIslandHeaderBehaviour


## Описание


Перечисление PrxDataIslandHeaderBehaviour содержит варианты поведения строк/столбцов при увеличении области данных.


Используется следующими свойствами и методами:


-
[IPrxDataIslandHeader.Behaviour](../Interface/IPrxDataIslandHeader/IPrxDataIslandHeader.Behaviour.htm)


-
[IPrxTableIsland.ColumnsBehaviour](../Interface/IPrxTableIsland/IPrxTableIsland.ColumnsBehaviour.htm)


-
[IPrxTableIsland.RowsBehaviour](../Interface/IPrxTableIsland/IPrxTableIsland.RowsBehaviour.htm)


## Допустимые значения


 Значение
 Краткое описание


 0
 Fixed. Фиксированное. Количество строк/столбцов области данных будет фиксированным (определенным в параметре «Границы области данных») и изменяться не будет.


 1
 Capture. Захват смежных строк/столбцов. При увеличении количества строк/столбцов области данных, информация, расположенная в строках/столбцах ниже/правее области данных, будет перекрываться данными из источника.


 2
 Insert. Вставка строк/столбцов. При увеличении количества строк/столбцов области данных, на лист отчета будет добавлено необходимое количество строк/столбцов. Тем самым, информация, расположенная в строках/столбцах ниже/правее, будет смещена вниз/вправо.


См. также:


[Перечисления сборки Report](KeReport_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
