# IMetabaseObjectParamValue.IsArray

IMetabaseObjectParamValue.IsArray
-


# IMetabaseObjectParamValue.IsArray


## Синтаксис


IsArray: Boolean;


## Описание


Свойство IsArray возвращает
 признак установки множественного значения для параметра.


## Пример


Для выполнения примера в репозитории предполагается наличие параметрического
 объекта с идентификатором OBJTEST.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Pars: IMetabaseObjectParams;

	    Vals: IMetabaseObjectParamValues;

	    Val: IMetabaseObjectParamValue;

	    Ar: Array[0..2] Of Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.Item(MB.GetObjectKeyById("OBJTEST")).Edit;

	    Pars := MObj.Params;

	    Vals := Pars.CreateEmptyValues;

	    Val := Vals.Item(0);

	    Ar[0] := "01.01.2001";

	    Ar[1] := "01.01.2002";

	    Ar[2] := "01.01.2003";

	    Val.Value := Ar;

	    Debug.WriteLine(Val.IsArray);

	End Sub UserProc;


В процессе выполнения примера для первого параметра объекта установится
 массив значений и в консоль среды разработки будет выведен признак того,
 что параметр принимает множественное значение.


См. также:


[IMetabaseObjectParamValue](IMetabaseObjectParamValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
