# IAdhocReport.LoadFromFile

IAdhocReport.LoadFromFile
-


# IAdhocReport.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName. Путь и наименование
 файла, содержащего аналитическую панель.


## Описание


Метод LoadFromFile осуществляет
 загрузку аналитической панели из указанного файла формата PPDASH.


## Комментарии


Для сохранения аналитической панели в файл PPDASH используйте метод
 [IAdhocReport.SaveToFile](IAdhocReport.SaveToFile.htm).


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 «С» файла «Report.ppdash», содержащего отчет аналитической панели.


Добавьте ссылки на системные сборки: Adhoc и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    AdhocReport: IAdhocReport;

Begin

    MB := MetabaseClass.Active;

    // Создадим аналитическую панель

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_ADHOC_REPORT;

    CrInfo.Id := "NEW_ADHOC";

    CrInfo.Name := "Новая аналитическая панель";

    CrInfo.Parent := MB.Root;

    AdhocReport := MB.CreateObject(CrInfo).Edit As IAdhocReport;

    // Загрузим отчет в аналитическую панель

    AdhocReport.LoadFromFile("C:\Report.ppdash");

    (AdhocReport As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в корневом каталоге репозитория будет
 создана аналитическая панель с идентификатором «NEW_ADHOC». В аналитическую
 панель были загружены данные из файла «Report.ppdash».


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
