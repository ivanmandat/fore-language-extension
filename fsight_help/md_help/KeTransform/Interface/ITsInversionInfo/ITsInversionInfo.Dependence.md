# ITsInversionInfo.Dependence

ITsInversionInfo.Dependence
-


# ITsInversionInfo.Dependence


## Синтаксис


Dependence: [DependenceType](StatLib.chm::/Enums/DependenceType.htm);


## Описание


Свойство Dependence определяет
 вид тренда, используемого для детрендирования.


## Комментарии


Свойство учитывается, если [ITsInversionInfo.Inversion](ITsInversionInfo.Inversion.htm)
 = [TsInversion.TS](../../Enums/TsInversion.htm).


Для детрендирования допустимо использование следующие виды трендов:


	- DependenceType.Linear.
	 Линейный. Используется по умолчанию;


	- DependenceType.Polynomial.
	 Полиномиальный;


	- DependenceType.Logarithmic.
	 Логарифмический;


	- DependenceType.Inverse.
	 Обратный.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «CONT_MODEL». В контейнере должна содержаться
 модель детерминированного уравнения с идентификатором «MODEL», содержащая
 несколько факторов. Добавьте ссылки на системные сборки «Metabase», «Ms»,
 «Transform», «Stat».


			Sub UserProc;

Var

    mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Method: IMsMethod;

    InvInfo: ITsInversionInfo;

    Determ: IMsDeterministicTransform;

    Operands: IMsFormulaTermList;

    TermInfo: IMsFormulaTermInfo;

Begin

    mb := MetabaseClass.Active;

    MsDescr := mb.ItemById("CONT_MODEL");

    Model := mb.ItemByIdNamespace("MODEL", MsDescr.Key).Edit As IMsModel;

    Transform := Model.Transform;

    Method := Transform.FormulaItem(0).Method;

// Задаем начальное преобразование моделируемой переменной

    InvInfo := Method.InversionInfo;

    InvInfo.Inversion := TsInversion.DLog;

    InvInfo.InversionLag := TsInversionLag.PrecidingValue;

    InvInfo.PreviousInversionLag := -2;

//  Задаем начальное преобразование фактора

    Determ := Method As IMsDeterministicTransform;

    Operands := Determ.Operands;

    If Operands.Count > 0 Then

        TermInfo := Operands.Item(0).TermInfo;

        InvInfo := TermInfo.InversionInfo;

        InvInfo.Inversion := TsInversion.TS;

        InvInfo.Dependence := DependenceType.Logarithmic;

        Determ.Expression.AsString := TermInfo.TermInnerText + "+9";

    End If;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для модели будет изменено начально преобразование
 моделируемой переменной и фактора, используемого в формуле.


См. также:


[ITsInversionInfo](ITsInversionInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
