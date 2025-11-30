# IMetabaseSecurityExporter.ExportPolicy

IMetabaseSecurityExporter.ExportPolicy
-


# IMetabaseSecurityExporter.ExportPolicy


## Синтаксис


ExportPolicy;


## Описание


Метод ExportPolicy производит экспорт настроек политики безопасности.


## Комментарии


Перед вызовом метода следует определить имя и расположение файла (свойство [FileName](IMetabaseSecurityExporter.FileName.htm)), в который будет произведен экспорт.


## Пример


    Sub UserProc;

    Begin

        With Exporter: MetabaseClass.Active.Security.CreateExporter

        Do

            Exporter.FileName := "C:\MetabasePolicy.csv";
            Exporter.FileAppend := True;

            Exporter.ExportPolicy;
        End With;

    End Sub UserProc;


После выполнения примера будет произведен экспорт настроек политики безопасности в указанный файл. Если файл уже существовал, то он будет дописан.


См. также:


[IMetabaseSecurityExporter](IMetabaseSecurityExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
