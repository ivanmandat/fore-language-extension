# IMetabaseUpdate.AllowReplaceSD

IMetabaseUpdate.AllowReplaceSD
-


# IMetabaseUpdate.AllowReplaceSD


## Синтаксис


		AllowReplaceSD:
		 Boolean;


## Описание


Свойство AllowReplaceSD определяет
 возможность замены списка контроля доступа безопасности для объектов обновления.


## Комментарии


Допустимые значения:


	- True. Замена списка
	 контроля доступа безопасности для объектов обновления возможна;


	- False. Замена списка
	 контроля доступа безопасности для объектов обновления невозможна.
	 В этом случае значение [ReplaceSecurityDescriptor](../../Enums/MetabaseObjectUpdatePart.htm)
	 у элемента обновления игнорируется.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx,
 в котором есть элемент с идентификатором OBJ1, представляющий собой объект
 репозитория или специальный объект.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    UON: IMetabaseUpdateObjectNode;

		    obj: IMetabaseObjectDescriptor;

		    objkey: integer;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFileNF("C:\Update.pefx");

		    obj := MB.ItemById("OBJ1");

		    objkey := obj.Key;

		    Update.AllowReplaceSD := True;

		    UON := Update.RootFolder.FindObject(objkey);

		    UON.UpdatePart := MetabaseObjectUpdatePart.ReplaceSecurityDescriptor;

		    Update.SaveToFileNF("C:\Update_AR.pefx");

		End Sub UserProc;


В результате выполнения примера в папку C:\ сохранится файл обновления
 с изменённым списком контроля доступа для объекта с идентификатором OBJ1.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
