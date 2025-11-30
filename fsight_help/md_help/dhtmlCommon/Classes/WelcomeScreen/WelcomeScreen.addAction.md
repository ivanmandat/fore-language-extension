# WelcomeScreen.addAction

WelcomeScreen.addAction
-


# WelcomeScreen.addAction


## Синтаксис


addAction(action:[PP.Ui.WelcomeScreen.ActionType](../../Enums/PP.Ui.WelcomeScreen.ActionType.htm),
 data:Object, updateItemsSize:Boolean);


## Параметры


action. Действие;


data. Данные действия;


updateItemsSize. Признак
 обновления размера после добавления.


## Описание


Метод addAction добавляет элемент
 в список действий в окне приветствия.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 WelcomeScreen с наименованием «wscreen» (см. «Пример создания компонента
 [WelcomeScreen](WelcomeScreen_Example.htm)»). Добавим запись
 в последние открытые документы:


wscreen.addAction(PP.Ui.WelcomeScreen.ActionType.NewDocument)
См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
