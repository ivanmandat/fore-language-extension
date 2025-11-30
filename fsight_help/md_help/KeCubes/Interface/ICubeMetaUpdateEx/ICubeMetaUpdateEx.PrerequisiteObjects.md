# ICubeMetaUpdateEx.PrerequisiteObjects

ICubeMetaUpdateEx.PrerequisiteObjects
-


# ICubeMetaUpdateEx.PrerequisiteObjects


## Синтаксис


PrerequisiteObjects: [ICubeMetaUpdateAdditionalObjects](../ICubeMetaUpdateAdditionalObjects/ICubeMetaUpdateAdditionalObjects.htm);


## Описание


Свойство PrerequisiteObjects
 возвращает коллекцию объектов, которые должны быть скопированы перед копированием
 базы данных временных рядов.


## Комментарии


Объекты, указанные в данной коллекции, копируются перед базой данных
 временных рядов, поэтому не должны зависеть от неё. Данная коллекция предназначена
 для копирования различных справочников НСИ и других внешних объектов,
 от которых может зависеть база данных временных рядов или ее содержимое.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC». В данной базе создан атрибут,
 ссылающийся на справочник НСИ «Users». Данный справочник хранится в репозитории
 НСИ с идентификатором «NSI_1».


			Sub UserProc;

Var

    Mb: IMetabase;

    Update: ICubeMetaUpdateEx;

    Rubr: IRubricator;

    Dict: IMetabaseObjectDescriptor;

    Prerequisite: ICubeMetaUpdateAdditionalObjects;

    PrerequisiteDict: ICubeMetaUpdateAdditionalObject;

    DataSettings: ICubeMetaUpdateAdditionalObjectDataSettings;

Begin

    Mb := MetabaseClass.Active;

    Update := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    // Копируемая база данных
 временных рядов

    Rubr := Mb.ItemById("FC").Bind As IRubricator;

    Update.Rubricator := Rubr;

    // Копировать вместе с данными

    Update.CopyData := True;

    // Объекты, копируемые
 перед базой

    Prerequisite := Update.PrerequisiteObjects;

    Dict := Mb.ItemByIdNamespace("Users", Mb.ItemById("NSI_1").Key);

    PrerequisiteDict := Prerequisite.Add(Dict);

    // Копировать справочник НСИ вместе с дочерними объектами

    // (схемы отметок, группы элементов, альтернативные иерархии);

    PrerequisiteDict.IncludeChildren := True;

    // Параметры копирования
 данных

    DataSettings := PrerequisiteDict.DataSettings;

    DataSettings.BatchMode := ObjectUpdateDataBatchMode.InsertOnly;

    DataSettings.IncludeData := True;

    DataSettings.ReferenceConstraintsHandling := UpdateDataConstraintsHandlingType.ErrorBreak;

    DataSettings.UpdateRdsSequence := True;

    Update.Save("c:\Fc.zip");

End Sub UserProc;


При выполнении примера будет скопирована и сохранена в файл «Fc.zip»
 база данных временных рядов. В копию будет включен справочник НСИ, от
 которого зависит данная база. Справочник будет скопирован со всеми дочерними
 объектами. Также для справочника будут определены параметры копирования
 данных. Так как база данных временных рядов зависит от справочника, то
 при создании копии базы сначала будет производиться копирование справочника
 НСИ. При копировании будет обновлено значение системной последовательности
 репозитория.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
