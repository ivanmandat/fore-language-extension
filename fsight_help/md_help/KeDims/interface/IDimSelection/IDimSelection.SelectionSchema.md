# IDimSelection.SelectionSchema

IDimSelection.SelectionSchema
-


# IDimSelection.SelectionSchema


## Синтаксис


SelectionSchema: [IDimSelectionSchema](../IDimSelectionSchema/IDimSelectionSchema.htm);


## Описание


Свойство SelectionSchema определяет
 схему отметки элементов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO», в котором создана схема отметки элементов с
 идентификатором «Schema_1» и экспресс-отчет с идентификатором «EXPRESS_REPORT».


			Sub Main;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Eax: IEaxAnalyzer;

    DimSelection: IDimSelection;

    schema: IDimSelectionSchema;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

    schema := MB.ItemByIdNamespace("Schema_1", MB.ItemById("D_TO").Key).Edit As IDimSelectionSchema;

    Eax := MObj As IEaxAnalyzer;

    DimSelection := Eax.Pivot.Selection.FindById("D_TO");

    DimSelection.ApplySelectionSchemaOnlyOnce := True;

   DimSelection.SelectionSchema := schema;

    Mobj.Save;

End Sub Main;


После выполнения примера при открытии справочника будет применена схема
 отметки элементов с идентификатором «Schema_1». В дальнейшем отметку элементов
 можно изменить.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
