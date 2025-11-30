# IAdhocReport.InnerStyleSheet

IAdhocReport.InnerStyleSheet
-


# IAdhocReport.InnerStyleSheet


## Синтаксис


StyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство InnerStyleSheet возвращает
 внутреннюю таблицу стилей.


## Комментарии


Внутренняя таблица стилей позволяет хранить собственные стили аналитической
 панели. Также для работы может быть подключена внешняя таблица стилей.
 Для этого используйте свойство [IAdhocReport.StyleSheet](IAdhocReport.StyleSheet.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором DASHBOARD.


Добавьте ссылки на системные сборки: Adhoc, Drawing, Metabase, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    AdhocReport: IAdhocReport;

    StyleSheet: IStyleSheet;

    Style: IStyleContainer;

    TabSt: ITabCellStyle;

Begin

    MB := MetabaseClass.Active;

    AdhocReport := MB.ItemById("DASHBOARD").Edit As IAdhocReport;

    StyleSheet := AdhocReport.InnerStyleSheet;

    StyleSheet.Clear;

    Style := StyleSheet.Add;

    // Новый стиль

    TabSt := New TabCellStyle.Create;

    TabSt.Font.Name := "Times New Roman";

    TabSt.Font.Size := 16;

    TabSt.Font.Color := GxColor.FromName("Red");

    // Сохранение стиля

    (TabSt As IStyledEntity).SaveStyleToContainer(Style);

    (AdhocReport As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера во внутренней таблице стилей аналитической панели
 будет создан новый стиль для текста. Все имеющиеся стили перед созданием
 будут удалены.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
