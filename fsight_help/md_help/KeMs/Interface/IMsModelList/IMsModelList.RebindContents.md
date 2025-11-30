# IMsModelList.RebindContents

IMsModelList.RebindContents
-


# IMsModelList.RebindContents


## Синтаксис


RebindContents;


## Описание


Метод RebindContents
 осуществляет обновление моделей в коллекции.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать система нелинейных уравнений с идентификатором NON_LINEAR_MODEL,
 а также модель с идентификатором EXT_MODEL, методом расчёта которой является
 линейная регрессия, нелинейная регрессия или детерминированное уравнение.


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

    // Добавление уравнения в систему

    Descript := mb.ItemByIdNamespace("EXT_MODEL", ModelCont.Key);

    ExtModel := Descript.Bind As IMsModel;

    ExternalEquations.Add(ExtModel);

    // Обновление моделей в системе

    ExternalEquations.RebindContents;

    // Сохранение изменений

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера внешние модели, содержащиеся в системе нелинейных
 уравнений, будут обновлены.


См. также:


[IMsModelList](IMsModelList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
