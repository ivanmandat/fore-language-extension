# IDimSelection.ApplySelectionSchemaOnRebuild

IDimSelection.ApplySelectionSchemaOnRebuild
-


# IDimSelection.ApplySelectionSchemaOnRebuild


## Синтаксис


ApplySelectionSchemaOnRebuild: Boolean;


## Описание


Свойство ApplySelectionSchemaOnRebuild
 определяет, применять ли схему отметки только при перестроении измерения.


## Комментарии


Если заданы оба свойства ApplySelectionSchemaOnRebuild
 и [IDimSelection.ApplySelectionSchemaOnlyOnce](IDimSelection.ApplySelectionSchemaOnlyOnce.htm),
 то при первом построении измерения обрабатывается только [IDimSelection.ApplySelectionSchemaOnlyOnce](IDimSelection.ApplySelectionSchemaOnlyOnce.htm),
 при последующих - ApplySelectionSchemaOnRebuild.


Допустимые значения:


	- True. Выбранная схема
	 отметки будет применяться при каждом перестроении измерения;


	- False. Значение по умолчанию. Схема
	 отметки элементов будет применяться всегда.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 c идентификатором «EXP_REP_ASSOR», источником данных для которого является
 стандартный куб, включающий табличный справочник НСИ «DIC_RF».
 Для справочника создана схема отметки «SCHEMA_OTM».


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Eax: IEaxAnalyzer;

    DimSelection: IDimSelection;

    Dict: IMetabaseObjectDescriptor;

    Schema: IDimSelectionSchema;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    MObj := MB.ItemById("EXP_REP_ASSOR").Edit;

    // Получим табличный справочник НСИ

    Dict := MB.ItemById("DIC_RF");

    // Получим схему отметки

    Schema := MB.ItemByIdNamespace("SCHEMA_OTM", Dict.Key).Edit As IDimSelectionSchema;

    Eax := MObj As IEaxAnalyzer;

    DimSelection := Eax.Pivot.Selection.FindById("DIC_RF");

    // Зададим применение схемы отметки при перестроении измерения

    DimSelection.ApplySelectionSchemaOnRebuild := True;

    DimSelection.SelectionSchema := Schema;

    // Сохраним экспресс-отчет

    Mobj.Save;

End Sub UserProc;


В результате выполнения примера схема отметки будет применяться при
 каждом перестроении измерения.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
