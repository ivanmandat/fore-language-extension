# CreateCustomClass

CreateCustomClass
-


# Команда CreateCustomClass


## Назначение


Вызов диалога создания нового [пользовательского
 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create).


## Параметры использования


Отсутствуют


## Особенности применения


Если создание нового пользовательского класса выполнено успешно, то
 метод [Execute](../IUiCommandTarget.Execute.htm)
 вернет ключ нового класса, иначе значение «-1».


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Metabase, Ui.


			Sub UserProc;

Var

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Result: Integer;

Begin

    Target := WinApplication.Instance.GetPluginTarget("Std");

    Context := Target.CreateExecutionContext;

    Context.Data := MetabaseClass.Active;

    Result := Target.Execute("CreateCustomClass", Context);

    Debug.WriteLine(Result);

End Sub UserProc;


После выполнения примера будет открыт диалог создания [пользовательского
 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create). Задайте параметры класса и нажмите кнопку «ОК». В консоль будет выведен ключ
 созданного класса или значение «-1», если класс не создан.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
