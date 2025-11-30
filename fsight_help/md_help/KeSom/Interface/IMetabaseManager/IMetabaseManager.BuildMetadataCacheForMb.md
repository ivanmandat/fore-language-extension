# IMetabaseManager.BuildMetadataCacheForMb

IMetabaseManager.BuildMetadataCacheForMb
-


# IMetabaseManager.BuildMetadataCacheForMb


## Синтаксис


BuildMetadataCacheForMb(Metabase: [IMetabaseDefinition](../IMetabaseDefinition/IMetabaseDefinition.htm));


## Параметры


Metabase. Описание репозитория,
 в котором необходимо обновить кеш метаданных.


## Описание


Метод BuildMetadataCacheForMb
 обновляет кеш метаданных репозитория с указанным описанием.


## Комментарии


Перед обновлением кеша для указанного репозитория рекомендуется вызвать
 метод [CleanMetadataCacheForMb](IMetabaseManager.CleanMetadataCacheForMb.htm).


## Пример


Для выполнения примера предполагается наличие описания репозитория с
 идентификатором «WAREHOUSE».


Добавьте ссылки на системные сборки: Metabase.


			Sub RebuildSelected;

Var

    MbMan: IMetabaseManager;

    MbDef: IMetabaseDefinition;

Begin

    MbMan := MetabaseManagerFactory.Active;

    MbDef := MbMan.Definitions.FindById("WAREHOUSE");

    Debug.WriteLine("Cleaning cache");

    MbMan.CleanMetadataCacheForMb(MbDef);

    Debug.WriteLine("Building cache");

    MbMan.BuildMetadataCacheForMb(MbDef);

    Debug.WriteLine("---Done---");

End Sub RebuildSelected;


При выполнении примера будет сброшен и обновлён кеш метаданных указанного
 репозитория.


См. также:


[IMetabaseManager](IMetabaseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
