# ICalculatedCubeInstance.Apply

ICalculatedCubeInstance.Apply
-


# ICalculatedCubeInstance.Apply


## Синтаксис


Apply(App: [ICubeSelectionControlApply](../ICubeSelectionControlApply/ICubeSelectionControlApply.htm)):
 Boolean;


## Параметры


Apply. Параметры управления отметкой, которые
 необходимо применить.


## Описание


Метод Apply осуществляет применение
 параметров управления отметкой.


## Комментарии


Метод возвращает значение True,
 если применение отметки с установленными параметрами прошло удачно и False, если применение отметки не
 допустимо.


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором «Calc_Cube». Данный куб построен на кубе, имеющем
 в своей структуре управляющие и управляемые измерения. Управляющим измерением
 является измерение, построенное на основе справочника «Dim_1».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICalculatedCubeInstance;

	    Source: ICubeInstanceSource;

	    SelControl: ICubeSelectionControlApply;

	    DimSS: IDimSelectionSet;

	    Inst: IDimInstance;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

	    //Управление отметкой выч.куба

	    //Элементы измерений, доступные до применения отметки

	    Debug.WriteLine("Вычисляемый куб");

	    Debug.Indent;

	    For Each Inst In CubeInst.Destination.Dimensions Do

	        Debug.WriteLine("Измерение: " + Inst.Name + "; Доступно элементов: " + Inst.Elements.Count.ToString);

	    End For;

	    DimSS := CubeInst.Destination.CreateDimSelectionSet;

	    //Отметка элемента в управляющем измерении

	    DimSS.FindById("Dim_1").SelectElement(0, False);

	    //Создание объекта для управления отметкой измерений выч.куба

	    SelControl := CubeInst.CreateApply(Null, SelectionControlApplyMode.Apply);

	    //Указание исходной отметки

	    SelControl.SourceSelection := DimSS;

	    //Применение

	    CubeInst.Apply(SelControl);

	    //Результирующий набор элементов,

	    //которые доступны в измерениях после применения отметки

	    For Each Inst In CubeInst.Destination.Dimensions Do

	        Debug.WriteLine("Измерение: " + Inst.Name + "; Доступно элементов: " + Inst.Elements.Count.ToString);

	    End For;

	    Debug.Unindent;

	    //Управление отметкой источника выч.куба

	    //Источник, для которого будет применяться управление

	    Source := CubeInst.Sources.Item(0);

	    //Элементы измерений, доступные до применения отметки

	    Debug.WriteLine("Первый источник данных вычисляемого куба");

	    Debug.Indent;

	    For Each Inst In Source.Source.Dimensions Do

	        Debug.WriteLine("Измерение: " + Inst.Name + "; Доступно элементов: " + Inst.Elements.Count.ToString);

	    End For;

	    DimSS := Source.Source.CreateDimSelectionSet;

	    //Отметка элемента в управляющем измерении

	    DimSS.FindById("Dim_1").SelectElement(1, False);

	    //Создание объекта для управления отметкой измерений источника
	 выч.куба

	    SelControl := CubeInst.CreateApply(Source, SelectionControlApplyMode.Apply);

	    //Указание исходной отметки

	    SelControl.SourceSelection := DimSS;

	    //Применение

	    CubeInst.Apply(SelControl);

	    //Результирующий набор элементов,

	    //которые доступны в измерениях после применения отметки

	    For Each Inst In Source.Source.Dimensions Do

	        Debug.WriteLine("Измерение: " + Inst.Name + "; Доступно элементов: " + Inst.Elements.Count.ToString);

	    End For;

	    Debug.Unindent;

	End Sub UserProc;


После выполнения примера будет осуществлено применение параметров управления
 отметкой для вычисляемого куба, а также для его первого источника данных.
 Элементы, которые доступны по измерениям до и после применения параметров
 управления отметкой, будут выведены в консоль среды разработки.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
