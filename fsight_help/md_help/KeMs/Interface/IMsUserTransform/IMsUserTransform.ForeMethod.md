# IMsUserTransform.ForeMethod

IMsUserTransform.ForeMethod
-


# IMsUserTransform.ForeMethod


## Синтаксис


ForeMethod: [IForeMethod](kefore.chm::/interface/iforemethod/iforemethod.htm);


## Описание


Свойство ForeMethod определяет
 глобальный пользовательский метод, используемый для расчета модели.


## Комментарии


Если определен глобальный пользовательский метод, то значения свойств
 [IMsUserTransform.Assembly](IMsUserTransform.Assembly.htm)
 и [IMsUserTransform.ClassName](IMsUserTransform.ClassName.htm)
 сбрасываются.


## Пример


Для выполнения примера предполагается наличие области глобальных параметров,
 содержащей пользовательские методы. Также в репозитории должен быть контейнер
 моделирования с идентификатором CONT_MODEL, содержащий модель с идентификатором
 MODEL.


Добавьте ссылки на системные сборки: Fore, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    Shp: ISharedParams;

    contModel: IMetabaseObjectDescriptor;

    model: IMsModel;

    formula: IMsFormula;

    userM: IMsUserTransform;

    transform: IMsFormulaTransform;

    f: IForeMethod;

Begin

    mb := MetabaseClass.Active;

    contModel := mb.ItemById("CONT_MODEL");

    model := mb.ItemByIdNamespace("MODEL", contModel.Key).Edit As IMsModel;

    transform := model.Transform;

    formula := transform.FormulaItem(0);

    formula.Kind := MsFormulaKind.User;

    userM := formula.Method As IMsUserTransform;

    Shp := mb.SpecialObject(MetabaseSpecialObject.SharedParams).Bind As ISharedParams;

    f := Shp.Methods.Item(0);

    userM.ForeMethod := f;

    (model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера модель MODEL для расчета будет использовать
 первый пользовательский метод из области глобальных параметров.


См. также:


[IMsUserTransform](IMsUserTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
