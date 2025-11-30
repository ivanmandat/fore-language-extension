# IPrxUserButtonActionAlgorithm.Params

IPrxUserButtonActionAlgorithm.Params
-


# IPrxUserButtonActionAlgorithm.Params


## Синтаксис


Params: [IAlgorithmParams](KeExpress.chm::/Interface/IAlgorithmParams/IAlgorithmParams.htm);


## Описание


Свойство Params возвращает коллекцию
 настроек управления параметрами алгоритма расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT и алгоритма расчёта с идентификатором
 ALGORITHM. Алгоритм и регламентный отчёт в своей структуре имеют параметр,
 который основан на одном справочнике репозитория.


В файловой системе предполагается наличие картинки для кнопки «D:\Work\Image\btn16x16.png».


Добавьте ссылки на системные сборки: Express, IO, Metabase, Report.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    UserBtn: IPrxUserButton;

	    AlgAction: IPrxUserButtonActionAlgorithm;

	    AlgParam: IAlgorithmParam;

	    ParamControl: IAlgorithmObjectParamControl;

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Создание новой пользовательской кнопки

	    UserBtn := Report.UserButtons.AddByType(PrxUserButtonType.Algorithm);

	    UserBtn.Name := "Запуск алгоритма";

	    // Настройка пользовательской кнопки

	    UserBtn.Icon := New FileStream.Create("D:\Work\Image\btn16x16.png", FileOpenMode.Read, FileShare.DenyNone);

	    UserBtn.IconType := "png";

	    UserBtn.SmallIcon := False;

	    // Настройка действий

	    AlgAction := UserBtn.Action As IPrxUserButtonActionAlgorithm;

	    AlgAction.Algorithm := Mb.ItemById("ALGORITHM");

	    AlgParam := AlgAction.Params.Item(0);

	    AlgParam.Type := AlgorithmParamType.ObjectParam;

	    ParamControl := AlgParam.Control As IAlgorithmObjectParamControl;

	    ParamControl.Param := Report.MetabaseObject.Params.FindById("ITEM1");

	    ParamControl.AttributeId := "KEY";

	    ParamControl.SelectionType := AlgorithmParamSelectionType.First;

	    // Сохранение изменений

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в регламентном отчёте будет создана пользовательская
 кнопка. Для кнопки будут заданы наименование и изображение. В качестве
 действия пользовательской кнопки будет выбран расчёт алгоритма. В параметр
 алгоритма расчёта будет передаваться значение атрибута KEY у первого элемента,
 выделенного в параметре регламентного отчёта.


См. также:


[IPrxUserButtonActionAlgorithm](IPrxUserButtonActionAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
