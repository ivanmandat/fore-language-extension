# IUiMetabaseObjectParams.CollectValues

IUiMetabaseObjectParams.CollectValues
-


# IUiMetabaseObjectParams.CollectValues


## Синтаксис


CollectValues(bSet: Boolean; Values: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 Boolean;


## Параметры


bSet - параметр, определяющий
 действие, происходящее при вызове метода. Если в качестве значения передается
 True, то при вызове метода для
 соответствующих элементов управления будут установлены значения, передаваемые
 в коллекции Values. Если в качестве
 значения передается False, то
 в коллекцию значений Values будут
 помещены значение, взятые из соответствующих элементов управления.


Values - коллекция значений
 параметров.


## Описание


Метод CollectValues осуществляет
 действие со значениями параметров, определенное параметром bSet,
 и возвращает результат выполнения действия.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента UiMetabaseObjectParams
 с наименованием "UiMetabaseObjectParams1", компонента, к которому
 подключен объект репозитория, значениями параметров которого управляет
 «UiMetabaseObjectParams1» и компонентов, используемых для управления значениями
 параметров. Параметры объекта имеют числовые значения.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        UIObj: IUiMetabaseObject;

	        Obj: IMetabaseObjectDescriptor;

	        ParamValues: IMetabaseObjectParamValues;

	        ParamValue: IMetabaseObjectParamValue;

	    Begin

	        UIObj := UiMetabaseObjectParams1.UiObject;

	        Obj := UIObj.Object;

	        ParamValues := Obj.Params.CreateEmptyValues;

	        UiMetabaseObjectParams1.CollectValues(False, ParamValues);

	        For Each ParamValue In ParamValues Do

	            ParamValue.Value := ParamValue.Value + 1;

	        End For;

	        UiMetabaseObjectParams1.CollectValues(True, ParamValues);

	        UIObj.Active := False;

	        UIObj.Active := True;

	    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет получена коллекция
 значений параметров, установленных в элементах управления. Все значения
 будут увеличены на единицу. После этого будут обновлены элементы
 управления, и объект будет переоткрыт с новыми значениями параметров.


См.
 также:


[IUiMetabaseObjectParams](IUiMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
