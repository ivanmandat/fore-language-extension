# IMsProblemInstance.Calculate

IMsProblemInstance.Calculate
-


# IMsProblemInstance.Calculate


## Синтаксис


Calculate(Settings: [IMsProblemCalculationSettings](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.htm)):
 [IMsProblemCalculation](../IMsProblemCalculation/IMsProblemCalculation.htm);


## Параметры


Settings. Настройки параметров
 расчёта открытого экземпляра задачи моделирования.


## Описание


Метод Calculate выполняет расчёт
 открытого экземпляра задачи моделирования с заданными настройками.


## Комментарии


Для создания объекта, в котором содержатся настройки открытого экземпляра
 задачи моделирования для расчёта, используйте метод [IMsProblemInstance.CreateCalculationSettings](IMsProblemInstance.CreateCalculationSettings.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_MODEL, в котором содержится задача
 моделирования с идентификатором PROBLEM и метамодель с идентификатором
 METAMODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    MsKey: Integer;

    ProblemDesc, MetaModelDesc: IMetabaseObjectDescriptor;

    pParam, mParam: IMetabaseObjectParam;

    MetaModel: IMsMetaModel;

    Control: IMetabaseObjectControl;

    ParamControl: IMetabaseObjectParamControl;

    ModelParam: IMsModelParam;

    Instance: IMsProblemInstance;

    Calculation: IMsProblemCalculation;

    CalcSettings: IMsProblemCalculationSettings;

    ParamValues: IMetabaseObjectParamValues;

Begin

    Mb := MetabaseClass.Active;

    // Получим ключ контейнера моделирования

    MsKey := Mb.GetObjectKeyById("CONT_MODEL");

    // Получим метамодель

    MetaModelDesc := Mb.ItemByIdNamespace("METAMODEL", MsKey).EditDescriptor;

    // Добавим параметр у метамодели

    MetaModelDesc.Params.Clear;

    mParam := MetaModelDesc.Params.Add;

    mParam.Id := "PARAMINT";

    mParam.Name := "Дополнительное значение";

    MetaModelDesc.SaveDescriptor;

    // Получим задачу моделирования

    ProblemDesc := Mb.ItemByIdNamespace("PROBLEM", MsKey).EditDescriptor;

    // Добавим параметр у задачи

    ProblemDesc.Params.Clear;

    pParam := ProblemDesc.Params.Add;

    pParam.Id := "PARAMINT";

    pParam.Name := "Дополнительное значение";

    // Настроим управление параметром метамодели через параметр задачи

    Control := ProblemDesc.Params.ControlInfo.FindByKey(MetaModelDesc.Key);

    ParamControl := Control.FindByKey(pParam.Key);

    ParamControl.Expression.AsString := ":" + ParamControl.ControlledParam.Id;

    ProblemDesc.SaveDescriptor;

    // Зададим параметр для передачи значения в метамодель

    MetaModel := MetaModelDesc.Edit As IMsMetaModel;

    MetaModel.Params.Clear;

    ModelParam := MetaModel.Params.Add;

    ModelParam.Id := "PARAMINT";

    ModelParam.Name := "Дополнительное значение";

    ModelParam.ObjectParam := mParam;

    // Сохраним метамодель

    (MetaModel As IMetabaseObject).Save;

    // Зададим значение добавленного параметра метамодели через задачу

    ParamValues := ProblemDesc.Params.CreateEmptyValues;

    ParamValues.FindById("PARAMINT").Value := 100;

    // Получим открытый экземпляр задачи моделирования

    Instance := ProblemDesc.Open(ParamValues) As IMsProblemInstance;

    // Зададим настройки для расчёта

    CalcSettings := Instance.CreateCalculationSettings;

    CalcSettings.FactIncluded := True;

    CalcSettings.BreakOnError := True;

    // Выполним расчёт

    Calculation := Instance.Calculate(CalcSettings);

    Calculation.Run;

    Debug.WriteLine("Выполнен расчёт открытого экземпляра задачи моделирования " + Instance.Problem.Id);

End Sub UserProc;


После выполнения примера будет выполнен расчёт открытого экземпляра
 задачи моделирования с заданным значением добавленного параметра «PARAMINT»
 в метамодели и настройками расчёта. В консоль будет выведено сообщение
 с идентификатором рассчитанной задачи моделирования.


См. также:


[IMsProblemInstance](IMsProblemInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
