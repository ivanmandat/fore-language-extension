# IAdhocBulkSettings.SelectionSet

IAdhocBulkSettings.SelectionSet
-


# IAdhocBulkSettings.SelectionSet


## Синтаксис


SelectionSet: [IAdhocBulkSelectionSet](../IAdhocBulkSelectionSet/IAdhocBulkSelectionSet.htm);


## Описание


Свойство SelectionSet возвращает
 отметку фиксированных измерений, в соответствии с которой будут созданы
 варианты аналитической панели для выполнения пакетной операции.


## Комментарии


Количество вариантов аналитической панели, для которых будет выполнена
 операция, равно декартовому произведению отмеченных элементов в измерениях.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Buttin1», компонент DimensionTree с идентификатором
 «DimensionTree1» и компонент UiDimension с идентификатором «UiDimension1».
 Укажите «UiDimension1» в качестве источника данных для компонента «DimensionTree1».
 В репозитории должна быть создана аналитическая панель с наименованием
 «AN_PANEL».


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылки на системные сборки «Dimensions» и «Metabase».


			Class TESTForm: Form

    Button1: Button;

    UiDimension1: UiDimension;

    DimensionTree1: DimensionTree;

    adhoc: IAdhocReport;

    adhoc_dim: IAdhocDsoDimension;

    sel: IDimSelection;


Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

Begin

    // Получаем отметку

    adhoc := MetabaseClass.Active.ItemById("AN_PANEL").Edit As IAdhocReport;

    adhoc_dim := adhoc.Synchronization.Dimensions.Item(0).Dimensions.Item(0).Dimension;

    UiDimension1.Instance := adhoc_dim.Selection.Dimension;

    sel := UiDimension1.Selection;

End Sub TESTFormOnCreate;

…

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    exp: IAdhocReportExporter;

    bulk: IAdhocBulkSettings;

    bulk_sel: IAdhocBulkSelection;

    bulk_sel_set: IAdhocBulkSelectionSet;

Begin

    // Выполняем экспорт

    exp := New AdhocReportExporter.Create;

    exp.AdhocReport := adhoc;

    bulk := New AdhocBulkSettings.Create;

    exp.BulkSettings := bulk;

    bulk.Enabled := True;

    bulk_sel_set := bulk.SelectionSet;

    bulk_sel := bulk_sel_set.Add(adhoc_dim);

    sel.CopyTo(bulk_sel.Selection, True);

    exp.ExportToFile("C:\Result.xls", "XLS");

End Sub Button1OnClick;


End Class TESTForm ;


После выполнения примера данные аналитической панели будут экспортированы
 в файл «C:\Result.xls».


См. также:


[IAdhocBulkSettings](IAdhocBulkSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
