# ICubeSelectionControlApply.SourceSelection

ICubeSelectionControlApply.SourceSelection
-


# ICubeSelectionControlApply.SourceSelection


## Синтаксис


SourceSelection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство SourceSelection определяет
 отметку управляющих измерений, в соответствии с которой будет изменена
 отметка в управляемых измерениях.


## Комментарии


Для применения параметров управления используйте метод [ICalculatedCubeInstance.Apply](../ICalculatedCubeInstance/ICalculatedCubeInstance.Apply.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». В кубе имеется измерение с идентификатором «Dim_1». Это измерение
 является управляющим для других измерений куба.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    SelControl: ICubeSelectionControlApply;

    DimSS: IDimSelectionSet;

    DimInst: IDimInstance;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    //Элементы измерений, доступные до применения отметки

    Debug.WriteLine("До применения отметки");

    For Each DimInst In Dest.Dimensions Do

        Debug.WriteLine("Измерение: " + DimInst.Name + "; Доступно элементов: " + DimInst.Elements.Count.ToString);

    End For;

    //Создание пустой отметки

    DimSS := Dest.CreateDimSelectionSet;

    //Отметка необходимого элемента в управляющем измерении

    DimSS.FindById("Dim_1").SelectElement(0, False);

    //Создание объекта для управления отметкой измерений

    SelControl := Dest.CreateApplyDimensions;

    //Указание исходной отметки

    SelControl.SourceSelection := DimSS;

    //Применение параметров управления отметкой

    Dest.ApplyDimensions(SelControl, True);

    //Результирующий набор элементов,

    //которые доступны в измерениях после применения отметки

    Debug.WriteLine("После применения отметки");

    For Each DimInst In Dest.Dimensions Do

        Debug.WriteLine("Измерение: " + DimInst.Name + "; Доступно элементов: " + DimInst.Elements.Count.ToString);

    End For;

End Sub UserProc;


При выполнении примера будет создан объект, который осуществляет управление
 отметкой куба. В управляющем измерении будет отмечен один элемент. В консоль
 среды разработки будут выведены исходный и результирующий список измерений.
 По каждому измерению будет указано количество элементов, доступных для
 отметки.


См. также:


[ICubeSelectionControlApply](ICubeSelectionControlApply.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
