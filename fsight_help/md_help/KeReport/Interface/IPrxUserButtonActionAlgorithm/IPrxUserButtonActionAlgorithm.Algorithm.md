# IPrxUserButtonActionAlgorithm.Algorithm

IPrxUserButtonActionAlgorithm.Algorithm
-


# IPrxUserButtonActionAlgorithm.Algorithm


## Синтаксис


Algorithm: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Algorithm определяет
 описание алгоритма, который будет рассчитан.


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

	    ElementKeys: Array;

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

	    AlgParam.Type := AlgorithmParamType.Constant;

	    ElementKeys := New Variant[2];

	    ElementKeys[0] := 1;

	    ElementKeys[1] := 2;

	    (AlgParam.Control As IAlgorithmConstantParamControl).ConstantValue := ElementKeys;

	    // Сохранение изменений

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в регламентном отчёте будет создана пользовательская
 кнопка. Для кнопки будут заданы наименование и изображение. В качестве
 действия пользовательской кнопки будет выбран расчёт алгоритма. В параметр
 алгоритма расчёта будет передаваться константное значение, которое представляет
 из себя отметку двух элементов с указанными ключами.


См. также:


[IPrxUserButtonActionAlgorithm](IPrxUserButtonActionAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
