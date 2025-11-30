# Пример создания компонента DataMiningMaster

Пример создания компонента DataMiningMaster
-


# Пример создания компонента DataMiningMaster


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»).


В теге HEAD html-страницы добавьте ссылки на следующие js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- PP.Express.js;


	- файл с ресурсами (например, resources.ru);


	- PP.Express.css;


	- PP.css.


После загрузки экспресс-отчета откроем ленту инструментов на вкладке
 «Расширенная аналитика» и создадим мастер
 «Интелектуального анализа данных»,
 написав в консоли разработчика код:


// Получим ленту инструментов
ribbon = expressBox.getRibbonView();
// Получим вкладку расширенная аналитика
analyticsCat = ribbon.getAnalyticsCategory();
// Получим панель анализа данных
dmPanel = analyticsCat.getPanels()[3];
// Получим источник и сервис для работы с анализом данных
dmSource = dmPanel.getSource();
dmService = dmPanel.getSettings().Service;
// Определим заголовки столбцов (заголовки столбцов приходят ответом из [сервисов](../../../Classes/Metabase/DataMiningService/DataMiningService.getDataSourceFields.htm))
cols = ["Объекты", "1998", "1999", "2000", "2001", "2002", "2003"];
// Определим метод анализа данных
method = "AssociationRules";
// Определим событие получения результатов анализа данных

// Создадим мастер
var dmMaster = new PP.Mb.Ui.DataMiningMaster({
    IsRTL: dmPanel.getIsRTL(),
    CaptionIcon: "favicon.ico",
    Cols: cols,
    RecordCount: 5,
    Source: dmSource,
    Service: dmService,
    DMMethod: method,
    OnGetDataMiningResult: PP.Delegate(dmPanel.OnGetDataMiningResult, dmPanel),
});
// Отобразим мастер
dmMaster.show();

После выполнения примера на странице будет открыт мастер «Интелектуальный
 анализа данных».


См. также:


[ImportDataWizard](../ImportDataWizard/ImportDataWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
