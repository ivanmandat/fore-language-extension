# IMetabaseObjectParams.FindById

IMetabaseObjectParams.FindById
-


# IMetabaseObjectParams.FindById


## Синтаксис


FindById(Id: String): [IMetabaseObjectParam](../IMetabaseObjectParam/IMetabaseObjectParam.htm);


## Параметры


Id. Идентификатор
 параметра объекта репозитория.


## Описание


Метод FindById осуществляет
 поиск параметра по указанному идентификатору.


## Комментарии


В случае удачного поиска метод возвращает настройки параметра, иначе
 возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TEST_TABLE. В структуре объекта имеется параметр с идентификатором
 PARAM.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObject;

	    Params: IMetabaseObjectParams;

	    Param: IMetabaseObjectParam;

	Begin

	    MB := MetabaseClass.Active;

	    Obj := MB.Item(MB.GetObjectKeyById("TEST_TABLE")).Bind;

	    Params := Obj.Params;

	    Param := Params.FindById("PARAM");

	    Debug.WriteLine(Param.Name);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 параметра, найденного по идентификатору.


См. также:


[IMetabaseObjectParams](IMetabaseObjectParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
