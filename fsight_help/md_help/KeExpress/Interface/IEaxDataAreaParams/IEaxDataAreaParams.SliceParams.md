# IEaxDataAreaParams.SliceParams

IEaxDataAreaParams.SliceParams
-


# IEaxDataAreaParams.SliceParams


## Синтаксис


SliceParams(Slice: [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm)):
 [IEaxDataAreaSliceParams](../IEaxDataAreaSliceParams/IEaxDataAreaSliceParams.htm);


## Параметры


Slice. Срез аналитической области
 данных.


## Описание


Свойство SliceParams возвращает
 параметры среза аналитической области данных.


## Комментарии


Для добавления в коллекцию параметра аналитической области данных используйте
 метод [IEaxDataAreaParams.AddNew](IEaxDataAreaParams.AddNew.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT и куба с идентификатором CUBE.


Добавьте ссылки на системные сборки: Dal, Express, Metabase, Report,Transform.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    SlicesCount: Integer;

	    DataAreaSlice: IEaxDataAreaSlice;

	    Params: IEaxDataAreaParams;

	    Param, ParamItem: IEaxDataAreaParam;

	    SliceParams: IEaxDataAreaSliceParams;

	    index0, index1, index2, i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Report := mb.ItemById("REPORT").Edit As IPrxReport;

	    DataArea := Report.DataArea As IEaxDataArea;

	    SlicesCount := DataArea.Slices.Count - 1;

	    DataAreaSlice := DataArea.Slices.Item(SlicesCount);

	    Params := DataAreaSlice.Params;

	    SliceParams := Params.SliceParams(DataAreaSlice);

	    Params.Clear;

	    // Параметр 1:

	    Param := Params.AddNew;

	    Param.Hidden := False;

	    Param.Id := "ID1";

	    Param.Name := "MyParam1";

	    Param.LinkedObject := MB.ItemById("CUBE");

	    Param.ParamType := TsParamType.Simple;

	    Param.DataType := DbDataType.Integer;

	    Param.DefaultValue := 10;

	    Param.Value := 5;

	    index0 := SliceParams.IndexOf(Param);

	    // Параметр 2:

	    Param := Params.AddNew;

	    Param.Hidden := True;

	    Param.Id := "ID2";

	    Param.Name := "MyParam2";

	    Param.LinkedObject := MB.ItemById("CUBE");

	    Param.ParamType := TsParamType.Simple;

	    Param.DataType := DbDataType.Integer;

	    Param.DefaultValue := 20;

	    Param.Value := 10;

	    index1 := SliceParams.IndexOf(Param);

	    // Параметр 3:

	    Param := Params.AddNew;

	    Param.Hidden := True;

	    Param.Id := "ID3";

	    Param.Name := "MyParam3";

	    Param.LinkedObject := MB.ItemById("CUBE");

	    Param.ParamType := TsParamType.Simple;

	    Param.DataType := DbDataType.Integer;

	    Param.DefaultValue := 30;

	    Param.Value := 20;

	    index2 := SliceParams.IndexOf(Param);

	    Param.Tag := "Добавили параметры для аналитической области данных";

	    Debug.WriteLine("Добавили параметры для аналитической области данных. Срез: "

	        + Param.Slice.Name + ". Параметры:");

	    For i := 0 To SliceParams.Count - 1 Do

	        ParamItem := SliceParams.Item(i);

	        Debug.WriteLine(i.ToString + ". " + ParamItem.Name);

	    End For;

	    Params.Move(index2, index0);

	    Debug.WriteLine("Изменили порядок параметров:");

	    For i := 0 To Params.Count - 1 Do

	        Debug.WriteLine(i.ToString + ". " + Params.Item(i).Name);

	    End For;

	    Debug.WriteLine("Удалим параметр: " + SliceParams.FindById("ID1").Name);

	    Params.Remove(index1);

	    Debug.WriteLine("Порядок параметров после удаления:");

	    For i := 0 To Params.Count - 1 Do

	        Debug.WriteLine(i.ToString + ". " + Params.Item(i).Name);

	    End For;

	    Params.Update;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для среза аналитической области данных
 будет добавлено три параметра. Затем будет изменён порядок параметров
 в коллекции. После чего будет удалён один из параметров.


См. также:


[IEaxDataAreaParams](IEaxDataAreaParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
