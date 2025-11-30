# IUiModel.Model

IUiModel.Model
-


# IUiModel.Model


## Синтаксис


Model: [IMsModel](../IMsModel/IMsModel.htm);


## Описание


Свойство Model определяет модель
 контейнера моделирования, доступ к которой необходимо получить.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента ModelBox и компонента UiModel
 с наименованием UiModel1, являющегося источником данных для ModelBox.
 В репозитории имеется контейнер моделирования с идентификатором KONT_MODEL
 и созданная в нем модель с идентификатором MODEL_1.


Пример является обработчиком события OnClick для кнопки.


Добавьте ссылки на системные сборки: Forms, Metabase, Ms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

Begin

    MB := MetabaseClass.Active;

    UiModel1.Active := False;

    UiModel1.Model := MB.ItemByIdNamespace("MODEL_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

    ModelBox1.Model := UiModel1;

    UiModel1.Active := True;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компонент UiModel1
 будет загружена модель MODEL_1. Параметры данной модели будут отображаться
 в компоненте ModelBox.


См. также:


[IUiModel](IUiModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
