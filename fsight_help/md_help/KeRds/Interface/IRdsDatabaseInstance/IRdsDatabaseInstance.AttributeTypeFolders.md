# IRdsDatabaseInstance.AttributeTypeFolders

IRdsDatabaseInstance.AttributeTypeFolders
-


# IRdsDatabaseInstance.AttributeTypeFolders


## Синтаксис


AttributeTypeFolders: [IRdsAttributeTypeFolders](../IRdsAttributeTypeFolders/IRdsAttributeTypeFolders.htm);


## Описание


Свойство AttributeTypeFolders
 возвращает параметры корневой папки справочника типов атрибутов репозитория
 НСИ.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    NSI: IRdsDatabase;

	    NSIInst: IRdsDatabaseInstance;

	    Folders: IRdsAttributeTypeFolders;

	Begin

	    MB := MetabaseClass.Active;

	    NSI := MB.ItemById("NSI_1").Edit As IRdsDatabase;

	    NSIInst := NSI.Open(Null);

	    Folders := NSIInst.AttributeTypeFolders;

	    Folders.Item(0).Name := "Корневая папка";

	    NSIInst.Save;

	    (NSI As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет переименована корневая папка справочника
 типов атрибутов репозитория НСИ.


См. также:


[IRdsDatabaseInstance](IRdsDatabaseInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
