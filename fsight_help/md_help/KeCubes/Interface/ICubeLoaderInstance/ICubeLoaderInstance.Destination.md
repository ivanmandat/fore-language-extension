# ICubeLoaderInstance.Destination

ICubeLoaderInstance.Destination
-


# ICubeLoaderInstance.Destination


## Синтаксис


Destination: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm);


## Описание


Свойство Destination возвращает
 параметры открытого куба-приёмника, используемые для окончательной настройки
 перед загрузкой данных.


## Комментарии


Используется для настройки отметки элементов куба-приёмника, по которым
 будет осуществляться загрузка данных.


## Пример


Для выполнения примера предполагается наличие загрузчика данных с идентификатором
 CUBE_LOAD, настроенного на передачу данных из куба-источника в куб-приёмник.


			Sub UserProc;

Var

    MB: IMetabase;

    CubLoadInst: ICubeLoaderInstance;

    DimSS: IDimSelectionSet;

    Result: ICubeOperationResult;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    CubLoadInst := MB.ItemById("CUBE_LOAD").Open(Null) As ICubeLoaderInstance;

    DimSS := CubLoadInst.Destination.CreateDimSelectionSet;

    For i := 0 To DimSS.Count - 1 Do

        DimSS.Item(i).SelectAll;

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


При выполнении примера будет осуществлена загрузка данных в куб. Результаты
 загрузки будут выведены в консоль среды разработки. При загрузке данных
 проверка на наличие дубликатов не осуществляется. Загрузка осуществляется
 по всем элементам куба-приёмника.


См. также:


[ICubeLoaderInstance](ICubeLoaderInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
