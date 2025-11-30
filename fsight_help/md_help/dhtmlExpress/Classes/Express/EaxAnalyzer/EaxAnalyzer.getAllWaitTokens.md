# EaxAnalyzer.getAllWaitTokens

EaxAnalyzer.getAllWaitTokens
-


# EaxAnalyzer.getAllWaitTokens


## Синтаксис


getAllWaitTokens();


## Описание


Метод getAllWaitTokens возвращает
 все [маркеры ожидания](EaxAnalyzer.WaitToken.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


var eaxAnalyzer = expressBox.getSource();
// Установим маркер ожидания
eaxAnalyzer.setWaitToken(PP.Exp.Operation.ChangeDataSource);
// Получим все доступные маркеры ожидания
eaxAnalyzer.getAllWaitTokens();
// -> Object {ChangeDataSource: Object}

В результате выполнения примера был создан и получен новый маркер ожидания.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
