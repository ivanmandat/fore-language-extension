# EaxAnalyzer.getIndValue

EaxAnalyzer.getIndValue
-


**


# EaxAnalyzer.getIndValue


## Синтаксис


getIndValue(indName: String, viewType: PP.Exp.Ui.[EaxObjectType](../../../Enums/EaxObjectType.htm));


## Параметры


*indName.*
 Название индикатора;


*viewType.* Тип представления
 данных.


## Описание


Метод getIndValue**
 возвращает значение индикатора для карты или пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим значение объема индикатора
 для карты экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
// Получает значение индикатора у карты
var depthValue = eaxAnalyzer.getIndValue("Depth", PP.Exp.Ui.EaxObjectType.Map)
console.log("Значение объема: " + depthValue);

В результате выполнения примера в консоли браузера будет выведено значение
 объема индикатора карты экспресс-отчета:


Значение объема: 3941


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
