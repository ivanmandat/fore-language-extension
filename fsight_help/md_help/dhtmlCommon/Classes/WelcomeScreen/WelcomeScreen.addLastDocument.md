# WelcomeScreen.addLastDocument

WelcomeScreen.addLastDocument
-


# WelcomeScreen.addLastDocument


## Синтаксис


addLastDocument(document:Object, type:PP.Ui.WelcomeScreen.ToolType,
 data:Object, updateItemsSize:Boolean);


## Параметры


document. Документ, который
 будет отображаться;


type. Тип инструмента, в котором открывается документ;


data. Объект, который будет
 открыт при выборе данного элемента;


updateItemsSize. Признак
 обновления размера после добавления.


## Описание


Метод addLastDocument добавляет
 элемент в список последних открытых объектов в окне приветствия.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 WelcomeScreen с наименованием «wscreen» (см. «Пример создания компонента
 [WelcomeScreen](WelcomeScreen_Example.htm)»). Добавим запись
 в последние открытые документы:


wscreen.addLastDocument("Test",PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS,"insertObjectHere");
См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
