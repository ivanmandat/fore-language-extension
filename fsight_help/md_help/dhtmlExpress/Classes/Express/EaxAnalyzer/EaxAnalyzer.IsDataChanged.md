# EaxAnalyzer.IsDataChanged

EaxAnalyzer.IsDataChanged
-


**


# EaxAnalyzer.IsDataChanged


## Синтаксис


IsDataChanged: Boolean


## Описание


Свойство IsDataChanged** возвращает признак того, что данные экспресс-отчёта изменены.


## Комментарии


Значение свойства устанавливается через JSON или с помощью метода setIsDataChanged, а возвращается - при помощи метода getIsDataChanged. При этом получаем значение true, если экспресс-отчёт был изменён, и false - в противном случае.


Данное свойство может использоваться при проверке, выдавать ли запрос на сохранение перед закрытием экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Проверим, изменены ли были данные экспресс-отчета, и выведем соответствующее сообщение:


var eaxAnalyzer = expressBox.getSource();
if (eaxAnalyzer.getIsDataChanged()) {
    console.log("Данные экспресс-отчета были изменены.");
} else {
    console.log("Данные экспресс-отчета изменены не были.");
}

В результате выполнения примера в консоли браузера было выведено сообщение о том, что данные экспресс-отчета изменены не были.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
