# ITabHyperlink.Active

ITabHyperlink.Active
-


# ITabHyperlink.Active


## Синтаксис


Active: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Active определяет,
 была ли использована гиперссылка.


## Комментарии


По умолчанию свойству установлено значение [TriState.OffOption](ForeSys.chm::/Enums/TriState.htm).
 После первого перехода по ссылке свойству будет установлено значение [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm),
 что будет соответствовать использованной ссылке. Для использованных ссылок
 можно, например, настроить собственное оформление.


Значение свойства сохраняется пока открыт объект, которому принадлежит
 таблица. После закрытия объекта значение свойства будет сброшено в [TriState.OffOption](ForeSys.chm::/Enums/TriState.htm).


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
