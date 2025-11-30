# EaxAnalyzer.getIsNewReport

EaxAnalyzer.getIsNewReport
-


**


# EaxAnalyzer.getIsNewReport


## Синтаксис


getIsNewReport();


## Описание


Метод getIsNewReport** определяет, был ли ранее сохранен данный экспресс-отчет.


## Комментарии


Метод возвращает true, если экспресс-отчет новый и не был ещё сохранён, и false - в противном случае.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Определим, является ли имеющийся экспресс-отчет новым:


var eaxAnalyzer = expressBox.getSource();
if (eaxAnalyzer.getIsNewReport()) {
    console.log("Данный экспресс-отчет является новым.");
} else {
    console.log("Данный экспресс-отчет не является новым.");
};

В результате выполнения примера в консоли браузера будет выведено сообщение, что экспресс-отчет является новым, если он только что создан и ещё не был сохранён. Если отчёт раннее уже сохранялся, то будет выведено сообщение о том, что он не является новым.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
