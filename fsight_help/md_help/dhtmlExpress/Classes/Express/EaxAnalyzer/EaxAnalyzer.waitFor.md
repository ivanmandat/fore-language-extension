# EaxAnalyzer.waitFor

EaxAnalyzer.waitFor
-


**


# EaxAnalyzer.waitFor


## Синтаксис


waitFor(name: String);


## Параметры


*name.* Наименование маркера.


## Описание


Метод waitFor** выставляет маркер ожидания указанной операции в экспресс-отчете.


## Комментарии


Метод возвращает значение false, если маркер был ранее выставлен и не сброшен, и значение true в случае успешного выполнения метода.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Выставим маркер ожидания операции измерения источника данных в экспресс-отчете:


var eaxAnalyzer = expressBox.getSource();
var result = eaxAnalyzer.waitFor(PP.Exp.Operation.ChangeDataSource);
if (result) {
    console.log("Маркер ожидания операции выставлен.");
} else {
    console.log("Маркер ожадания был ранее выставлен и не сброшен.");
}

В результате выполнения примера в консоли браузера будет выведено сообщение об успешном выполнении рассматриваемого метода:


Маркер ожидания операции выставлен.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
