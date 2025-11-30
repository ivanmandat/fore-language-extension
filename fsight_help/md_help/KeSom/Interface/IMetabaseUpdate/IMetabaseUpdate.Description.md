# IMetabaseUpdate.Description

IMetabaseUpdate.Description
-


# IMetabaseUpdate.Description


## Синтаксис


		Description:
		 String;


## Описание


Свойство Description определяет
 сопроводительный текст, отображаемый в мастере установки обновления перед
 началом установки.


## Пример


Для выполнения примера в репозитории предполагается наличие наличие
 таблицы с идентификатором TABLE.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MBDesc: IMetabaseObjectDescriptor;

		    MUpdate: IMetabaseUpdate;

		    ObjNode: IMetabaseUpdateDataObjectNode;

		Begin

		    MB := MetabaseClass.Active;

		    MBDesc := MB.ItemById("TABLE");

		    MUpdate := MB.CreateUpdate;

		    MUpdate.Description :="Будет обновлена таблица";

		    ObjNode := MUpdate.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

		    ObjNode.Label := MBDesc.Id;

		    ObjNode.Method := MetabaseUpdateMethod.All;

		    ObjNode.Object := MBDesc;

		    ObjNode.BatchMode :=ObjectUpdateDataBatchMode.InsertOnly;

		    MUpdate.SaveToFileNF("c:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера будет создано обновление, для которого
 будет задан сопроводительный текст. Обновление будет содержать таблицу,
 данные которой будут только дополнены новыми записями.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
