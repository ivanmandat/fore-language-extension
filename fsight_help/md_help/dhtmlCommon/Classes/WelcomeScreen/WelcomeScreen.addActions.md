# WelcomeScreen.addActions

WelcomeScreen.addActions
-


# WelcomeScreen.addActions


## Синтаксис


addActions(actions:array, reInit:Boolean);


## Параметры


actions. Массив действий. Доступные
 действия содержатся в перечислении [PP.Ui.WelcomeScreen.ActionType](../../Enums/PP.Ui.WelcomeScreen.ActionType.htm);


reInit. Признак перерисовки списка последних документов. Если установлено
 значение true - список будет обнулен
 и отрисован только с добавленными элементами.


## Описание


Метод addAction добавляет элементы
 в список действий в окне приветствия.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 WelcomeScreen с наименованием «wscreen» (см. «Пример создания компонента
 [WelcomeScreen](WelcomeScreen_Example.htm)»). Очистим список
 и добавим два действия в список действий:


wscreen.addActions([
PP.Ui.WelcomeScreen.ActionType.NewDocument,
PP.Ui.WelcomeScreen.ActionType.OpenDocument
],true);
См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
