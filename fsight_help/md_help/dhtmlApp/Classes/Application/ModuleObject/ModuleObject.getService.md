# ModuleObject.getService

ModuleObject.getService
-


# ModuleObject.getService


## Синтаксис


getService();


## Описание


Метод getService возвращает
 сервис для работы модулем.


## Комментарии


Тип значения, возвращаемого данным методом, зависит от типа модуля.
 Так, например, если загружен экспресс-отчёт, то метод getService
 возвращает значение типа [PP.Exp.EaxMdService](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.htm).
 Если загружена рабочая книга, то будет возвращён объект типа [PP.TS.TSService](dhtmlTS.chm::/Classes/TimeSeries/TSService/TSService.htm).


См. также:


[ModuleObject](ModuleObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
