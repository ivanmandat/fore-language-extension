# Кнопка «Справка» на ленте инструментов

Кнопка «Справка» на ленте инструментов
-


# Кнопка «Справка» на ленте инструментов


Для обращения к справке из веб-приложения рекомендуется расположение
 кнопки, открывающей пользовательскую документацию.


Ниже приведен пример реализации данной кнопки.


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Classes/Express/expressbox/expressbox.htm)
 с наименованием «expressBox» (см. [Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)).


В настройки, при создании компонента expressBox, добавим кнопку на панель
 инструментов:


expressBox = new PP.Exp.Ui.ExpressBox({
    ParentNode: document.body,
    Source: eaxAnalyzer,
    Service: eaxMdService, // Задаем сервис
    ImagePath: IMAGE_PATH, // Указываем путь к папке с пиктограммами
    RibbonView: {
      HelpButton = getHelpButtonSettings()
    };
});
Добавим функцию создания кнопки и вызова справки:


getHelpButtonSettings = function ()
{
     return {
          PPType: "PP.Ui.RibbonButton",
          ResourceKey: "hlpBtnContent",
          Id: "HelpButton",
          Menu: getHelpMenuSettings(),
          MenuArrowPosition: PP.LTRB.Right,
          MenuDropPosition: PP.LTRB.Bottom
     };
};
getHelpMenuSettings = function ()
{
     return {
          Items: [{
              PPType: "PP.Ui.MenuItem",
              ResourceKey: "hlpBtnHelp",
              Data: "help",
              Click: PP.Delegate(showHelp, this)
               }]
     };
};
showHelp = function (helpUrl)
{
     var helpUrlToOpen = null;
     if (!helpUrl)
     {
          helpUrl = PP.AppConfig.HelpUrl;
          var locale = PP.App.getLocale();
          if (locale != "ru")
              locale = "en";
          helpUrlToOpen = PP.String.format(helpUrl, locale);
     }
     else
          helpUrlToOpen = helpUrl;
     window.open(helpUrlToOpen);
};
В файл PP.xml добавим адрес онлайн справки в тег AppConfig, с формате:


<AppConfig HelpUrl="http://ppinfo.fsight.ru/current/{0}/">
</AppConfig>
где {0} - место для подстановки локали.


По умолчанию будет открыта справка по адресу: «http://help.fsight.ru/{0}/»


В результате выполнения примера на ленте инструментов, справа сверху,
 будет отображена кнопка, открывающая справку.


См. также:


[База
 знаний разработчиков веб-приложений](Web_Developers_KnowledgeBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
