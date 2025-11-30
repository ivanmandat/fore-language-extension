# TsSpliceType

TsSpliceType
-


# TsSpliceType


Пространство имен: PP.TS.Ui;


## Описание


Перечисление TsSpliceType содержит тип совмещения рядов.


Используется методами [SpliceMethodWizard.CurrentState](../Classes/TimeSeries/SpliceMethodWizard/SpliceMethodWizard.CurrentState.htm) и [TSService.updateCalculatedRow](../Classes/TimeSeries/TSService/TSService.updateCalculatedRow.htm).


## Допустимые значения


Значение


Краткое описание


Butt


 Метод совмещения без преобразования данных. Первая часть результирующего ряда состоит из значений первой области до точки, являющейся началом второй области; вторая часть результирующего ряда - из значений второй области до точки, являющейся началом третьей области и т.д.


Pch


Метод совмещения данных с темпами прироста.


Ratio


 Метод совмещения данных с темпами роста. Для использования метода совмещаемые области рядов должны пересекаться.


См. также:


[PP.TS.Ui](../Classes/PP.TS.Ui.htm) | [SpliceMethodWizard](../Classes/TimeSeries/SpliceMethodWizard/SpliceMethodWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
