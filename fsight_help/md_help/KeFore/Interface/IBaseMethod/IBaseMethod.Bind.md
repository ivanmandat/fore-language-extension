# IBaseMethod.Bind

IBaseMethod.Bind
-


# IBaseMethod.Bind


## Синтаксис


		Bind;


## Описание


Метод Bind инициализирует пользовательский
 метод.


## Комментарии


При инициализации обновляется список параметров метода.


## Пример


Для выполнения примера предполагается, что в репозитории добавлен пользовательский
 Fore-метод с параметрами.


Добавьте ссылки на системные сборки: Fore и Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    SharedParams: ISharedParams;

		    Methods: IForeMethods;

		    Method: IForeMethod;

		    MethodParams: IForeMethodParams;

		    Param: IForeMethodParam;

		    i: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    SharedParams := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

		    Methods := SharedParams.Methods;

		    Method := Methods.Item(0);

		    If Not IsNull(Method) Then

		        Method.Bind;

		        MethodParams := Method.Params;

		        For i := 0 To MethodParams.Count - 1 Do

		            Param := MethodParams.Item(i);

		            Debug.Write("Параметр: " + Param.Param);

		            Debug.WriteLine(". Значение по умолчанию: " + Param.DefaultValue);

		        End For;

		    End If;

		End Sub UserProc;


При выполнении примера будет проинициализирован первый пользовательский
 метод. В окно консоли будут выведены наименования и значения по умолчанию
 всех параметров метода.


См. также:


[IBaseMethod](IBaseMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
