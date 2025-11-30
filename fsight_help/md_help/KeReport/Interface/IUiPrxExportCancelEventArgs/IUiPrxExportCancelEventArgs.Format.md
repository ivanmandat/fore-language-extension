# IUiPrxExportCancelEventArgs.Format

IUiPrxExportCancelEventArgs.Format
-


# IUiPrxExportCancelEventArgs.Format


## Синтаксис


Format: [IExportFormat](ModDrawing.chm::/Interface/IExportFormat/IExportFormat.htm);


## Описание


Свойство Format возвращает формат,
 в который экспортируется отчет.


## Пример


			Sub EventOnBeforeExportReport(Args: IUiPrxExportCancelEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Отчет " + Args.Report.MetabaseObject.Id + " экспортируется в формат " + Args.Format.FilterString + " ?");

End Sub EventOnBeforeExportReport;


При наступлении события будет выдан диалог подтверждения экспорта отчета
 в заданный формат. Сообщение будет содержать идентификатор отчета и формат,
 в который он экспортируется. При положительном ответе отчет будет экспортирован,
 в противном случае нет.


См. также:


[IUiPrxExportCancelEventArgs](IUiPrxExportCancelEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
