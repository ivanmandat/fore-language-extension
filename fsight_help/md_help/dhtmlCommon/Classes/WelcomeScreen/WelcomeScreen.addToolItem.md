# WelcomeScreen.addToolItem

WelcomeScreen.addToolItem
-


# WelcomeScreen.addToolItem


## Синтаксис


addToolItem(item:Object, type:[PP.Ui.WelcomeScreen.ToolType](../../Enums/PP.Ui.WelcomeScreen.ToolType.htm),
 data:Object);


## Параметры


item. Настройки инструмента;


type. Тип инструмента;


data. Данные инструмента.


## Описание


Метод addToolItem добавляет
 элемент в список инструментов в окне приветствия.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 WelcomeScreen с наименованием «wscreen» (см. «Пример создания компонента
 [WelcomeScreen](WelcomeScreen_Example.htm)»). Добавим инструмент
 в окно приветствия:


TOlap= {
  ResourceKey: "welcomeScreenOLAP",
  ColumnIndex: 1,
};
// Добавим инструмент
wscreen.addToolItem(TOlap, PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS, {ModuleType: PP.App.ModuleType.Olap});
См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
