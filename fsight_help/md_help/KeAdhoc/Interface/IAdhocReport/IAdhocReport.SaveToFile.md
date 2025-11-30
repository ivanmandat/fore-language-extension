# IAdhocReport.SaveToFile

IAdhocReport.SaveToFile
-


# IAdhocReport.SaveToFile


## Синтаксис


SaveToFile(FileName: String);


## Параметры


FileName. Путь и наименование
 файла, в который будет сохраненена аналитическая панель.


## Описание


Метод SaveToFile осуществляет
 сохранение аналитической панели в указанный файл формата PPDASH.


## Комментарии


Для загрузки аналитической панели из файла PPDASH используйте метод
 [IAdhocReport.LoadFromFile](IAdhocReport.LoadFromFile.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC».


Добавьте ссылки на системные сборки: Adhoc и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    AdhocReport: IAdhocReport;

Begin

    MB := MetabaseClass.Active;

    AdhocReport := MB.ItemById("ADHOC").Bind As IAdhocReport;

    AdhocReport.SaveToFile("C:\Report.ppdash");

End Sub UserProc;


В результате выполнения примера отчет сохранен в файл «Report.ppdash»


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
