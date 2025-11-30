# IForeMethodParam.Tag

IForeMethodParam.Tag
-


# IForeMethodParam.Tag


## Синтаксис


Tag: Variant;


## Описание


Свойство Tag не используется
 компилятором. Можно определить и использовать свойство по своему усмотрению.


## Пример


Для выполнения примера предполагается наличие в репозитории области
 глобальных параметров с идентификатором «SHARED_P».


	Sub Main;

	Var

	    mb: IMetabase;

	    Shp: ISharedParams;

	    UserMeth: IForeMethods;

	    uMethod: IForeMethod;

	    MethParams: IForeMethodParams;

	    mParam: IForeMethodParam;

	Begin

	    mb := MetabaseClass.Active;

	    Shp := mb.ItemById("SHARED_P").Bind As ISharedParams;

	    UserMeth := Shp.Methods;

	    uMethod := UserMeth.FindByKey(1);

	    If uMethod <> Null Then

	        uMethod.Bind;

	        MethParams := uMethod.Params;

	        mParam := MethParams.FindByParam("PARAM_1");

	        If mParam <> Null

	            Then mParam.Tag := "Параметр был найден";

	            Else Debug.WriteLine("Параметр не найден");

	        End If;

	    End If;

	End Sub Main;


После выполнения примера будет произведен поиск параметра «PARAM_1»
 у пользовательского метода с ключом «1». Если параметр будет найден, то
 в свойстве Tag будет указан комментарий
 к данным действиям.


См. также:


[IForeMethodParam](IForeMethodParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
