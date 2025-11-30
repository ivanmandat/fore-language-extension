# IReportObjectEventArgs.Action

IReportObjectEventArgs.Action
-


# IReportObjectEventArgs.Action


## Синтаксис


Action: [TabObjectAction](TabSheet.chm::/Enums/TabObjectAction.htm);


## Описание


Свойство Action возвращает тип
 действия, совершенного над объектом.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnObjectActivate(Sender: Object; Args: IReportObjectEventArgs);

Begin

    WinApplication.InformationBox(Args.Action.ToString);

End Sub ReportBox1OnObjectActivate;


После наступления события будет выдано сообщение с типом производимого
 действия.


См. также:


[IReportObjectEventArgs](IReportObjectEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
