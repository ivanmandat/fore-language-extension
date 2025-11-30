# WelcomeScreen.addLastDocuments

WelcomeScreen.addLastDocuments
-


# WelcomeScreen.addLastDocuments


## Синтаксис


addLastDocuments(documents:array, reInit:Boolean);


## Параметры


documents. Массив документов,
 который будет отображаться в окне приветствия;


reInit. Признак перерисовки списка последних документов. Если установлено
 значение true - список будет обнулен
 и отрисован только с добавленными элементами.


## Описание


Метод addLastDocuments добавляет
 элементы в список последних открытых объектов в окне приветствия.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 WelcomeScreen с наименованием «wscreen» (см. «Пример создания компонента
 [WelcomeScreen](WelcomeScreen_Example.htm)»). Добавим запись
 в последние открытые документы:


ldocs = [{
  Content: "Doc1",
  Type: PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS,
  Data: "none"
},{
  Content: "Doc2",
  Type: PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS,
  Data: "none"
}];
// Добавим документы
wscreen.addLastDocuments(ldocs);
См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
