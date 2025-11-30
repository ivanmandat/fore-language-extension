# IMsFormulaTransform.AdditionalAttributes

IMsFormulaTransform.AdditionalAttributes
-


# IMsFormulaTransform.AdditionalAttributes


## Синтаксис


		AdditionalAttributes: String;


## Описание


Свойство AdditionalAttributes
 определяет идентификаторы необязательных атрибутов базы данных временных
 рядов, значения которых должны быть получены при загрузке данных.


## Комментарии


Если необходимо загружать значения нескольких необязательных атрибутов,
 то их идентификаторы указываются в свойстве через точку с запятой «;».


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC, содержащей необязательные атрибуты с идентификаторами
 BASE и FUNC. В контейнере моделирования данной базы содержится модель
 детерминированного уравнения с идентификатором MODEL.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Rub: IRubricator;

		    MsDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		Begin

		    mb := MetabaseClass.Active;

		    Rub := mb.ItemById("FC").Bind As IRubricator;

		    MsDescr := Rub.ModelSpace;

		    Model := mb.ItemByIdNamespace("MODEL", MsDescr.Key).Edit As IMsModel;

		    Transform := Model.Transform;

		    Transform.AdditionalAttributes := "BASE;FUNC";

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера при загрузке данных для модели будут
 получены значения необязательных атрибутов BASE и FUNC.


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC, содержащей необязательные атрибуты с идентификаторами
 BASE и FUNC. В контейнере моделирования данной базы содержится модель
 детерминированного уравнения с идентификатором MODEL.


После выполнения примера при загрузке данных для модели будут получены
 значения необязательных атрибутов BASE и FUNC.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
