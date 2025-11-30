# IMsAttributesFormulasList.FindByAttributeId

IMsAttributesFormulasList.FindByAttributeId
-


# IMsAttributesFormulasList.FindByAttributeId


## Синтаксис


		FindByAttributeId(AttributeId: String):
		 [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm);


## Параметры


AttributeId. Идентификатор
 атрибута, метод расчёта которого требуется найти.


## Описание


Метод FindByAttributeId
 осуществляет поиск метода по атрибуту, который он рассчитывает.


## Комментарии


Если объект с указанным идентификатором не найден, то метод возвращает
 значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В контейнере моделирования
 базы содержится модель с идентификатором MODEL, содержащая методы расчёта
 дополнительных атрибутов.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Rubr: IRubricator;

		    Model: IMsModel;

		    FormulasList: IMsAttributesFormulasList;

		    AttrTranfsorm: IMsFormulaTransform;

		    TransfIndex: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    Rubr := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

		    Model := Mb.ItemByIdNamespace("MODEL", Rubr.ModelSpace.Key).Bind As IMsModel;

		    FormulasList := Model.AttributeFormulasList;

		    AttrTranfsorm := FormulasList.FindByAttributeId("UNIT");

		    If AttrTransform
		 <> Null Then

		       TransfIndex := FormulasList.IndexOf(AttrTranfsorm);

		        FormulasList.Remove(TransfIndex);

		    End If;

		   (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для модели будет произведён поиск метода
 расчёта атрибута с идентификатором UNIT. Если метод будет найден, то он
 будет удалён.


См. также:


[IMsAttributesFormulasList](IMsAttributesFormulasList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
