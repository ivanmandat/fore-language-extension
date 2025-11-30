# IMsModelList.FindByKey

IMsModelList.FindByKey
-


# IMsModelList.FindByKey


## Синтаксис


FindByKey(ModelKey: Integer): [IMsModel](../IMsModel/IMsModel.htm);


## Параметры


ModelKey. Ключ искомой модели.


## Описание


Метод FindByKey осуществляет поиск модели в коллекции по ключу.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «CONT_MODEL». В данном контейнере должна присутствовать система нелинейных уравнений с идентификатором «NON_LINEAR_MODEL».


Добавьте ссылки на системные сборки «Metabase», «Ms».


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

// Получение коллекции уравнений системы
    ExternalEquations := Equations.ExternalEquations;

    ExtModel := ExternalEquations.FindByKey(1);

    If ExtModel <> Null Then

        ExternalEquations.FindByKey(1);

    End If;

    // Сохранение изменений
    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из системы нелинейных уравнений будет удалена внешняя модель с ключом «1», если она содержится в системе.


См. также:


[IMsModelList](IMsModelList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
