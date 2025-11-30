# IExportRequestParams.WhereIsEmpty

IExportRequestParams.WhereIsEmpty
-


# IExportRequestParams.WhereIsEmpty


## Синтаксис


WhereIsEmpty: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство WhereIsEmpty определяет,
 экспортировать ли временные ряды, для которых установлен признак пустоты.


## Комментарии


Допустимые значения:


	- TriState.OnOption. Пустые
	 временные ряды экспортируются;


	- TriState.OffOption.
	 Экспортируются только непустые временные ряды;


	- TriState.Undefined.
	 Значение по умолчанию. Экспортируются все временные ряды.


Свойство [IRubricator.HasEmptyAttribute](../IRubricator/IRubricator.HasEmptyAttribute.htm)
 определяет, присутствует ли в базе данных временных рядов признак пустоты
 временные ряды.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «FC_IS_EMPTY», содержащей объект экспорта с идентификатором
 «OBJ_EXPORT». Добавьте ссылки на системные сборки «Metabase», «Cubes».


			Sub UserProc;

Var

    MB: IMetabase;

    RubKey: Integer;

    Obj: IMetabaseObject;

    ExportRequestDef: IExportRequestDefinition;

    Params: IExportRequestParams;

    ExportRequestInst: IExportRequestInstance;

Begin

// Получаем объект экспорта

    MB := MetabaseClass.Active;

    RubKey := MB.GetObjectKeyById("FC_IS_EMPTY");

    Obj := MB.ItemByIdNamespace("OBJ_EXPORT", RubKey).Edit;

    ExportRequestDef := Obj As IExportRequestDefinition;

// Редактируем параметры экспорта

    Params := ExportRequestDef.Exporter;

    Params.WhereIsEmpty := TriState.OffOption;

    Obj.Save;

// Экспорт

    ExportRequestInst := (ExportRequestDef As IMetabaseObjectDescriptor).Open(Null) As IExportRequestInstance;

    ExportRequestInst.Export;

End Sub UserProc;


После выполнения примера непустые временные ряды из базы будут выгружены
 в приёмник, указанный в объекте экспорта.


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
