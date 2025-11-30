# ICubeOperationResult.Error

ICubeOperationResult.Error
-


# ICubeOperationResult.Error


## Синтаксис


Error: [IException](foresys.chm::/interface/iexception/iexception.htm);


## Описание


Свойство Error определяет исключительную
 ситуацию, возникшую при загрузке данных.


## Пример


Для выполнения примера предполагается наличие загрузчика данных с идентификатором
 CUBE_LOAD, настроенного на передачу данных из куба-источника в куб-приёмник.


			Sub UserProc;

Var

    MB: IMetabase;

    CubLoadInst: ICubeLoaderInstance;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    Result: ICubeOperationResult;

Begin

    MB := MetabaseClass.Active;

    CubLoadInst := MB.ItemById("CUBE_LOAD").Open(Null) As ICubeLoaderInstance;

    DimSS := CubLoadInst.Destination.CreateDimSelectionSet;

    For Each DimS In DimSS Do

        DimS.SelectAll;

    End For;

    Result := CubLoadInst.Execute(DimSS, Null, AutoCubeUpdateOption.NoCheckDuplicates Or AutoCubeUpdateOption.GetResult);

    Debug.WriteLine("Наименование загрузчика: " + Result.Name);

    Debug.WriteLine("Идентификатор загрузчика: " + Result.Id);

    Debug.WriteLine("Начало загрузки: " + Result.TimeStart.ToString);

    Debug.WriteLine("Окончание загрузки: " + Result.TimeFinish.ToString);

    If Result.Succeeded Then

        Debug.WriteLine("Загрузка данных завершилась успешно");

        Debug.WriteLine("Обработано записей: " + Result.RecordsProcessed.ToString);

    Else

        Debug.WriteLine("Ошибка при загрузке данных");

        Debug.WriteLine("Ошибка: " + Result.Error.Message);

    End If;

    Debug.WriteLine(Result.FormattedMessage);

End Sub UserProc;


После выполнения примера будет осуществлена загрузка данных в куб. Результаты
 загрузки будут выведены в консоль среды разработки.


См. также:


[ICubeOperationResult](ICubeOperationResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
