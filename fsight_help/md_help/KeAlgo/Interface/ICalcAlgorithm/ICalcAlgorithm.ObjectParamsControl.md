# ICalcAlgorithm.ObjectParamsControl

ICalcAlgorithm.ObjectParamsControl
-


# ICalcAlgorithm.ObjectParamsControl


## Синтаксис


ObjectParamsControl: [IAlgoObjectsParamsControl](../IAlgoObjectsParamsControl/IAlgoObjectsParamsControl.htm);


## Описание


Свойство ObjectParamsControl
 возвращает настройки управления параметрами объектов репозитория.


## Комментарии


Настройка управления параметрами доступна для тех объектов репозитория,
 которые добавлены в рабочей области алгоритма расчёта и имеют в своей
 структуре параметры, построенные на справочниках.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGORITHM. В структуре алгоритма созданы два
 параметра с идентификаторами START_DATE и END_DATE. В алгоритме добавлена
 форма ввода с идентификатором DATA_ENTRY_FORM, которая также имеет два
 параметра, построенные на тех же справочниках, что и параметры алгоритма
 расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj, RepoObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    ObjectsParamsControl: IAlgoObjectsParamsControl;

	    ParamsControl: IAlgoObjectParamsControl;

	    ParamControl: IAlgoObjectParamControl;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Описание параметрического объекта репозитория, который добавлен в алгоритме расчёта

	    RepoObj := MB.ItemById("DATA_ENTRY_FORM");

	    // Настройки управления параметрами объектов репозитория

	    ObjectsParamsControl := CalcAlgo.ObjectParamsControl;

	    ParamsControl := ObjectsParamsControl.FindByKey(RepoObj.Key);

	    If IsNull(ParamsControl) Then

	        ParamsControl := ObjectsParamsControl.Add(RepoObj);

	    End If;

	    ParamsControl.Clear;

	    // Добавление параметров и настройка связей

	    ParamControl := ParamsControl.Add(RepoObj.Params.Item(0));

	    ParamControl.AlgParam := Algo.Params.FindById("START_DATE");

	    ParamControl := ParamsControl.Add(RepoObj.Params.Item(1));

	    ParamControl.AlgParam := Algo.Params.FindById("END_DATE");

	    // Сохранение изменений

	    Algo.SaveObject;

	End Sub UserProc;


При выполнении примера в алгоритме расчёта будет настроено управление
 параметрами объекта репозитория, добавленного в рабочей области алгоритма.


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
