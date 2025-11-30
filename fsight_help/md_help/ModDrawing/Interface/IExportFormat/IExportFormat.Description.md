# IExportFormat.Description

IExportFormat.Description
-


# IExportFormat.Description


## Синтаксис


Description: String;


## Описание


Свойство Description возвращает
 описание формата, в который производится экспорт.


## Пример


Указанный пример является глобальным обработчиком вычисления экспресс-отчётов.


			Class ExpressRep_Events: ExpressEvents

    // Реализует событие, наступающее после экспорта экспресс-отчёта

    Public Sub OnAfterExportAnalyzer(Args: IEaxAfterExportEventArgs);

    Var

        Format: IExportFormat;

    Begin

        Format := Args.Format;

        Debug.WriteLine(Format.Description);

        Debug.WriteLine(Format.FileExtension);

        Debug.WriteLine(Format.FilterString);

        Debug.WriteLine(Format.MimeType);

        Debug.WriteLine(Format.Tag);

    End Sub OnAfterExportAnalyzer;

End Class ExpressRep_Events;


После выполнения экспорта отчёта в консоль среды разработки будет выведена
 информация о формате, в который произведён экспорт.


См. также:


[IExportFormat](IExportFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
