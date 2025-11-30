# ICalcObject.CopyTo

ICalcObject.CopyTo
-


# ICalcObject.CopyTo


## Синтаксис


CopyTo(Dest: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm));


## Параметры


Dest. Объект алгоритма расчёта,
 в который осуществляется копирование.


## Описание


Метод CopyTo копирует настройки
 текущего объекта в объект, передаваемый во входном параметре.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме созданы два блока расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    CalcAlgo: ICalcAlgorithm;

	    Objects: ICalcObjectsList;

	    Algo, CalcAlgObj1, CalcAlgObj2: ICalcObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Объекты алгоритма

	    Objects := CalcAlgo.Items;

	    CalcAlgObj1 := Objects.Item(0);

	    CalcAlgObj2 := Objects.Item(1);

	    // Копирование настроек из первого блока во второй

	    CalcAlgObj1.CopyTo(CalcAlgObj2.Descriptor);

	    // Сохранение изменений

	    Algo.SaveObject;

	End Sub UserProc;


При выполнении примера настройки первого блока расчёта будут скопированы
 во второй блока расчёта.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
