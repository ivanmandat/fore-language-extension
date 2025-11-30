# IReportControlPanel.BorderStyle

IReportControlPanel.BorderStyle
-


# IReportControlPanel.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](ModForms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 вид (стиль) границы компонента ReportControlPanel.


## Пример


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    ReportControlPanel1.BorderStyle := ControlBorderStyle.Single;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента с наименованием
 «ReportControlPanel1» будет установлен объемный вид.


См. также:


[IReportControlPanel](IReportControlPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
