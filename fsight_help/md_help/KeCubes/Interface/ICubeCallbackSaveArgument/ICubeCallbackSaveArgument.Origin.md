# ICubeCallbackSaveArgument.Origin

ICubeCallbackSaveArgument.Origin
-


# ICubeCallbackSaveArgument.Origin


## Синтаксис


Origin: String;


## Описание


Свойство Origin возвращает ключ
 объекта, инициирующего изменения данных куба.


## Комментарии


Инициаторами изменения данных куба могут выступать расширения «[Интерактивные
 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)» и «[Алгоритмы
 расчёта](CalculationAlgorithm.chm::/Purpose.htm)»:


	- если данные куба были изменены вручную в ячейках табличной области
	 формы ввода, то в свойстве будет содержаться ключ данной формы ввода;


	- если данные куба были изменены автоматически в ячейках табличной
	 области формы ввода при расчёте [алгоритма](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm),
	 то в свойстве будет содержаться ключ данной формы ввода и алгоритма
	 расчёта;


	- если данные куба были изменены автоматически при расчёте алгоритма,
	 то в свойстве будет содержаться ключ данного алгоритма расчёта.


Ключ объекта, инициирующего изменения данных, можно получить только
 через обработчик процесса сохранения данных в куб, подключенный к кубу.
 Для подключения обработчика используйте свойство [IStandardCube.SetDefaultCallback](../IStandardCube/IStandardCube.SetDefaultCallback.htm).


Пример обработчика процесса сохранения данных в куб с использованием
 свойства [ICubeCallbackSaveArgument.Origin](ICubeCallbackSaveArgument.Origin.htm):


	Public Class CubeSaveCallBack: CubeCallBack

	    // Обработка события, наступающего до сохранения куба

	    Sub OnBeforeSave(callbackSaveArg: ICubeCallbackBeforeSaveArgument);

	    Begin

	        //...

	        Debug.WriteLine("Событие, наступающее до сохранения куба, выполнено");

	    End Sub OnBeforeSave;


	    // Обработка события, наступающего после сохранения данных куба

	    Sub OnAfterSave(callbackSaveArg: ICubeCallbackSaveArgument);

	    Begin

	        Debug.WriteLine("Ключ объекта, изменившего данные куба: " + callbackSaveArg.Origin);

	        Debug.WriteLine("Событие, наступающее после сохранения куба, выполнено");

	    End Sub OnAfterSave;

	End Class CubeSaveCallBack;


После выполнения примера будет получен ключ объекта, изменившего данные
 куба при его сохранении.


## Пример


Для выполнения примера предполагается наличие в репозитории [стандартного
 куба](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart.htm) с идентификатором STD_CUBE и [алгоритма расчёта](CalculationAlgorithm.chm::/Purpose.htm)
 с идентификатором ALGORITHM. В алгоритме расчёта должны выполняться следующие
 условия:


	- содержится хотя бы один [блок
	 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm);


	- в качестве [приёмника
	 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Master_calculation_block_page_consumer.htm) блока расчёта используется стандартный куб
	 с идентификатором STD_CUBE;


	- задана [формула](CalculationAlgorithm.chm::/Desktop/Calculation_block/Formula.htm)
	 для блока, при расчёте которой будут изменены данные куба.


Также в репозитории должен содержаться [модуль](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Module.htm)
 с идентификатором CUBESAVECALLBACK - обработчик процесса сохранения данных
 в куб. Пример содержимого модуля приведён в разделе «Комментарии».


Добавьте ссылки на системные сборки: Algo, Cubes, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](KeAlgo.chm::/Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj, Module: IMetabaseObject;

	    Cube: IStandardCube;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcResult: IAlgorithmCalculationResult;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим куб

	    MObj := MB.ItemById("STD_CUBE").Edit;

	    Cube := MObj As IStandardCube;

	    // Получим модуль - обработчик процесса сохранения данных в куб

	    Module := MB.ItemById("CUBESAVECALLBACK").Bind;

	    // Подключим обработчик к кубу

	    Cube.SetDefaultCallback(Module, "CubeSaveCallBack");

	    // Сохраним изменения в кубе

	    MObj.Save;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM").Bind;

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	End Sub UserProc;


В результате выполнения примера к кубу
 будет подключён обработчик процесса сохранения данных, который возвращает
 ключ объекта, изменившего данные куба. В консоль будет выведен соответствующий
 ключ объекта после расчёта алгоритма. Например:


Ключ объекта, изменившего
 данные куба: 305519


См. также:


[ICubeCallbackSaveArgument](ICubeCallbackSaveArgument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
