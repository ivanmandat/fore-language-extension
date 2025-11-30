# ICubeSerializer.PreCheck

ICubeSerializer.PreCheck
-


# ICubeSerializer.PreCheck


## Синтаксис


PreCheck(CubeObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm));


## Параметры


CubeObject. Куб, для которого
 необходимо проверить прова на экспорт данных.


## Описание


Метод PreCheck осуществляет
 проверку прав на экспорт у данного пользователя. Если права отсутствуют
 - генерируется исключительная ситуация.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 "Cube_1".


			Sub TestUserRight;

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

    Try

        CubS.PreCheck(Des);

        CubInst := Des.Open(Null) As ICubeInstance;

        CubeDist := CubInst.Destinations.DefaultDestination;

        CubSIns := CubS.SaveToFile("c:\cub.ppcube", CubInst);

        DimSS := CubeDist.CreateDimSelectionSet;

        For Each DimS In DimSS Do

            DimS.SelectAll;

        End For;

        CubSIns.Save(CubeDist, DimSS, 0);

    Except On Exp: Exception Do

        If Exp.MessageID = 5651 Then

            Debug.WriteLine("Операция запрещена из-за ограниченных прав пользователя");

        End If;

    End Try;

End Sub TestUserRight;


После выполнения примера куб со всеми данными будет сохранен в файл
 "cub.ppcube". При сохранении осуществляется проверка прав у
 текущего пользователя на экспорт данного куба. В случае отсутствия прав
 - генерируется исключительная ситуация и выводится соответствующее сообщение.


См. также:


[ICubeSerializer](ICubeSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
