# IModelBox.IsDirty

IModelBox.IsDirty
-


# IModelBox.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Свойство IsDirty возвращает
 признак изменения модели, отображаемой компонентом.


## Комментарии


Допустимые значения:


	- True. Модель изменена.
	 Для сохранения изменений используйте метод [IModelBox.SaveObject](IModelBox.SaveObject.htm);


	- False. Модель не изменялась.


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- кнопкой с идентификатором Button1;


	- компонентом ModelBox
	 с идентификатором ModelBox1;


	- компонентом UiModel,
	 являющимся источником данных для ModelBox1. В UiModel
	 должна быть загружена модель.


Добавьте ссылки на системные сборки: Ms, Ui.


Пример является обработчиком события OnClick
 для кнопки Button1.


			Sub Button1OnClick(Sender: Object;  Args: IMouseEventArgs);

Var

    yes: Boolean;

Begin

    If ModelBox1.IsDirty Then

        WinApplication.YesNoCancelBox("Модель изменена. Сохранить изменения?", yes);

        If yes Then

            ModelBox1.SaveObject;

        End If;

        Else

            WinApplication.InformationBox("Модель не изменялась");

    End If;

End Sub Button1OnClick;


В результате выполнения примера, если отображаемая модель была изменена,
 будет предложено сохранить изменения.


См. также:


[IModelBox](IModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
