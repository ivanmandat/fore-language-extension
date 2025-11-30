# EaxAnalyzer.IsDefaultHighlight

EaxAnalyzer.IsDefaultHighlight
-


**


# EaxAnalyzer.IsDefaultHighlight


## Синтаксис


IsDefaultHighlight: Boolean


## Описание


Свойство IsDefaultHighlight** возвращает признак того, что выделения элементов экспресс-отчета установлены по умолчанию.


## Комментарии


Значение свойства устанавливается через JSON или с помощью метода setIsDefaultHighlight, а возвращается - при помощи метода getIsDefaultHighlight. При этом получаем значение true, если экспресс-отчёт был изменён, и false - в противном случае.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Проверим, установлены ли выделения элементов экспресс-отчета, и выведем соответствующее сообщение:


var eaxAnalyzer = expressBox.getSource();
// Проверим, установлены ли выделения элементов экспресс-отчета по умолчанию
if (eaxAnalyzer.getIsDefaultHighlight()) {
    console.log("Выделения элементов экспресс-отчета установлены по умолчанию.");
} else {
    console.log("Выделения элементов экспресс-отчета не установлены по умолчанию.");
}

В результате выполнения примера в консоли браузера было выведено сообщение о том, что выделения элементов экспресс-отчета не установлены по умолчанию.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
