# IMetabaseCache.FlushById

IMetabaseCache.FlushById
-


# IMetabaseCache.FlushById


## Синтаксис


FlushById(Id: String): Boolean;


## Параметры


Id. Идентификатор объекта репозитория.


## Описание


Метод FlushById очищает ссылки
 на объект репозитория по его идентификатору.


## Комментарии


Метод возвращает значение True,
 если очистка прошла успешно.


## Пример


Для выполнения примера предполагается наличие в репозитории параметрического
 справочника с идентификатором PARAM_DICT. В справочнике создан параметр
 с идентификатором ITEM, влияющий на фильтрацию элементов.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    currObj: IMetabaseObject;

	    currPar: IMetabaseObjectParamValues;

	    currDimInst: IDimInstance;

	    currEls: IDimElements;

	Begin

	    Mb := MetabaseClass.Active;

	    Debug.WriteLine("Открытие справочника с параметром '0'");

	    currObj := Mb.IteMbyId("PARAM_DICT").Bind;

	    currPar := currObj.ParamValues;

	    currPar.FindById("ITEM").Value := 0;

	    currDimInst := currObj.Open(currPar) As IDimInstance;

	    currEls := currDimInst.Elements;

	    Debug.WriteLine("Число элементов: " + currEls.Count.ToString);

	    Debug.WriteLine("Открытие справочника с параметром '10'");

	    Mb.Cache.FlushById("PARAM_DICT");

	    currPar.FindById("ITEM").Value := 10;

	    currDimInst := currObj.Open(currPar) As IDimInstance;

	    currEls := currDimInst.Elements;

	    Debug.WriteLine("Число элементов: " + currEls.Count.ToString);

	End Sub UserProc;


После выполнения примера справочник будет открыт с различными значениями
 параметра. В окно консоли будет выведено количество элементов справочника
 после фильтрации.


См. также:


[IMetabaseCache](IMetabaseCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
