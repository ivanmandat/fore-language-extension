# ICubeSerialInstance.Save

ICubeSerialInstance.Save
-


# ICubeSerialInstance.Save


## Синтаксис


Save(


Destination: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm);


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


[Options: Integer = 0]):
 [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm);


## Параметры


Destination. Вариант отображения
 куба, в соответствии с которым осуществляется расчет сохраняемых данных.


Selection. Отметка куба, в
 соответствии с которой будут рассчитываться сохраняемые данные.


Options. Параметр доступный
 из ядра, в зависимости от значения сохраняет либо все значения в измерении,
 либо только отмеченные.


## Описание


Метод Save осуществляет сохранение
 данных куба в файл.


## Комментарии


Параметр Options может принимать
 следующие значения:


	- 0. В измерениях сохраняются все элементы;


	- 1. В измерениях сохраняются только отмеченные элементы.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 Cube_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Des: IMetabaseObjectDescriptor;

	    CubInst: ICubeInstance;

	    CubeDist: ICubeInstanceDestination;

	    CubSer: ICubeSerializer;

	    CubSerIns: ICubeSerialInstance;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    CubSer := New CubeSerializer.Create As ICubeSerializer;

	    CubSer.StorageType := CubeSerialStorageType.SingleFile;

	    CubSer.FileName := "cube";

	    Des := MB.ItemById("CUBE_1");

	    CubInst := Des.Open(Null) As ICubeInstance;

	    CubeDist := CubInst.Destinations.DefaultDestination;

	    CubSerIns := CubSer.SaveToFile("c:\cub.ppcube", CubInst);

	    DimSS := CubeDist.CreateDimSelectionSet;

	    For Each DimS In DimSS Do

	        DimS.SelectElement(0, False);

	    End For;

	    CubSerIns.Save(CubeDist, DimSS, 1);

	End Sub UserProc;


После выполнения примера в файл "cube.ppcube" будет сохранён
 куб с данными, содержащимися только в отмеченных элементах. В структуре
 измерений также сохранятся только отмеченные элементы.


См. также:


[ICubeSerialInstance](ICubeSerialInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
