# IUiPrxExportEventArgs.Format

IUiPrxExportEventArgs.Format
-


# IUiPrxExportEventArgs.Format


## Синтаксис


Format: [IExportFormat](ModDrawing.chm::/Interface/IExportFormat/IExportFormat.htm);


## Описание


Свойство Format возвращает информацию
 о формате, в который экспортируется отчет.


## Пример


			Sub UiReport1OnAfterExportReport(Sender: Object; Args: IUiPrxExportEventArgs);

Var

    Format: IExportFormat;

Begin

    Format := Args.Format;

    Debug.WriteLine(Format.Description);

    Debug.WriteLine(Format.FileExtension);

    Debug.WriteLine(Format.FilterString);

    Debug.WriteLine(Format.MimeType);

    Debug.WriteLine(Format.Tag);

End Sub UiReport1OnAfterExportReport;


После выполнения события в консоль среды разработки будет выведена информация
 о формате, в который произведен экспорт регламентного отчета.


См. также:


[IUiPrxExportEventArgs](IUiPrxExportEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
