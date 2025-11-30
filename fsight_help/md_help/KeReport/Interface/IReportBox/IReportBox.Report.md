# IReportBox.Report

IReportBox.Report
-


# IReportBox.Report


## Синтаксис


Report: [IUiReport](../IUiReport/IUiReport.htm);


## Описание


Свойство Report определяет компонент
 UiReport, который будет использоваться как источник данных.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    ReportBox1.Report := UiReport1;

End Sub Button1OnClick; ;


После выполнения примера при нажатии на кнопку в качестве источника
 данных для объекта «ReportBox1» будет установлен компонент с наименованием
 «UiReport1».


См. также:


[IReportBox](IReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
