# IExportRequestParams.ExportMode

IExportRequestParams.ExportMode
-


# IExportRequestParams.ExportMode


## Синтаксис


ExportMode: [CubeLoadClearMode](../../Enums/CubeLoadClearMode.htm);


## Описание


Свойство ExportMode определяет
 режим экспорта временных рядов.


## Комментарии


Если задан период экспорта временных рядов, то на него влияет значение
 свойства ExportMode. Подробнее
 см. в описании свойства [IExportRequestParams.AutoPeriod](IExportRequestParams.AutoPeriod.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB», содержащей объект экспорта с
 идентификатором «OBJ_EXPORTREQUEST».


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    RubKey: Integer;

    Obj: IMetabaseObject;

    ExportRequestDef: IExportRequestDefinition;

    Params: IExportRequestParams;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем ключ базы данных временных рядов

    RubKey := MB.GetObjectKeyById("TSDB");

    // Получаем объект экспорта

    Obj := MB.ItemByIdNamespace("OBJ_EXPORTREQUEST", RubKey).Edit;

    // Получаем параметры экспорта

    ExportRequestDef := Obj As IExportRequestDefinition;

    Params := ExportRequestDef.Exporter;

    // Указываем, что будут экспортироваться только значения точек

    Params.ExportMode := CubeLoadClearMode.DataOnly;

    // Сохраняем изменения

    Obj.Save;

End Sub UserProc;


В результате выполнения примера для объекта экспорта «OBJ_EXPORTREQUEST»
 будет изменен режим экспорта.


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
