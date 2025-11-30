# IMsDeterministicTransform.SetAttributeExpression

IMsDeterministicTransform.SetAttributeExpression
-


# IMsDeterministicTransform.SetAttributeExpression


## Синтаксис


		SetAttributeExpression: String;


## Описание


Метод SetAttributeExpression
 устанавливает выражение, заданное с использованием атрибутов показателей,
 в качестве уравнения модели.


## Комментарии


Набор атрибутов должен однозначно определять показатель. Порядок и разделитель
 атрибутов должны совпадать с порядком и разделителем, используемыми в
 базе данных временных рядов (см. [IMetaDictionary.AttributeNamings](KeRds.chm::/Interface/IMetaDictionary/IMetaDictionary.AttributeNamings.htm)).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В контейнере моделирования
 данной базы должна присутствовать модель DETERM_MODEL, основанная на показателях
 и рассчитываемая методом детерминированного уравнения.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Ruby: IRubricator;

		    obj: IMetabaseObject;

		    Transform: IMsFormulaTransform;

		    Model: IMsModel;

		    ModelMethod: IMsDeterministicTransform;

		    Formula: IMsFormula;

		Begin

		    mb := MetabaseClass.Active;

		    Ruby := mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

		    ModelCont := ruby.ModelSpace;

		    Obj := mb.ItemByIdNamespace("DETERM_MODEL",ModelCont.Key).Edit;

		    Model := Obj As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    ModelMethod := Formula.Method As IMsDeterministicTransform;

		    ModelMethod.SetAttributeExpression("Годы|Afganistan|GGB/ 2");

		    obj.Save;

		End Sub UserProc;


В результате выполнения примера в качестве уравнения модели будет установлено
 новое выражение.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
