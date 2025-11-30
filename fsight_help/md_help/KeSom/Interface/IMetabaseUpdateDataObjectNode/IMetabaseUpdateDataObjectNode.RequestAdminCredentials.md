# IMetabaseUpdateDataObjectNode.RequestAdminCredentials

IMetabaseUpdateDataObjectNode.RequestAdminCredentials
-


# IMetabaseUpdateDataObjectNode.RequestAdminCredentials


## Синтаксис


RequestAdminCredentials: Boolean;


## Описание


Свойство RequestAdminCredentials
 определяет, будут ли запрашиваться учетные данные пользователя, если при
 установке обновления под текущим пользователем для выполнения операции
 недостаточно прав.


## Комментарии


По умолчанию свойство имеет значение False.
 В этом случае при отсутствии прав на вставку данных в таблицы запрос учетных
 данных не выдается, будет сгенерирована ошибка. При значении True
 будут запрошены учетные данные пользователя, обладающего правами на создание
 таблиц и вставку данных в соответствующей базе данных.


Настройка актуальна только для вставки данных в таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «Table_1». Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    MBDesc: IMetabaseObjectDescriptor;

    MUpdate: IMetabaseUpdate;

    ObjNode: IMetabaseUpdateDataObjectNode;

Begin

    Mb := MetabaseClass.Active;

    MBDesc := MB.ItemById("Table_1");

    MUpdate := MB.CreateUpdate;

    ObjNode := MUpdate.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    ObjNode.Label := MBDesc.Id;

    ObjNode.Method := MetabaseUpdateMethod.All;

    ObjNode.Object := MBDesc;

    ObjNode.BatchMode := ObjectUpdateDataBatchMode.UpdateInsert;

    ObjNode.RequestAdminCredentials := True;

    MUpdate.SaveToFileNF("c:\Update.pefx");

End Sub UserProc;


После выполнения примера будет создан файл обновления. При установке
 данного обновления в случае отсутствия прав на выполнение операции будет
 выдан запрос учетных данных.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
