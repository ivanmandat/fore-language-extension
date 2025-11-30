# ICubeLoaderInstance.CreateApplyDimensions

ICubeLoaderInstance.CreateApplyDimensions
-


# ICubeLoaderInstance.CreateApplyDimensions


## Синтаксис


CreateApplyDimensions: [ICubeSelectionControlApply](../ICubeSelectionControlApply/ICubeSelectionControlApply.htm);


## Описание


Метод CreateApplyDimensions
 создает объект, используемый для управления отметкой измерений куба-приёмника.


## Пример


Для выполнения примера предполагается наличие загрузчика данных с идентификатором
 «CUBE_LOAD», настроенного на передачу данных из куба-источника в куб-приёмник.
 В кубе-приёмнике имеется три измерения:


	- измерение фактов.


	- измерение на базе справочника с идентификатором «Dim_1».


	- измерение на базе справочника с идентификатором «Dim_2».


Измерение на базе справочника с идентификатором «Dim_1» является управляющим
 для измерения на базе справочника «Dim_2».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CLoad: ICubeLoaderInstance;

	    Dest: ICubeInstanceDestination;

	    Inst: IDimInstance;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    App: ICubeSelectionControlApply;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_LOAD").Bind;

	    CLoad := MObj.Open(Null) As ICubeLoaderInstance;

	    Dest := CLoad.Destination;

	    //Измерения и количество доступных элементов по измерениям в кубе-приёмнике

	    For Each Inst In Dest.Dimensions Do

	        Debug.WriteLine(Inst.Name + ": " + Inst.Elements.Count.ToString);

	    End For;

	    DimSS := Dest.CreateDimSelectionSet; //Отметка куба-приёмника

	    DimSS.FindById("Dim_1").SelectElement(0, False); //Изменяем элемент в управляющем измерении

	    App := CLoad.CreateApplyDimensions;

	    App.SourceSelection := DimSS;

	    If CLoad.ApplyDimensions(App) Then // Применение отметки для перестройки управляемого измерения

	        For Each Inst In Dest.Dimensions Do

	            Debug.WriteLine(Inst.Name + ": " + Inst.Elements.Count.ToString);

	        End For;

	        DimSS := App.ResultSelection;

	        //Отмечаем все полученные элементы для загрузки данных

	        For Each DimS In DimSS Do

	            DimS.SelectAll;

	        End For;

	        CLoad.Execute(DimSS);

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлена загрузка данных в куб. Для
 загрузки данных осуществляется открытие загрузчика в куб, настройка отметки
 в управляющем измерении куба-приёмника «Dim_1» и применение отметки для
 получения данных по управляемому измерению «Dim_2». Если применение отметки
 прошло удачно, то по всей результирующей отметке куба-приёмника осуществляется
 загрузка данных. В консоль среды разработки будут выведены данные по доступным
 элементам в измерениях до и после применения отметки управляющего измерения.


См. также:


[ICubeLoaderInstance](ICubeLoaderInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
