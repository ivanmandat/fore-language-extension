# TabSheetHeaderFilterPanel.getTopHeaderFilterPanel

TabSheetHeaderFilterPanel.getTopHeaderFilterPanel
-


# TabSheetHeaderFilterPanel.getTopHeaderFilterPanel


## Синтаксис


getTopHeaderFilterPanel();


## Описание


Метод getTopHeaderFilterPanel возвращает
 данные группы мастера для уровней.


## Комментарии


Метод возвращает JSON-объект со следующими полями: height - высота строки,
 width - ширина столбца таблицы.


## Пример


Для выполнения примера необходимо, чтобы был открыт любой экспресс-отчёт.


// Получим объект текущего модуля
        var tabMaster = PP.App.getModuleObject().getReportBox().getPropertyBarView().getTabSheetMaster();
//Получим данные группы мастера уровней
        var tab = tabMaster.getTopHeaderFilterPanel();
//Получим Id панели
tab.getId();
После выполнения в консоли будет выведен ID панели:


"TopHeaderFilterPanel"


См.
 также:


[TabSheetHeaderFilterPanel](TabSheetHeaderFilterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
