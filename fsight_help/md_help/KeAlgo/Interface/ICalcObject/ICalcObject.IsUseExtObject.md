# ICalcObject.IsUseExtObject

ICalcObject.IsUseExtObject
-


# ICalcObject.IsUseExtObject


## Синтаксис


IsUseExtObject: Boolean;


## Описание


Свойство IsUseExtObject определяет
 признак использования объектов репозитория, расположенных вне контейнера
 или бизнес-приложения.


## Комментарии


Если алгоритм расчёта расположен в контейнере или бизнес-приложении,
 то в процессе настройки блока могут использоваться только те объекты репозитория,
 которые содержатся в соответствующем контейнере или бизнес-приложении.


Допустимые значения:


	- True. При настройке
	 блока могут использоваться любые объекты репозитория вне зависимости
	 от их расположения;


	- False. По умолчанию.
	 При настройке блока могут использоваться только те объекты репозитория,
	 которые содержатся в соответствующем контейнере или бизнес-приложении.


## Пример


Для выполнения примера предполагается наличие контейнера с идентификатором
 CONTAINER, в котором содержится алгоритм расчёта с идентификатором ALGORITHM.
 В алгоритме расчёта должен содержаться блок расчёта. Также в репозитории
 должен быть создан календарный справочник с идентификатором CALENDAR.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms, Transform.
 Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    RubrDescr, Descr, Dict: IMetabaseObjectDescriptor;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcBlock;

	    List: ICalcObjectsList;

	    Algo: ICalcObject;

	    Params: IMsModelParams;

	    CalcBlockParam: IMsModelParam;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим контейнер

	    RubrDescr := MB.ItemById("CONTAINER");

	    Descr := RubrDescr.EditDescriptor;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemByIdNamespace("ALGORITHM", Descr.Key).Edit;

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим календарный справочник, расположенный вне контейнера

	    Dict := MB.ItemById("CALENDAR");

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим первый блок расчёта

	    CalcBlock := List.Item(0) As ICalcBlock;

	    // Определим использование любых объектов репозитория при настройке блока

	    CalcBlock.IsUseExtObjects := True;

	    // Создадим новый параметр для блока

	    Params := CalcBlock.Params;

	    CalcBlockParam := Params.Add;

	    CalcBlockParam.ParamType := TsParamType.Selection;

	    CalcBlockParam.LinkedObject := Dict;

	    // Сохраним изменения

	    CalcBlock.SaveObject;

	End Sub UserProc;


При выполнении примера будет добавлен параметр для блока расчёта, связанный
 со справочником, который расположен вне контейнера.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
