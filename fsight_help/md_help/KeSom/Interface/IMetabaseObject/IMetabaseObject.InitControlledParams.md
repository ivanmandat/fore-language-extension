# IMetabaseObject.InitControlledParams

IMetabaseObject.InitControlledParams
-


# IMetabaseObject.InitControlledParams


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
 будут помещены значения параметров, с которыми может быть открыт вложенный
 объект при открытии данного объекта.


## Пример


Для выполнения примера предполагается наличие объекта с идентификатором
 «Obj_1», содержащего один параметр. Данный объект основан на каком-либо
 дополнительном объекте, для которого настроено управление параметрами.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ParentObj: IMetabaseObject;

	    DepDesc: IMetabaseObjectDescriptor;

	    Params: IMetabaseObjectParamValues;

	    Param: IMetabaseObjectParamValue;

	Begin

	    MB := MetabaseClass.Active; //Исходный объект

	    ParentObj := MB.ItemById("Obj_1").Bind;

	    //Вложенный объект

	    DepDesc := ParentObj.Dependencies(False).Item(0);

	    Params := DepDesc.Params.CreateEmptyValues;

	    //Вычисление параметров, с которыми открывается вложенный объект

	    ParentObj.InitControlledParams(DepDesc.Key, Params);

	    Debug.WriteLine("Параметры вложенного объекта");

	    For Each Param In Params Do

	    Debug.WriteLine("Параметр: " + Param.Id + "(" + Param.Name + "); Значение: " + Param.Value);

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлен расчет значений параметров,
 которые будут использоваться для открытия вложенного объекта при открытии
 исходного объекта «Obj_1». При расчете будут использоваться значения параметров
 исходного объекта, установленные по умолчанию. Наименования и значения
 параметров вложенного объекта будут выведены в консоль среды разработки.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
