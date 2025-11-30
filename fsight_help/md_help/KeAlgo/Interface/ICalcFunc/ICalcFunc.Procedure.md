# ICalcFunc.Procedure

ICalcFunc.Procedure
-


# ICalcFunc.Procedure


## Синтаксис


Procedure: String;


## Описание


Свойство Procedure определяет
 пользовательскую функцию.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM и модуля с идентификатором MODULE.
 В модуле должна содержаться [функция](CalculationAlgorithm.chm::/Desktop/Function_Block/Function_Block_Wizard.htm)
 с наименованием «Func».


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Descr, MObjAlgo: IMetabaseObjectDescriptor;

	    BlockFunc: ICalcFunc;

	    Algo, CalcObject: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    ObjectType: IMetabaseCustomClass;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObjAlgo := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObjAlgo , True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Зададим тип объекта - блок функций

	    ObjectType := GetMetabaseHelper.GetCustomClassByEnum(BPClasses.Func_Block);

	    Descr := GetMetabaseHelper.CreateObjectDescriptor(ObjectType.ClassId, ObjectType.Name, "", CalcAlgo.Descriptor, False, False, Null, True);

	    // Создадим блок функций

	    CalcObject := New CalcFuncClass.Create(Descr);

	    BlockFunc := CalcObject As ICalcFunc;

	    // Зададим модуль, который содержит функцию

	    BlockFunc.Assembly := MB.ItemById("MODULE");

	    // Зададим функцию, которая будет выполняться при расчёте блока

	    BlockFunc.Procedure := "Func";

	    // Зададим дополнительное значение параметра

	    BlockFunc.SimpleParamValues := "10289";

	    // Проверим синтаксис

	    If BlockFunc.IsValid = False Then

	        // Выведем сообщение об ошибке

	        Debug.WriteLine(BlockFunc.ErrorInfo.ErrorMessage);

	    Else

	        // Сохраним блок функций

	        CalcObject.SaveObject;

	    End If;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Добавим созданный блок функций

	    List.Add(CalcObject);

	    // Сохраним изменения в алгоритме расчёта

	    CalcAlgo.SaveObject;

	End Sub UserProc;


В результате выполнения примера в алгоритме расчёта будет добавлен блок
 функций с заданными настройками. В консоль будет выведено сообщение об
 ошибке, если параметры функции заданы неправильно.


См. также:


[ICalcFunc](ICalcFunc.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
