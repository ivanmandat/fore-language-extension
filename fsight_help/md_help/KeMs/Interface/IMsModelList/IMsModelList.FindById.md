# IMsModelList.FindById

IMsModelList.FindById
-


# IMsModelList.FindById


## Синтаксис


FindById(ModelId: String): [IMsModel](../IMsModel/IMsModel.htm);


## Параметры


ModelId. Идентификатор искомой модели.


## Описание


Метод FindById осуществляет поиск модели в коллекции по идентификатору.


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

    ExtModel := ExternalEquations.FindById("EXT_MODEL");

    If ExtModel <> Null Then

        ExternalEquations.RemoveByKey((ExtModel As IMetabaseObject).Key);

    End If;

    // Сохранение изменений
    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из системы нелинейных уравнений будет удалена внешняя модель с идентификатором «EXT_MODEL», если она содержится в системе.


См. также:


[IMsModelList](IMsModelList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
