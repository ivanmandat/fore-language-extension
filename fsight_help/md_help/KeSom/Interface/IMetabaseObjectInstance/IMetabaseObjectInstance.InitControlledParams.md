# IMetabaseObjectInstance.InitControlledParams

IMetabaseObjectInstance.InitControlledParams
-


# IMetabaseObjectInstance.InitControlledParams


## Синтаксис


InitControlledParams(ObjKey: Integer; ObjParams:
 [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm));


## Параметры


ObjKey. Ключ вложенного объекта,
 значения параметров которого необходимо вычислить;


ObjParams. Коллекция значений
 параметров, в которую будут помещены вычисленные значения.


## Описание


Метод InitControlledParams осуществляет
 вычисление выражений управления параметрами вложенного объекта.


## Комментарии


При выполнении данного метода в коллекцию ObjParams
 будут помещены значения параметров, с которыми осуществляется открытие
 вложенного объекта при открытии данного объекта.


## Пример


Для выполнения примера предполагается наличие объекта с идентификатором
 Obj_1, содержащего один параметр. Данный объект основан на каком-либо
 дополнительном объекте, для которого настроено управление параметрами.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ParentDesc, DepDesc: IMetabaseObjectDescriptor;

	    Params, Params1: IMetabaseObjectParamValues;

	    Param: IMetabaseObjectParamValue;

	    ObjInst: IMetabaseObjectInstance;

	Begin

	    MB := MetabaseClass.Active;

	    //Исходный объект

	    ParentDesc := MB.ItemById("Obj_1");

	    Params := ParentDesc.Params.CreateEmptyValues;

	    Params.Item(0).Value := 2;

	    //Открытие исходного объекта

	    ObjInst := ParentDesc.Open(Params);

	    //Вложенный объект

	    DepDesc := ParentDesc.Dependencies(False).Item(0);

	    Params1 := DepDesc.Params.CreateEmptyValues;

	    //Вычисление параметров, с которыми открывается вложенный объект

	    ObjInst.InitControlledParams(DepDesc.Key, Params1);

	    Debug.WriteLine("Параметры вложенного объекта");

	    For Each Param In Params1 Do

	        Debug.WriteLine("Параметр: " + Param.Id + "(" + Param.Name + "); Значение: " + Param.Value);

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлено открытие объекта с указанным
 значением параметра. После открытия будут вычислены значения параметров,
 с которыми открывается вложенный объект. Наименования и значения параметров
 вложенного объекта будут выведены в консоль среды разработки.


См. также:


[IMetabaseObjectInstance](IMetabaseObjectInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
