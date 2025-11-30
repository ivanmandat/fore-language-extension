# EaxAnalyzer.getDimsState

EaxAnalyzer.getDimsState
-


**


# EaxAnalyzer.getDimsState


## Синтаксис


getDimsState();


## Описание


Метод getDimsState** возвращает сведения об измерениях в экспресс-отчете.


## Комментарии


Метод возвращает JSON-объект со следующими полями: colDimsCount - количество измерений по столбцам, fixDimsCount - количество фиксированных измерений по столбцам, lowerColDimMulSelect - признак наличия множественной отметки в измерениях по столбцам, лежащих ниже первого, lowerRowDimMulSelect - признак наличия множественной отметки в измерениях по строкам, лежащих ниже первого, rowDimsCount - количество измерений по строкам.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим доступные сведения об измерениях экспресс-отчета:


var eaxAnalyzer = expressBox.getSource();
var state = eaxAnalyzer.getDimsState();
if (state != null) {
    console.log("Количество измерений по столбцам: " + state.colDimsCount);
    console.log("Количество фиксированных измерений по столбцам: " + state.fixDimsCount);
    console.log("Есть ли множественная отметка в измерениях по столбцам, лежащих ниже первого: " + state.lowerColDimMulSelect);
    console.log("Есть ли множественная отметка в измерениях по строкам, лежащих ниже первого: " + state.lowerRowDimMulSelect);
    console.log("Количество измерений по строкам: " + state.rowDimsCount);
}

В результате выполнения примера в консоли браузера была выведена информация об измерениях экспресс-отчета:


Количество измерений по столбцам: 2

Количество фиксированных измерений по столбцам: 1

Есть ли множественная отметка в измерениях по столбцам, лежащих ниже первого: false

Есть ли множественная отметка в измерениях по строкам, лежащих ниже первого: false

Количество измерений по строкам: 1


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
