# TabHyperlinkTarget

TabHyperlinkTarget
-


# TabHyperlinkTarget


## Описание


Перечисление TabHyperlinkTarget
 содержит способы загрузки страницы при переходе по ссылке.


Используется следующими свойствами и методами:


	- [ITabHyperlink.Target](../Interface/ITabHyperlink/ITabHyperlink.Target.htm);


	- [IPrxDimensionDrill](KeReport.chm::/Interface/IPrxDimensionDrill/IPrxDimensionDrill.Target.htm);


	- [IEaxDrillSettings.Target](KeExpress.chm::/Interface/IEaxDrillSettings/IEaxDrillSettings.Target.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 -1
		 Undefined. Способ загрузки
		 не определен.


		 0
		 Blank. Загружает страницу
		 в новое окно браузера. Значение установлено по умолчанию.


		 1
		 Self. Загружает страницу
		 в текущее окно.


		 2
		 Parent. Загружает страницу
		 во фрейм-родитель, если фреймов нет, то этот параметр работает
		 как Self.


		 3
		 Top. Отменяет все фреймы
		 и загружает страницу в полном окне браузера, если фреймов нет,
		 то этот параметр работает как Self.


## Комментарии


Способы загрузки страниц не учитываются при настройке гиперссылок в
 таблицах [форм
 ввода](DataEntryForms.chm::/DataEntryForms_Purpose.htm).


См. также:


[Перечисления
 сборки Tab](TabSheet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
