# IUiMetabaseObjectParams.UiObject

IUiMetabaseObjectParams.UiObject
-


# IUiMetabaseObjectParams.UiObject


## Синтаксис


UiObject: [IUiMetabaseObject](../IUiMetabaseObject/IUiMetabaseObject.htm);


## Описание


Свойство UiObject определяет
 компонент, связанный с объектом репозитория, параметрами которого необходимо
 управлять.


## Комментарии


В список доступных компонентов входят все компоненты [UiDimension](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDimension.htm),
 [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 [UiModel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiModel.htm),
 [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm),
 [UiWorkspaceObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspaceObject.htm),
 [UiMetabaseDataset](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMetabaseDataset.htm)
 расположенные на форме.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента UiMetabaseObjectParams
 с наименованием "UiMetabaseObjectParams1", компонента, значениями
 параметров которого, управляет "UiMetabaseObjectParams1" и компонентов,
 являющихся элементами управления значениями параметров. Параметры объекта
 имеют числовые значения.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        UiObj: IUiMetabaseObject;

	        Obj: IMetabaseObjectDescriptor;

	        ParamValues: IMetabaseObjectParamValues;

	        ParamValue: IMetabaseObjectParamValue;

	    Begin

	        UiObj := UiMetabaseObjectParams1.UiObject;

	        Obj := UiObj.Object;

	        ParamValues := Obj.Params.CreateEmptyValues;

	        UiMetabaseObjectParams1.CollectValues(False, ParamValues);

	        For Each ParamValue In ParamValues Do

	            ParamValue.Value := ParamValue.Value + 1;

	        End For;

	        UiMetabaseObjectParams1.CollectValues(True, ParamValues);

	        UiObj.Active := False;

	        UiObj.Active := True;

	    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет получена коллекция
 значений параметров объекта, установленных в элементах управления. Все
 значения будут увеличены на единицу, после чего будут обновлены
 элементы управления, и объект будет переоткрыт с новыми значениями параметров.


См.
 также:


[IUiMetabaseObjectParams](IUiMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
