# RibbonView.Opened

RibbonView.Opened
-


# RibbonView.Opened


## Синтаксис


Opened: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Opened наступает при выборе пункта главного меню регламентного отчета «Открыть».


## Пример


Для выполнения примера необходимо, чтобы на html-странице был создан сервис для работы с регламентными отчетами - prxMbService, было осуществлено подключение к метабазе и открыт регламентный отчет -prxReport (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В корневой папке приложения должна содержаться папка с пиктограммами «PP_Img». Создадим компонент [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm), для ленты инструментов добавим обработчик события выбора пункта главного меню «Открыть»:


    var reportBox = new PP.Prx.Ui.ReportBox({
        ParentNode: "ReportBox",
        Source: prxReport,
        Service: prxMbService,
        ImagePath: "/PP_img/",
        RibbonView: {
            Opened: function () {
                if (!window.prxOpenDialog)
                    window.prxOpenDialog = new PP.Ui.MetabaseOpenDialog({//создаем диалог открытия объекта репозитория
                        Metabase: metabase,
                        ImagePath: imgPath,
                        FiltersSet: [{
                            Filters: [PP.Mb.MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT],
                            ResourceKey: "openDialogReports",
                            iconIndex: 16
                        }],
                        FolderTreeFilter: [PP.Mb.MetabaseObjectClass.KE_CLASS_FOLDER, PP.Mb.MetabaseObjectClass.KE_CLASS_WEBAPPLICATION]
                    });
                window.prxOpenDialog.show();
            }
        }
    });

После выполнения примера будет создан компонент [ReportBox](../ReportBox/Constructor_ReportBox.htm). При выборе пункта главного меню «Открыть» будет вызван диалог для открытия объекта из репозитория.


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
