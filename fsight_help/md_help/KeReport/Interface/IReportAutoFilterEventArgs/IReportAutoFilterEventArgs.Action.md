# IReportAutoFilterEventArgs.Action

IReportAutoFilterEventArgs.Action
-


# IReportAutoFilterEventArgs.Action


## Синтаксис


Action: [TabAutoFilterAction](TabSheet.chm::/Enums/TabAutoFilterAction.htm);


## Описание


Свойство Action возвращает тип
 выбранного условия автофильтра.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnAutoFilter(Sender: Object; Args: IReportAutoFilterEventArgs);

Begin

    WinApplication.InformationBox(Args.Action.ToString);

End Sub ReportBox1OnAutoFilter;


После наступления события будет выдано сообщение, содержащее тип заданного
 условия.


См. также:


[IReportAutoFilterEventArgs](IReportAutoFilterEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
