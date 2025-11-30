# IReportScaleChangeEventArgs.Scale

IReportScaleChangeEventArgs.Scale
-


# IReportScaleChangeEventArgs.Scale


## Синтаксис


Scale: Double;


## Описание


Свойство Scale возвращает масштаб,
 который будет установлен для листа регламентного отчета.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnScaleChange(Sender: Object; Args: IReportScaleChangeEventArgs);

Begin

    WinApplication.InformationBox(Args.Scale.ToString);

End Sub ReportBox1OnScaleChange;


После изменения масштаба будет выдано сообщение, содержащее установленное
 значение.


См. также:


[IReportScaleChangeEventArgs](IReportScaleChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
