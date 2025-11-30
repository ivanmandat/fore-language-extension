# IMsDeterministicTransform.ModifyType

IMsDeterministicTransform.ModifyType
-


# IMsDeterministicTransform.ModifyType


## Синтаксис


		ModifyType: [MsMethodModifyType](../../Enums/MsMethodModifyType.htm);


## Описание


Свойство ModifyType
 определяет способ формирования выходного ряда.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_M. В данном контейнере должна присутствовать
 модель с идентификатором MODEL, использующая для расчётов детерминированное
 уравнение.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    cm: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    Transform: IMsFormulaTransform;

		Begin

		    mb := MetabaseClass.Active;

		    cm := mb.ItemById("CONT_M");

		    Model := mb.ItemByIdNamespace("Model",cm.Key).Edit As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    Determ.ModifyType := MsMethodModifyType.Replace;

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера будет определён способ формирования выходного
 ряда при расчёте модели: выходной ряд будет содержать только значения
 смоделированного ряда.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
