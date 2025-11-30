# IDimSelection.ElementGroup

IDimSelection.ElementGroup
-


# IDimSelection.ElementGroup


## Синтаксис


ElementGroup: [IDimElementGroup](../IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство ElementGroup определяет
 группу элементов измерения, включающую элементы, которые должны присутствовать
 в списке доступных.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO», в котором создана группа элементов с идентификатором
 «obj38» и экспресс-отчет с идентификатором «EXPRESS_REPORT». Добавьте
 ссылки на системные сборки «Pivot», «Metabase», «Express» и
 «Dimensions».


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Eax: IEaxAnalyzer;

    DimSelection: IDimSelection;

    DimGroup: IDimElementGroup;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("EXPRESS_REPORT").Bind;

    DimGroup := MB.ItemByIdNamespace("OBJ38", MB.ItemById("D_TO").Key).Bind As IDimElementGroup;

    Eax := MObj As IEaxAnalyzer;

    DimSelection := Eax.Pivot.Selection.FindById("D_TO");

    DimSelection.ElementGroup := DimGroup;

    DimSelection.AllowChangeElementGroup := False;

End Sub UserProc;


После выполнения примера в справочнике будет отображаться только выбранная
 группа элементов.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
