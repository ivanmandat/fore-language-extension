# EaxAnalyzer.clearWaitToken

EaxAnalyzer.clearWaitToken
-


**


# EaxAnalyzer.clearWaitToken


## Синтаксис


clearWaitToken(name);


## Параметры


*name.* Имя сбрасываемого в экспресс-отчете маркера ожидания. Задается с помощью элемента перечисления PP.Exp.[Operation](../../../Enums/Operation.htm).


## Описание


Метод clearWaitToken** сбрасывает маркер ожидания в экспресс-отчете по указанному имени.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Уберем маркер ожидания изменения источника данных и очистим источник данных, либо в случае отсутствия его уберем все имеющиеся маркеры ожидания:


var eaxAnalyzer = expressBox.getSource();
// Получаем маркеры ожидания изменения источника данных
var waitToken = eaxAnalyzer.getWaitToken(PP.Exp.Operation.ChangeDataSource);
if(waitToken != null) {
    // Убираем маркер ожидания изменения источника данных
    eaxAnalyzer.clearWaitToken(PP.Exp.Operation.ChangeDataSource);
    // Очищаем источник данных
    eaxAnalyzer.clearDataSources();
    console.log("Источник данных экспресс-отчета очищен.")
} else {
    eaxAnalyzer.clearAllWaitTokens();
    console.log("Убраны все маркеры ожидания.");
}

В результате выполнения примера были убраны все маркеры ожидания экспресс-отчета, о чем в консоли браузера было выведено соответствующее сообщение:


Убраны все маркеры ожидания.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
