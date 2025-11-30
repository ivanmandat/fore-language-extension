# IForeMethodParam.Param

IForeMethodParam.Param
-


# IForeMethodParam.Param


## Синтаксис


Param: String;


## Описание


Свойство доступно только для чтения.


Свойство Param возвращает наименование
 параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории области
 глобальных параметров с идентификатором «SHARED_P».


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Shp: ISharedParams;

	    UserMeth: IForeMethods;

	    uMethod: IForeMethod;

	    MethParams: IForeMethodParams;

	    mParam: IForeMethodParam;

	    i: Integer;

	Begin

	    mb := MetabaseClass.Active;

	    Shp := mb.ItemById("SHARED_P").Bind As ISharedParams;

	    UserMeth := Shp.Methods;

	    uMethod := UserMeth.FindByKey(1);

	    If uMethod <> Null Then

	        uMethod.Bind;

	        MethParams := uMethod.Params;

	            For i := 0 To MethParams.Count - 1 Do

	                mParam := MethParams.Item(i);

	                Debug.WriteLine("Параметр: " + mParam.Param);

	            End For;

	    End If;

	End Sub UserProc;


После выполнения примера будет проинициализирован пользовательский метод
 с ключом «1». В окно консоли будет выведено наименование его параметров.


См. также:


[IForeMethodParam](IForeMethodParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
