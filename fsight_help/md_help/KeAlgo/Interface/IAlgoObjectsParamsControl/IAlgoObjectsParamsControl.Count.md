# IAlgoObjectsParamsControl.Count

IAlgoObjectsParamsControl.Count
-


# IAlgoObjectsParamsControl.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 объектов репозитория, для которых доступна настройка управления параметрами.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGORITHM. В структуре алгоритма имеются параметры.
 На рабочей области добавлены объекты репозитория, для которых настроено
 управление параметрами через параметры алгоритма.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    ObjectsParamsControl: IAlgoObjectsParamsControl;

	    ParamsControl: IAlgoObjectParamsControl;

	    ParamControl: IAlgoObjectParamControl;

	    i, j, c1, c2: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Описание параметрического объекта репозитория, который добавлен в алгоритме расчёта

	    ObjectsParamsControl := CalcAlgo.ObjectParamsControl;

	    c1 := ObjectsParamsControl.Count;

	    For i := 0 To c1 - 1 Do

	        ParamsControl := ObjectsParamsControl.Item(i);

	        Debug.WriteLine("Управление параметрами объекта: " + ParamsControl.ObjectDesc.Name);

	        Debug.Indent;

	        c2 := ParamsControl.Count;

	        For j := 0 To c2 - 1 Do

	            ParamControl := ParamsControl.Item(j);

	            Debug.WriteLine("Параметр объекта: " + ParamControl.ObjectParam.Name +

	                " <-> Параметр алгоритма: " + ParamControl.AlgParam.Name);

	        End For;

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о имеющихся в алгоритме расчёта настройках управления параметрами объектов
 репозитория.


См. также:


[IAlgoObjectsParamsControl](IAlgoObjectsParamsControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
