# IAdhocReport.PageSettings

IAdhocReport.PageSettings
-


# IAdhocReport.PageSettings


## Синтаксис


PageSettings: [IAdhocPageSettings](../IAdhocPageSettings/IAdhocPageSettings.htm);


## Описание


Свойство PageSettings возвращает
 настройки страницы аналитической панели.


## Комментарии


Настройки применяются только при печати аналитической панели и не влияют
 на её отображение в рабочей области.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «ADHOC». Добавьте ссылки на системные сборки
 «Adhoc», «Drawing», «Metabase».


			Sub UserProc;

Var

    mb: IMetabase;

    mbObj: IMetabaseObject;

    Dashboard: IAdhocReport;

    PageSett: IAdhocPageSettings;

    Margins: IGxPageMargins;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    mbObj := mb.ItemById("ADHOC").Edit;

    Dashboard := mbObj As IAdhocReport;

    // Получаем параметры страницы

    PageSett := Dashboard.PageSettings;

    // Задаем параметры страницы

    PageSett.PaperFormat := GxPaperFormat.A4;

    PageSett.PaperOrientation := GxPaperOrientation.Landscape;

    Margins := PageSett.Margins;

    Margins.Top := 20;

    Margins.Bottom := 20;

    // Сохраняем изменения в аналитической панели

    mbObj.Save;

End Sub UserProc;


Результат выполнения примера: для аналитической панели «ADHOC» изменены
 настройки печати страницы, изменения сохранены.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
