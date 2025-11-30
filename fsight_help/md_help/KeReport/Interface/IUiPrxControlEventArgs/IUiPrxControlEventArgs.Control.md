# IUiPrxControlEventArgs.Control

IUiPrxControlEventArgs.Control
-


# IUiPrxControlEventArgs.Control


## Синтаксис


Control: [IPrxControl](../IPrxControl/IPrxControl.htm);


## Описание


Свойство Control возвращает
 элемент управления регламентного отчета, который будет удалён, или значение
 которого было изменено.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета, в котором содержится элемент управления. [Подключите](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm) модуль
 в регламентный отчет, в качестве обработчика событий выберите подключенный
 модуль и класс EventsClass.


Добавьте ссылки на системные сборки: Report, Ui.


			Class EventsClass: ReportEvents

// Изменение значения элемента
 управления

Sub EventOnChangeControlValue(Args: IUiPrxControlEventArgs);

Begin

    WinApplication.InformationBox("Изменено значение элемента управления " + Args.Control.Id);

End Sub EventOnChangeControlValue;

End Class EventsClass;


При наступлении события будет выдано информационное сообщение, содержащее
 идентификатор элемента управления, значение которого было изменено.


См. также:


[IUiPrxControlEventArgs](IUiPrxControlEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
