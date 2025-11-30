# IMetabaseObjectParams.CreateEmptyValues

IMetabaseObjectParams.CreateEmptyValues
-


# IMetabaseObjectParams.CreateEmptyValues


## Синтаксис


CreateEmptyValues: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Метод CreateEmptyValues создаёт
 копию коллекции параметров, содержащую пустые значения.


## Комментарии


Созданная копия может быть заполнена необходимыми значениями параметров
 и в дальнейшем использована для [открытия
 объекта](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm) с этим набором параметров. Полученная копия не связана и не
 влияет на набор параметров объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 Dim_1, содержащего два параметра.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    ParamVal: IMetabaseObjectParamValues;

	    Dict: IDimInstance;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    ParamVal := MDesc.Params.CreateEmptyValues;

	    ParamVal.Item(0).Value := 1;

	    ParamVal.Item(1).Value := 10;

	    Dict := MDesc.Open(ParamVal) As IDimInstance;

	    Debug.WriteLine(Dict.Elements.Count);

	End Sub UserProc;


После выполнения примера будет осуществлено открытие указанного справочника.
 Перед открытием осуществляется создание пустой коллекции, а затем задание
 значений параметров. Количество элементов справочника, полученное после
 открытия, будет выведено в консоль среды разработки.


См. также:


[IMetabaseObjectParams](IMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
