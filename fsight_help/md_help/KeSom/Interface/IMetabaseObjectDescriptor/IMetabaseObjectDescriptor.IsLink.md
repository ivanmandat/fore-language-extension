# IMetabaseObjectDescriptor.IsLink

IMetabaseObjectDescriptor.IsLink
-


# IMetabaseObjectDescriptor.IsLink


## Синтаксис


IsLink: Boolean;


## Описание


Свойство IsLink возвращает признак
 того, что данный объект находится в другом репозитории.


## Комментарии


Свойство актуально для ярлыков, ссылающихся на объекты из другого репозитория.
 Объект, на который ссылается ярлык, будет доступен после открытия ярлыка,
 в свойстве [IMetabaseObjectInstance.Object](../IMetabaseObjectInstance/IMetabaseObjectInstance.Object.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором ObjTest.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    MInst: IMetabaseObjectInstance;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("ObjTest");

	    If MDesc.IsLink Then

	        MInst := MDesc.Open(Null);

	        Debug.WriteLine(MInst.Object.Id);

	    End If;

	End Sub UserProc;


После выполнения если указанный объект является ярлыком для объекта
 из другого репозитория, то в консоль среды разработки будет выведен идентификатор
 объекта, на который ссылается данный ярлык.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
