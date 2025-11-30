# Особенности работы с контекстным меню в веб-приложении

Особенности работы с контекстным меню в веб-приложении
-


# Особенности работы с контекстным меню в веб-приложении


При работе с таблицами данных в веб-приложении существуют следующие
 возможности:


[![](../Opened.gif)![](../Closed.gif)Включение контекстного
 меню браузера](javascript:TextPopup(this))


	Для включения контекстного меню браузера:


		- установите в методе [EnableNativeContextMenu](dhtmlTabSheet.chm::/Interfaces/TabSheetSettings/TabSheetSettings.EnableNativeContextMenu.htm) значение
		 «true»:


tabSheet.setEnableNativeContextMenu(true)


		- пропишите в файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm):


<tabsheet enableNativeContextMenu="true" enableSelection="false" />


		- откройте консоль браузера, нажав клавишу F12, и пропишите
		 в ней:


PP.App.getModuleObject().getReportBox().getDataView().getGridView().getTabSheet().setEnableNativeContextMenu(true)
	Для включения контекстного меню браузера в инструменте «Отчёты»
	 пропишите в файле reporter.html:


function onInit(sender, args)
{
    PP.App.getModuleObject().getReportBox().getDataView().getGridView().Rendered.add(onGridRendered, PP.App);
};
function onGridRendered(sender,args)
{
    sender.getTabSheet().setEnableNativeContextMenu(true);
    sender.getTabSheet().setEnableSelection(false);
};
	Путь до файла для ОС Windows: C:\Program Files (x86)\Foresight\Analytics Platform
	 10.x Web
	 Application\App\reporter.html.


	После выполнения одного из действий при работе с таблицами будет
	 доступно контекстное меню браузера. При этом будут не доступны операции,
	 выполняемые над данными таблицы только с помощью контекстного
	 меню «Форсайт. Аналитическая платформа»
	 (например, работа с буфером обмена, детализация и обобщение данных,
	 вывод статистических характеристик и др.).


[![](../Opened.gif)![](../Closed.gif)Включение контекстного
 меню продукта «Форсайт. Аналитическая платформа»](javascript:TextPopup(this))


	Для включения контекстного меню продукта «Форсайт. Аналитическая платформа»:


		- установите в методе [EnableNativeContextMenu](dhtmlTabSheet.chm::/Interfaces/TabSheetSettings/TabSheetSettings.EnableNativeContextMenu.htm) значение
		 «false»:


tabSheet.setEnableNativeContextMenu(false)


		- пропишите в файле [PP.xml](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm):


<tabsheet enableNativeContextMenu="false" enableSelection="false" />


		- откройте консоль браузера, нажав клавишу F12, и пропишите
		 в ней:


PP.App.getModuleObject().getReportBox().getDataView().getGridView().getTabSheet().setEnableNativeContextMenu(false)
	Для включения контекстного меню продукта «Форсайт. Аналитическая платформа»
	 в инструменте «Отчёты» пропишите
	 в файле reporter.html:


function onInit(sender, args)
{
    PP.App.getModuleObject().getReportBox().getDataView().getGridView().Rendered.add(onGridRendered, PP.App);
};
function onGridRendered(sender,args)
{
    sender.getTabSheet().setEnableNativeContextMenu(false);
    sender.getTabSheet().setEnableSelection(false);
};
	Путь до файла для ОС Windows: C:\Program Files (x86)\Foresight\Analytics Platform
	 10.x Web
	 Application\App\reporter.html.


	После выполнения одного из действий при работе с таблицами будет
	 доступно контекстное меню продукта «Форсайт. Аналитическая платформа»
	 и все операции, выполняемые над данными таблицы только с помощью
	 контекстного меню (например, работа с буфером обмена, детализация
	 и обобщение данных, вывод статистических характеристик и др.).


Переключение между контекстными меню продукта «Форсайт. Аналитическая платформа»
 и браузера доступно в инструментах «Аналитические
 панели», «Аналитические запросы
 (OLAP)», «Отчёты» и «Анализ временных рядов».


См. также:


[Работа
 с интерактивными возможностями таблицы](Table_Work.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
