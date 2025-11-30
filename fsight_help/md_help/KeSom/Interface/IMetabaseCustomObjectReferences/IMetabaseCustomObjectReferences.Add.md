# IMetabaseCustomObjectReferences.Add

IMetabaseCustomObjectReferences.Add
-


# IMetabaseCustomObjectReferences.Add


## Синтаксис


Add(Object: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 [IMetabaseCustomObjectReference](../IMetabaseCustomObjectReference/IMetabaseCustomObjectReference.htm);


## Параметры


Object. Объект репозитория,
 от которого должен зависеть объект.


## Описание


Метод Add осуществляет добавление
 зависимости в коллекцию.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM» и объекта с идентификатором
 «OBJ_REF».


Добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    Object: IMetabaseObject;

	    CustomObject: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	    References: IMetabaseCustomObjectReferences;

	Begin

	    Mb := MetabaseClass.Active;

	    Object := Mb.ItemById("OBJ_CUSTOM").Edit;

	    CustomObject := Object As IMetabaseCustomObject;

	    Writer := CustomObject.CreateWriter;

	    References := Writer.References;

	    References.Add(Mb.ItemById("OBJ_REF"));

	    Writer.Save;

	    Object.Save;

	End Sub Button1OnClick;


После выполнения примера в список объектов, от которых зависит «OBJ_CUSTOM»,
 будет добавлен объект «OBJ_REF».


См. также:


[IMetabaseCustomObjectReferences](IMetabaseCustomObjectReferences.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
