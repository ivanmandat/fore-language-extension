# RibbonView.Exited

RibbonView.Exited
-


# RibbonView.Exited


## Синтаксис


Exited: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Exited наступает при выборе пункта главного меню регламентного отчета «Выход».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox». Добавим обработчик события выбора пункта главного меню «Выход»:


    reportBox.getRibbonView().Exited.add(function (sender, args) {
        if (prxReport.getIsDataChanged() == true) {
            reportBox.getRibbonView().showDataSaveDialog(null, PP.Prx.Ui.DataSaveDlgMode.Full);
        }
        else reportBox.setSource(null);
    });

После выполнения примера при выборе пункта меню «Выход» будет закрыт отчет-источник или, если в таблице отчета имеются несохраненные данные, будет открыт диалог для сохранения измененных данных.


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
