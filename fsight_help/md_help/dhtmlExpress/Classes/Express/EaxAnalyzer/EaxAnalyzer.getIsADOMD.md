# EaxAnalyzer.getIsADOMD

EaxAnalyzer.getIsADOMD
-


# EaxAnalyzer.getIsADOMD


## Синтаксис


getIsADOMD(): Boolean;


## Описание


Метод getIsADOMD возвращает
 признак того, что экспресс-отчет построен на основе ADOMD-куба.


## Комментарии


Метод возвращает значение true,
 если экспресс-отчет построен на основе ADOMD-куба, иначе - false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Если экспресс-отчет построен на
 основе ADOMD-куба, выведем в консоль браузера сообщение об этом:


eaxAnalyzer = expressBox.getSource();
if(eaxAnalyzer.getIsADOMD()) console.log("Экспресс-отчет построен на основе ADOMD-куба");

В результате выполнения примера в консоли браузера будет выведено сообщение,
 если экспресс-отчет построен на основе ADOMD-куба.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
