# Открытие задачи с параметрами

Открытие задачи с параметрами
-


# Открытие задачи с параметрами


Каждая метамодель может содержать различный набор [параметров](../Interface/IMsMetaModel/IMsMetaModel.Params.htm),
 которые позволяют управлять расчётом метамодела, использоваться в формулах
 и иметь какое-либо ещё назначение. Коллекция параметров описывается интерфейсом
 [IMsModelParams](../Interface/IMsModelParams/IMsModelParams.htm),
 но при открытии задачи с помощью метода [Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)/[OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 в метамодель может быть передана коллекция значений параметров, описываемая
 интерфейсом [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm).
 Для этого параметры предварительно должны быть созданы в метаданных метамодели
 или задачи, между параметрами может быть настроено управление. Пример
 представлен в описании свойства [IMsModelParam.ObjectParam](../Interface/IMsModelParam/IMsModelParam.ObjectParam.htm).


В данном примере описан процесс получения параметров метамодели, задание
 их значений и дальнейшее открытие задачи с параметрами. Для выполнения
 примера предполагается наличие контейнера моделирования с идентификатором
 CONT_MODEL. В контейнере создана задача с идентификатором PROBLEM. Метамодель
 и задача в своей структуре имеют параметры с идентификаторами PARAM_INT
 и PARAM_STR.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Problem: IMsProblem;

	    pDesc: IMetabaseObjectDescriptor;

	    pParamValues: IMetabaseObjectParamValues;

	    pCalcSett: IMsProblemCalculationSettings;

	    pCalc: IMsProblemCalculation;

	Begin

	    Mb := MetabaseClass.Active;

	    pDesc := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("CONT_MODEL"));

	    //Параметры метамодели

	    pParamValues := ((pDesc.EditTemporary As IMsProblem).MetaModel As IMetabaseObject).ParamValues;

	    // Установка значений параметров

	    pParamValues.FindById("PARAM_INT").Value := 100;

	    pParamValues.FindById("PARAM_STR").Value := "X";

	    //Открытие задачи с параметрами

	    Problem := pDesc.Open(pParamValues) As IMsProblem;

	    //Расчёт задачи

	    pCalcSett := problem.CreateCalculationSettings;

	    pCalc := problem.Calculate(pCalcSett);

	    pCalc.Run;

	End Sub UserProc;


При выполнении примера будет получена коллекция параметров метамодели,
 для параметров будут заданы значения. С параметрами будет открыта задача,
 при этом значения параметров будут переданы в метамодель. После этого
 будет произведён расчёт задачи.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
