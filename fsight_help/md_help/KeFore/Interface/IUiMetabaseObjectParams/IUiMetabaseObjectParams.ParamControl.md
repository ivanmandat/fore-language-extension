# IUiMetabaseObjectParams.ParamControl

IUiMetabaseObjectParams.ParamControl
-


# IUiMetabaseObjectParams.ParamControl


## Синтаксис


ParamControl(ParamId: String): [IControl](ModForms.chm::/Interface/IControl/IControl.htm);


## Параметры


ParamId - идентификатор параметра
 объекта, загруженного в компонент [UiObject](IUiMetabaseObjectParams.UiObject.htm).


## Описание


Свойство ParamControl определяет
 связь параметра с элементом управления, значения которого будут использоваться
 при открытии [объекта](IUiMetabaseObjectParams.UiObject.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента UiMetabaseObjectParams
 с наименованием "UiMetabaseObjectParams1", компонента, значениями
 параметров которого, управляет "UiMetabaseObjectParams1" и двух
 компонентов IntegerEdit, которые
 будут использоваться в качестве элементов управления значениями параметров.
 Управляемый объект имеет два целочисленных параметров.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        UIObj: IUiMetabaseObject;

	        Params: IMetabaseObjectParams;

	    Begin

	        UIObj := UiMetabaseObjectParams1.UiObject;

	        UiMetabaseObjectParams1.ResetParamControls;

	        Params := UIObj.Object.Params;

	        UiMetabaseObjectParams1.ParamControl(Params.Item(0).Id) := IntegerEdit1;

	        UiMetabaseObjectParams1.ParamControl(Params.Item(1).Id) := IntegerEdit2;

	        UIObj.Active := False;

	        UIObj.Active := True;

	    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет сброшена привязка
 по всем параметрам в компоненте "UiMetabaseObjectParams1". После
 этого будет установлена новая привязка по двум параметрам и управляемый
 объект будет переоткрыт с текущими значениями элементов управления.


См.
 также:


[IUiMetabaseObjectParams](IUiMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
