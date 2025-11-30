# ICubeInstanceDestination.ApplyDimensions

ICubeInstanceDestination.ApplyDimensions
-


# ICubeInstanceDestination.ApplyDimensions


## Синтаксис


ApplyDimensions(Apply: [ICubeSelectionControlApply](../ICubeSelectionControlApply/ICubeSelectionControlApply.htm); [ApplySet: Boolean = True]): Boolean;


## Параметры


Apply - параметры управления отметкой, которые необходимо применить.


ApplySet - параметр, определяющий результат выполнения метода. Если в качестве значения параметра передавать True, то при удачном применении отметки результирующий набор элементов измерений и отметка элементов будут обновлены в кубе.


Если в качестве значения параметра передавать значение False, то метод вернет признак возможности применения отметки.


## Описание


Метод ApplyDimensions осуществляет применение параметров управления отметкой.


## Комментарии


Метод возвращает значение True, если применение отметки с установленными параметрами прошло удачно и False, если применение отметки не допустимо.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором «Cube_1». В кубе настроено управляющее измерение. Управляющим измерением является измерение, построенное на основе справочника «Dim_1».


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    SelControl: ICubeSelectionControlApply;

    DimSS: IDimSelectionSet;

    Inst: IDimInstance;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    //Элементы измерений, доступные до применения отметки
    Debug.WriteLine("До применения отметки");

    For Each Inst In Dest.Dimensions Do

        Debug.WriteLine("Измерение: " + Inst.Name + "; Доступно элементов: " + Inst.Elements.Count.ToString);

    End For;

    //Создание пустой отметки
    DimSS := Dest.CreateDimSelectionSet;

    //Отметка необходимого элемента(ов) в управляющем измерении
    DimSS.FindById("Dim_1").SelectElement(0, False);

    //Создание объекта для управления отметкой измерений
    SelControl := Dest.CreateApplyDimensions(SelectionControlApplyMode.Apply);

    //Указание исходной отметки
    SelControl.SourceSelection := DimSS;

    //Применение параметров управления отметкой
    Dest.ApplyDimensions(SelControl, True);

    //Результирующий набор элементов,
    //которые доступны в измерениях после применения отметки
    Debug.WriteLine("После применения отметки");

    For Each Inst In Dest.Dimensions Do

        Debug.WriteLine("Измерение: " + Inst.Name + "; Доступно элементов: " + Inst.Elements.Count.ToString);

    End For;

End Sub UserProc;


После выполнения примера будет осуществлено применение параметров управления отметкой для куба. Элементы, которые доступны по измерениям до и после применения параметров управления отметкой, будут выведены в консоль среды разработки.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
