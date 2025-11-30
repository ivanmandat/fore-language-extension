# IUiReportBaseEventArgs.UiRep

IUiReportBaseEventArgs.UiRep
-


# IUiReportBaseEventArgs.UiRep


## Синтаксис


UiRep: [IUiReport](../IUiReport/IUiReport.htm);


## Описание


Свойство UiRep возвращает объект,
 содержащий компонент [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm),
 сгенерировавший событие.


## Пример


			Sub UiReport1OnAfterActivateSheet(Sender: Object; Args: IUiPrxActivateSheetEventArgs);

Var

    Arg: IUiReportBaseEventArgs;

Begin

    Arg := Args As IUiReportBaseEventArgs;

    s := Arg.UiRep.Name;

End Sub UiReport1OnAfterActivateSheet;


После выполнения примера в переменной «s» будет содержаться наименование
 компонента UiReport, который сгенерировал событие OnAfterActivateSheet.


См. также:


[IUiReportBaseEventArgs](IUiReportBaseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
