# IModelBox.Model

IModelBox.Model
-


# IModelBox.Model


## Синтаксис


		Model: [IUiModel](../IUiModel/IUiModel.htm);


## Описание


Свойство Model определяет компонент
 [UiModel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiModel.htm), который
 будет использоваться как источник данных.


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- формы с расположенными на ней:


		- кнопкой с идентификатором Button1;


		- компонентом ModelBox с идентификатором
		 ModelBox1;


		- компонентом UiModel с идентификатором
		 UiModel11. Компонент UiModel11 является источником данных для ModelBox1 и содержит загруженную
		 модель;


	- контейнера моделирования с идентификатором KONT_MODEL и созданной
	 в нём модели с идентификатором MODEL_1.


Добавьте ссылки на системные сборки: Metabase, Ms, Ui.


Пример является обработчиком события OnClick
 для кнопки Button1.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		Begin

		    MB := MetabaseClass.Active;

		    UiModel1.Active := False;

		    UiModel1.Model := MB.ItemByIdNamespace("Model_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

		    ModelBox1.Model := UiModel1;

		    UiModel1.Active := True;

		End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку в компонент UiModel11
 будет загружена модель Model_1. Параметры данной модели будут отображаться
 в компоненте ModelBox1.


См. также:


[IModelBox](IModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
