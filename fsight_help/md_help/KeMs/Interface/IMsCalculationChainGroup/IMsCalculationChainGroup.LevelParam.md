# IMsCalculationChainGroup.LevelParam

IMsCalculationChainGroup.LevelParam
-


# IMsCalculationChainGroup.LevelParam


## Синтаксис


		LevelParam: String;


## Описание


Свойство LevelParam определяет
 параметр, задающий динамику расчёта группы.


## Комментарии


Для задания динамики расчёта напрямую используйте свойство [IMsCalculationChainGroup.Level](IMsCalculationChainGroup.Level.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 META_LEVELPARAM. Данная метамодель должна содержать папку.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms, Transform.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Metamodel: IMsMetaModel;

		    Params: IMsModelParams;

		    Param: IMsModelParam;

		    Chain: IMsCalculationChainEntries;

		    i: Integer;

		    ChainEntry: IMsCalculationChainEntry;

		    Group: IMsCalculationChainGroup;

		    OutputPeriod: IMsDatePeriod;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    Metamodel := mb.ItemByIdNamespace("META_LEVELPARAM", MsKey).Edit As IMsMetaModel;

		    // Получаем коллекцию параметров метамодели

		    Params := Metamodel.Params;

		    // Очищаем коллекцию параметров метамодели

		    Params.Clear;

		    // Добавляем новый параметр

		    Param := Params.Add;

		    // Указываем тип параметра - динамика

		    Param.ParamType := TsParamType.Frequency;

		    // Указываем значение по умолчанию - годовая динамика

		    Param.DefaultValue := DimCalendarLevelSet.Year;

		    // Задаем наименование и идентификатор параметра

		    Param.Name := "Динамика расчета";

		    Param.Id := "Formula_Level";

		    // Получаем цепочку расчета

		    Chain := Metamodel.CalculationChain;

		    // Перебираем элементы цепочки до тех пор, пока не найдём папку

		    For i := 0 To Chain.Count - 1 Do

		        ChainEntry := Chain.Item(i);

		        If ChainEntry.Type = MsCalculationChainEntryType.Folder Then

		            Group := ChainEntry As IMsCalculationChainGroup;

		            Break;

		        End If;

		    End For;

		    // Указываем, что динамика расчета элементов в папке определяется параметром

		    Group.LevelParam := "Formula_Level";

		    // Задаем период выгрузки данных для элементов в папке

		    OutputPeriod := Group.OutputPeriod As IMsDatePeriod;

		    OutputPeriod.Start := DateTime.Parse("01.01.2016");

		    OutputPeriod.End_ := DateTime.Parse("01.01.2020");

		    // Сохраняем изменения в метамодели

		    (Metamodel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для папки в цепочке расчёта будет задан
 параметр, определяющий динамику расчёта. Также для папки будет задан период
 выгрузки данных.


См. также:


[IMsCalculationChainGroup](IMsCalculationChainGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
