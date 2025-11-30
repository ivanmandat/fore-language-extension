# IReportObjectEventArgs.Object

IReportObjectEventArgs.Object
-


# IReportObjectEventArgs.Object


## Синтаксис


Object: [ITabObject](TabSheet.chm::/Interface/ITabObject/ITabObject.htm);


## Описание


Свойство Object возвращает объект,
 расположенный на листе регламентного отчета, сгенерировавший событие.


## Пример


В рассматриваемом примере предполагается существование объекта ReportBox1
 типа ReportBox.


			Sub ReportBox1OnObjectActivate(Sender: Object; Args: IReportObjectEventArgs);

Begin

    WinApplication.InformationBox(Args.Object.ClassId);

End Sub ReportBox1OnObjectActivate;


После наступления события будет выдано сообщение с типом объекта.


См. также:


[IReportObjectEventArgs](IReportObjectEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
