# IMsNonLinearEquationsTransform.ExternalEquations

IMsNonLinearEquationsTransform.ExternalEquations
-


# IMsNonLinearEquationsTransform.ExternalEquations


## Синтаксис


ExternalEquations: [IMsModelList](../IMsModelList/IMsModelList.htm);


## Описание


Свойство ExternalEquations возвращает
 коллекцию внешних уравнений системы.


## Комментарии


В системе нелинейных уравнений возможно использовать внешние и внутренние
 уравнения.


Системы, содержащие только внешние или только внутренние уравнения,
 могут быть отредактированы в интерфейсе контейнера моделирования. Системы,
 содержащие и внешние, и внутренние уравнения, невозможно редактировать
 в интерфейсе контейнера моделирования.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать система нелинейных уравнений с идентификатором NON_LINEAR_MODEL,
 а также две модели с идентификаторами EXT_MODEL_1 и EXT_MODEL_2, методами
 расчёта которых являются линейная регрессия, нелинейная регрессия или
 детерминированное уравнение .


			Sub UserProc;

Var

    mb: IMetabase;

    ModelCont: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    Formula: IMsFormula;

    Equations: IMsNonLinearEquationsTransform;

    Descript: IMetabaseObjectDescriptor;

    ExtModel: IMsModel;

    ExternalEquations: IMsModelList;

Begin

    mb := MetabaseClass.Active;

    ModelCont := mb.ItemById("CONT_MODEL");

    Descript := mb.ItemByIdNamespace("NON_LINEAR_MODEL", ModelCont.Key);

    Model := Descript.Edit As IMsModel;

    Trans := Model.Transform;

    Formula := Trans.EquationsFormula;

    Equations := Formula.Method As IMsNonLinearEquationsTransform;

    ExternalEquations := Equations.ExternalEquations;

    // Очистка коллекции уравнений системы

    ExternalEquations.Clear;

    // Добавление первого уравнения в систему

    Descript := mb.ItemByIdNamespace("EXT_MODEL_1", ModelCont.Key);

    ExtModel := Descript.Bind As IMsModel;

    ExternalEquations.Add(ExtModel);

    // Добавление второго уравнения в систему

    Descript := mb.ItemByIdNamespace("EXT_MODEL_2", ModelCont.Key);

    ExtModel := Descript.Bind As IMsModel;

    ExternalEquations.Add(ExtModel);

    // Сохранение изменений

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера система нелинейных уравнений будет содержать
 два внешних уравнения, представленные моделями EXT_MODEL_1 и EXT_MODEL_2.


См. также:


[IMsNonLinearEquationsTransform](IMsNonLinearEquationsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
