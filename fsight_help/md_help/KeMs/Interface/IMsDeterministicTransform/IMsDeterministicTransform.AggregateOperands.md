# IMsDeterministicTransform.AggregateOperands

IMsDeterministicTransform.AggregateOperands
-


# IMsDeterministicTransform.AggregateOperands


## Синтаксис


		AggregateOperands: [IMsCompositeFormulaTermList](../IMsCompositeFormulaTermList/IMsCompositeFormulaTermList.htm);


## Описание


Свойство AggregateOperands возвращает
 коллекцию составных термов, используемых для расчёта агрегации.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. INDICATOR - пользовательский
 атрибут показателей базы, ссылающийся на справочник. NATIONAL_ACCOUNTS
 - группа элементов справочника, на который ссылается атрибут INDICATOR.
 В контейнере моделирования данной базы должна присутствовать модель MODEL_DETERM,
 основанная на показателях и рассчитываемая методом детерминированного
 уравнения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Ruby: IRubricator;

		    ModelCont: IMetabaseObjectDescriptor;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    MetaAttr: IMetaAttribute;

		    DimObj: IMetabaseObjectDescriptor;

		    Group: IDimElementGroup;

		    AggrOperands: IMsCompositeFormulaTermList;

		    AggrOper: IMsCompositeFormulaTerm;

		    DimModel: IDimensionModel;

		Begin

		    MB := MetabaseClass.Active;

		    Ruby := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

		    ModelCont := Ruby.ModelSpace;

		    MObj := mb.ItemByIdNamespace("MODEL_DETERM", ModelCont.Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    Formula := Model.Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    MetaAttr := Ruby.Facts.Attributes.FindById("INDICATOR");

		    DimObj := MetaAttr.ValuesObject;

		    Group := Mb.ItemByIdNamespace("NATIONAL_ACCOUNTS", DimObj.Key).Edit As IDimElementGroup;

		    AggrOperands := Determ.AggregateOperands;

		    AggrOper := AggrOperands.Add;

		    AggrOper.AggregationGroup := Group;

		    DimModel := DimObj.Bind As IDimensionModel;

		    AggrOper.AggregationAttrKey := DimModel.Attributes.FindById("KEY").Key;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в коллекцию составных термов, используемых
 составления агрегации, будет добавлен новый терм. Для него будет задана
 группа и ключ атрибута агрегации.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
