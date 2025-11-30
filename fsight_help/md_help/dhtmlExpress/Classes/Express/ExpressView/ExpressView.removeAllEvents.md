# ExpressView.removeAllEvents

ExpressView.removeAllEvents
-


**


# ExpressView.removeAllEvents


## Синтаксис


removeAllEvents(context);


## Параметры


*context. Контекст, по которому удаляются обработчики событий.*


## Описание


Метод removeAllEvents** удаляет все обработчики событий у экспресса-отчета по заданному контексту.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее удалим все существующие обработчики событий у экспресс-отчета:


// Удаление всех обработчиков событий у экспресс-отчета
expressBox.removeAllEvents(expressBox);

В результате выполнения данного примера будут удалены все существующие обработчики событий у экспресс-отчета.


См. также:


[ExpressView](ExpressView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
