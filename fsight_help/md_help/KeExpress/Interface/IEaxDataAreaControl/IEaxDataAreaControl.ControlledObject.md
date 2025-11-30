# IEaxDataAreaControl.ControlledObject

IEaxDataAreaControl.ControlledObject
-


# IEaxDataAreaControl.ControlledObject


## Синтаксис


ControlledObject: [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm);


## Описание


Свойство ControlledObject возвращает
 срез аналитической области, для которого настраивается управление параметрами.


## Комментарии


Для определения выражения для привязки параметров отчёта и среза используйте
 свойство [IEaxDataAreaParamControl.Expression](../IEaxDataAreaParamControl/IEaxDataAreaParamControl.Expression.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёте добавлены параметры, срез, на
 котором построена таблица. В качестве источника данных для среза взят
 куб, у которого есть параметр с наименованием и идентификатором TERRITORIA.


Добавьте ссылки на системные сборки: Dal, Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Area: IEaxDataArea;

	    Slices: IEaxDataAreaSlices;

	    Slice: IEaxDataAreaSlice;

	    Control: IEaxDataAreaParamControl;

	    Info: IEaxDataAreaControlInfo;

	    SliceCtrl: IEaxDataAreaControl;

	    Parameters: IEaxDataAreaParams;

	    Param: IEaxDataAreaParam;

	    ParamMB: IMetabaseObjectParamValue;

	    i: Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим аналитическую область регламентного отчёта

	    Area := Report.DataArea As IEaxDataArea;

	    // Получим срезы аналитической области

	    Slices := Area.Slices;

	    // Получим первый срез

	    Slice := Slices.Item(0);

	    // Выведем количество параметров среза, полученное при автоматической генерации

	    Parameters := Slice.Params;

	    Debug.WriteLine("Количество параметров среза: " + Parameters.Count.ToString);

	    //Отключим автоматическую генерацию

	    Slice.GenerateSourceParams := False;

	    // Выведем количество параметров среза после отключения генерации

	    Debug.WriteLine("Количество параметров среза после отключения генерации: " + Parameters.Count.ToString);

	    // Добавим параметр среза

	    Parameters.Clear;

	    Param := Parameters.AddNew;

	    Param.Id := "TERRITORIA";

	    Param.Name := "TERRITORIA";

	    Param.DataType := DbDataType.Integer;

	    // Получим параметры отчёта

	    ParamMB := Report.MetabaseObject.ParamValues.Item(0);

	    // Получим объект настройки управления параметрами среза

	    Info := Area.ControlInfo;

	    // Добавим объект настройки управления

	    SliceCtrl := Info.AddControl(Slice);

	    // Получим срез для настройки управления

	    Slice := SliceCtrl.ControlledObject;

	    // Добавим настройку управления параметром среза

	    Control := SliceCtrl.AddControl(Param.Id);

	    Debug.WriteLine("Параметр среза: " + Param.Name + '(' + Param.Id + ").");

	    For i := 0 To SliceCtrl.Count - 1 Do

	        Control := SliceCtrl.Item(i);

	        // Зададим выражение, определяющее привязку параметров

	        Control.Expression.AsString := "{@" + (ParamMB.Id) + "}";

	    End For;

	    //Проверим, задано ли управление параметров среза

	    Debug.WriteLine("Управление не задано: " + SliceCtrl.IsEmpty.ToString);

	    // Сохраним отчёт

	    Report.MetabaseObject.Save;

	End Sub UserProc;


В результате выполнения примера в консоль будут выведены:


	- количество параметров среза до и после отключения автоматической
	 генерации;


	- признак управления параметрами среза.


Параметр среза будет связан с параметром отчёта.


См. также:


[IEaxDataAreaControl](IEaxDataAreaControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
