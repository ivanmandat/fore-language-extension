# IUiMetabaseObject.ClearDefault

IUiMetabaseObject.ClearDefault
-


# IUiMetabaseObject.ClearDefault


## Синтаксис


ClearDefault;


## Описание


Метод ClearDefault осуществляет установку значений всех параметров объекта по умолчанию.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент Button с идентификатором «Button1», компонент UiMetabaseObjectParams с идентификатором «UiMetabaseObjectParams1» и компонент, значениями параметров которого управляет «UiMetabaseObjectParams1».


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Var

    UIObj: IUiMetabaseObject;
Begin

    UIObj := UiMetabaseObjectParams1.UiObject;

    UIObj.ClearDefault;
    UIObj.Active := True;
End Sub Button1OnClick;


После выполнения примера объект, управление значениям параметров которого осуществляется с помощью компонента «UiMetabaseObjectParams1», будет переоткрыт со значениями параметров по умолчанию.


См. также:


[IUiMetabaseObject](IUiMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
