# IEaxAnalyzeCore.OpenCube

IEaxAnalyzeCore.OpenCube
-


# IEaxAnalyzeCore.OpenCube


## Синтаксис


OpenCube(CubeInstance: [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm));


## Параметры


CubeInstance. Куб, являющийся источником данных для экспресс-отчета.


## Описание


Метод OpenCube открывает куб,
 на базе которого строится экспресс-отчет.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 CUBE_SEP. Также в репозитории имеется папка с идентификатором EXPRESS_FOLDER,
 в которую будет сохранен новый экспресс-отчет.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CreateInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Cube: ICubeInstance;

	Begin

	    MB := MetabaseClass.Active;

	    If (MB.ItemById("NEW_EXPRESS") <> Null) Then

	        MB.DeleteObject(Mb.ItemById("NEW_EXPRESS").Key);

	    End If;

	    CreateInfo := MB.CreateCreateInfo;

	    CreateInfo.Id := "NEW_EXPRESS";

	    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    CreateInfo.Parent := MB.ItemById("EXPRESS_FOLDER");

	    MObj := MB.CreateObject(CreateInfo).Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Cube := MB.ItemById("CUBE_SEP").Open(Null) As ICubeInstance;

	    Expr.OpenCube(Cube);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет создан новый экспресс-отчет с идентификатором
 NEW_EXPRESS на базе куба с идентификатором CUBE_SEP. Если такой отчет
 уже существовал, то предварительно он будет удален. Отметка в измерениях
 куба будет установлена по умолчанию.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
