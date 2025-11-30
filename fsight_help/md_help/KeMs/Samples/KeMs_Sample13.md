# Работа с параметрами в системе нелинейных уравнений

Работа с параметрами в системе нелинейных уравнений
-


# Работа с параметрами в системе нелинейных уравнений


Модель «Система нелинейных уравнений» (СНУ) поддерживает использование
 параметров. Параметры, заданные для ее родительской метамодели, возможно
 использовать в уравнениях моделей, входящих в СНУ.


В данном примере описано использования параметра метамодели (родительской
 по отношению СНУ) в уравнении модели, входящей в СНУ.


В репозитории предполагается наличие контейнера моделирования с идентификатором
 CONT_MODEL. Данный контейнер содержит СНУ, метамодель для ее расчета с
 идентификатором META_MODEL и модель с идентификатором MODEL, входящую
 в СНУ. Модель должна рассчитываться как детерминированное уравнение.


Добавьте ссылки на системные сборки: Db, Metabase, Ms.


	    Sub UserProc;

	    Var

	        Mb: IMetabase;

	        pMSDescr: IMetabaseObjectDescriptor;

	        pMetaModel: IMsMetaModel;

	        pParams: IMsModelParams;

	        pParam: IMsModelParam;

	        pModel: IMsModel;

	        pTransf: IMsFormulaTransform;

	        Varable: IMsFormulaTransformVariable;

	        Slice: IMsFormulaTransformSlice;

	        Term: IMsFormulaTerm;

	        pFormula: IMsFormula;

	        pDeterm: IMsDeterministicTransform;

	    Begin

	        Mb := MetabaseClass.Active;

	        pMSDescr := mb.ItemById("CONT_MODEL");

	        pMetaModel := Mb.ItemByIdNamespace("META_MODEL", pMSDescr.Key).Edit As IMsMetaModel;

	    // Добавление параметра в метамодель

	        pParams := pMetaModel.Params;

	        pParam := pParams.Add;

	        pParam.Id := "COEF_VAL";

	        pParam.Name := "COEF_VAL";

	        pParam.DataType := DbDataType.Float;

	        pParam.DefaultValue := 0.99;

	        (pMetaModel As IMetabaseObject).Save;

	    // Получение параметров расчета модели, входящей в СНУ

	        pModel := Mb.ItemByIdNamespace("MODEL", pMSDescr.Key).Edit As IMsModel;

	        pTransf := pModel.Transform;

	        pFormula := pTransf.FormulaItem(0);

	        pDeterm := pFormula.Method As IMsDeterministicTransform;

	    // Добавление параметра в формулу расчета модели

	        Varable := pTransf.Inputs.AddParamVariable(pParam.Id);

	        Slice := Varable.Slices.Add(Null);

	        Term := pDeterm.Operands.Add(Slice);

	        pDeterm.Expression.AsString := "(" + pDeterm.Expression.AsString + ") + " + Term.TermToInnerText;

	    // Сохранение модели

	        If pDeterm.Expression.Valid

	            Then (pModel As IMetabaseObject).Save;

	            Else Debug.WriteLine("Сохранение модели невозможно: ошибка в формуле!");

	        End If;

	    End Sub UserProc;


После выполнения примера в уравнение расчета модели MODEL будет добавлен
 параметр COEF_VAL, задавать значение которого будет возможно из СНУ, содержащей
 данную модель.


См. также:


[Примеры](KeMs_Sample.htm)


[IMsNonLinearEquationsTransform](../Interface/IMsNonLinearEquationsTransform/IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
