# IAdhocReport.SaveToCombinedXML

IAdhocReport.SaveToCombinedXML
-


# IAdhocReport.SaveToCombinedXML


## Синтаксис


SaveToCombinedXML(Destination: Variant);


## Параметры


Destination. Путь и наименование
 XML-файла, в который будут сохранены параметры аналитической панели со
 слайдами.


## Описание


Метод SaveToCombinedXML сохраняет
 настройки аналитической панели со слайдами в указанный XML-файл.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели со [слайдами](UiAdhoc.chm::/Presentation/Presentation.htm)
 с идентификатором DASHBOARD.


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dashboard: IAdhocReport;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим аналитическую панель

    MObj := MB.ItemById("DASHBOARD").Edit;

    Dashboard := MObj As IAdhocReport;

    // Сохраним параметры аналитической панели и слайдов в файл

    Dashboard.SaveToCombinedXML("c:\Report.xml");

End Sub UserProc;


После выполнения примера параметры аналитической панели и слайдов будут
 сохранены в указанный XML-файл.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
