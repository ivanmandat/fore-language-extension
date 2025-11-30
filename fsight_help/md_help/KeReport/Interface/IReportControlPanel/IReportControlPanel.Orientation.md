# IReportControlPanel.Orientation

IReportControlPanel.Orientation
-


# IReportControlPanel.Orientation


## Синтаксис


Orientation: [PrxControlPanelOrientation](../../Enums/PrxControlPanelOrientation.htm);


## Описание


Свойство Orientation определяет
 вариант расположения элементов управления на компоненте среды разработки
 - [ReportControlPanel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportControlPanel.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов TabSheetBox с наименованием
 «TabSheetBox1», ReportControlPanel с наименованием «ReportControlPanel1»
 и компонента UiReport с наименованием «UiReport1». В репозитории должен
 содержаться регламентный отчет с идентификатором «POK_REG».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

Begin

    MB := MetabaseClass.Active;

    UiReport1.Report := MB.ItemById("POK_REG").Bind As IPrxReport;

    TabSheetBox1.Source := UiReport1 As ITabSheetSource;

    ReportControlPanel1.Object := UiReport1;

    UiReport1.Active := True;

    ReportControlPanel1.Orientation := PrxControlPanelOrientation.Horizontal;

End Sub Button1OnClick;


После выполнения примера, элементы управления на компоненте среды разработки
 [ReportControlPanel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportControlPanel.htm)
 будут расположены горизонтально.


См. также:


[Перечисления сборки Report](../../Enums/KeReport_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
