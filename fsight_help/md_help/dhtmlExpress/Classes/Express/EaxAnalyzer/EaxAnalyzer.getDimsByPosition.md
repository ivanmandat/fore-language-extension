# EaxAnalyzer.getDimsByPosition

EaxAnalyzer.getDimsByPosition
-


**


# EaxAnalyzer.getDimsByPosition


## Синтаксис


getDimsByPosition(position: [PP.Exp.PvtDimPos](../../../Enums/PvtDimPos.htm));


## Параметры


*position.* [PP.Exp.PvtDimPos](../../../Enums/PvtDimPos.htm).
 Позиция измерения.


## Описание


Метод getDimsByPosition**
 возвращает массив измерений отчета в указанной позиции.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Выберем расположение измерений
position = PP.Exp.PvtDimPos.Fixed;
// Получим измерения
eaxAnalyzer.getDimsByPosition(position);
// - > [ PP.Exp.PvtDimension, PP.Exp.PvtDimension, PP.Exp.PvtDimension ]
В результате выполнения примера были получены фиксированные измерения.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
