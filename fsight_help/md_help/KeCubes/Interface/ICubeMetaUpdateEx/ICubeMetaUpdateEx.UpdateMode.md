# ICubeMetaUpdateEx.UpdateMode

ICubeMetaUpdateEx.UpdateMode
-


# ICubeMetaUpdateEx.UpdateMode


## Синтаксис


UpdateMode: [CubeLoadClearMode](../../Enums/CubeLoadClearMode.htm);


## Описание


Свойство UpdateMode определяет
 режим обновления существующей базы данных временных рядов.


## Комментарии


Свойство актуально, если задано свойство [TargetRubricator](ICubeMetaUpdateEx.TargetRubricator.htm)
 и свойству [CopyData](ICubeMetaUpdateEx.CopyData.htm)
 установлено значение True. По
 умолчанию свойству UpdateMode
 установлено значение [CubeLoadClearMode.Default_](../../Enums/CubeLoadClearMode.htm),
 при этом будут обновлены данные и метаданные всех объектов, включенных
 в состав объекта копирования. Изменяя свойство UpdateMode,
 можно изменить режим обновления объектов, отвечающих за хранение информации
 по рядам данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_RUBRICATOR» и репозитория НСИ с
 идентификатором «RDS», в котором хранятся необходимые справочники. Также
 имеется файл «rub_v1.zip», в который была сохранена БД временных рядов,
 и на основании которого будет обновлена БД временных рядов - «OBJ_RUBRICATOR».


			Sub UserProc;

Var

    MB: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

Begin

    MB := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create;

    RubUpdateEx.Metabase := MB;

    RubUpdateEx.TargetRubricator := MB.ItemById("OBJ_RUBRICATOR").Edit As IRubricator;

    RubUpdateEx.RdsDatabase := MB.ItemById("RDS").Bind As IRdsDatabase;

    RubUpdateEx.CopyData := True;

    RubUpdateEx.CopyExtraObjects := True;

    RubUpdateEx.UpdateMode := CubeLoadClearMode.MetadataOnly;

    RubUpdateEx.Load("c:\rub_v1.zip");

    RubUpdateEx.Apply(Null);

End Sub UserProc;


При выполнении примера будет создан экземпляр объекта, предназначенного
 для копирования баз данных временных рядов. С помощью данного объекта
 после настройки параметров, в соответствии с загруженной из файла информацией,
 будут обновлены метаданные рядов в базе данных временных рядов «OBJ_RUBRICATOR».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
