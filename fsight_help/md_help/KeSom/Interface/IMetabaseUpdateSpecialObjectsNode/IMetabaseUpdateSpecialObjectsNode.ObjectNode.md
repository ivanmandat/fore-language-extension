# IMetabaseUpdateSpecialObjectsNode.ObjectNode

IMetabaseUpdateSpecialObjectsNode.ObjectNode
-


# IMetabaseUpdateSpecialObjectsNode.ObjectNode


## Синтаксис


ObjectNode(Index: [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm)):
 [IMetabaseUpdateObjectNode](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.htm);


## Параметры


Index. Тип специального объекта.


## Описание


Свойство ObjectNode возвращает
 элемент дерева обновления, соответствующий специальному объекту.


## Комментарии


Если указанный специальный объект не включен в обновление, то свойство
 вернет значение Null.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 C файла обновления Update.pef.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Update: IMetabaseUpdate;

	    SpecialObjNode: IMetabaseUpdateSpecialObjectsNode;

	    Node: IMetabaseUpdateObjectNode;

	Begin

	    Mb := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFile("C:\Update.pef");

	    SpecialObjNode := Update.SpecialObjectsNode;

	    Node := SpecialObjNode.ObjectNode(MetabaseSpecialObject.DefaultTopobase);

	    If Node <> Null Then

	        Debug.WriteLine(Node.Object.Id);

	    End If;

	End Sub UserProc;


После выполнения примера будет открыт указанный файл обновления. Если
 в данное обновление включен специальный объект - карта по умолчанию, то
 в консоль среды разработки будет выведен идентификатор объекта, в котором
 хранится топооснова карты.


См. также:


[IMetabaseUpdateSpecialObjectsNode](IMetabaseUpdateSpecialObjectsNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
