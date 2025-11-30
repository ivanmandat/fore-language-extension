# ModuleObject.getReportBox

ModuleObject.getReportBox
-


# ModuleObject.getReportBox


## Синтаксис


getReportBox();


## Описание


Метод getReportBox возвращает
 контейнер, в который загружается отчёт.


## Комментарии


Тип значения, возвращаемого данным методом, зависит от типа модуля.
 Так, например, если загружен экспресс-отчёт, то модуль имеет тип [PP.Application.EaxModuleObject](../EaxModuleObject/EaxModuleObject.htm),
 а метод getReportBox возвращает
 значение типа [PP.Exp.Ui.ExpressBox](dhtmlExpress.chm::/Classes/Express/ExpressBox/ExpressBox.htm).


## Пример


Использование метода приведено в примере для [MSModuleObject.getReport](../MSModuleObject/MSModuleObject.getReport.htm).


См. также:


[ModuleObject](ModuleObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
