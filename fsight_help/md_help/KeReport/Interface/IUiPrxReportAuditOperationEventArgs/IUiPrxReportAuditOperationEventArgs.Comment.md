# IUiPrxReportAuditOperationEventArgs.Comment

IUiPrxReportAuditOperationEventArgs.Comment
-


# IUiPrxReportAuditOperationEventArgs.Comment


## Синтаксис


Comment: String;


## Описание


Свойство Comment определяет
 комментарий, который будет добавлен к системному примечанию при аудите
 операции.


## Комментарии


Комментарий отображается в столбце «Примечание» протокола доступа.


## Пример


Для выполнения примера необходим регламентный отчет, для которого должен
 быть определен обработчик событий - модуль, содержащий следующий код:


			Class EventsClass: ReportEvents


    Sub EventOnAuditOperation(Args: IUiPrxReportAuditOperationEventArgs);

    Var

        O: PrxReportAuditOperation;

        S: String;

    Begin

        O := Args.Operation;

        S := "";

        S := S + ((O And PrxReportAuditOperation.Print) <> 0 ? "My Print" :

            (O And PrxReportAuditOperation.Export) <> 0 ? "My Export" : "My Unknown");

        If Args.FromWeb Then

            S := S + " from Web";

        End If;

        If Args.Repeated Then

            S := S + " Repeated";

        End If;

        Args.Comment := S;

    End Sub EventOnAuditOperation;


End Class EventsClass;


При открытии/печати/экспорте отчета к системному примечанию записи протокола
 доступа будет добавлен соответствующий комментарий.


См. также:


[IUiPrxReportAuditOperationEventArgs](IUiPrxReportAuditOperationEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
