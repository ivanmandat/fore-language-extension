# IMetabaseObject.ParamValues

IMetabaseObject.ParamValues
-


# IMetabaseObject.ParamValues


## Синтаксис


ParamValues: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство ParamValues возвращает
 объект, содержащий значения параметров для открытия вложенных объектов.


## Комментарии


При открытии объекта репозитория с использованием параметров в кеше
 создается объект, содержащий данные и связанный с открываемым объектом.
 Для повторного открытия объекта с новыми значениями параметров следует
 очистить кеш открываемого объекта ([Flush](../IMetabaseCache/IMetabaseCache.Flush.htm),
 [FlushById](../IMetabaseCache/IMetabaseCache.FlushById.htm))
 или присвоить всем параметрам используемого объекта пустые значения ([CreateEmptyValues](../IMetabaseObjectParams/IMetabaseObjectParams.CreateEmptyValues.htm)).


## Пример


Для выполнения примера предполагается наличие
 в репозитории параметрического справочника с идентификатором PARAM_DICT.
 В справочнике должен присутствовать числовой параметр с идентификатором
 ITEM, влияющий на фильтрацию элементов.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    currObj: IMetabaseObject;

	    currPar: IMetabaseObjectParamValues;

	    currDimInst: IDimInstance;

	    currEls: IDimElements;

	Begin

	    MB := MetabaseClass.Active;

	    Debug.WriteLine("Открытие справочника с параметром '0'");

	    currObj := MB.ItemById("PARAM_DICT").Bind;

	    currPar := currObj.ParamValues;

	    currPar.FindById("ITEM").Value := 0;

	    currDimInst := currObj.Open(currPar) As IDimInstance;

	    currEls := currDimInst.Elements;

	    Debug.WriteLine("Число элементов: " + currEls.Count.ToString);

	    Debug.WriteLine("Открытие справочника с параметром '10'");

	    currPar := currObj.Params.CreateEmptyValues;

	    currPar.FindById("ITEM").Value := 10;

	    currDimInst := currObj.Open(currPar) As IDimInstance;

	    currEls := currDimInst.Elements;

	    Debug.WriteLine("Число элементов: " + currEls.Count.ToString);

	End Sub UserProc;


После выполнения примера справочник будет открыт с различными значениями
 параметра. В окно консоли будет выведено количество элементов справочника
 после фильтрации.


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
