# ITsInversionInfo.K

ITsInversionInfo.K
-


# ITsInversionInfo.K


## Синтаксис


K: Integer;


## Описание


Свойство K определяет параметр
 расчета по методу k-сигм.


## Комментарии


Свойство учитывается, если [ITsInversionInfo.Inversion](ITsInversionInfo.Inversion.htm)
 = [TsInversion.OA](../../Enums/TsInversion.htm).


Параметр может принимать только положительные значения. Значение по
 умолчанию - 3.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «CONT_MODEL». В контейнере должна содержаться
 модель линейной регрессии с идентификатором «MODEL», содержащая несколько
 факторов. Добавьте ссылки на системные сборки «Metabase», «Ms», «Transform»,
 «Stat».


			Sub UserProc;

Var

    mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Method: IMsMethod;

    InvInfo: ITsInversionInfo;

    Linear: IMsLinearRegressionTransform;

    Explanatories: IMsCompositeFormulaTermList;

    Term: IMsCompositeFormulaTerm;

Begin

    mb := MetabaseClass.Active;

    MsDescr := mb.ItemById("CONT_MODEL");

    Model := mb.ItemByIdNamespace("MODEL", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

    Method := Transform.FormulaItem(0).Method;

// Задаем начальное преобразование моделируемой переменной

    InvInfo := Method.InversionInfo;

    InvInfo.Inversion := TsInversion.SA;

    InvInfo.Seasonality := SeasonalityType.Additive;

//  Задаем начальное преобразование фактора

    Linear := Method As IMsLinearRegressionTransform;

    Explanatories := Linear.Explanatories;

    If Explanatories.Count > 0 Then

        Term := Explanatories.Item(0);

        InvInfo := Term.InversionInfo;

        InvInfo.Inversion := TsInversion.OA;

        InvInfo.K := 2;

    End If;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для модели будет изменено начально преобразование
 моделируемой переменной и первого фактора.


См. также:


[ITsInversionInfo](ITsInversionInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
