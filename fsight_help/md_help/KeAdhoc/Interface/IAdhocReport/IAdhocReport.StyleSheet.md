# IAdhocReport.StyleSheet

IAdhocReport.StyleSheet
-


# IAdhocReport.StyleSheet


## Синтаксис


StyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство StyleSheet определяет
 внешнюю таблицу стилей.


## Комментарии


Для работы с внутренней таблицей стилей используйте свойство [IAdhocReport.InnerStyleSheet](IAdhocReport.InnerStyleSheet.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором DASHBOARD и таблицы стилей с идентификатором
 GLOBAL_STYLE.


Добавьте ссылки на системные сборки: Adhoc, Drawing, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    AdhocReport: IAdhocReport;

    StyleSheet: IStyleSheet;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим аналитическую панель

    MObj := MB.ItemById("DASHBOARD").Edit;

    AdhocReport := MObj As IAdhocReport;

    // Применим таблицу стилей

    StyleSheet := MB.ItemById("GLOBAL_STYLE").Bind As IStyleSheet;

    AdhocReport.StyleSheet := StyleSheet;

    // Сохраним отчет

    MObj.Save;

End Sub UserProc;


При выполнении примера для аналитической панели в качестве набора стилей
 оформления будет назначена внешняя таблица стилей.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
