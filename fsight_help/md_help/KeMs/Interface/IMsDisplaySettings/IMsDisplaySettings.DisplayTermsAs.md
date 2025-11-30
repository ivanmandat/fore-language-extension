# IMsDisplaySettings.DisplayTermsAs

IMsDisplaySettings.DisplayTermsAs
-


# IMsDisplaySettings.DisplayTermsAs


## Синтаксис


		DisplayTermsAs: [MsDisplayAttribute](../../Enums/MsDisplayAttribute.htm);


## Описание


Свойство DisplayTermsAs
 определяет параметры отображения объектов.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего модель с идентификатором
 MODEL_1.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelSpaceDesc: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    fTransform: IMsFormulaTransform;

		    dSett: IMsDisplaySettings;

		Begin

		    mb := MetabaseClass.Active;

		    ModelSpaceDesc := mb.ItemById("MODEL_SPACE");

		    Model := mb.ItemByIdNamespace("MODEL_1",ModelSpaceDesc.Key).Edit As IMsModel;

		    fTransform := Model.Transform;

		    dSett := fTransform.DisplaySettings;

		    dSett.DisplayTermsAs:= MsDisplayAttribute.Id;

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для параметров модели будет установлен
 режим отображения «Отображать идентификаторы».


См. также:


[IMsDisplaySettings](IMsDisplaySettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
