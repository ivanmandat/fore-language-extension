# IDimAttribute.DataType

IDimAttribute.DataType
-


# IDimAttribute.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType возвращает тип данных атрибута справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника с идентификатором "Dim_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimAttr: IDimAttribute;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    DimModel := MB.ItemById("Dim_1").Bind As IDimensionModel;

	    DimAttrs := DimModel.Attributes;

	    DimAttr := DimAttrs.Item(0);

	    Select Case (DimAttr.DataType As Integer)

	        Case 0: s := "NoDate";

	        Case 1: s := "String";

	        Case 2: s := "Integer";

	        Case 3: s := "Float";

	        Case 4: s := "DateTime";

	        Case 5: s := "Blob";

	        Case 6: s := "Boolean";

	        Case 7: s := "Date";

	    End Select;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование типа данных первого атрибута справочника.


См. также:


[IDimAttribute](IDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
