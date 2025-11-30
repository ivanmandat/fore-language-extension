# IMetabaseObjectDescriptor.SetIdNoCheck

IMetabaseObjectDescriptor.SetIdNoCheck
-


# IMetabaseObjectDescriptor.SetIdNoCheck


## Синтаксис


		SetIdNoCheck(Id: String);


## Параметры


Id. Идентификатор, который
 необходимо установить для объекта.


## Описание


Метод SetIdNoCheck осуществляет
 изменение идентификатора объекта без проверки на соответствие установленному
 формату идентификаторов.


## Комментарии


Метод актуально использовать если для репозитория установлен какой-либо
 [формат
 идентификаторов](../IMetabasePolicy/IMetabasePolicy.ObjectsIdFormat.htm). Если формат идентификаторов не установлен, то для
 изменения идентификатора объекта необходимо изменить свойство [IMetabaseObjectDescriptor.Id](IMetabaseObjectDescriptor.Id.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := MB.ItemById("Obj_1");

		    MDesc := MDesc.EditDescriptor;

		    MDesc.SetIdNoCheck(MDesc.Id + "_Old");

		    MDesc.SaveDescriptor;

		End Sub UserProc;


После выполнения примера для объекта будет изменен идентификатор. Проверка
 на соответствие установленному формату идентификаторов осуществляться
 не будет.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
