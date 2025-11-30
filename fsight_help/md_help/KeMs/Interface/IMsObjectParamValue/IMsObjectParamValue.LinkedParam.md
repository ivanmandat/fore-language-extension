# IMsObjectParamValue.LinkedParam

IMsObjectParamValue.LinkedParam
-


# IMsObjectParamValue.LinkedParam


## Синтаксис


LinkedParam: [IMsModelParamAttributes](../IMsModelParamAttributes/IMsModelParamAttributes.htm);


## Описание


Свойство LinkedParam определяет
 параметр моделирования, с которым связан параметр объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- куба с идентификатором CUBE. Куб должен иметь один целочисленный
	 параметр;


	- контейнера моделирования с идентификатором CONTAINER;


	- метамодели с идентификатором METAMODEL. Метамодель должна иметь
	 параметр типа «Отметка» с
	 идентификатором GROUP, построенный на справочнике, в котором есть
	 атрибут с идентификатором KEY.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub SubProc;

Var

    mb: IMetabase;

    cubeDesc: IMetabaseObjectDescriptor;

    msKey: Integer;

    mm: IMsMetaModel;

    param: IMsModelParam;

    paramValues: IMsObjectParamValues;

    paramValue: IMsObjectParamValue;

    linkedParam: IMsModelParamAttributes;

    dim: IDimInstance;

    attrs: IMsDimAttributesList;

    attr: IDimAttribute;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим куб

    cubeDesc := mb.ItemById("CUBE");

    // Получим контейнер моделирования

    msKey := mb.ItemById("CONTAINER").Key;

    // Получим метамодель

    mm := mb.ItemByIdNamespace("METAMODEL", msKey).Edit As IMsMetaModel;

    // Получим параметр метамодели

    param := mm.Params.FindById("GROUP");

    // Добавим куб в параметры объектов метамодели

    mm.ObjectParamValues.Clear;

    paramValues := mm.ObjectParamValues.Add(cubeDesc);

    // Получим параметр куба

    paramValue := paramValues.Item(0);

    // Свяжем параметр метамодели с параметром куба

    linkedParam := paramValue.LinkedParam;

    linkedParam.Parameter := param;

    // Получим атрибут измерения параметра

    dim := param.LinkedObject.Open(Null) As IDimInstance;

    attr := dim.Attributes.FindById("KEY").Attribute;

    // Установим параметр атрибута

    linkedParam.ClearAttributes;

    attrs := linkedParam.Attributes;

    attrs.Add(attr);

    // Сохраним метамодель

    (mm As IMetabaseObject).Save;

End Sub SubProc;


В результате выполнения примера произойдёт связывание параметров куба
 и метамодели, после чего значение параметра метамодели будет передано
 в параметр куба.


См. также:


[IMsObjectParamValue](IMsObjectParamValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
