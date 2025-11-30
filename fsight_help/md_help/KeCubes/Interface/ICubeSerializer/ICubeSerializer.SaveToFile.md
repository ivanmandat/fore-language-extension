# ICubeSerializer.SaveToFile

ICubeSerializer.SaveToFile
-


# ICubeSerializer.SaveToFile


## Синтаксис


SaveToFile(FileName: String; CubeInstance: [ICubeInstance](../ICubeInstance/ICubeInstance.htm)):
 [ICubeSerialInstance](../ICubeSerialInstance/ICubeSerialInstance.htm);


## Параметры


FileName. Файл, в который сохраняется
 структура куба и данные куба. Если файл существует, то он автоматически
 перезаписывается.


CubeInstance. Отстроенный куб,
 который необходимо сохранить в файл.


## Описание


Метод SaveToFile создает файл
 и инициализирует процесс сохранения куба в файл. Для сохранения данных
 необходимо после инициализации вызвать метод [Save](../ICubeSerialInstance/ICubeSerialInstance.Save.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 Cube_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Des: IMetabaseObjectDescriptor;

	    CubInst: ICubeInstance;

	    CubeDist: ICubeInstanceDestination;

	    CubS: ICubeSerializer;

	    CubSIns: ICubeSerialInstance;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    CubS := New CubeSerializer.Create As ICubeSerializer;

	    Des := MB.ItemById("Cube_1");

	    CubInst := Des.Open(Null) As ICubeInstance;

	    CubeDist := CubInst.Destinations.DefaultDestination;

	    CubSIns := CubS.SaveToFile("c:\cub.ppcube", CubInst);

	    DimSS := CubeDist.CreateDimSelectionSet;

	    For Each DimS In DimSS Do

	        DimS.SelectAll;

	    End For;

	    CubSIns.Save(CubeDist, DimSS, 0);

	End Sub UserProc;


После выполнения примера куб со всеми данными будет сохранен в файл
 "cub.ppcube".


См. также:


[ICubeSerializer](ICubeSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
