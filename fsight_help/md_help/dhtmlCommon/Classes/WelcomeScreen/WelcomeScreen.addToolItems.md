# WelcomeScreen.addToolItems

WelcomeScreen.addToolItems
-


# WelcomeScreen.addToolItems


## Синтаксис


addToolItems(items:array);


## Параметры


items. Массив с настройками
 инструментов;


## Описание


Метод addToolItems добавляет
 элементы в список инструментов в окне приветствия.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 WelcomeScreen с наименованием «wscreen» (см. «Пример создания компонента
 [WelcomeScreen](WelcomeScreen_Example.htm)»). Добавим инструменты
 в окно приветствия:


adTools= [{
  ResourceKey: "welcomeScreenOLAP",
  ColumnIndex: 1,
  Type: PP.Ui.WelcomeScreen.ToolType.OLAP_ANALYSIS,
  Data: {ModuleType: PP.App.ModuleType.Olap},
},{
  ResourceKey: "welcomeScreenReportDesigner",
  ColumnIndex: 2,
  Type: PP.Ui.WelcomeScreen.ToolType.REPORT_DESIGNER,
  Data: {ModuleType: PP.App.ModuleType.Reporter},
}];
// Добавим инструменты
wscreen.addToolItems(adTools);
См. также:


[WelcomeScreen](WelcomeScreen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
